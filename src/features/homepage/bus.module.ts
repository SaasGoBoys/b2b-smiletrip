import type { FeatureBusModule } from '@/app/composition/types'

import registerAirportComposition from '@/shared/kernels/airport/airport.composition'
import registerVoucherComposition from '@/shared/kernels/voucher/voucher.composition'

import registerHomepageComposition from '@/features/homepage/homepage.composition'

const registerHomepageBus: FeatureBusModule = (props) => {
  registerHomepageComposition(props)
  registerAirportComposition(props)
  registerVoucherComposition(props)
}

export default registerHomepageBus
