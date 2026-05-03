import { useMemo } from 'react'

import { getVfjlinkDashboard } from '@/features/dashboard/application/services/getVfjlinkDashboard'

import { vfjlinkDashboardRepository } from '@/features/dashboard/infrastructure/repositories/VfjlinkDashboardRepository'

export function useVfjlinkDashboard() {
  return useMemo(() => getVfjlinkDashboard(vfjlinkDashboardRepository), [])
}
