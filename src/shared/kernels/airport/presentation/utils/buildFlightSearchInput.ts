import type { Dayjs } from 'dayjs'

import type { FlightSearchInput, FlightSearchTripType } from '../../domain/types/FlightSearchInput'

const SEAT_CLASS_TO_CABIN: Record<string, string | null> = {
  economy: null,
  premium_economy: 'W',
  business: 'C',
  first_class: 'F',
}

export interface BuildFlightSearchInputParams {
  from: string
  to: string
  tripType: 'one-way' | 'round-trip'
  departDate: Dayjs
  returnDate?: Dayjs | null
  adults: number
  children: number
  infants: number
  seatClass: string
  isDirect?: boolean
}

function toApiDate(date: Dayjs): string {
  return date.format('YYYY-MM-DD')
}

function resolveTripType(tripType: BuildFlightSearchInputParams['tripType']): FlightSearchTripType {
  return tripType === 'round-trip' ? 'RT' : 'OW'
}

export function buildFlightSearchInput(params: BuildFlightSearchInputParams): FlightSearchInput {
  const {
    from,
    to,
    tripType,
    departDate,
    returnDate,
    adults,
    children,
    infants,
    seatClass,
    isDirect = false,
  } = params

  const items = [
    {
      depAirport: from,
      arrAirport: to,
      date: toApiDate(departDate),
    },
  ]

  if (tripType === 'round-trip' && returnDate) {
    items.push({
      depAirport: to,
      arrAirport: from,
      date: toApiDate(returnDate),
    })
  }

  return {
    tripType: resolveTripType(tripType),
    adult: adults,
    child: children,
    infant: infants,
    isDirect,
    cabin: SEAT_CLASS_TO_CABIN[seatClass] ?? null,
    agentId: null,
    vfrSearchType: null,
    items,
  }
}
