import { Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons'

interface Props {
  value?: string
  onChange?: (value: string) => void
  placeholder?: string
}

export function SearchInput({ value, onChange, placeholder }: Props) {
  return (
    <Input
      allowClear
      value={value}
      onChange={(e) => onChange?.(e.target.value)}
      placeholder={placeholder}
      prefix={<SearchOutlined />}
    />
  )
}
