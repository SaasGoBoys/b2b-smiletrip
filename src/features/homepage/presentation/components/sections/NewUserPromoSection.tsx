import { useTranslation } from 'react-i18next'

import type { HomepagePromoItem } from '@/features/homepage/domain/entities/HomepageContent.entity'

import { SectionHeading } from './SectionHeading'

const VARIANT_RING: Record<HomepagePromoItem['variant'], string> = {
  sky: 'from-sky-50 to-blue-50 border-sky-100',
  mint: 'from-emerald-50 to-teal-50 border-emerald-100',
  lavender: 'from-violet-50 to-purple-50 border-violet-100',
}

interface Props {
  items: HomepagePromoItem[]
}

export function NewUserPromoSection({ items }: Props) {
  const { t } = useTranslation('homepage')

  return (
    <section className="bg-gray-50/80 py-12 border-y border-gray-100">
      <div className="max-w-[1200px] mx-auto px-4">
        <SectionHeading title={t('promos.sectionTitle')} action={{ label: t('promos.seeAll') }} />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {items.map((item) => (
            <div
              key={item.id}
              className={`rounded-2xl border bg-gradient-to-br p-5 flex flex-col gap-3 shadow-sm ${VARIANT_RING[item.variant]}`}
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-lg font-bold text-gray-900 leading-snug">
                    {t(`promos.items.${item.id}.title`)}
                  </p>
                  <p className="text-sm text-gray-600 mt-1">{t(`promos.items.${item.id}.description`)}</p>
                </div>
                <span className="text-3xl" aria-hidden>
                  {t(`promos.items.${item.id}.emoji`)}
                </span>
              </div>
              <button
                type="button"
                className="mt-auto self-start rounded-full bg-[#4558B6] text-white text-sm font-semibold px-4 py-2 hover:opacity-95 transition-opacity"
              >
                {t(`promos.items.${item.id}.cta`)}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
