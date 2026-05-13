import type { AirportLocationEntity } from '../../domain/entities/AirportLocationEntity'

export const airportLocationMapper = (airportLocations: AirportLocationEntity[]) => {
  return airportLocations.sort((a, b) => a.sort - b.sort)
}
