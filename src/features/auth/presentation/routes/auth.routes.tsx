import { lazy } from 'react'
import type { RouteObject } from 'react-router-dom'
import { SuspenseWrapper } from '@/shared/router/SuspenseWrapper'

const LoginPage = lazy(() => import('@/features/auth/presentation/pages/LoginPage'))

/**
 * Public auth routes (không nằm trong layout đăng nhập).
 */
export const authRoutes: RouteObject[] = [
  {
    path: '/login',
    element: (
      <SuspenseWrapper>
        <LoginPage />
      </SuspenseWrapper>
    ),
  },
]
