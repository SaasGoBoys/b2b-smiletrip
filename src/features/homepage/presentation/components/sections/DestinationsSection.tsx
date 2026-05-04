import { useTranslation } from 'react-i18next'

import type { HomepageDestination } from '@/features/homepage/domain/entities/HomepageContent.entity'

import { CarouselRow } from './CarouselRow'
import { SectionHeading } from './SectionHeading'

interface Props {
  items: HomepageDestination[]
}

export function DestinationsSection({ items }: Props) {
  const { t } = useTranslation('homepage')

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-[1200px] mx-auto px-4">
        <SectionHeading title={t('destinations.sectionTitle')} action={{ label: t('destinations.seeMore') }} />
        <CarouselRow>
          {items.map((d) => (
            <article
              key={d.id}
              className="relative shrink-0 w-[200px] sm:w-[240px] h-[360px] rounded-2xl overflow-hidden snap-start shadow-md group"
            >
              <img
                src={d.imageUrl}
                alt=""
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 flex items-end justify-between gap-2">
                <button
                  type="button"
                  className="rounded-full border border-white text-white text-xs font-semibold px-3 py-1.5 hover:bg-white/10"
                >
                  {t('destinations.explore')}
                </button>
                <div className="text-right text-white">
                  <p className="font-bold">{t(`destinations.spots.${d.id}.name`)}</p>
                  <p className="text-xs text-white/85">
                    {t('destinations.activityCount', { count: d.activityCount })}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </CarouselRow>
      </div>
    </section>
  )
}
