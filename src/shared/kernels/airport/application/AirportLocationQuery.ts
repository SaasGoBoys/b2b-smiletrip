import type { IQueryHandler } from '@/app/bus/types'

import type { AirportLocationEntity } from '../domain/entities/AirportLocationEntity'
import type { IAirportLocationRepository } from '../domain/repositories/IAirportLocationRepository'

class AirportLocationQuery {
  readonly _type = 'query' as const
}

class AirportLocationQueryHandler implements IQueryHandler<
  AirportLocationQuery,
  AirportLocationEntity[]
> {
  private readonly airportLocationRepository: IAirportLocationRepository
  constructor(airportLocationRepository: IAirportLocationRepository) {
    this.airportLocationRepository = airportLocationRepository
  }
  async handle(): Promise<AirportLocationEntity[]> {
    return this.airportLocationRepository.getAirportLocations()
  }
}

export { AirportLocationQuery, AirportLocationQueryHandler }
