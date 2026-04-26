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
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        padding: '40px 0',
      }}
    >
      <Spin size="large" />
    </div>
  )
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
        <div className="absolute -bottom-full left-1/2 -translate-x-1/2 w-full max-w-[1200px] px-6">
          <Suspense fallback={<SectionLoader />}>
            <FlightSearchForm
              onSearch={(params) => {
                const cityMap: Record<string, string> = {
                  HAN: 'Hà Nội',
                  SGN: 'TP. Hồ Chí Minh',
                  DAD: 'Đà Nẵng',
                  CXR: 'Nha Trang',
                  PQC: 'Phú Quốc',
                  VII: 'Vinh',
                  HPH: 'Hải Phòng',
                  HUI: 'Huế',
                }
                setSearchParams({
                  from: cityMap[params.from] ?? params.from,
                  to: cityMap[params.to] ?? params.to,
                  searched: true,
                })
              }}
            />
          </Suspense>
        </div>
      </HeroBanner>

      <div className="container mx-auto max-w-[1200px] px-6 mt-30">
        {searchParams.searched && (
          <>
            <div style={{ marginTop: 24, marginBottom: 16 }}>
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
