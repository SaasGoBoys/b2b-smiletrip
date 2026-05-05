import { lazy } from 'react'

const FlightFilterModal = lazy(() => import('./FlightFilterModal'))

export const FlightRegistryModalKeys = {
  FlightFilter: 'FlightFilter',
} as const

const flightRegistryModals = {
  [FlightRegistryModalKeys.FlightFilter]: FlightFilterModal,
}

export default flightRegistryModals
