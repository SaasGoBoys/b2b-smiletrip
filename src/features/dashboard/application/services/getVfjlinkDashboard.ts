import type { VfjlinkDashboardData } from '../../domain/entities/VfjlinkDashboard.entity'
import type { IVfjlinkDashboardRepository } from '../../domain/repositories/IVfjlinkDashboardRepository'

export function getVfjlinkDashboard(repository: IVfjlinkDashboardRepository): VfjlinkDashboardData {
  return repository.getSnapshot()
}
