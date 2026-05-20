/** Single operating segment within an itinerary (BE: Segment). */
export interface FlightLegEntityProps {
  isStartDepAirport: boolean
  isEndDepAirport: boolean
  depAirport: string
  arrAirport: string
  depCityName: string
  depAirportName: string
  arrCityName: string
  arrAirportName: string
  depTime: string
  arrTime: string
  depDateCulture: string
  arrDateCulture: string
  depTerminal?: string
  arrTerminal?: string
  flightNumber: string
  operatingAirline: string
  marketingAirline: string
  operatingAirlineName: string
  marketingAirlineName: string
  airEquipType: string
  elapsedTime: string
  timeChange: string
  ticketClass: unknown
  ticketClassName: string
  isTimeChange: boolean
}

export class FlightLegEntity {
  readonly isStartDepAirport: boolean
  readonly isEndDepAirport: boolean
  readonly depAirport: string
  readonly arrAirport: string
  readonly depCityName: string
  readonly depAirportName: string
  readonly arrCityName: string
  readonly arrAirportName: string
  readonly depTime: string
  readonly arrTime: string
  readonly depDateCulture: string
  readonly arrDateCulture: string
  readonly depTerminal?: string
  readonly arrTerminal?: string
  readonly flightNumber: string
  readonly operatingAirline: string
  readonly marketingAirline: string
  readonly operatingAirlineName: string
  readonly marketingAirlineName: string
  readonly airEquipType: string
  readonly elapsedTime: string
  readonly timeChange: string
  readonly ticketClass: unknown
  readonly ticketClassName: string
  readonly isTimeChange: boolean

  constructor(props: FlightLegEntityProps) {
    this.isStartDepAirport = props.isStartDepAirport
    this.isEndDepAirport = props.isEndDepAirport
    this.depAirport = props.depAirport
    this.arrAirport = props.arrAirport
    this.depCityName = props.depCityName
    this.depAirportName = props.depAirportName
    this.arrCityName = props.arrCityName
    this.arrAirportName = props.arrAirportName
    this.depTime = props.depTime
    this.arrTime = props.arrTime
    this.depDateCulture = props.depDateCulture
    this.arrDateCulture = props.arrDateCulture
    this.depTerminal = props.depTerminal
    this.arrTerminal = props.arrTerminal
    this.flightNumber = props.flightNumber
    this.operatingAirline = props.operatingAirline
    this.marketingAirline = props.marketingAirline
    this.operatingAirlineName = props.operatingAirlineName
    this.marketingAirlineName = props.marketingAirlineName
    this.airEquipType = props.airEquipType
    this.elapsedTime = props.elapsedTime
    this.timeChange = props.timeChange
    this.ticketClass = props.ticketClass
    this.ticketClassName = props.ticketClassName
    this.isTimeChange = props.isTimeChange
  }
}
