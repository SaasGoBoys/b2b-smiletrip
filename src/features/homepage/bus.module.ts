import type { FeatureBusModule } from '@/app/composition/types'

import registerAirportComposition from '@/shared/kernels/airport/airport.composition'

const registerHomepageBus: FeatureBusModule = (props) => {
  registerAirportComposition(props)
}

export default registerHomepageBus
