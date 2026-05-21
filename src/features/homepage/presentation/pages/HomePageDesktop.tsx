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

export default function HomePageDesktop() {
  const content = useHomepageContent()

  return (
    <div className="min-h-full bg-[var(--ant-color-bg-layout)]">
      <HeroBanner 
        className="md:!h-auto lg:!h-[380px]"
        overlayClassName="md:!relative md:!translate-y-0 md:!py-8 lg:!absolute lg:!translate-y-1/2 lg:!py-0"
      >
        <Suspense fallback={<SectionLoader />}>
          <SearchForm />
        </Suspense>
      </HeroBanner>
      <div className="hidden lg:block lg:h-[210px] xl:h-[120px] bg-gray-50/80">
      </div>
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
