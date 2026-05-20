import type { FeatureBusModule } from '@/app/composition/types'

import {
  DealFlightsQuery,
  DealFlightsQueryHandler,
} from '@/features/homepage/application/queries/DealFlightsQuery'

import { dealFlightsRepository } from '@/features/homepage/infrastructure/repositories/DealFlightsRepository'

const registerHomepageComposition: FeatureBusModule = ({ queryBus }) => {
  queryBus.register(DealFlightsQuery, new DealFlightsQueryHandler(dealFlightsRepository))
}

export default registerHomepageComposition
