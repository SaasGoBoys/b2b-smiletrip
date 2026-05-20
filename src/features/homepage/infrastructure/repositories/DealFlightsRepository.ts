import { apiClient } from '@/shared/lib/axios'

import type { DealFlightsEntity } from '../../domain/entities/DealFlightsEntity'
import type {
  DealFlightsQueryParams,
  IDealFlightsRepository,
} from '../../domain/repositories/IDealFlightsRepository'
import type { DealFlightsDto } from '../dto/DealFlightsDto'
import { mapDealFlightsDtoToEntity } from '../mappers/dealFlights.mapper'

export class DealFlightsRepository implements IDealFlightsRepository {
  async getDealFlights(params: DealFlightsQueryParams): Promise<DealFlightsEntity> {
    const response = await apiClient.get<DealFlightsDto>('/home-page/deal-flights', {
      params: {
        culture: params.culture,
        loc: params.loc,
        currency: params.currency,
      },
    })

    return mapDealFlightsDtoToEntity(response.data)
  }
}

export const dealFlightsRepository = new DealFlightsRepository()
