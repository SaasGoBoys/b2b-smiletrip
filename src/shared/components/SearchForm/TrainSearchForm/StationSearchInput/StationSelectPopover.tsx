import { Popover } from 'antd'

import { StationSelectContent } from './StationSelectContent'

interface StationSelectPopoverProps {
  children: React.ReactNode
  open: boolean
  onOpenChange: (open: boolean) => void
  value: string
  type: 'from' | 'to'
  onSelect: (value: string) => void
  searchQuery?: string
  onSearchChange?: (value: string) => void
}

export function StationSelectPopover({
  children,
  open,
  onOpenChange,
  value,
  type,
  onSelect,
  searchQuery,
  onSearchChange,
}: StationSelectPopoverProps) {
  return (
    <Popover
      trigger="click"
      open={open}
      onOpenChange={onOpenChange}
      placement="bottomLeft"
      align={{ offset: [-16, 12] }}
      showArrow={false}
      overlayInnerStyle={{ padding: 0, borderRadius: 12, overflow: 'hidden' }}
      content={
        <StationSelectContent
          value={value}
          type={type}
          onSelect={onSelect}
          isPopover
          searchQuery={searchQuery}
          onSearchChange={onSearchChange}
        />
      }
    >
      {children}
    </Popover>
  )
}
