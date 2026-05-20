export type FlightSearchTripType = 'OW' | 'RT'

export interface FlightSearchLegInput {
  depAirport: string
  arrAirport: string
  /** ISO date `YYYY-MM-DD` */
  date: string
}

export interface FlightSearchInput {
  tripType: FlightSearchTripType
  adult: number
  child: number
  infant: number
  isDirect: boolean
  cabin: string | null
  agentId: string | null
  vfrSearchType: string | null
  items: FlightSearchLegInput[]
}
