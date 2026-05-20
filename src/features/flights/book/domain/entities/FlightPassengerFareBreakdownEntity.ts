/** Per-passenger-type fare line (Adult / Child / Infant item in a quote). */
export interface FlightPassengerFareBreakdownEntityProps {
  number: number
  paxType: string
  basePrice: string
  basePriceAgt: string
  tax: string
  taxAgt: string
}

export class FlightPassengerFareBreakdownEntity {
  readonly number: number
  readonly paxType: string
  readonly basePrice: string
  readonly basePriceAgt: string
  readonly tax: string
  readonly taxAgt: string

  constructor(props: FlightPassengerFareBreakdownEntityProps) {
    this.number = props.number
    this.paxType = props.paxType
    this.basePrice = props.basePrice
    this.basePriceAgt = props.basePriceAgt
    this.tax = props.tax
    this.taxAgt = props.taxAgt
  }
}
