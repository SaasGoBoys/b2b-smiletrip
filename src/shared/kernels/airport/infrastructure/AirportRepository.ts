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
    return response.data
      .map((airport: IAirportAPIRow) => this.mapToAirportEntity(airport))
      .filter((airport: AirportEntity) => airport.type !== 'country')
  }

  private normalizeType(raw: string): AirportEntity['type'] {
    const t = String(raw ?? '')
      .toLowerCase()
      .replace(/_/g, '-')
    if (t === 'subcity' || t === 'sub-city') return 'sub-city'
    if (t === 'subairport' || t === 'sub-airport') return 'sub-airport'
    if (t === 'airport') return 'airport'
    if (t === 'city') return 'city'
    if (t === 'country') return 'country'
    return 'city'
  }

  private mapToAirportEntity(data: IAirportAPIRow): AirportEntity {
    return new AirportEntity({
      type: this.normalizeType(data.Type),
      text: data.Text,
      city: data.City,
      cityCode: data?.CityCode ?? '',
    })
  }
}

export { AirportRepository }
