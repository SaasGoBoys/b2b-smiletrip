import { useMemo } from 'react'
import { RouterProvider } from 'react-router-dom'
import { AppProviders } from './providers/AppProviders'
import { ErrorBoundary } from '@/shared/components/feedback/ErrorBoundary'
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
