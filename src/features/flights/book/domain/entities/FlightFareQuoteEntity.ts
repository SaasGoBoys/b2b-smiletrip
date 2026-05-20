import {
  FlightPassengerFareBreakdownEntity,
  type FlightPassengerFareBreakdownEntityProps,
} from './FlightPassengerFareBreakdownEntity'

/** Detailed fare quote for a block/route (BE: Price2 / Price3). */
export interface FlightFareQuoteEntityProps {
  blockId: number
  routeId: number
  isValidBook: boolean
  isRecommend: boolean
  priceId: number
  currency: string
  isServiceFeeNull: boolean
  noteSpecial: unknown
  isShowTotalPrice: boolean
  totalPrice: string
  totalPriceFinal: string
  totalPayment: string
  totalPriceOrigin: number
  totalServiceFee: string
  pricePerPax: string
  totalTaxAndFee: string
  pricePerPaxValue: number
  paymentFee: string
  isShowSeatsAvailable: boolean
  totalBasePrice: string
  totalBasePriceAgt: string
  totalTaxAndFeeAgt: string
  seatsAvailable: string
  isBestPrice: boolean
  promotion: string
  promotionType: unknown
  avgNote: string
  totalPax: number
  adult: FlightPassengerFareBreakdownEntityProps
  child: FlightPassengerFareBreakdownEntityProps | null
  infant: FlightPassengerFareBreakdownEntityProps | null
  items: FlightPassengerFareBreakdownEntityProps[]
  carryOnBaggages: string
  feeCancel: number
  feeChange: number
  isCarryOn: boolean
  isFreeBaggage: boolean
  baggagePrice: string
  freeBaggages: string
  fareBasis: string
  ticketClass: string
  ticketClassName: string
  cabin: string
  cabin2: string
  isLogin: boolean
  isLoginAgt: boolean
  ticketShow: boolean
  isEnd: boolean
}

export class FlightFareQuoteEntity {
  readonly blockId: number
  readonly routeId: number
  readonly isValidBook: boolean
  readonly isRecommend: boolean
  readonly priceId: number
  readonly currency: string
  readonly isServiceFeeNull: boolean
  readonly noteSpecial: unknown
  readonly isShowTotalPrice: boolean
  readonly totalPrice: string
  readonly totalPriceFinal: string
  readonly totalPayment: string
  readonly totalPriceOrigin: number
  readonly totalServiceFee: string
  readonly pricePerPax: string
  readonly totalTaxAndFee: string
  readonly pricePerPaxValue: number
  readonly paymentFee: string
  readonly isShowSeatsAvailable: boolean
  readonly totalBasePrice: string
  readonly totalBasePriceAgt: string
  readonly totalTaxAndFeeAgt: string
  readonly seatsAvailable: string
  readonly isBestPrice: boolean
  readonly promotion: string
  readonly promotionType: unknown
  readonly avgNote: string
  readonly totalPax: number
  readonly adult: FlightPassengerFareBreakdownEntity
  readonly child: FlightPassengerFareBreakdownEntity | null
  readonly infant: FlightPassengerFareBreakdownEntity | null
  readonly items: FlightPassengerFareBreakdownEntity[]
  readonly carryOnBaggages: string
  readonly feeCancel: number
  readonly feeChange: number
  readonly isCarryOn: boolean
  readonly isFreeBaggage: boolean
  readonly baggagePrice: string
  readonly freeBaggages: string
  readonly fareBasis: string
  readonly ticketClass: string
  readonly ticketClassName: string
  readonly cabin: string
  readonly cabin2: string
  readonly isLogin: boolean
  readonly isLoginAgt: boolean
  readonly ticketShow: boolean
  readonly isEnd: boolean

  constructor(props: FlightFareQuoteEntityProps) {
    this.blockId = props.blockId
    this.routeId = props.routeId
    this.isValidBook = props.isValidBook
    this.isRecommend = props.isRecommend
    this.priceId = props.priceId
    this.currency = props.currency
    this.isServiceFeeNull = props.isServiceFeeNull
    this.noteSpecial = props.noteSpecial
    this.isShowTotalPrice = props.isShowTotalPrice
    this.totalPrice = props.totalPrice
    this.totalPriceFinal = props.totalPriceFinal
    this.totalPayment = props.totalPayment
    this.totalPriceOrigin = props.totalPriceOrigin
    this.totalServiceFee = props.totalServiceFee
    this.pricePerPax = props.pricePerPax
    this.totalTaxAndFee = props.totalTaxAndFee
    this.pricePerPaxValue = props.pricePerPaxValue
    this.paymentFee = props.paymentFee
    this.isShowSeatsAvailable = props.isShowSeatsAvailable
    this.totalBasePrice = props.totalBasePrice
    this.totalBasePriceAgt = props.totalBasePriceAgt
    this.totalTaxAndFeeAgt = props.totalTaxAndFeeAgt
    this.seatsAvailable = props.seatsAvailable
    this.isBestPrice = props.isBestPrice
    this.promotion = props.promotion
    this.promotionType = props.promotionType
    this.avgNote = props.avgNote
    this.totalPax = props.totalPax
    this.adult = new FlightPassengerFareBreakdownEntity(props.adult)
    this.child = props.child ? new FlightPassengerFareBreakdownEntity(props.child) : null
    this.infant = props.infant ? new FlightPassengerFareBreakdownEntity(props.infant) : null
    this.items = props.items.map((item) => new FlightPassengerFareBreakdownEntity(item))
    this.carryOnBaggages = props.carryOnBaggages
    this.feeCancel = props.feeCancel
    this.feeChange = props.feeChange
    this.isCarryOn = props.isCarryOn
    this.isFreeBaggage = props.isFreeBaggage
    this.baggagePrice = props.baggagePrice
    this.freeBaggages = props.freeBaggages
    this.fareBasis = props.fareBasis
    this.ticketClass = props.ticketClass
    this.ticketClassName = props.ticketClassName
    this.cabin = props.cabin
    this.cabin2 = props.cabin2
    this.isLogin = props.isLogin
    this.isLoginAgt = props.isLoginAgt
    this.ticketShow = props.ticketShow
    this.isEnd = props.isEnd
  }
}
