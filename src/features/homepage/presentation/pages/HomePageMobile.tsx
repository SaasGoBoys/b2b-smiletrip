import { Suspense } from 'react'

import { HeroBanner } from '@/shared/components/common/HeroBanner'
import { SectionLoader } from '@/shared/components/feedback/SectionLoader'
import { SearchForm } from '@/shared/components/SearchForm/index'

import { HomepageFooterSection } from '../components/sections/HomepageFooterSection'
import { NewUserPromoSection } from '../components/sections/NewUserPromoSection'
import { PopularFlightsSection } from '../components/sections/PopularFlightsSection'
import { useHomepageContent } from '../hooks/useHomepageContent'

export default function HomePageMobile() {
  const content = useHomepageContent()

  return (
    <div className="min-h-full bg-[var(--ant-color-bg-layout)] flex flex-col gap-1">
      {/* Compact Banner & Search Form integrated in flow */}
      <HeroBanner 
        className="!h-auto"
        contentClassName="!pt-6 !pb-4"
        overlayClassName="!relative !translate-y-0 !py-4"
      >
        <Suspense fallback={<SectionLoader />}>
          <SearchForm className="!rounded-xl" />
        </Suspense>
      </HeroBanner>

      {/* Simplified Mobile Sections */}
      <div className="flex flex-col gap-2">
        <NewUserPromoSection items={content.promos} />
        <PopularFlightsSection deals={content.flightDeals} />
      </div>

      <HomepageFooterSection />
    </div>
  )
}
