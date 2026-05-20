import type { IQueryHandler } from '@/app/bus/types'

import type { DealFlightsEntity } from '../../domain/entities/DealFlightsEntity'
import type {
  DealFlightsQueryParams,
  IDealFlightsRepository,
} from '../../domain/repositories/IDealFlightsRepository'

export class DealFlightsQuery {
  readonly _type = 'query' as const

  readonly params: DealFlightsQueryParams

  constructor(params: DealFlightsQueryParams) {
    this.params = params
  }
}

export class DealFlightsQueryHandler implements IQueryHandler<
  DealFlightsQuery,
  DealFlightsEntity
> {
  private readonly dealFlightsRepository: IDealFlightsRepository

  constructor(dealFlightsRepository: IDealFlightsRepository) {
    this.dealFlightsRepository = dealFlightsRepository
  }

  async handle(query: DealFlightsQuery): Promise<DealFlightsEntity> {
    return this.dealFlightsRepository.getDealFlights(query.params)
  }
}
