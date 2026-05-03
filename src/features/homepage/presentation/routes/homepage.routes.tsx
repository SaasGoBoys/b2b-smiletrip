import { lazy } from 'react'
import type { RouteObject } from 'react-router-dom'

import { SuspenseWrapper } from '@/shared/router/SuspenseWrapper'

const HomePage = lazy(() => import('@/features/homepage/presentation/pages/HomePage'))

export const homepageChildRoutes: RouteObject[] = [
  {
    index: true,
    element: (
      <SuspenseWrapper>
        <HomePage />
      </SuspenseWrapper>
    ),
  },
]
