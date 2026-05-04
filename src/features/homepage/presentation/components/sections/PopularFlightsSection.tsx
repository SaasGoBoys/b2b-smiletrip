import { useTranslation } from 'react-i18next'

import type { HomepageFlightDeal } from '@/features/homepage/domain/entities/HomepageContent.entity'

import { CarouselRow } from './CarouselRow'
import { SectionHeading } from './SectionHeading'

function formatVnd(n: number) {
  return new Intl.NumberFormat('vi-VN').format(n)
}

interface Props {
  deals: HomepageFlightDeal[]
}

export function PopularFlightsSection({ deals }: Props) {
  const { t } = useTranslation('homepage')

  return (
    <section className="py-12 bg-white">
      <div className="max-w-[1200px] mx-auto px-4">
        <SectionHeading title={t('flights.sectionTitle')} />
        <CarouselRow>
          {deals.map((deal) => (
            <article
              key={deal.id}
              className="relative shrink-0 w-[220px] sm:w-[260px] h-[340px] rounded-2xl overflow-hidden snap-start shadow-md group"
            >
              <img
                src={deal.imageUrl}
                alt=""
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30" />
              <div className="absolute top-0 left-0 right-0 p-3">
                <p className="text-white text-sm font-semibold leading-snug drop-shadow">
                  {t(`flights.deals.${deal.id}.route`)}
                </p>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 flex items-end justify-between gap-2">
                <button
                  type="button"
                  className="rounded-full border border-white/90 text-white text-xs font-semibold px-3 py-1.5 hover:bg-white/10"
                >
                  {t('flights.buyNow')}
                </button>
                <div className="text-right text-white">
                  <p className="text-xs text-white/80">{t('flights.from')}</p>
                  <p className="text-lg font-bold leading-none">{formatVnd(deal.priceVnd)}</p>
                  <p className="text-[11px] text-white/80 mt-0.5">{t(`flights.deals.${deal.id}.leg`)}</p>
                </div>
              </div>
            </article>
          ))}
        </CarouselRow>
      </div>
    </section>
  )
}
