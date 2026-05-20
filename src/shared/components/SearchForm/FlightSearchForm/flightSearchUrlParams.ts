import type { Dayjs } from 'dayjs'
import dayjs from 'dayjs'

import { CITY_REGIONS } from '@/mocks/data/flights'

export const FLIGHT_SEARCH_DEFAULT_CURRENCY = 'VND'

export type FlightSearchTripTypeParam = 'one-way' | 'round-trip'

/** Form + URL state for flight search (shared between navigate and hydrate). */
export interface FlightSearchUrlState {
  sessionId?: string
  currency: string
  from: string
  to: string
  fromName: string
  toName: string
  tripType: FlightSearchTripTypeParam
  departDate: string
  returnDate?: string
  adults: number
  children: number
  infants: number
  seatClass: string
  ticketType: string
}

export interface FlightSearchFormDefaults {
  from: string
  to: string
  fromName: string
  toName: string
  tripType: FlightSearchTripTypeParam
  departDate: Dayjs
  returnDate: Dayjs
  adults: number
  children: number
  infants: number
  seatClass: string
  ticketType: string
}

export function resolveAirportDisplayLabel(code: string, nameFromUrl?: string | null): string {
  const fromUrl = nameFromUrl?.trim()
  if (fromUrl) return fromUrl

  for (const region of CITY_REGIONS) {
    const city = region.cities.find((c) => c.code === code || c.value === code)
    if (city) return `${city.label} (${city.code})`
  }

  if (code === 'HAN') return 'Hà Nội (HAN)'
  if (code === 'TYO') return 'Tokyo (TYO)'
  return code
}

export const FLIGHT_SEARCH_FORM_DEFAULTS: FlightSearchFormDefaults = {
  from: 'HAN',
  to: 'TYO',
  fromName: 'Hà Nội (HAN)',
  toName: 'Tokyo (TYO)',
  tripType: 'round-trip',
  departDate: dayjs('2026-06-16'),
  returnDate: dayjs('2026-06-20'),
  adults: 1,
  children: 0,
  infants: 0,
  seatClass: 'economy',
  ticketType: 'lao-dong',
}

const DATE_PARAM_FORMAT = 'YYYY-MM-DD'

function parseIntParam(value: string | null, fallback: number): number {
  if (value == null || value === '') return fallback
  const n = Number.parseInt(value, 10)
  return Number.isFinite(n) && n >= 0 ? n : fallback
}

function parseDateParam(value: string | null): dayjs.Dayjs | undefined {
  if (!value?.trim()) return undefined
  const iso = dayjs(value, DATE_PARAM_FORMAT, true)
  if (iso.isValid()) return iso
  const dmy = dayjs(value, 'DD/MM/YYYY', true)
  return dmy.isValid() ? dmy : undefined
}

export function hasFlightSearchFormParams(params: URLSearchParams): boolean {
  return Boolean(params.get('from') && params.get('to'))
}

/** Build URLSearchParams for redirect after search (includes session when available). */
export function flightSearchStateToSearchParams(state: FlightSearchUrlState): URLSearchParams {
  const query = new URLSearchParams()

  if (state.sessionId) query.set('sessionId', state.sessionId)
  query.set('currency', state.currency)
  query.set('from', state.from)
  query.set('to', state.to)
  query.set('fromName', state.fromName)
  query.set('toName', state.toName)
  query.set('tripType', state.tripType)
  query.set('departDate', state.departDate)
  if (state.tripType === 'round-trip' && state.returnDate) {
    query.set('returnDate', state.returnDate)
  }
  query.set('adults', String(state.adults))
  query.set('children', String(state.children))
  query.set('infants', String(state.infants))
  query.set('seatClass', state.seatClass)
  query.set('ticketType', state.ticketType)

  return query
}

export function parseFlightSearchFromUrl(params: URLSearchParams): FlightSearchFormDefaults {
  const defaults = FLIGHT_SEARCH_FORM_DEFAULTS

  const from = params.get('from')?.trim() || defaults.from
  const to = params.get('to')?.trim() || defaults.to
  const fromName = resolveAirportDisplayLabel(from, params.get('fromName'))
  const toName = resolveAirportDisplayLabel(to, params.get('toName'))

  const tripTypeRaw = params.get('tripType')?.trim()
  const tripType: FlightSearchTripTypeParam =
    tripTypeRaw === 'one-way' || tripTypeRaw === 'round-trip' ? tripTypeRaw : defaults.tripType

  const departDate = parseDateParam(params.get('departDate')) ?? defaults.departDate
  const returnDate =
    parseDateParam(params.get('returnDate')) ??
    (tripType === 'round-trip' ? defaults.returnDate : departDate.add(2, 'day'))

  const seatClass = params.get('seatClass')?.trim() || defaults.seatClass
  const ticketType = params.get('ticketType')?.trim() || defaults.ticketType

  return {
    from,
    to,
    fromName,
    toName,
    tripType,
    departDate,
    returnDate: tripType === 'round-trip' ? returnDate : departDate,
    adults: parseIntParam(params.get('adults'), defaults.adults),
    children: parseIntParam(params.get('children'), defaults.children),
    infants: parseIntParam(params.get('infants'), defaults.infants),
    seatClass,
    ticketType,
  }
}

export function formValuesToUrlState(args: {
  sessionId?: string
  currency?: string
  from: string
  to: string
  fromName: string
  toName: string
  tripType: FlightSearchTripTypeParam
  departDate: Dayjs
  returnDate: Dayjs | null
  adults: number
  children: number
  infants: number
  seatClass: string
  ticketType: string
}): FlightSearchUrlState {
  return {
    sessionId: args.sessionId,
    currency: args.currency ?? FLIGHT_SEARCH_DEFAULT_CURRENCY,
    from: args.from.trim(),
    to: args.to.trim(),
    fromName: args.fromName.trim(),
    toName: args.toName.trim(),
    tripType: args.tripType,
    departDate: args.departDate.format(DATE_PARAM_FORMAT),
    returnDate:
      args.tripType === 'round-trip' && args.returnDate
        ? args.returnDate.format(DATE_PARAM_FORMAT)
        : undefined,
    adults: args.adults,
    children: args.children,
    infants: args.infants,
    seatClass: args.seatClass,
    ticketType: args.ticketType,
  }
}
