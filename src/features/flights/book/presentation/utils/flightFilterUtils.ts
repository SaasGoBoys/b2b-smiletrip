import type { FlightItineraryEntity } from '../../domain/entities'
import type { FlightFareOptionEntity } from '../../domain/entities/FlightFareOptionEntity'
import {
  createDefaultFilters,
  EMPTY_FILTER_BOUNDS,
  type FilterBounds,
  type FilterState,
} from '../constants/FlightFilterTypes'

import {
  hasCarryOnBaggage,
  hasFreeCheckedBaggage,
  isLaborFare,
  resolveSeatClassName,
  STOP_FILTER_LABELS,
  stopFilterValue,
} from './flightItineraryHelpers'

/** HH:mm → fractional hours (0–24). */
export function timeToHours(time: string): number {
  const [h = '0', m = '0'] = time.split(':')
  return parseInt(h, 10) + parseInt(m, 10) / 60
}

/** API `elapsedTimeValue` is minutes → hours for sliders. */
export function elapsedMinutesToHours(minutes: number): number {
  return minutes / 60
}

type SuggestedFilterDef = {
  label: string
  match: (it: FlightItineraryEntity, fare?: FlightFareOptionEntity) => boolean
}

/** Only filters that can match real BE data (see mock.json). */
const SUGGESTED_FILTER_DEFS: SuggestedFilterDef[] = [
  { label: 'Vé lao động', match: (it) => isLaborFare(it) },
  { label: 'Có hành lý xách tay', match: (it, fare) => hasCarryOnBaggage(it, fare) },
  { label: 'Có hành lý ký gửi', match: (it, fare) => hasFreeCheckedBaggage(it, fare) },
]

const SUGGESTED_FILTER_BY_LABEL = Object.fromEntries(
  SUGGESTED_FILTER_DEFS.map((d) => [d.label, d])
) as Record<string, SuggestedFilterDef>

export function deriveFilterBounds(
  itineraries: FlightItineraryEntity[],
  fareMap: Map<string, FlightFareOptionEntity>
): FilterBounds {
  if (itineraries.length === 0) return { ...EMPTY_FILTER_BOUNDS }

  const airlineMap = new Map<string, string>()
  const seatClassSet = new Set<string>()
  const stopSet = new Set<string>()
  const prices: number[] = []
  const depHours: number[] = []
  const arrHours: number[] = []
  const durations: number[] = []
  const availableTicketTypes: string[] = []

  for (const it of itineraries) {
    airlineMap.set(it.marketingAirline, it.marketingAirlineName)
    depHours.push(timeToHours(it.depTime))
    arrHours.push(timeToHours(it.arrTime))
    durations.push(elapsedMinutesToHours(it.elapsedTimeValue))
    stopSet.add(stopFilterValue(it.numberStop))

    const fare = fareMap.get(it.id)
    const price = fare?.price.pricePerPaxValue ?? 0
    if (price > 0) prices.push(price)

    const seatClass = resolveSeatClassName(it, fare)
    if (seatClass) seatClassSet.add(seatClass)
  }

  for (const def of SUGGESTED_FILTER_DEFS) {
    const hasMatch = itineraries.some((it) => def.match(it, fareMap.get(it.id)))
    if (hasMatch) availableTicketTypes.push(def.label)
  }

  const airlines = Array.from(airlineMap.entries())
    .map(([code, name]) => ({ code, name }))
    .sort((a, b) => {
      if (a.code === 'VN') return -1
      if (b.code === 'VN') return 1
      if (a.code === 'VJ') return -1
      if (b.code === 'VJ') return 1
      return a.name.localeCompare(b.name)
    })

  const stops = Array.from(stopSet)
    .sort()
    .map((value) => ({
      value,
      label: STOP_FILTER_LABELS[value] ?? `${value} điểm dừng`,
    }))

  const priceMin = prices.length > 0 ? Math.floor(Math.min(...prices)) : 0
  const priceMax = prices.length > 0 ? Math.ceil(Math.max(...prices)) : 0

  return {
    airlines,
    priceMin,
    priceMax: priceMin === priceMax ? priceMax + 1 : priceMax,
    depTimeMin: Math.floor(Math.min(...depHours)),
    depTimeMax: Math.ceil(Math.max(...depHours)),
    arrTimeMin: Math.floor(Math.min(...arrHours)),
    arrTimeMax: Math.ceil(Math.max(...arrHours)),
    durationMin: Math.floor(Math.min(...durations) * 10) / 10,
    durationMax: Math.ceil(Math.max(...durations) * 10) / 10,
    seatClasses: Array.from(seatClassSet).sort(),
    stops,
    availableTicketTypes,
  }
}

export function matchesFlightFilters(
  it: FlightItineraryEntity,
  fare: FlightFareOptionEntity | undefined,
  filters: FilterState
): boolean {
  const price = fare?.price.pricePerPaxValue ?? 0
  const depH = timeToHours(it.depTime)
  const arrH = timeToHours(it.arrTime)
  const durH = elapsedMinutesToHours(it.elapsedTimeValue)

  if (filters.airlines.length > 0 && !filters.airlines.includes(it.marketingAirline)) {
    return false
  }

  if (
    price > 0 &&
    (price < filters.priceRange[0] || price > filters.priceRange[1])
  ) {
    return false
  }

  if (depH < filters.timeFrom[0] || depH > filters.timeFrom[1]) {
    return false
  }

  if (arrH < filters.timeTo[0] || arrH > filters.timeTo[1]) {
    return false
  }

  if (durH < filters.flightDuration[0] || durH > filters.flightDuration[1]) {
    return false
  }

  if (filters.stops.length > 0 && !filters.stops.includes(stopFilterValue(it.numberStop))) {
    return false
  }

  if (filters.seatClasses.length > 0) {
    const cls = resolveSeatClassName(it, fare)
    if (!cls || !filters.seatClasses.includes(cls)) return false
  }

  for (const label of filters.ticketTypes) {
    const def = SUGGESTED_FILTER_BY_LABEL[label]
    if (def && !def.match(it, fare)) return false
  }

  return true
}

export function filterItineraries(
  items: FlightItineraryEntity[],
  fareMap: Map<string, FlightFareOptionEntity>,
  filters: FilterState
): FlightItineraryEntity[] {
  return items.filter((it) => matchesFlightFilters(it, fareMap.get(it.id), filters))
}

export { createDefaultFilters }
