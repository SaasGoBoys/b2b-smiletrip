import { lazy } from 'react'

const FlightBookingFlowDrawer = lazy(() => import('./flight-payment/FlightBookingFlowDrawer'))

export const PaymentRegistryModalKeys = {
  FlightBooking: 'FlightBooking',
} as const

const paymentRegistryModals = {
  [PaymentRegistryModalKeys.FlightBooking]: FlightBookingFlowDrawer,
}

export default paymentRegistryModals
