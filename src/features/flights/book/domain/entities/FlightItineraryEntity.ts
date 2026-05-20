import { FlightLegEntity, type FlightLegEntityProps } from './FlightLegEntity'

/** Bookable flight route summary with one or more legs (BE: N1 in BlockItems). */
export interface FlightItineraryEntityProps {
  service: string
  id: string
  isValidBook: boolean
  isLogin: boolean
  isVfr: boolean
  isYth: boolean
  isLbr: boolean
  isBlock: boolean
  priceType: string
  ticketTag: string
  depAirport: string
  arrAirport: string
  nextDay: string
  title: string
  elapsedTime: string
  elapsedTimeValue: number
  depCityName: string
  arrCityName: string
  depTime: string
  depDate: string
  depDateCulture: string
  arrDateCulture: string
  arrTime: string
  arrDate: string
  marketingAirline: string
  airEquip: string
  isOperatedBy: boolean
  operatedBy: string
  marketingAirlineName: string
  operatingAirline: string
  operatingAirlineName: string
  flightNumber: string
  isBestPrice: boolean
  isStop0: boolean
  isStop1: boolean
  isStop2: boolean
  carryOnBaggage: string
  freeBaggage: string
  numberStop: number
  stops: string
  segments: FlightLegEntityProps[]
  price: string
  prices: string
  ticketClassName: string
}

export class FlightItineraryEntity {
  readonly service: string
  readonly id: string
  readonly isValidBook: boolean
  readonly isLogin: boolean
  readonly isVfr: boolean
  readonly isYth: boolean
  readonly isLbr: boolean
  readonly isBlock: boolean
  readonly priceType: string
  readonly ticketTag: string
  readonly depAirport: string
  readonly arrAirport: string
  readonly nextDay: string
  readonly title: string
  readonly elapsedTime: string
  readonly elapsedTimeValue: number
  readonly depCityName: string
  readonly arrCityName: string
  readonly depTime: string
  readonly depDate: string
  readonly depDateCulture: string
  readonly arrDateCulture: string
  readonly arrTime: string
  readonly arrDate: string
  readonly marketingAirline: string
  readonly airEquip: string
  readonly isOperatedBy: boolean
  readonly operatedBy: string
  readonly marketingAirlineName: string
  readonly operatingAirline: string
  readonly operatingAirlineName: string
  readonly flightNumber: string
  readonly isBestPrice: boolean
  readonly isStop0: boolean
  readonly isStop1: boolean
  readonly isStop2: boolean
  readonly carryOnBaggage: string
  readonly freeBaggage: string
  readonly numberStop: number
  readonly stops: string
  readonly segments: FlightLegEntity[]
  readonly price: string
  readonly prices: string
  readonly ticketClassName: string

  constructor(props: FlightItineraryEntityProps) {
    this.service = props.service
    this.id = props.id
    this.isValidBook = props.isValidBook
    this.isLogin = props.isLogin
    this.isVfr = props.isVfr
    this.isYth = props.isYth
    this.isLbr = props.isLbr
    this.isBlock = props.isBlock
    this.priceType = props.priceType
    this.ticketTag = props.ticketTag
    this.depAirport = props.depAirport
    this.arrAirport = props.arrAirport
    this.nextDay = props.nextDay
    this.title = props.title
    this.elapsedTime = props.elapsedTime
    this.elapsedTimeValue = props.elapsedTimeValue
    this.depCityName = props.depCityName
    this.arrCityName = props.arrCityName
    this.depTime = props.depTime
    this.depDate = props.depDate
    this.depDateCulture = props.depDateCulture
    this.arrDateCulture = props.arrDateCulture
    this.arrTime = props.arrTime
    this.arrDate = props.arrDate
    this.marketingAirline = props.marketingAirline
    this.airEquip = props.airEquip
    this.isOperatedBy = props.isOperatedBy
    this.operatedBy = props.operatedBy
    this.marketingAirlineName = props.marketingAirlineName
    this.operatingAirline = props.operatingAirline
    this.operatingAirlineName = props.operatingAirlineName
    this.flightNumber = props.flightNumber
    this.isBestPrice = props.isBestPrice
    this.isStop0 = props.isStop0
    this.isStop1 = props.isStop1
    this.isStop2 = props.isStop2
    this.carryOnBaggage = props.carryOnBaggage
    this.freeBaggage = props.freeBaggage
    this.numberStop = props.numberStop
    this.stops = props.stops
    this.segments = props.segments.map((s) => new FlightLegEntity(s))
    this.price = props.price
    this.prices = props.prices
    this.ticketClassName = props.ticketClassName
  }
}
