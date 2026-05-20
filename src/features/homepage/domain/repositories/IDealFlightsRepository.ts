import type { DealFlightsEntity } from '../entities/DealFlightsEntity'

export interface DealFlightsQueryParams {
  culture: string
  loc: string
  currency: string
}

export interface IDealFlightsRepository {
  getDealFlights(params: DealFlightsQueryParams): Promise<DealFlightsEntity>
}
