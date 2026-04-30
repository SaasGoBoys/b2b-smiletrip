import { useMemo } from 'react'
import { RouterProvider } from 'react-router-dom'

import { ErrorBoundary } from '@/shared/components/feedback/ErrorBoundary'

import { AppProviders } from './providers/AppProviders'
import { createAppRouter } from './router'

export default function App() {
  const router = useMemo(() => createAppRouter(), [])

  return (
    <AppProviders>
      <ErrorBoundary>
        <RouterProvider router={router} />
      </ErrorBoundary>
    </AppProviders>
  )
}
