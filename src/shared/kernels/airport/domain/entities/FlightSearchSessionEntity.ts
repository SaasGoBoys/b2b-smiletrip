export interface FlightSearchSessionEntityProps {
  sessionId: string
}

export class FlightSearchSessionEntity {
  readonly sessionId: string

  constructor(props: FlightSearchSessionEntityProps) {
    this.sessionId = props.sessionId
  }
}
