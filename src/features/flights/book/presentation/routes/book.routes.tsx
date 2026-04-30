import { lazy } from 'react'
import type { RouteObject } from 'react-router-dom'

import AppRoutes from '@/app/router/paths'

import { SuspenseWrapper } from '@/shared/router/SuspenseWrapper'

const BookPage = lazy(() => import('@/features/flights/book/presentation/pages/BookPage'))

export const bookRoutes: RouteObject[] = [
  {
    path: AppRoutes.flightBooking,
    element: (
      <SuspenseWrapper>
        <BookPage />
      </SuspenseWrapper>
    ),
  },
]
