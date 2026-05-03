import type { VfjlinkDashboardData } from '../../domain/entities/VfjlinkDashboard.entity'

import {
  VFJLINK_AGENTS,
  VFJLINK_ALERTS,
  VFJLINK_DONUT,
  VFJLINK_IMPORTANT,
  VFJLINK_KPIS,
  VFJLINK_NEWS,
  VFJLINK_REVENUE,
} from './vfjlinkStaticCore'
import { VFJLINK_SERVICE_PANES } from './vfjlinkStaticServicePanes'

export const VFJLINK_DASHBOARD_DATA: VfjlinkDashboardData = {
  monthLabel: 'tháng 5/2026',
  kpis: VFJLINK_KPIS,
  revenue: VFJLINK_REVENUE,
  donut: VFJLINK_DONUT,
  alerts: VFJLINK_ALERTS,
  important: VFJLINK_IMPORTANT,
  news: VFJLINK_NEWS,
  servicePanes: VFJLINK_SERVICE_PANES,
  agents: VFJLINK_AGENTS,
  agentSummary: { total: 24, active: 19, warn: 3, bad: 2 },
}
