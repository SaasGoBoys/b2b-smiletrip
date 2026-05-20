import type {
  FlightFareOptionEntityProps,
  FlightFareQuoteEntityProps,
  FlightItineraryEntityProps,
  FlightLegEntityProps,
  FlightPassengerFareBreakdownEntityProps,
  FlightSearchResultEntityProps,
} from '../../domain/entities'
import type {
  FlightFareOptionDto,
  FlightFareQuoteDto,
  FlightItineraryDto,
  FlightPassengerFareDto,
  FlightSearchResultDto,
  FlightSegmentDto,
} from '../dto/FlightSearchResultDto'

function mapPaxFare(dto: FlightPassengerFareDto): FlightPassengerFareBreakdownEntityProps {
  return {
    number: dto.Number,
    paxType: dto.PaxType,
    basePrice: dto.BasePrice,
    basePriceAgt: dto.BasePriceAGT,
    tax: dto.Tax,
    taxAgt: dto.TaxAGT,
  }
}

function mapFareQuote(dto: FlightFareQuoteDto): FlightFareQuoteEntityProps {
  return {
    blockId: dto.BlockId,
    routeId: dto.RouteId,
    isValidBook: dto.IsValidBook,
    isRecommend: dto.IsRecommend,
    priceId: dto.PriceId,
    currency: dto.Currency,
    isServiceFeeNull: dto.IsServiceFeeNull,
    noteSpecial: dto.NoteSpecial,
    isShowTotalPrice: dto.IsShowTotalPrice,
    totalPrice: dto.TotalPrice,
    totalPriceFinal: dto.TotalPriceFinal,
    totalPayment: dto.TotalPayment,
    totalPriceOrigin: dto.TotalPriceOrigin,
    totalServiceFee: dto.TotalServiceFee,
    pricePerPax: dto.PricePerPax,
    totalTaxAndFee: dto.TotalTaxAndFee,
    pricePerPaxValue: dto.PricePerPaxValue,
    paymentFee: dto.PaymentFee,
    isShowSeatsAvailable: dto.IsShowSeatsAvailable,
    totalBasePrice: dto.TotalBasePrice,
    totalBasePriceAgt: dto.TotalBasePriceAGT,
    totalTaxAndFeeAgt: dto.TotalTaxAndFeeAGT,
    seatsAvailable: dto.SeatsAvailable,
    isBestPrice: dto.IsBestPrice,
    promotion: dto.Promotion,
    promotionType: dto.PromotionType,
    avgNote: dto.Avg_Note,
    totalPax: dto.TotalPax,
    adult: mapPaxFare(dto.Adult),
    child: dto.Child ? mapPaxFare(dto.Child) : null,
    infant: dto.Infant ? mapPaxFare(dto.Infant) : null,
    items: (dto.Items ?? []).map(mapPaxFare),
    carryOnBaggages: dto.CarryOnBaggages,
    feeCancel: dto.FeeCancel,
    feeChange: dto.FeeChange,
    isCarryOn: dto.IsCarryOn,
    isFreeBaggage: dto.IsFreeBaggage,
    baggagePrice: dto.BaggagePrice,
    freeBaggages: dto.FreeBaggages,
    fareBasis: dto.FareBasis,
    ticketClass: dto.TicketClass,
    ticketClassName: dto.TicketClassName,
    cabin: dto.Cabin,
    cabin2: dto.Cabin2,
    isLogin: dto.IsLogin,
    isLoginAgt: dto.IsLoginAGT,
    ticketShow: dto.TicketShow,
    isEnd: dto.IsEnd,
  }
}

function mapFareOption(dto: FlightFareOptionDto): FlightFareOptionEntityProps {
  return {
    id: dto.Id,
    idRelates: dto.IdRelates,
    price: mapFareQuote(dto.Price),
    prices: (dto.Prices ?? []).map(mapFareQuote),
    isShowPriceOption: dto.IsShowPriceOption,
  }
}

function mapSegment(dto: FlightSegmentDto): FlightLegEntityProps {
  return {
    isStartDepAirport: dto.IsStartDepAirport,
    isEndDepAirport: dto.IsEndDepAirport,
    depAirport: dto.DepAirport,
    arrAirport: dto.ArrAirport,
    depCityName: dto.DepCityName,
    depAirportName: dto.DepAirportName,
    arrCityName: dto.ArrCityName,
    arrAirportName: dto.ArrAirportName,
    depTime: dto.DepTime,
    arrTime: dto.ArrTime,
    depDateCulture: dto.DepDateCulture,
    arrDateCulture: dto.ArrDateCulture,
    depTerminal: dto.DepTerminal,
    arrTerminal: dto.ArrTerminal,
    flightNumber: dto.FlightNumber,
    operatingAirline: dto.OperatingAirline,
    marketingAirline: dto.MarketingAirline,
    operatingAirlineName: dto.OperatingAirlineName,
    marketingAirlineName: dto.MarketingAirlineName,
    airEquipType: dto.AirEquipType,
    elapsedTime: dto.ElapsedTime,
    timeChange: dto.TimeChange,
    ticketClass: dto.TicketClass,
    ticketClassName: dto.TicketClassName,
    isTimeChange: dto.IsTimeChange,
  }
}

function mapItinerary(dto: FlightItineraryDto): FlightItineraryEntityProps {
  return {
    service: dto.Service,
    id: dto.Id,
    isValidBook: dto.IsValidBook,
    isLogin: dto.IsLogin,
    isVfr: dto.IsVFR,
    isYth: dto.IsYTH,
    isLbr: dto.IsLBR,
    isBlock: dto.IsBlock,
    priceType: dto.PriceType,
    ticketTag: dto.TicketTag,
    depAirport: dto.DepAirport,
    arrAirport: dto.ArrAirport,
    nextDay: dto.NextDay,
    title: dto.Title,
    elapsedTime: dto.ElapsedTime,
    elapsedTimeValue: dto.ElapsedTimeValue,
    depCityName: dto.DepCityName,
    arrCityName: dto.ArrCityName,
    depTime: dto.DepTime,
    depDate: dto.DepDate,
    depDateCulture: dto.DepDateCulture,
    arrDateCulture: dto.ArrDateCulture,
    arrTime: dto.ArrTime,
    arrDate: dto.ArrDate,
    marketingAirline: dto.MarketingAirline,
    airEquip: dto.AirEquip,
    isOperatedBy: dto.IsOperatedBy,
    operatedBy: dto.OperatedBy,
    marketingAirlineName: dto.MarketingAirlineName,
    operatingAirline: dto.OperatingAirline,
    operatingAirlineName: dto.OperatingAirlineName,
    flightNumber: dto.FlightNumber,
    isBestPrice: dto.IsBestPrice,
    isStop0: dto.Stop_0,
    isStop1: dto.Stop_1,
    isStop2: dto.Stop_2,
    carryOnBaggage: dto.CarryOnBaggage,
    freeBaggage: dto.FreeBaggage,
    numberStop: dto.NumberStop,
    stops: dto.Stops,
    segments: (dto.Segments ?? []).map(mapSegment),
    price: dto.Price,
    prices: dto.Prices,
    ticketClassName: dto.TicketClassName,
  }
}

export function mapFlightSearchResult(dto: FlightSearchResultDto): FlightSearchResultEntityProps {
  const blockItems: Record<string, FlightItineraryEntityProps[]> = {}
  for (const [key, itineraries] of Object.entries(dto.BlockItems ?? {})) {
    blockItems[key] = (itineraries ?? []).map(mapItinerary)
  }

  return {
    status: dto.Status,
    isPastDate: dto.IsPastDate,
    isNotFound: dto.IsNotFound,
    type: dto.Type,
    timeUpdate: dto.TimeUpdate,
    timeOut: dto.TimeOut,
    blockItems,
    prices: (dto.Prices ?? []).map(mapFareOption),
  }
}
