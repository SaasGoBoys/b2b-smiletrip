import { useTranslation } from 'react-i18next'

import { StarFilled } from '@ant-design/icons'

import type { HomepageActivity } from '@/features/homepage/domain/entities/HomepageContent.entity'

import { CarouselRow } from './CarouselRow'
import { SectionHeading } from './SectionHeading'

function formatVnd(n: number) {
  return new Intl.NumberFormat('vi-VN').format(n)
}

const TAG_STYLES: Record<HomepageActivity['tag'], string> = {
  hot: 'bg-orange-500 text-white',
  sale: 'bg-red-500 text-white',
  travel: 'bg-amber-100 text-amber-900',
}

interface Props {
  items: HomepageActivity[]
}

export function FeaturedActivitiesSection({ items }: Props) {
  const { t } = useTranslation('homepage')

  return (
    <section className="py-12 bg-white">
      <div className="max-w-[1200px] mx-auto px-4">
        <SectionHeading title={t('activities.sectionTitle')} />
        <CarouselRow>
          {items.map((a) => (
            <article
              key={a.id}
              className="shrink-0 w-[260px] rounded-2xl overflow-hidden border border-gray-100 bg-white shadow-sm snap-start"
            >
              <div className="relative h-[140px]">
                <img src={a.imageUrl} alt="" className="w-full h-full object-cover" />
                <span
                  className={`absolute top-3 left-3 text-xs font-bold px-2 py-0.5 rounded-full ${TAG_STYLES[a.tag]}`}
                >
                  {t(`activities.tags.${a.tag}`)}
                </span>
              </div>
              <div className="p-4 space-y-2">
                <h3 className="font-semibold text-gray-900 text-sm leading-snug line-clamp-2">
                  {t(`activities.items.${a.id}.title`)}
                </h3>
                <div className="flex items-center gap-1 text-amber-500 text-sm">
                  <StarFilled />
                  <span className="text-gray-800 font-medium">{a.rating}</span>
                </div>
                <p className="text-sm text-gray-600">
                  {t('activities.priceFrom')}{' '}
                  <span className="font-bold text-[#4558B6]">{formatVnd(a.priceFromVnd)} VNĐ</span>
                </p>
              </div>
            </article>
          ))}
        </CarouselRow>
      </div>
    </section>
  )
}
