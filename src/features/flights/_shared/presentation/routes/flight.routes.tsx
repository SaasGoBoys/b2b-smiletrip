import { lazy } from 'react'
import type { RouteObject } from 'react-router-dom'
import { SuspenseWrapper } from '@/shared/router/SuspenseWrapper'
import AppRoutes from '@/app/router/paths'

const BookPage = lazy(() => import('@/features/flights/book/presentation/pages/BookPage'))

export const flightRoutes: RouteObject[] = [
  {
    path: AppRoutes.flight,
    children: [
      {
        path: AppRoutes.flightBooking,
        element: (
          <SuspenseWrapper>
            <BookPage />
          </SuspenseWrapper>
        ),
      },
    ],
  },
]
