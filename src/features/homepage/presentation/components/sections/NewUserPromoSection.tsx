import { useTranslation } from 'react-i18next'

import { useModalController } from '@/shared/components/modals/hooks/useModalController'
import { useRegisterModals } from '@/shared/components/modals/hooks/useRegisterModals'
import type { ActivePromotionEntity } from '@/shared/kernels/voucher/domain/entities/ActivePromotionEntity'
import useGetActivePromotionsQuery from '@/shared/kernels/voucher/presentation/hooks/useGetActivePromotionsQuery'

import homepageRegistryModals, {
  HomepageRegistryModalKeys,
} from '../modals/homepage.registry.modal'
import { PromoVoucherCard } from '../promos/PromoVoucherCard'

import { CarouselRow } from './CarouselRow'
import { SectionHeading } from './SectionHeading'

const PROMO_SLIDE_CLASS = 'shrink-0 snap-start flex w-[min(100%,520px)] sm:w-[480px] lg:w-[560px]'

function PromoCardSkeleton() {
  return (
    <div
      className={`${PROMO_SLIDE_CLASS} h-full min-h-[140px] rounded-2xl border border-[#B8D4E8] bg-white animate-pulse flex`}
    >
      <div className="flex-1 p-5 space-y-3">
        <div className="h-4 bg-gray-200 rounded w-4/5" />
        <div className="h-3 bg-gray-100 rounded w-1/3" />
        <div className="h-3 bg-gray-100 rounded w-2/5" />
      </div>
      <div className="w-[130px] border-l border-dashed border-gray-200 m-4" />
    </div>
  )
}

export function NewUserPromoSection() {
  const { t } = useTranslation('homepage')
  const { open } = useModalController()

  useRegisterModals(homepageRegistryModals)

  const {
    data: promotions = [],
    isPending,
    isError,
  } = useGetActivePromotionsQuery({
    pageNumber: 0,
    pageSize: 10,
  })

  const handleTermsClick = (promotion: ActivePromotionEntity) => {
    open(HomepageRegistryModalKeys.PromoTerms, {
      title: promotion.name,
      description: promotion.description,
    })
  }

  const showSection = isPending || promotions.length > 0

  if (!showSection && !isError) {
    return null
  }

  return (
    <section className="bg-gray-50/80 py-12 border-y border-gray-100 sm:pt-25">
      <div className="max-w-[1200px] mx-auto px-4">
        <SectionHeading title={t('promos.sectionTitle')} action={{ label: t('promos.seeAll') }} />

        {isError ? (
          <p className="text-sm text-text-secondary">{t('promos.loadError')}</p>
        ) : (
          <CarouselRow>
            {isPending
              ? Array.from({ length: 2 }, (_, i) => <PromoCardSkeleton key={i} />)
              : promotions.map((promotion) => (
                  <div
                    key={`${promotion.voucherCode}-${promotion.name}`}
                    className={PROMO_SLIDE_CLASS}
                  >
                    <PromoVoucherCard promotion={promotion} onTermsClick={handleTermsClick} />
                  </div>
                ))}
          </CarouselRow>
        )}
      </div>
    </section>
  )
}
