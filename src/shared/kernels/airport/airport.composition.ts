import type { FeatureBusModule } from '@/app/composition/types'

import {
  AirportLocationQuery,
  AirportLocationQueryHandler,
} from '@/shared/kernels/airport/application/AirportLocationQuery'
import {
  AirportQuery,
  AirportQueryHandler,
} from '@/shared/kernels/airport/application/AirportQuery'
import {
  SearchFlightsCommand,
  SearchFlightsCommandHandler,
} from '@/shared/kernels/airport/application/commands/SearchFlightsCommand'
import { AirportLocationRepository } from '@/shared/kernels/airport/infrastructure/AirportLocationRepository'
import { AirportRepository } from '@/shared/kernels/airport/infrastructure/AirportRepository'
import { FlightSearchRepository } from '@/shared/kernels/airport/infrastructure/FlightSearchRepository'

const registerAirportComposition: FeatureBusModule = ({ queryBus, commandBus }) => {
  const airportRepository = new AirportRepository()
  const airportLocationRepository = new AirportLocationRepository()
  const flightSearchRepository = new FlightSearchRepository()

  queryBus
    .register(AirportQuery, new AirportQueryHandler(airportRepository))
    .register(AirportLocationQuery, new AirportLocationQueryHandler(airportLocationRepository))

  commandBus.register(SearchFlightsCommand, new SearchFlightsCommandHandler(flightSearchRepository))
}

export default registerAirportComposition
