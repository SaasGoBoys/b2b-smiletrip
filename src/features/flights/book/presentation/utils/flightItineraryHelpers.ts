import type { FlightItineraryEntity } from '../../domain/entities'
import type { FlightFareOptionEntity } from '../../domain/entities/FlightFareOptionEntity'

/** BE often returns "Not included" — must not treat as included baggage. */
export function isBaggageIncludedText(text: string | undefined): boolean {
  const t = String(text ?? '').trim().toLowerCase()
  if (!t) return false
  if (t.includes('not included') || t === '0kg' || t === '0 kg') return false
  return true
}

export function hasCarryOnBaggage(
  itinerary: FlightItineraryEntity,
  fare?: FlightFareOptionEntity
): boolean {
  if (fare?.price.isCarryOn) return true
  return isBaggageIncludedText(itinerary.carryOnBaggage)
}

export function hasFreeCheckedBaggage(
  itinerary: FlightItineraryEntity,
  fare?: FlightFareOptionEntity
): boolean {
  if (fare?.price.isFreeBaggage) return true
  return isBaggageIncludedText(itinerary.freeBaggage)
}

export function isDirectFlight(itinerary: FlightItineraryEntity): boolean {
  return itinerary.numberStop === 0
}

export function isLaborFare(itinerary: FlightItineraryEntity): boolean {
  return itinerary.isLbr || itinerary.priceType.toUpperCase() === 'LBR'
}

/** Human-readable seat class from fare quote; hides placeholder itinerary class. */
export function resolveSeatClassName(
  itinerary: FlightItineraryEntity,
  fare?: FlightFareOptionEntity
): string | null {
  const raw = fare?.price.ticketClassName || itinerary.ticketClassName || ''
  if (!raw || raw === 'Common_TicketClass_') return null
  return raw
}

export function stopFilterValue(numberStop: number): string {
  if (numberStop >= 2) return '2'
  return String(numberStop)
}

export const STOP_FILTER_LABELS: Record<string, string> = {
  '0': 'Bay thẳng',
  '1': '1 điểm dừng',
  '2': '2+ điểm dừng',
}

/** Labels shown in the quick-filter bar (subset of suggested filters). */
export const QUICK_FILTER_LABELS = ['Bay thẳng', 'Có hành lý xách tay', 'Có hành lý ký gửi', 'Vé lao động'] as const
