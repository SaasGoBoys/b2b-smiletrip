import { lazy } from 'react'
import type { RouteObject } from 'react-router-dom'

import { featureRouteLoader } from '@/app/composition/featureBusTiered'
import AppRoutes from '@/app/router/paths'

import { SuspenseWrapper } from '@/shared/router/SuspenseWrapper'

const BookPage = lazy(() => import('@/features/flights/book/presentation/pages/BookPage'))

export const flightRoutes: RouteObject[] = [
  {
    path: AppRoutes.flight,
    children: [
      {
        path: AppRoutes.flightBooking,
        loader: featureRouteLoader('flights'),
        element: (
          <SuspenseWrapper>
            <BookPage />
          </SuspenseWrapper>
        ),
      },
    ],
  },
]
