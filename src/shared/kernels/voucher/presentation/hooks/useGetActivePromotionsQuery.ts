import { useQuery } from '@tanstack/react-query'

import { queryBus } from '@/app/bus'

import { ActivePromotionsQuery } from '../../application/ActivePromotionsQuery'
import type { ActivePromotionEntity } from '../../domain/entities/ActivePromotionEntity'
import type { ActivePromotionsFilters } from '../../domain/repositories/IVoucherRepository'

export const ACTIVE_PROMOTIONS_QUERY_KEY = 'voucher-active-promotions'

export interface UseGetActivePromotionsQueryParams {
  pageNumber?: number
  pageSize?: number
}

const useGetActivePromotionsQuery = ({
  pageNumber = 0,
  pageSize = 10,
}: UseGetActivePromotionsQueryParams = {}) => {
  const params = { pageNumber, pageSize } satisfies ActivePromotionsFilters

  return useQuery({
    queryKey: [ACTIVE_PROMOTIONS_QUERY_KEY, pageNumber, pageSize] as const,
    queryFn: () =>
      queryBus.query<ActivePromotionsQuery, ActivePromotionEntity[]>(
        new ActivePromotionsQuery(params)
      ),
  })
}

export default useGetActivePromotionsQuery
