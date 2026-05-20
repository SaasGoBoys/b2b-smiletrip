import { DealFlightsEntity } from '../../domain/entities/DealFlightsEntity'
import type { DealFlightsDto } from '../dto/DealFlightsDto'

export function mapDealFlightsDtoToEntity(dto: DealFlightsDto): DealFlightsEntity {
  return new DealFlightsEntity({
    title: dto.title ?? '',
    tabs: (dto.tabs ?? []).map((tab) => ({
      id: tab.id,
      label: tab.label,
      isActive: Boolean(tab.isActive),
    })),
    dealsByTab: dto.dealsByTab ?? {},
    hasDealsByTab: dto.hasDealsByTab ?? {},
  })
}
