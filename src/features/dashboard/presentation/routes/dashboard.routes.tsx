import { lazy } from 'react'
import type { RouteObject } from 'react-router-dom'
import { SuspenseWrapper } from '@/shared/router/SuspenseWrapper'

const DashboardPage = lazy(() => import('@/features/dashboard/presentation/pages/DashboardPage'))

/**
 * Routes con của layout đã bảo vệ: `/` và `/dashboard`.
 */
export const dashboardChildRoutes: RouteObject[] = [
  {
    path: 'dashboard',
    element: (
      <SuspenseWrapper>
        <DashboardPage />
      </SuspenseWrapper>
    ),
  },
]
