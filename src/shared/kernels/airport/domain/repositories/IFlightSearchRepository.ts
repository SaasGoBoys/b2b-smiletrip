import type { FlightSearchSessionEntity } from '../entities/FlightSearchSessionEntity'
import type { FlightSearchInput } from '../types/FlightSearchInput'

export interface IFlightSearchRepository {
  searchFlights(input: FlightSearchInput): Promise<FlightSearchSessionEntity>
}
