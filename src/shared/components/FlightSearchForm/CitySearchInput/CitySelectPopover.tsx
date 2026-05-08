import { Popover } from 'antd'

import { CitySelectContent } from './CitySelectContent'

interface CitySelectPopoverProps {
  children: React.ReactNode
  open: boolean
  onOpenChange: (open: boolean) => void
  value: string
  type: 'from' | 'to'
  onSelect: (value: string) => void
  searchQuery?: string
  // placement?: 'bottomLeft' | 'bottomRight'
}

export function CitySelectPopover({
  children,
  open,
  onOpenChange,
  value,
  type,
  onSelect,
  searchQuery,
  // placement = 'bottomLeft',
}: CitySelectPopoverProps) {
  return (
    <Popover
      trigger="click"
      open={open}
      onOpenChange={onOpenChange}
      placement="bottomLeft"
      align={{ offset: [-16, 12] }}
      showArrow={false}
      content={
        <CitySelectContent
          value={value}
          type={type}
          onSelect={onSelect}
          isPopover
          searchQuery={searchQuery}
        />
      }
    >
      {children}
    </Popover>

  )
}

