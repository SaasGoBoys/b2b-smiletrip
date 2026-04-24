import { Tag } from 'antd'

interface Props {
  status: 'success' | 'warning' | 'error' | 'default'
  label: string
}

export function StatusBadge({ status, label }: Props) {
  return <Tag color={status === 'default' ? 'default' : status}>{label}</Tag>
}
