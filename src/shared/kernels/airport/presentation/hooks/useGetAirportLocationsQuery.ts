import { useQuery } from '@tanstack/react-query'

import { queryBus } from '@/app/bus'

import { AirportLocationQuery } from '../../application/AirportLocationQuery'
import { AirportLocationEntity } from '../../domain/entities/AirportLocationEntity'
import { airportLocationMapper } from '../mappers/airport.mapper'

export const AIRPORT_LOCATIONS_QUERY_KEY = 'airport-locations'

const useGetAirportLocationsQuery = () => {
  const query = useQuery({
    queryKey: [AIRPORT_LOCATIONS_QUERY_KEY],
    queryFn: () =>
      queryBus.query<AirportLocationQuery, AirportLocationEntity[]>(new AirportLocationQuery()),
    select: airportLocationMapper,
  })

  return query
}

export default useGetAirportLocationsQuery
