import { useTranslation } from 'react-i18next'

export function SaleBannersSection() {
  const { t } = useTranslation('homepage')

  return (
    <section className="py-10 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 rounded-2xl overflow-hidden relative min-h-[180px] bg-gradient-to-r from-sky-100 via-blue-50 to-indigo-100 border border-sky-100 flex items-center p-8">
          <div className="relative z-10 max-w-[60%]">
            <p className="text-xs font-bold text-[#4558B6] uppercase tracking-wide mb-1">
              {t('banners.spring.kicker')}
            </p>
            <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 leading-tight">
              {t('banners.spring.title')}
            </h3>
            <p className="text-sm text-gray-600 mt-2">{t('banners.spring.sub')}</p>
            <button
              type="button"
              className="mt-4 rounded-full bg-orange-500 hover:bg-orange-600 text-white text-sm font-bold px-5 py-2 shadow"
            >
              {t('banners.spring.cta')}
            </button>
          </div>
          <div className="absolute right-4 bottom-2 text-6xl opacity-20 select-none">✈️</div>
        </div>
        <div className="rounded-2xl overflow-hidden relative min-h-[180px] bg-gradient-to-br from-[#2d3a8c] to-[#4558B6] text-white p-6 flex flex-col justify-center border border-white/10">
          <p className="text-xs font-semibold text-amber-200 uppercase tracking-wide">{t('banners.tripCoin.kicker')}</p>
          <h3 className="text-xl font-bold mt-2 leading-snug">{t('banners.tripCoin.title')}</h3>
          <p className="text-sm text-white/85 mt-2">{t('banners.tripCoin.sub')}</p>
          <button
            type="button"
            className="mt-4 self-start rounded-full bg-amber-300 text-gray-900 text-sm font-bold px-4 py-2"
          >
            {t('banners.tripCoin.cta')}
          </button>
        </div>
      </div>
    </section>
  )
}
