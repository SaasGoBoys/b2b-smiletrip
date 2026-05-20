/** Raw API response shapes — mirrors the BE JSON exactly (PascalCase). */

export interface FlightPassengerFareDto {
  Number: number
  PaxType: string
  BasePrice: string
  BasePriceAGT: string
  Tax: string
  TaxAGT: string
}

export interface FlightFareQuoteDto {
  BlockId: number
  RouteId: number
  IsValidBook: boolean
  IsRecommend: boolean
  PriceId: number
  Currency: string
  IsServiceFeeNull: boolean
  NoteSpecial: unknown
  IsShowTotalPrice: boolean
  TotalPrice: string
  TotalPriceFinal: string
  TotalPayment: string
  TotalPriceOrigin: number
  TotalServiceFee: string
  PricePerPax: string
  TotalTaxAndFee: string
  PricePerPaxValue: number
  PaymentFee: string
  IsShowSeatsAvailable: boolean
  TotalBasePrice: string
  TotalBasePriceAGT: string
  TotalTaxAndFeeAGT: string
  SeatsAvailable: string
  IsBestPrice: boolean
  Promotion: string
  PromotionType: unknown
  Avg_Note: string
  TotalPax: number
  Adult: FlightPassengerFareDto
  Child: FlightPassengerFareDto | null
  Infant: FlightPassengerFareDto | null
  Items: FlightPassengerFareDto[]
  CarryOnBaggages: string
  FeeCancel: number
  FeeChange: number
  IsCarryOn: boolean
  IsFreeBaggage: boolean
  BaggagePrice: string
  FreeBaggages: string
  FareBasis: string
  TicketClass: string
  TicketClassName: string
  Cabin: string
  Cabin2: string
  IsLogin: boolean
  IsLoginAGT: boolean
  TicketShow: boolean
  IsEnd: boolean
}

export interface FlightFareOptionDto {
  Id: string
  IdRelates: unknown
  Price: FlightFareQuoteDto
  Prices: FlightFareQuoteDto[]
  IsShowPriceOption: boolean
}

export interface FlightSegmentDto {
  IsStartDepAirport: boolean
  IsEndDepAirport: boolean
  DepAirport: string
  ArrAirport: string
  DepCityName: string
  DepAirportName: string
  ArrCityName: string
  ArrAirportName: string
  DepTime: string
  ArrTime: string
  DepDateCulture: string
  ArrDateCulture: string
  DepTerminal?: string
  ArrTerminal?: string
  FlightNumber: string
  OperatingAirline: string
  MarketingAirline: string
  OperatingAirlineName: string
  MarketingAirlineName: string
  AirEquipType: string
  ElapsedTime: string
  TimeChange: string
  TicketClass: unknown
  TicketClassName: string
  IsTimeChange: boolean
}

export interface FlightItineraryDto {
  Service: string
  Id: string
  IsValidBook: boolean
  IsLogin: boolean
  IsVFR: boolean
  IsYTH: boolean
  IsLBR: boolean
  IsBlock: boolean
  PriceType: string
  TicketTag: string
  DepAirport: string
  ArrAirport: string
  NextDay: string
  Title: string
  ElapsedTime: string
  ElapsedTimeValue: number
  DepCityName: string
  ArrCityName: string
  DepTime: string
  DepDate: string
  DepDateCulture: string
  ArrDateCulture: string
  ArrTime: string
  ArrDate: string
  MarketingAirline: string
  AirEquip: string
  IsOperatedBy: boolean
  OperatedBy: string
  MarketingAirlineName: string
  OperatingAirline: string
  OperatingAirlineName: string
  FlightNumber: string
  IsBestPrice: boolean
  Stop_0: boolean
  Stop_1: boolean
  Stop_2: boolean
  CarryOnBaggage: string
  FreeBaggage: string
  NumberStop: number
  Stops: string
  Segments: FlightSegmentDto[]
  Price: string
  Prices: string
  TicketClassName: string
}

export type FlightBlockItemsDto = Record<string, FlightItineraryDto[]>

export interface FlightSearchResultDto {
  Status: string
  IsPastDate: boolean
  IsNotFound: boolean
  Type: string
  TimeUpdate: string
  TimeOut: number
  BlockItems: FlightBlockItemsDto
  Prices: FlightFareOptionDto[]
}
