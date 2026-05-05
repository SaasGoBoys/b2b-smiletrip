import { lazy, Suspense, useState } from 'react'

import { HeroBanner } from '@/shared/components/common/HeroBanner'
import { SectionLoader } from '@/shared/components/feedback/SectionLoader'

const FlightSearchForm = lazy(() =>
  import('@/shared/components/common/FlightSearchForm').then((m) => ({ default: m.FlightSearchForm }))
)

const DatePriceSlider = lazy(() =>
  import('../components/DatePriceSlider').then((m) => ({ default: m.DatePriceSlider }))
)

const FlightSearchResults = lazy(() =>
  import('../components/FlightSearchResults/index').then((m) => ({
    default: m.FlightSearchResults,
  }))
)

const WhyChooseUs = lazy(() =>
  import('@/shared/components/common/WhyChooseUs').then((m) => ({ default: m.WhyChooseUs }))
)

const TopDestinations = lazy(() =>
  import('@/shared/components/common/TopDestinations').then((m) => ({ default: m.TopDestinations }))
)

const Footer = lazy(() =>
  import('@/shared/components/layout/Footer').then((m) => ({ default: m.Footer }))
)

const CITY_MAP: Record<string, string> = {
  HAN: 'Hà Nội',
  SGN: 'TP. Hồ Chí Minh',
  DAD: 'Đà Nẵng',
  CXR: 'Nha Trang',
  PQC: 'Phú Quốc',
  VII: 'Vinh',
  HPH: 'Hải Phòng',
  HUI: 'Huế',
}

export default function BookPage() {
  const [searchParams, setSearchParams] = useState<{
    from: string
    to: string
    searched: boolean
  }>({
    from: 'Hà Nội',
    to: 'TP. Hồ Chí Minh',
    searched: true,
  })

  return (
    <>
      <HeroBanner>
        <Suspense fallback={<SectionLoader />}>
          <FlightSearchForm
            onSearch={(params) => {
              setSearchParams({
                from: CITY_MAP[params.from] ?? params.from,
                to: CITY_MAP[params.to] ?? params.to,
                searched: true,
              })
            }}
          />
        </Suspense>
      </HeroBanner>

      <div className="container my-[30px] md:mt-[250px] xl:my-[120px]">
        {searchParams.searched && (
          <>
            <div className="mt-6 mb-4">
              <Suspense fallback={<SectionLoader />}>
                <DatePriceSlider />
              </Suspense>
            </div>

            <Suspense fallback={<SectionLoader />}>
              <FlightSearchResults from={searchParams.from} to={searchParams.to} />
            </Suspense>
          </>
        )}
      </div>

      <Suspense fallback={<SectionLoader />}>
        <WhyChooseUs />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <TopDestinations />
      </Suspense>


      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </>
  )
}
