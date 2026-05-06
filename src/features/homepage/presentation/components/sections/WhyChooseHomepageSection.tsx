import { useTranslation } from 'react-i18next'

import type { HomepageWhyItem } from '@/features/homepage/domain/entities/HomepageContent.entity'

interface Props {
  items: HomepageWhyItem[]
}

export function WhyChooseHomepageSection({ items }: Props) {
  const { t } = useTranslation('homepage')

  return (
    <section className="py-14 bg-gray-50 border-y border-gray-100">
      <div className="max-w-[1200px] mx-auto px-4">
        <h2 className="text-2xl md:text-[28px] font-bold text-gray-900 mb-10">{t('why.sectionTitle')}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl bg-white border border-gray-100 p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-2xl mb-4">
                {item.icon}
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{t(`why.items.${item.id}.title`)}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{t(`why.items.${item.id}.description`)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
