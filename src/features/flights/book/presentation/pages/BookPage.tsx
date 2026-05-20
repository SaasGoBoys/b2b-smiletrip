import { lazy, Suspense } from 'react'
import { useSearchParams } from 'react-router-dom'

import { HeroBanner } from '@/shared/components/common/HeroBanner'
import { SectionLoader } from '@/shared/components/feedback/SectionLoader'

import { CITY_REGIONS } from '@/mocks/data/flights'

const FlightSearchForm = lazy(() =>
  import('@/shared/components/SearchForm/FlightSearchForm/index').then((m) => ({
    default: m.FlightSearchForm,
  }))
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

const getCityName = (value: string) => {
  if (!value) return value
  for (const region of CITY_REGIONS) {
    const city = region.cities.find((c) => c.code === value || c.value === value)
    if (city) return city.label
  }
  return value
}

export default function BookPage() {
  const [searchParams] = useSearchParams()

  const sessionId = searchParams.get('sessionId') ?? ''
  const currency = searchParams.get('currency') ?? 'VND'
  const fromCode = searchParams.get('from') ?? ''
  const toCode = searchParams.get('to') ?? ''
  const fromNameParam = searchParams.get('fromName') ?? ''
  const toNameParam = searchParams.get('toName') ?? ''
  const searched = Boolean(sessionId)

  const fromLabel = fromNameParam || getCityName(fromCode) || 'Hà Nội'
  const toLabel = toNameParam || getCityName(toCode) || 'TP. Hồ Chí Minh'
  const tripTypeParam = searchParams.get('tripType')
  const tripType =
    tripTypeParam === 'round-trip' || tripTypeParam === 'one-way' ? tripTypeParam : 'one-way'
  const departDateKey = searchParams.get('departDate') ?? ''

  return (
    <>
      <HeroBanner>
        <Suspense fallback={<SectionLoader />}>
          <FlightSearchForm key={searchParams.toString()} />
        </Suspense>
      </HeroBanner>

      <div className="container my-[30px] md:mt-[250px] xl:my-[120px]">
        {searched && (
          <>
            <div className="mt-6 mb-4">
              <Suspense fallback={<SectionLoader />}>
                <DatePriceSlider key={departDateKey} />
              </Suspense>
            </div>

            <Suspense fallback={<SectionLoader />}>
              <FlightSearchResults
                key={`${sessionId}-${tripType}`}
                from={fromLabel}
                to={toLabel}
                sessionId={sessionId}
                currency={currency}
                tripType={tripType}
              />
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
