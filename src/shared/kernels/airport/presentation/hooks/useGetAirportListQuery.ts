import { useQuery } from '@tanstack/react-query'

import { queryBus } from '@/app/bus'

import { AirportQuery } from '../../application/AirportQuery'
import type { AirportEntity } from '../../domain/entities/AirportEntity'

const useGetAirportListQuery = () => {
  return useQuery({
    queryKey: ['airports'],
    queryFn: () => queryBus.query<AirportQuery, AirportEntity[]>(new AirportQuery({ keyword: '' })),
  })
}

export default useGetAirportListQuery
