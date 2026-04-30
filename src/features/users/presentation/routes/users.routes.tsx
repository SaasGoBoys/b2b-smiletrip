import { lazy } from 'react'
import { Outlet, type RouteObject } from 'react-router-dom'

import { featureRouteLoader } from '@/app/composition/featureBusTiered'
import { PermissionRoute } from '@/app/router/PermissionRoute'

import { SuspenseWrapper } from '@/shared/router/SuspenseWrapper'

const UserListPage = lazy(() => import('@/features/users/presentation/pages/UserListPage'))
const UserDetailPage = lazy(() => import('@/features/users/presentation/pages/UserDetailPage'))

/**
 * Routes users dưới layout đã đăng nhập; bọc PermissionRoute.
 */
export const usersChildRoutes: RouteObject[] = [
  {
    path: 'users',
    loader: featureRouteLoader('users'),
    element: (
      <PermissionRoute resource="users" action="read">
        <Outlet />
      </PermissionRoute>
    ),
    children: [
      {
        index: true,
        element: (
          <SuspenseWrapper>
            <UserListPage />
          </SuspenseWrapper>
        ),
      },
      {
        path: ':id',
        element: (
          <SuspenseWrapper>
            <UserDetailPage />
          </SuspenseWrapper>
        ),
      },
    ],
  },
]
