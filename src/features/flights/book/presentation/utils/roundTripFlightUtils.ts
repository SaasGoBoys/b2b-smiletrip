import type { FlightItineraryEntity } from '../../domain/entities'
import type { FlightFareOptionEntity } from '../../domain/entities/FlightFareOptionEntity'
import type { FlightSearchResultEntity } from '../../domain/entities/FlightSearchResultEntity'

export const OUTBOUND_BLOCK_KEY = '1'
export const RETURN_BLOCK_KEY = '2'

export type FlightLegPhase = 'outbound' | 'return'

interface FareRelateRow {
  Id?: string
}

export function isRoundTripResult(result: FlightSearchResultEntity | undefined): boolean {
  if (!result) return false
  const keys = Object.keys(result.blockItems)
  return keys.includes(OUTBOUND_BLOCK_KEY) && keys.includes(RETURN_BLOCK_KEY)
}

export function getBlockItineraries(
  result: FlightSearchResultEntity,
  blockKey: string
): FlightItineraryEntity[] {
  return result.blockItems[blockKey] ?? []
}

/** Ids linked on the return leg for a selected outbound fare (BE: `Prices[].IdRelates`). */
export function getRelatedReturnItineraryIds(
  outboundId: string,
  fareMap: Map<string, FlightFareOptionEntity>
): string[] {
  const fare = fareMap.get(outboundId)
  const relates = fare?.idRelates

  if (Array.isArray(relates) && relates.length > 0) {
    const ids = relates
      .map((row) => (row as FareRelateRow).Id)
      .filter((id): id is string => typeof id === 'string' && id.length > 0)
    if (ids.length > 0) return ids
  }

  return [outboundId]
}

/**
 * Outbound rows that have a matching return leg (same itinerary id in block 2).
 */
export function getPairedOutboundItineraries(
  result: FlightSearchResultEntity,
  fareMap: Map<string, FlightFareOptionEntity>
): FlightItineraryEntity[] {
  const outbound = getBlockItineraries(result, OUTBOUND_BLOCK_KEY)
  const returnItems = getBlockItineraries(result, RETURN_BLOCK_KEY)
  const returnIds = new Set(returnItems.map((it) => it.id))

  return outbound.filter((it) => {
    if (!returnIds.has(it.id)) return false
    const returnOptions = getRelatedReturnItineraryIds(it.id, fareMap)
    return returnOptions.some((id) => returnIds.has(id))
  })
}

export function getReturnItinerariesForOutbound(
  result: FlightSearchResultEntity,
  outboundId: string,
  fareMap: Map<string, FlightFareOptionEntity>
): FlightItineraryEntity[] {
  const allowedIds = new Set(getRelatedReturnItineraryIds(outboundId, fareMap))
  return getBlockItineraries(result, RETURN_BLOCK_KEY).filter((it) => allowedIds.has(it.id))
}

export function getOneWayItineraries(result: FlightSearchResultEntity): FlightItineraryEntity[] {
  const keys = Object.keys(result.blockItems)
  if (keys.length === 0) return []
  if (keys.length === 1) return result.blockItems[keys[0]] ?? []
  return getBlockItineraries(result, OUTBOUND_BLOCK_KEY)
}

/**
 * Round-trip pairing/filtering only when session is complete — avoids list shrinking
 * mid-poll when block 2 appears but pairing is not ready yet.
 */
export function shouldApplyRoundTripListRules(
  tripType: 'one-way' | 'round-trip',
  result: FlightSearchResultEntity | undefined
): boolean {
  if (tripType !== 'round-trip' || !result) return false
  return isRoundTripResult(result) && result.status === 'done'
}

export function resolveListItineraries(
  result: FlightSearchResultEntity | undefined,
  fareMap: Map<string, FlightFareOptionEntity>,
  tripType: 'one-way' | 'round-trip',
  activeLeg: FlightLegPhase,
  selectedOutbound: FlightItineraryEntity | null
): FlightItineraryEntity[] {
  if (!result) return []

  const applyRoundTripRules = shouldApplyRoundTripListRules(tripType, result)

  if (!applyRoundTripRules) {
    if (tripType === 'round-trip' && isRoundTripResult(result)) {
      if (activeLeg === 'return' && selectedOutbound) {
        return getReturnItinerariesForOutbound(result, selectedOutbound.id, fareMap)
      }
      return getBlockItineraries(result, OUTBOUND_BLOCK_KEY)
    }
    return getOneWayItineraries(result)
  }

  if (activeLeg === 'outbound') {
    return getPairedOutboundItineraries(result, fareMap)
  }

  if (!selectedOutbound) return []

  return getReturnItinerariesForOutbound(result, selectedOutbound.id, fareMap)
}
