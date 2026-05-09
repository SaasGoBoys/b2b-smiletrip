import { apiClient } from '@/shared/lib/axios'

import { AirportEntity } from '../domain/entities/AirportEntity'
import type {
  AirportListFilters,
  IAirportRepository,
} from '../domain/repositories/IAirportRepository'

interface IAirportAPIRow {
  Type: string
  Text: string
  City: string
  CityCode?: string
}

class AirportRepository implements IAirportRepository {
  async getAirports(params: AirportListFilters): Promise<AirportEntity[]> {
    const response = await apiClient.get('/flight/search-airports', { params })
    return response.data.map((airport: IAirportAPIRow) => this.mapToAirportEntity(airport))
  }

  private mapToAirportEntity(data: IAirportAPIRow): AirportEntity {
    return new AirportEntity({
      type: data.Type,
      text: data.Text,
      city: data.City,
      cityCode: data?.CityCode ?? '',
    })
  }
}

export { AirportRepository }
