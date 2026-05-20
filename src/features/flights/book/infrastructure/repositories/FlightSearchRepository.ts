import { apiClient } from '@/shared/lib/axios'

import { FlightSearchResultEntity } from '../../domain/entities'
import type { FlightSearchResultDto } from '../dto/FlightSearchResultDto'
import { mapFlightSearchResult } from '../mappers/FlightSearchResultMapper'

export interface FlightSearchParams {
  sessionId: string
  currency: string
}

export interface IFlightSearchRepository {
  getSessionResult(params: FlightSearchParams): Promise<FlightSearchResultEntity>
}

export class FlightSearchRepository implements IFlightSearchRepository {
  async getSessionResult(params: FlightSearchParams): Promise<FlightSearchResultEntity> {
    const response = await apiClient.get<string>('/flight/result/GetSessionResult', {
      params: {
        sessionId: params.sessionId,
        currency: params.currency,
        /** Bypass browser/CDN cache so polling always hits the server. */
        _: Date.now(),
      },
      headers: {
        'Cache-Control': 'no-cache',
        Pragma: 'no-cache',
      },
    })
    const json = JSON.parse(response.data) as FlightSearchResultDto
    const entity = mapFlightSearchResult(json)
    return new FlightSearchResultEntity(entity)
  }
}
