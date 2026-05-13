interface AirportLocationChildEntityProps {
  airportCode: string
  airportName: string
  cityCode: string
  cityName: string
  sort: number
}

class AirportLocationChildEntity {
  readonly airportCode: string
  readonly airportName: string
  readonly cityCode: string
  readonly cityName: string
  readonly sort: number

  constructor(props: AirportLocationChildEntityProps) {
    this.airportCode = props.airportCode
    this.airportName = props.airportName
    this.cityCode = props.cityCode
    this.cityName = props.cityName
    this.sort = props.sort
  }

  get displayName(): string {
    return `${this.airportName} (${this.airportCode})`
  }
}

export { AirportLocationChildEntity, type AirportLocationChildEntityProps }
