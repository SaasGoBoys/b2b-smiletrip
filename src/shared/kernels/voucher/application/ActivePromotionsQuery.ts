import type { IQueryHandler } from '@/app/bus/types'

import type { ActivePromotionEntity } from '../domain/entities/ActivePromotionEntity'
import type {
  ActivePromotionsFilters,
  IVoucherRepository,
} from '../domain/repositories/IVoucherRepository'

class ActivePromotionsQuery {
  readonly _type = 'query' as const

  readonly params: ActivePromotionsFilters

  constructor(params: ActivePromotionsFilters) {
    this.params = params
  }
}

class ActivePromotionsQueryHandler implements IQueryHandler<
  ActivePromotionsQuery,
  ActivePromotionEntity[]
> {
  private readonly voucherRepository: IVoucherRepository

  constructor(voucherRepository: IVoucherRepository) {
    this.voucherRepository = voucherRepository
  }

  async handle(query: ActivePromotionsQuery): Promise<ActivePromotionEntity[]> {
    return this.voucherRepository.getActivePromotions(query.params)
  }
}

export { ActivePromotionsQuery, ActivePromotionsQueryHandler }
