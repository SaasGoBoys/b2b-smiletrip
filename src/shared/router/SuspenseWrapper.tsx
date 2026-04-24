import { Suspense, type ReactNode } from 'react'
import { LoadingSpinner } from '@/shared/components/feedback/LoadingSpinner'

export function SuspenseWrapper({ children }: { children: ReactNode }) {
  return <Suspense fallback={<LoadingSpinner fullScreen />}>{children}</Suspense>
}
