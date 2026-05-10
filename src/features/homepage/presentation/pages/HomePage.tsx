import { Suspense } from 'react'

import { HeroBanner } from '@/shared/components/common/HeroBanner'
import { SectionLoader } from '@/shared/components/feedback/SectionLoader'
import { SearchForm } from '@/shared/components/SearchForm/index'

import { DestinationsSection } from '../components/sections/DestinationsSection'
import { FeaturedActivitiesSection } from '../components/sections/FeaturedActivitiesSection'
import { HomepageFooterSection } from '../components/sections/HomepageFooterSection'
import { NewUserPromoSection } from '../components/sections/NewUserPromoSection'
import { PopularFlightsSection } from '../components/sections/PopularFlightsSection'
import { SaleBannersSection } from '../components/sections/SaleBannersSection'
import { TopAttractionsSection } from '../components/sections/TopAttractionsSection'
import { WhyChooseHomepageSection } from '../components/sections/WhyChooseHomepageSection'
import { useHomepageContent } from '../hooks/useHomepageContent'

export default function HomePage() {
  const content = useHomepageContent()

  return (
    <div className="min-h-full bg-[var(--ant-color-bg-layout)]">
      <HeroBanner>
        <Suspense fallback={<SectionLoader />}>
          <SearchForm />
        </Suspense>
      </HeroBanner>
      <NewUserPromoSection items={content.promos} />
      <SaleBannersSection />
      <PopularFlightsSection deals={content.flightDeals} />
      <DestinationsSection items={content.destinations} />
      <FeaturedActivitiesSection items={content.activities} />
      <WhyChooseHomepageSection items={content.why} />
      <TopAttractionsSection items={content.attractions} />
      <HomepageFooterSection />
    </div>
  )
}
