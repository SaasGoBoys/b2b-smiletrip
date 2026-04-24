import { lazy } from 'react'
import type { RouteObject } from 'react-router-dom'
import { SuspenseWrapper } from '@/shared/router/SuspenseWrapper'

const HomePage = lazy(() => import('@/features/home/presentation/pages/HomePage'))

export const homeRoutes: RouteObject[] = [
  {
    index: true,
    element: (
      <SuspenseWrapper>
        <HomePage />
      </SuspenseWrapper>
    ),
  },
]
