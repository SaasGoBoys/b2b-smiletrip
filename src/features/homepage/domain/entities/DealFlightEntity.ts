export interface DealFlightEntityProps {
  departText: string
  arrivalText: string
  routeDate: string
  price: string
  originPrice: string
  currency: string
  thumb: string
  thumbAlt: string
  dataSearch: string
  airline: string
  airlineLogoUrl: string
  priorityOrder: number
}

export class DealFlightEntity {
  readonly departText: string
  readonly arrivalText: string
  readonly routeDate: string
  readonly price: string
  readonly originPrice: string
  readonly currency: string
  readonly thumb: string
  readonly thumbAlt: string
  readonly dataSearch: string
  readonly airline: string
  readonly airlineLogoUrl: string
  readonly priorityOrder: number

  constructor(props: DealFlightEntityProps) {
    this.departText = props.departText
    this.arrivalText = props.arrivalText
    this.routeDate = props.routeDate
    this.price = props.price
    this.originPrice = props.originPrice
    this.currency = props.currency
    this.thumb = props.thumb
    this.thumbAlt = props.thumbAlt
    this.dataSearch = props.dataSearch
    this.airline = props.airline
    this.airlineLogoUrl = props.airlineLogoUrl
    this.priorityOrder = props.priorityOrder
  }

  get routeLabel(): string {
    return `${this.departText} → ${this.arrivalText}`
  }

  get thumbUrl(): string {
    if (!this.thumb) return ''
    if (this.thumb.startsWith('//')) return `https:${this.thumb}`
    return this.thumb
  }
}
