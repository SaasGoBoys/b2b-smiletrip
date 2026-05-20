import type { FeatureBusModule } from '@/app/composition/types'

import {
  ActivePromotionsQuery,
  ActivePromotionsQueryHandler,
} from '@/shared/kernels/voucher/application/ActivePromotionsQuery'
import { VoucherRepository } from '@/shared/kernels/voucher/infrastructure/VoucherRepository'

const registerVoucherComposition: FeatureBusModule = ({ queryBus }) => {
  const voucherRepository = new VoucherRepository()

  queryBus.register(ActivePromotionsQuery, new ActivePromotionsQueryHandler(voucherRepository))
}

export default registerVoucherComposition
