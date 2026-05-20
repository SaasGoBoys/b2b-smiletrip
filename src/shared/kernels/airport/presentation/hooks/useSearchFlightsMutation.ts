import { useMutation } from '@tanstack/react-query'

import { commandBus } from '@/app/bus'

import { SearchFlightsCommand } from '../../application/commands/SearchFlightsCommand'
import type { FlightSearchSessionEntity } from '../../domain/entities/FlightSearchSessionEntity'
import type { FlightSearchInput } from '../../domain/types/FlightSearchInput'

export const SEARCH_FLIGHTS_MUTATION_KEY = 'search-flights'

const useSearchFlightsMutation = () => {
  return useMutation({
    mutationKey: [SEARCH_FLIGHTS_MUTATION_KEY],
    mutationFn: (input: FlightSearchInput) =>
      commandBus.send<SearchFlightsCommand, FlightSearchSessionEntity>(
        new SearchFlightsCommand(input)
      ),
  })
}

export default useSearchFlightsMutation
