import { lazy } from 'react'
import type { RouteObject } from 'react-router-dom'

import AppRoutes from '@/app/router/paths'

import { SuspenseWrapper } from '@/shared/router/SuspenseWrapper'

const BookPage = lazy(() => import('@/features/flights/book/presentation/pages/BookPage'))
const FlightPaymentPage = lazy(() => import('@/features/flights/payment/presentation/pages/FlightPaymentPage'))

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
      {
        path: AppRoutes.flightPayment,
        element: (
          <SuspenseWrapper>
            <FlightPaymentPage />
          </SuspenseWrapper>
        ),
      },
    ],
  },
]
