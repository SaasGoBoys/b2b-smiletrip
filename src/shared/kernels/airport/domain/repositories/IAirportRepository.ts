import type { AirportEntity } from '../entities/AirportEntity'

export interface AirportListFilters {
  keyword: string
}

export interface IAirportRepository {
  getAirports(filters: AirportListFilters): Promise<AirportEntity[]>
}
