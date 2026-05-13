import { apiClient } from '@/shared/lib/axios'

import { AirportLocationChildEntity } from '../domain/entities/AirportLocationChildEntity'
import { AirportLocationEntity } from '../domain/entities/AirportLocationEntity'
import type { IAirportLocationRepository } from '../domain/repositories/IAirportLocationRepository'

interface IAirportLocationChildAPIRow {
  AirportCode: string
  AirportName: string
  CityCode: string
  CityName: string
  Sort: number
}

interface IAirportLocationAPIRow {
  CountryName: string
  Sort: number
  Airport: IAirportLocationChildAPIRow[]
}

class AirportLocationRepository implements IAirportLocationRepository {
  async getAirportLocations(): Promise<AirportLocationEntity[]> {
    const response = await apiClient.get('/flight/get-location-airport')
    return response.data.map((location: IAirportLocationAPIRow) =>
      this.mapToAirportLocationEntity(location)
    )
  }

  private mapToAirportLocationEntity(data: IAirportLocationAPIRow): AirportLocationEntity {
    return new AirportLocationEntity({
      countryName: data.CountryName,
      sort: data.Sort,
      airport: data.Airport.map(
        (airport: IAirportLocationChildAPIRow) =>
          new AirportLocationChildEntity({
            airportCode: airport.AirportCode,
            airportName: airport.AirportName,
            cityCode: airport.CityCode,
            cityName: airport.CityName,
            sort: airport.Sort,
          })
      ),
    })
  }
}

export { AirportLocationRepository }
