import type { AirportLocationChildEntityProps } from './AirportLocationChildEntity'

interface AirportLocationEntityProps {
  countryName: string
  sort: number
  airport: AirportLocationChildEntityProps[]
}

class AirportLocationEntity {
  readonly countryName: string
  readonly sort: number
  readonly airport: AirportLocationChildEntityProps[]

  constructor(props: AirportLocationEntityProps) {
    this.countryName = props.countryName
    this.sort = props.sort
    this.airport = props.airport
  }
}

export { AirportLocationEntity, type AirportLocationEntityProps }
