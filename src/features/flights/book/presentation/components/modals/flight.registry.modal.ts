import { lazy } from 'react'

const FlightFilterModal = lazy(() => import('./FlightFilterModal'))
const FlightDetailModal = lazy(() => import('./FlightDetailModal'))

export const FlightRegistryModalKeys = {
  FlightFilter: 'FlightFilter',
  FlightDetail: 'FlightDetail',
} as const

const flightRegistryModals = {
  [FlightRegistryModalKeys.FlightFilter]: FlightFilterModal,
  [FlightRegistryModalKeys.FlightDetail]: FlightDetailModal,
}

export default flightRegistryModals
