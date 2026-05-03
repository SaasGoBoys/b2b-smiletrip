import type { VfjlinkDashboardData } from '../entities/VfjlinkDashboard.entity'

export interface IVfjlinkDashboardRepository {
  getSnapshot(): VfjlinkDashboardData
}
