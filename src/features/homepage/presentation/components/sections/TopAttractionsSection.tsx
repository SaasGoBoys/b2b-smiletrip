import { useTranslation } from 'react-i18next'

import type { HomepageAttraction } from '@/features/homepage/domain/entities/HomepageContent.entity'

interface Props {
  items: HomepageAttraction[]
}

export function TopAttractionsSection({ items }: Props) {
  const { t } = useTranslation('homepage')

  return (
    <section className="py-12 bg-white">
      <div className="max-w-[1200px] mx-auto px-4">
        <h2 className="text-2xl md:text-[28px] font-bold text-gray-900 mb-8">{t('attractions.sectionTitle')}</h2>
        <div className="flex flex-wrap gap-x-6 gap-y-3">
          {items.map((a) => (
            <button
              key={a.id}
              type="button"
              className="inline-flex items-center gap-2 text-sm text-gray-700 hover:text-[#4558B6] font-medium"
            >
              <span className="inline-flex items-center justify-center min-w-7 h-7 rounded-md bg-[#4558B6] text-white text-xs font-bold">
                {a.rank}
              </span>
              {t(`attractions.names.${a.id}`)}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
