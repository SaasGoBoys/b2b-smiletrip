import { apiClient } from '@/shared/lib/axios'

import type { ActivePromotionEntity } from '../domain/entities/ActivePromotionEntity'
import type {
  ActivePromotionsFilters,
  IVoucherRepository,
} from '../domain/repositories/IVoucherRepository'

import type { ActivePromotionDto } from './dto/ActivePromotionDto'
import { mapActivePromotionDtoToEntity } from './mappers/ActivePromotionMapper'

class VoucherRepository implements IVoucherRepository {
  async getActivePromotions(filters: ActivePromotionsFilters): Promise<ActivePromotionEntity[]> {
    const response = await apiClient.get<ActivePromotionDto[]>('/voucher/active-promotions', {
      params: {
        pageNumber: filters.pageNumber,
        pageSize: filters.pageSize,
      },
    })

    const rows = Array.isArray(response.data) ? response.data : []
    return rows.map(mapActivePromotionDtoToEntity)
  }
}

export { VoucherRepository }
