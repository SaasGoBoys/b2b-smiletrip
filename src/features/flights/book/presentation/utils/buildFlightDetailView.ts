import type { FlightItineraryEntity } from '../../domain/entities'
import type { FlightFareOptionEntity } from '../../domain/entities/FlightFareOptionEntity'
import type { FlightFareQuoteEntity } from '../../domain/entities/FlightFareQuoteEntity'
import type { FlightLegEntity } from '../../domain/entities/FlightLegEntity'

import type {
  FlightEndpointView,
  FlightFareClassOption,
  FlightLayoverView,
  FlightSegmentDetailView,
} from './flightDetailTypes'
import {
  isBaggageIncludedText,
  isDirectFlight,
  resolveSeatClassName,
} from './flightItineraryHelpers'

export function formatAirportLabel(code: string, terminal?: string | null): string {
  if (!terminal) return code
  const t = String(terminal).trim()
  if (!t) return code
  if (t.toUpperCase().startsWith('T')) return `${code} ${t}`
  return `${code} T${t}`
}

function resolveQuoteClassName(raw: string | undefined): string | null {
  if (!raw || raw === 'Common_TicketClass_') return null
  return raw
}

export function buildRouteLabel(itinerary: FlightItineraryEntity): string {
  if (isDirectFlight(itinerary)) return 'Bay thẳng'
  const stops = itinerary.stops?.trim()
  if (stops) return stops
  if (itinerary.numberStop === 1) return '1 điểm dừng'
  if (itinerary.numberStop >= 2) return `${itinerary.numberStop} điểm dừng`
  return ''
}

function buildLayoverLabel(leg: FlightLegEntity): string {
  const timeChange = leg.timeChange?.trim()
  if (timeChange) {
    if (/in\b|tại/i.test(timeChange)) return timeChange
    const city = leg.arrCityName?.trim()
    return city ? `${timeChange} · ${city}` : timeChange
  }
  return leg.arrCityName?.trim() || ''
}

export function buildLayovers(itinerary: FlightItineraryEntity): FlightLayoverView[] {
  const segments = itinerary.segments
  const labels: string[] = []

  for (let i = 0; i < segments.length - 1; i++) {
    const label = buildLayoverLabel(segments[i])
    if (label) labels.push(label)
  }

  if (labels.length === 0 && itinerary.numberStop > 0) {
    const summary = itinerary.stops?.trim()
    if (summary) labels.push(summary)
  }

  const count = labels.length
  if (count === 0) return []

  return labels.map((label, index) => ({
    label,
    position: (index + 1) / (count + 1),
  }))
}

function mapSegment(
  leg: FlightLegEntity,
  ticketClassName: string | null,
  layoverAfter?: string
): FlightSegmentDetailView {
  return {
    flightNumber: leg.flightNumber,
    airlineName: leg.marketingAirlineName || leg.operatingAirlineName,
    airlineCode: leg.marketingAirline || leg.operatingAirline,
    depTime: leg.depTime,
    arrTime: leg.arrTime,
    depDateCulture: leg.depDateCulture,
    arrDateCulture: leg.arrDateCulture,
    elapsedTime: leg.elapsedTime,
    airEquipType: leg.airEquipType?.trim() || undefined,
    ticketClassName: resolveQuoteClassName(leg.ticketClassName) || ticketClassName || undefined,
    depAirport: leg.depAirport,
    arrAirport: leg.arrAirport,
    depCityName: leg.depCityName,
    arrCityName: leg.arrCityName,
    depAirportName: leg.depAirportName,
    arrAirportName: leg.arrAirportName,
    depTerminal: leg.depTerminal,
    arrTerminal: leg.arrTerminal,
    layoverAfter: layoverAfter ? { label: layoverAfter } : undefined,
  }
}

export function buildSegments(
  itinerary: FlightItineraryEntity,
  ticketClassName: string | null
): FlightSegmentDetailView[] {
  const legs = itinerary.segments
  if (legs.length === 0) return []

  return legs.map((leg, index) => {
    const layoverAfter =
      index < legs.length - 1 ? buildLayoverLabel(leg) || undefined : undefined
    return mapSegment(leg, ticketClassName, layoverAfter)
  })
}

function buildEndpoint(
  side: 'dep' | 'arr',
  itinerary: FlightItineraryEntity,
  segments: FlightSegmentDetailView[]
): FlightEndpointView {
  const first = segments[0]
  const last = segments[segments.length - 1]

  if (side === 'dep') {
    const code = first?.depAirport ?? itinerary.depAirport
    const terminal = first?.depTerminal
    return {
      time: itinerary.depTime,
      airportCode: code,
      airportLabel: formatAirportLabel(code, terminal),
      cityName: first?.depCityName ?? itinerary.depCityName,
      airportName: first?.depAirportName ?? '',
      dateCulture: first?.depDateCulture ?? itinerary.depDateCulture,
      terminal,
    }
  }

  const code = last?.arrAirport ?? itinerary.arrAirport
  const terminal = last?.arrTerminal
  return {
    time: itinerary.arrTime,
    airportCode: code,
    airportLabel: formatAirportLabel(code, terminal),
    cityName: last?.arrCityName ?? itinerary.arrCityName,
    airportName: last?.arrAirportName ?? '',
    dateCulture: last?.arrDateCulture ?? itinerary.arrDateCulture,
    terminal,
  }
}

export function buildFareClassOptions(
  fare?: FlightFareOptionEntity
): FlightFareClassOption[] {
  if (!fare) return []

  const quotes: FlightFareQuoteEntity[] =
    fare.isShowPriceOption && fare.prices.length > 0 ? fare.prices : [fare.price]

  return quotes
    .map((quote, index) => {
      const label = resolveQuoteClassName(quote.ticketClassName)
      if (!label) return null
      return {
        value: String(quote.priceId || index),
        label,
      }
    })
    .filter((opt): opt is FlightFareClassOption => opt !== null)
}

export function buildBaggageTexts(
  itinerary: FlightItineraryEntity,
  fare?: FlightFareOptionEntity
): { carryOn?: string; checked?: string } {
  const carryOnFare = fare?.price.carryOnBaggages?.trim()
  const checkedFare = fare?.price.freeBaggages?.trim()

  const carryOn =
    carryOnFare && (fare?.price.isCarryOn || isBaggageIncludedText(carryOnFare))
      ? carryOnFare
      : isBaggageIncludedText(itinerary.carryOnBaggage)
        ? itinerary.carryOnBaggage.trim()
        : undefined

  const checked =
    checkedFare && (fare?.price.isFreeBaggage || isBaggageIncludedText(checkedFare))
      ? checkedFare
      : isBaggageIncludedText(itinerary.freeBaggage)
        ? itinerary.freeBaggage.trim()
        : undefined

  return { carryOn, checked }
}

export interface FlightDetailFields {
  depEndpoint: FlightEndpointView
  arrEndpoint: FlightEndpointView
  segments: FlightSegmentDetailView[]
  layovers: FlightLayoverView[]
  routeLabel: string
  airEquip?: string
  carryOnBaggageText?: string
  checkedBaggageText?: string
  seatsAvailable?: string
  fareClassOptions: FlightFareClassOption[]
  operatedByText?: string
}

export function buildFlightDetailFields(
  itinerary: FlightItineraryEntity,
  fare?: FlightFareOptionEntity
): FlightDetailFields {
  const ticketClassName = resolveSeatClassName(itinerary, fare)
  const segments = buildSegments(itinerary, ticketClassName)
  const baggage = buildBaggageTexts(itinerary, fare)

  const airEquip =
    itinerary.airEquip?.trim() ||
    segments.find((s) => s.airEquipType)?.airEquipType ||
    undefined

  const seats =
    fare?.price.isShowSeatsAvailable && fare.price.seatsAvailable?.trim()
      ? fare.price.seatsAvailable.trim()
      : undefined

  const operatedBy =
    itinerary.isOperatedBy && itinerary.operatedBy?.trim()
      ? itinerary.operatedBy.trim()
      : undefined

  return {
    depEndpoint: buildEndpoint('dep', itinerary, segments),
    arrEndpoint: buildEndpoint('arr', itinerary, segments),
    segments,
    layovers: buildLayovers(itinerary),
    routeLabel: buildRouteLabel(itinerary),
    airEquip,
    carryOnBaggageText: baggage.carryOn,
    checkedBaggageText: baggage.checked,
    seatsAvailable: seats,
    fareClassOptions: buildFareClassOptions(fare),
    operatedByText: operatedBy,
  }
}
