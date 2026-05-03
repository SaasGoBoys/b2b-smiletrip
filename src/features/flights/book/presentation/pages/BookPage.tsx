import { lazy, Suspense, useState } from 'react'

import { Spin } from 'antd'

import { HeroBanner } from '../components/HeroBanner'

const FlightSearchForm = lazy(() =>
  import('../components/FlightSearchForm').then((m) => ({ default: m.FlightSearchForm }))
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
  import('../components/WhyChooseUs').then((m) => ({ default: m.WhyChooseUs }))
)

const TopDestinations = lazy(() =>
  import('../components/TopDestinations').then((m) => ({ default: m.TopDestinations }))
)

const HomeFooter = lazy(() =>
  import('../components/HomeFooter').then((m) => ({ default: m.HomeFooter }))
)

function SectionLoader() {
  return (
    <div className="flex justify-center py-10">
      <Spin size="large" />
    </div>
  )
}

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
        <div className="absolute -bottom-full left-0 right-0 container">
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
        </div>
      </HeroBanner>

      <div className="container my-[120px]">
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
        <HomeFooter />
      </Suspense>
    </>
  )
}
