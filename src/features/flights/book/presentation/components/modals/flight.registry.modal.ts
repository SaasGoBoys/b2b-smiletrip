import { lazy } from 'react'

const FlightFilterModal = lazy(() => import('./FlightFilterModal'))
const FlightDetailModal = lazy(() => import('./FlightDetailModal'))
const FlightBookingDrawer = lazy(() => import('./FlightBookingDrawer'))

export const FlightRegistryModalKeys = {
  FlightFilter: 'FlightFilter',
  FlightDetail: 'FlightDetail',
  FlightBooking: 'FlightBooking',
} as const

const flightRegistryModals = {
  [FlightRegistryModalKeys.FlightFilter]: FlightFilterModal,
  [FlightRegistryModalKeys.FlightDetail]: FlightDetailModal,
  [FlightRegistryModalKeys.FlightBooking]: FlightBookingDrawer,
}

export default flightRegistryModals
