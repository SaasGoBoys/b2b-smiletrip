import { lazy, Suspense } from 'react'

import { SectionLoader } from '@/shared/components/feedback/SectionLoader'
import { useBreakpoint } from '@/shared/hooks/useBreakpoint'

const HomePageMobile = lazy(() => import('./HomePageMobile'))
const HomePageDesktop = lazy(() => import('./HomePageDesktop'))

export default function HomePage() {
  const { isSmallSize } = useBreakpoint()

  return (
    <Suspense fallback={<SectionLoader />}>
      {isSmallSize ? <HomePageMobile /> : <HomePageDesktop />}
    </Suspense>
  )
}
