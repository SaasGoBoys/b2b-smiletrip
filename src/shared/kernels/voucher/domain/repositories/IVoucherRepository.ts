import type { ActivePromotionEntity } from '../entities/ActivePromotionEntity'

export interface ActivePromotionsFilters {
  pageNumber: number
  pageSize: number
}

export interface IVoucherRepository {
  getActivePromotions(filters: ActivePromotionsFilters): Promise<ActivePromotionEntity[]>
}
