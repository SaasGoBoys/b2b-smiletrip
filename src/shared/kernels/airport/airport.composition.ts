import type { FeatureBusModule } from '@/app/composition/types'

import {
  AirportLocationQuery,
  AirportLocationQueryHandler,
} from '@/shared/kernels/airport/application/AirportLocationQuery'
import {
  AirportQuery,
  AirportQueryHandler,
} from '@/shared/kernels/airport/application/AirportQuery'
import { AirportLocationRepository } from '@/shared/kernels/airport/infrastructure/AirportLocationRepository'
import { AirportRepository } from '@/shared/kernels/airport/infrastructure/AirportRepository'

const registerAirportComposition: FeatureBusModule = ({ queryBus }) => {
  const airportRepository = new AirportRepository()
  const airportLocationRepository = new AirportLocationRepository()

  queryBus
    .register(AirportQuery, new AirportQueryHandler(airportRepository))
    .register(AirportLocationQuery, new AirportLocationQueryHandler(airportLocationRepository))
}

export default registerAirportComposition
