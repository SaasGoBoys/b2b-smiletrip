import type { IQueryHandler } from '@/app/bus/types'

import type { AirportEntity } from '../domain/entities/AirportEntity'
import type {
  AirportListFilters,
  IAirportRepository,
} from '../domain/repositories/IAirportRepository'

class AirportQuery {
  readonly _type = 'query' as const

  readonly params: AirportListFilters

  constructor(params: AirportListFilters) {
    this.params = params
  }
}

class AirportQueryHandler implements IQueryHandler<AirportQuery, AirportEntity[]> {
  private readonly airportRepository: IAirportRepository
  constructor(airportRepository: IAirportRepository) {
    this.airportRepository = airportRepository
  }
  async handle(query: AirportQuery): Promise<AirportEntity[]> {
    return this.airportRepository.getAirports(query.params)
  }
}

export { AirportQuery, AirportQueryHandler }
