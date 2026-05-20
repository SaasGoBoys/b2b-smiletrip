import { useTranslation } from 'react-i18next'

import { SectionLoader } from '@/shared/components/feedback/SectionLoader'

import type { DealFlightEntity } from '@/features/homepage/domain/entities/DealFlightEntity'

import { useGetDealFlightsQuery } from '@/features/homepage/presentation/hooks/useGetDealFlightsQuery'

import { CarouselRow } from './CarouselRow'
import { SectionHeading } from './SectionHeading'

interface DealCardProps {
  deal: DealFlightEntity
  buyNowLabel: string
  fromLabel: string
}

function DealCard({ deal, buyNowLabel, fromLabel }: DealCardProps) {
  const priceLabel = deal.currency ? `${deal.price} ${deal.currency}` : deal.price

  return (
    <article className="relative shrink-0 w-[220px] sm:w-[260px] h-[340px] rounded-2xl overflow-hidden snap-start shadow-md group">
      <img
        src={deal.thumbUrl}
        alt={deal.thumbAlt || deal.routeLabel}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30" />
      <div className="absolute top-0 left-0 right-0 p-3">
        <p className="text-white text-sm font-semibold leading-snug drop-shadow">
          {deal.routeLabel}
        </p>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4 flex items-end justify-between gap-2">
        <button
          type="button"
          className="rounded-full border border-white/90 text-white text-xs font-semibold px-3 py-1.5 hover:bg-white/10"
        >
          {buyNowLabel}
        </button>
        <div className="text-right text-white">
          <p className="text-xs text-white/80">{fromLabel}</p>
          <p className="text-lg font-bold leading-none">{priceLabel}</p>
          <p className="text-[11px] text-white/80 mt-0.5">{deal.routeDate}</p>
        </div>
      </div>
    </article>
  )
}

export function PopularFlightsSection() {
  const { t } = useTranslation('homepage')
  const { data, isPending, isError } = useGetDealFlightsQuery()

  const deals = data?.getFirstTabDeals() ?? []
  const sectionTitle = t('flights.sectionTitle')

  if (isPending) {
    return (
      <section className="py-12 bg-white">
        <div className="max-w-[1200px] mx-auto px-4">
          <SectionLoader />
        </div>
      </section>
    )
  }

  if (isError || deals.length === 0) {
    return null
  }

  return (
    <section className="py-12 bg-white">
      <div className="max-w-[1200px] mx-auto px-4">
        <SectionHeading title={sectionTitle} />
        <CarouselRow>
          {deals.map((deal) => (
            <DealCard
              key={`${deal.dataSearch}-${deal.priorityOrder}`}
              deal={deal}
              buyNowLabel={t('flights.buyNow')}
              fromLabel={t('flights.from')}
            />
          ))}
        </CarouselRow>
      </div>
    </section>
  )
}
