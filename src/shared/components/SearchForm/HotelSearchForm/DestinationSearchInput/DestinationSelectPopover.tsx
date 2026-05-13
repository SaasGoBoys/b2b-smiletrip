import { Popover } from 'antd'

import { DestinationSelectContent } from './DestinationSelectContent'

interface DestinationSelectPopoverProps {
  children: React.ReactNode
  open: boolean
  onOpenChange: (open: boolean) => void
  value: string
  onSelect: (value: string) => void
  searchQuery: string
  onSearchChange: (value: string) => void
}

export function DestinationSelectPopover({
  children,
  open,
  onOpenChange,
  value,
  onSelect,
  searchQuery,
  onSearchChange,
}: DestinationSelectPopoverProps) {
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
        <DestinationSelectContent
          value={value}
          onSelect={onSelect}
          isPopover={true}
          searchQuery={searchQuery}
          onSearchChange={onSearchChange}
        />
      }
    >
      {children}
    </Popover>
  )
}
