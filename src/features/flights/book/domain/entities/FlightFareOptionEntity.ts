import {
  FlightFareQuoteEntity,
  type FlightFareQuoteEntityProps,
} from './FlightFareQuoteEntity'

/** Fare option linking itinerary block ids to primary and alternate quotes (BE: Price). */
export interface FlightFareOptionEntityProps {
  id: string
  idRelates: unknown
  price: FlightFareQuoteEntityProps
  prices: FlightFareQuoteEntityProps[]
  isShowPriceOption: boolean
}

export class FlightFareOptionEntity {
  readonly id: string
  readonly idRelates: unknown
  readonly price: FlightFareQuoteEntity
  readonly prices: FlightFareQuoteEntity[]
  readonly isShowPriceOption: boolean

  constructor(props: FlightFareOptionEntityProps) {
    this.id = props.id
    this.idRelates = props.idRelates
    this.price = new FlightFareQuoteEntity(props.price)
    this.prices = props.prices.map((p) => new FlightFareQuoteEntity(p))
    this.isShowPriceOption = props.isShowPriceOption
  }
}
