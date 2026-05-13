import type { AirportLocationEntity } from '../entities/AirportLocationEntity'

export interface IAirportLocationRepository {
  getAirportLocations(): Promise<AirportLocationEntity[]>
}
