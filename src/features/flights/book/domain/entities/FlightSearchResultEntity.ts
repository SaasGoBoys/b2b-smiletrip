import {
  FlightFareOptionEntity,
  type FlightFareOptionEntityProps,
} from './FlightFareOptionEntity'
import {
  FlightItineraryEntity,
  type FlightItineraryEntityProps,
} from './FlightItineraryEntity'

/** Itineraries grouped by block key from search (BE: BlockItems). */
export type FlightSearchBlockItemsMap = Record<string, FlightItineraryEntityProps[]>

export interface FlightSearchResultEntityProps {
  status: string
  isPastDate: boolean
  isNotFound: boolean
  type: string
  timeUpdate: string
  timeOut: number
  blockItems: FlightSearchBlockItemsMap
  prices: FlightFareOptionEntityProps[]
}

export class FlightSearchResultEntity {
  readonly status: string
  readonly isPastDate: boolean
  readonly isNotFound: boolean
  readonly type: string
  readonly timeUpdate: string
  readonly timeOut: number
  readonly blockItems: Record<string, FlightItineraryEntity[]>
  readonly prices: FlightFareOptionEntity[]

  constructor(props: FlightSearchResultEntityProps) {
    this.status = props.status
    this.isPastDate = props.isPastDate
    this.isNotFound = props.isNotFound
    this.type = props.type
    this.timeUpdate = props.timeUpdate
    this.timeOut = props.timeOut
    this.blockItems = Object.fromEntries(
      Object.entries(props.blockItems).map(([key, itineraries]) => [
        key,
        itineraries.map((it) => new FlightItineraryEntity(it)),
      ])
    )
    this.prices = props.prices.map((p) => new FlightFareOptionEntity(p))
  }
}
