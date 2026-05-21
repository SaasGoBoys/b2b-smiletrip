import { lazy, Suspense } from 'react'

import { SectionLoader } from '@/shared/components/feedback/SectionLoader'
import { useBreakpoint } from '@/shared/hooks/useBreakpoint'

const HeaderMobile = lazy(() => import('./HeaderMobile'))
const HeaderDesktop = lazy(() => import('./HeaderDesktop'))

export function Header() {
  const { isSmallSize } = useBreakpoint()

  return (
    <Suspense fallback={<SectionLoader />}>
      {isSmallSize ? <HeaderMobile /> : <HeaderDesktop />}
    </Suspense>
  )
}
