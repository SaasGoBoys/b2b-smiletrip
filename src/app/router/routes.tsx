import { Navigate, type RouteObject } from 'react-router-dom'

import { AppLayout } from '@/shared/components/layout/AppLayout'
import { MenuPlaceholderPage } from '@/shared/components/layout/MenuPlaceholderPage'
import { sidebarScreenPaths } from '@/shared/constants/sidebarPaths'

import { dashboardChildRoutes } from '@/features/dashboard/presentation/routes/dashboard.routes'
import { flightRoutes } from '@/features/flights/_shared/presentation/routes/flight.routes'
import { usersChildRoutes } from '@/features/users/presentation/routes/users.routes'

import AppRoutes from './paths'

/**
 * Cấu hình router tập trung: ghép các mảnh route từ từng feature.
 * Thêm feature mới → export child routes từ feature → spread vào `children` bên dưới.
 */
export const routes: RouteObject[] = [
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Navigate to={AppRoutes.flightBooking} />,
      },
      ...dashboardChildRoutes,
      ...usersChildRoutes,
      ...flightRoutes,
      ...sidebarScreenPaths.map((path) => ({
        path: path.slice(1),
        element: <MenuPlaceholderPage />,
      })),
    ],
  },
  {
    path: '/403',
    element: <div style={{ padding: 48 }}>403 — Forbidden</div>,
  },
  {
    path: '*',
    element: <div style={{ padding: 48 }}>404 — Not found</div>,
  },
]
