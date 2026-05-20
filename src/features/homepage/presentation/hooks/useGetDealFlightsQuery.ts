import { useQuery } from '@tanstack/react-query'

import { queryBus } from '@/app/bus'

import type { DealFlightsEntity } from '@/features/homepage/domain/entities/DealFlightsEntity'
import type { DealFlightsQueryParams } from '@/features/homepage/domain/repositories/IDealFlightsRepository'

import { DealFlightsQuery } from '@/features/homepage/application/queries/DealFlightsQuery'

export const DEAL_FLIGHTS_QUERY_KEY = 'homepage-deal-flights'

export const DEFAULT_DEAL_FLIGHTS_PARAMS: DealFlightsQueryParams = {
  culture: 'vi-VN',
  loc: 'VN',
  currency: 'VND',
}

export function useGetDealFlightsQuery(params: DealFlightsQueryParams = DEFAULT_DEAL_FLIGHTS_PARAMS) {
  return useQuery({
    queryKey: [DEAL_FLIGHTS_QUERY_KEY, params.culture, params.loc, params.currency] as const,
    queryFn: () =>
      queryBus.query<DealFlightsQuery, DealFlightsEntity>(new DealFlightsQuery(params)),
    staleTime: 5 * 60 * 1000,
  })
}
