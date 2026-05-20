export interface FilterState {
  ticketTypes: string[]
  timeFrom: [number, number]
  timeTo: [number, number]
  flightDuration: [number, number]
  priceRange: [number, number]
  /** Marketing airline codes (e.g. VN, ZH). */
  airlines: string[]
  seatClasses: string[]
  /** Stop count as string: "0" | "1" | "2" */
  stops: string[]
}

export interface FilterBounds {
  airlines: { code: string; name: string }[]
  priceMin: number
  priceMax: number
  depTimeMin: number
  depTimeMax: number
  arrTimeMin: number
  arrTimeMax: number
  durationMin: number
  durationMax: number
  seatClasses: string[]
  stops: { value: string; label: string }[]
  /** Suggested checkboxes that exist in current results. */
  availableTicketTypes: string[]
}

export const EMPTY_FILTER_BOUNDS: FilterBounds = {
  airlines: [],
  priceMin: 0,
  priceMax: 0,
  depTimeMin: 0,
  depTimeMax: 24,
  arrTimeMin: 0,
  arrTimeMax: 24,
  durationMin: 0,
  durationMax: 24,
  seatClasses: [],
  stops: [],
  availableTicketTypes: [],
}

export function createDefaultFilters(bounds: FilterBounds): FilterState {
  return {
    ticketTypes: [],
    timeFrom: [bounds.depTimeMin, bounds.depTimeMax],
    timeTo: [bounds.arrTimeMin, bounds.arrTimeMax],
    flightDuration: [bounds.durationMin, bounds.durationMax],
    priceRange: [bounds.priceMin, bounds.priceMax],
    airlines: [],
    seatClasses: [],
    stops: [],
  }
}
