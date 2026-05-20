import { apiClient } from '@/shared/lib/axios'

import type { FlightSearchSessionEntity } from '../domain/entities/FlightSearchSessionEntity'
import type { IFlightSearchRepository } from '../domain/repositories/IFlightSearchRepository'
import type { FlightSearchInput } from '../domain/types/FlightSearchInput'

import type { FlightSearchResponseDto } from './dto/FlightSearchRequestDto'
import {
  mapFlightSearchInputToDto,
  mapFlightSearchResponseToEntity,
} from './mappers/flightSearch.mapper'

class FlightSearchRepository implements IFlightSearchRepository {
  async searchFlights(input: FlightSearchInput): Promise<FlightSearchSessionEntity> {
    const body = mapFlightSearchInputToDto(input)
    const response = await apiClient.post<FlightSearchResponseDto>('/flight/search', body)
    return mapFlightSearchResponseToEntity(response.data)
  }
}

export { FlightSearchRepository }
