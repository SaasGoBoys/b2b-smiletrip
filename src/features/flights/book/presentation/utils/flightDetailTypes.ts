export interface FlightLayoverView {
  label: string
  /** Position along the horizontal route line (0–1). */
  position: number
}

export interface FlightEndpointView {
  time: string
  airportCode: string
  airportLabel: string
  cityName: string
  airportName: string
  dateCulture: string
  terminal?: string
}

export interface FlightSegmentDetailView {
  flightNumber: string
  airlineName: string
  airlineCode: string
  depTime: string
  arrTime: string
  depDateCulture: string
  arrDateCulture: string
  elapsedTime: string
  airEquipType?: string
  ticketClassName?: string
  depAirport: string
  arrAirport: string
  depCityName: string
  arrCityName: string
  depAirportName: string
  arrAirportName: string
  depTerminal?: string
  arrTerminal?: string
  layoverAfter?: { label: string }
}

export interface FlightFareClassOption {
  value: string
  label: string
}
