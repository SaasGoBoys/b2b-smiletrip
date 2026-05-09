interface AirportEntityProps {
  type: string
  text: string
  city: string
  cityCode: string
}

class AirportEntity {
  readonly type: string
  readonly text: string
  readonly city: string
  readonly cityCode: string

  constructor(props: AirportEntityProps) {
    this.type = props.type
    this.text = props.text
    this.city = props.city
    this.cityCode = props.cityCode
  }
}

export { AirportEntity, type AirportEntityProps }
