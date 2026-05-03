import type { VfjlinkDashboardData } from '../../domain/entities/VfjlinkDashboard.entity'
import type { IVfjlinkDashboardRepository } from '../../domain/repositories/IVfjlinkDashboardRepository'
import { VFJLINK_DASHBOARD_DATA } from '../data/vfjlinkDashboardStatic.data'

export class VfjlinkDashboardRepository implements IVfjlinkDashboardRepository {
  getSnapshot(): VfjlinkDashboardData {
    return VFJLINK_DASHBOARD_DATA
  }
}

export const vfjlinkDashboardRepository = new VfjlinkDashboardRepository()
