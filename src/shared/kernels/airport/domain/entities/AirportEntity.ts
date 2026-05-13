type AirportEntityType = 'country' | 'airport' | 'city' | 'sub-airport' | 'sub-city'

interface AirportEntityProps {
  type: AirportEntityType
  text: string
  city: string
  cityCode: string
}

class AirportEntity {
  readonly type: AirportEntityType
  readonly text: string
  readonly city: string
  readonly cityCode: string

  constructor(props: AirportEntityProps) {
    this.type = props.type
    this.text = props.text
    this.city = props.city
    this.cityCode = props.cityCode
  }

  get displayName(): string {
    const code = this.cityCode
    if (!code) return this.text
    if (this.text.includes(`(${code})`)) return this.text
    return `${this.text} (${code})`
  }
}

export { AirportEntity, type AirportEntityProps, type AirportEntityType }
