export interface FlightSearchItemDto {
  DepAirport: string
  ArrAirport: string
  Date: string
}

export interface FlightSearchRequestDto {
  TripType: string
  Adult: number
  Child: number
  Infant: number
  IsDirect: boolean
  Cabin: string | null
  AgentId: string | null
  VFRSearchType: string | null
  Items: FlightSearchItemDto[]
}

export interface FlightSearchResponseDto {
  SessionId: string
}
