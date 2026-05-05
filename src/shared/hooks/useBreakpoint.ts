import { useMediaQuery } from 'react-responsive'

export function useBreakpoint() {
  const isSmallMobile = useMediaQuery({ maxWidth: 499 })
  const isMobile = useMediaQuery({ maxWidth: 767 })
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 })
  const isDesktop = useMediaQuery({ minWidth: 1024 })
  const isTabletToXl = useMediaQuery({ minWidth: 768, maxWidth: 1279 })

  return { isSmallMobile, isMobile, isTablet, isDesktop, isTabletToXl }
}