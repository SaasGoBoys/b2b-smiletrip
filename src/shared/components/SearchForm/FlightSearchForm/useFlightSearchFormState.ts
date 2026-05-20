import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'

import type { Dayjs } from 'dayjs'

import {
  FLIGHT_SEARCH_FORM_DEFAULTS,
  type FlightSearchTripTypeParam,
  hasFlightSearchFormParams,
  parseFlightSearchFromUrl,
} from './flightSearchUrlParams'

interface PassengerCounts {
  adults: number
  children: number
  infants: number
}

function readInitialFormState(searchParams: URLSearchParams) {
  const parsed = hasFlightSearchFormParams(searchParams)
    ? parseFlightSearchFromUrl(searchParams)
    : FLIGHT_SEARCH_FORM_DEFAULTS

  return {
    activeTab: parsed.ticketType,
    from: parsed.from,
    to: parsed.to,
    fromName: parsed.fromName,
    toName: parsed.toName,
    tripType: parsed.tripType as FlightSearchTripTypeParam,
    passengerCounts: {
      adults: parsed.adults,
      children: parsed.children,
      infants: parsed.infants,
    },
    seatClass: parsed.seatClass,
    dates: [parsed.departDate, parsed.returnDate] as [Dayjs, Dayjs],
  }
}

/**
 * Hydrates form from URL on mount. Parent should set `key={searchParams.toString()}`
 * on `FlightSearchForm` when the URL changes after a new search.
 */
export function useFlightSearchFormState() {
  const [searchParams] = useSearchParams()
  const initial = readInitialFormState(searchParams)

  const [activeTab, setActiveTab] = useState(initial.activeTab)
  const [from, setFrom] = useState(initial.from)
  const [to, setTo] = useState(initial.to)
  const [fromName, setFromName] = useState(initial.fromName)
  const [toName, setToName] = useState(initial.toName)
  const [tripType, setTripType] = useState<FlightSearchTripTypeParam>(initial.tripType)
  const [passengerCounts, setPassengerCounts] = useState<PassengerCounts>(initial.passengerCounts)
  const [seatClass, setSeatClass] = useState(initial.seatClass)
  const [dates, setDates] = useState<[Dayjs, Dayjs]>(initial.dates)

  return {
    activeTab,
    setActiveTab,
    from,
    setFrom,
    to,
    setTo,
    fromName,
    setFromName,
    toName,
    setToName,
    tripType,
    setTripType,
    passengerCounts,
    setPassengerCounts,
    seatClass,
    setSeatClass,
    dates,
    setDates,
  }
}
