import { useQuery } from '@tanstack/react-query'

import { queryBus } from '@/app/bus'

import { useDebounce } from '@/shared/hooks/useDebounce'

import { AirportQuery } from '../../application/AirportQuery'
import type { AirportEntity } from '../../domain/entities/AirportEntity'
import type { AirportListFilters } from '../../domain/repositories/IAirportRepository'

export const AIRPORT_LIST_QUERY_KEY = 'airports'

/**
 * Airport typeahead search. `scope` isolates React Query cache between fields (e.g. from / to).
 * `keyword` is the live input; the request is debounced by 500ms.
 */
const useGetAirportListQuery = (scope: string, keyword: string) => {
  const debouncedKeyword = useDebounce(keyword.trim(), 500)

  return useQuery({
    queryKey: [AIRPORT_LIST_QUERY_KEY, scope, debouncedKeyword] as const,
    queryFn: () =>
      queryBus.query<AirportQuery, AirportEntity[]>(
        new AirportQuery({ keyword: debouncedKeyword } satisfies AirportListFilters)
      ),
    enabled: debouncedKeyword.length > 0,
  })
}

export default useGetAirportListQuery
