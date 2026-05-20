import type { FlightItineraryEntity } from '../../domain/entities'
import type { FlightFareOptionEntity } from '../../domain/entities/FlightFareOptionEntity'
import type { Flight } from '../components/FlightSearchResults/FlightCard'

import { buildFlightDetailFields } from './buildFlightDetailView'
import {
  hasCarryOnBaggage,
  hasFreeCheckedBaggage,
  isDirectFlight,
  isLaborFare,
  resolveSeatClassName,
} from './flightItineraryHelpers'

export function mapItineraryToFlightCard(
  itinerary: FlightItineraryEntity,
  fareOption: FlightFareOptionEntity | undefined
): Flight {
  const price = fareOption?.price.pricePerPaxValue ?? 0
  const detail = buildFlightDetailFields(itinerary, fareOption)

  return {
    id: itinerary.id,
    airline: itinerary.marketingAirlineName,
    airlineCode: itinerary.marketingAirline,
    flightNumber: itinerary.flightNumber,
    departTime: itinerary.depTime,
    arriveTime: itinerary.arrTime,
    duration: itinerary.elapsedTime,
    isDirectFlight: isDirectFlight(itinerary),
    stopLabel: itinerary.numberStop === 0 ? undefined : itinerary.stops || undefined,
    price,
    amenities: {
      handLuggage: hasCarryOnBaggage(itinerary, fareOption),
      checkInLuggage: hasFreeCheckedBaggage(itinerary, fareOption),
    },
    isFeatured: itinerary.isBestPrice,
    isLaborFare: isLaborFare(itinerary),
    ticketClassName: resolveSeatClassName(itinerary, fareOption) ?? undefined,
    ...detail,
  }
}
