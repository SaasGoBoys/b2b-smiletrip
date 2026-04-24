import type { RouteObject } from 'react-router-dom'
import { AppLayout } from '@/shared/components/layout/AppLayout'
import { ProtectedRoute } from './ProtectedRoute'

import { authRoutes } from '@/features/auth/presentation/routes/auth.routes'
import { dashboardChildRoutes } from '@/features/dashboard/presentation/routes/dashboard.routes'
import { usersChildRoutes } from '@/features/users/presentation/routes/users.routes'
import { homeRoutes } from '@/features/home/presentation/routes/home.routes'

/**
 * Cấu hình router tập trung: ghép các mảnh route từ từng feature.
 * Thêm feature mới → export child routes từ feature → spread vào `children` bên dưới.
 */
export const routes: RouteObject[] = [
  ...authRoutes,
  ...homeRoutes,
  {
    path: '/',
    element: (
      <ProtectedRoute>
        <AppLayout />
      </ProtectedRoute>
    ),
    children: [...dashboardChildRoutes, ...usersChildRoutes],
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
