import { Empty } from 'antd'

interface Props {
  description?: string
}

export function EmptyState({ description }: Props) {
  return <Empty description={description} />
}
