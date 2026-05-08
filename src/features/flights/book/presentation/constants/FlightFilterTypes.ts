export interface FilterState {
  ticketTypes: string[]
  directOnly: boolean
  handLuggage: boolean
  checkInLuggage: boolean
  timeFrom: [number, number]
  timeTo: [number, number]
  transitTime: [number, number]
  flightDuration: [number, number]
  airlines: string[]
  seatClasses: string[]
}

export const DEFAULT_FILTERS: FilterState = {
  ticketTypes: [],
  directOnly: false,
  handLuggage: false,
  checkInLuggage: false,
  timeFrom: [0, 24],
  timeTo: [0, 24],
  transitTime: [1, 24],
  flightDuration: [2, 27.5],
  airlines: [],
  seatClasses: [],
}
