import type { ReactNode } from 'react'

import { Card, Statistic } from 'antd'

interface Props {
  title: string
  value: number | string
  prefix?: ReactNode
}

export function StatCard({ title, value, prefix }: Props) {
  return (
    <Card>
      <Statistic title={title} value={value} prefix={prefix} />
    </Card>
  )
}
