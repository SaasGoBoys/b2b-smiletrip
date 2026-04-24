import type { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export function PageWrapper({ children }: Props) {
  return <div style={{ padding: 24, maxWidth: 1200, margin: '0 auto' }}>{children}</div>
}
