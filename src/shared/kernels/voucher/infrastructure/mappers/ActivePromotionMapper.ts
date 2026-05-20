import { ActivePromotionEntity } from '../../domain/entities/ActivePromotionEntity'
import type { ActivePromotionDto } from '../dto/ActivePromotionDto'

export function mapActivePromotionDtoToEntity(dto: ActivePromotionDto): ActivePromotionEntity {
  return new ActivePromotionEntity({
    name: dto.Name,
    voucherCode: dto.Voucher,
    description: dto.Description,
    expiryDate: dto.ExpiryDate,
  })
}
