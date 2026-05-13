import { Popover } from 'antd'

import { TourDestinationContent } from './TourDestinationContent'

interface TourDestinationPopoverProps {
  children: React.ReactNode
  open: boolean
  onOpenChange: (open: boolean) => void
  value: string
  onSelect: (value: string) => void
  searchQuery?: string
}

export function TourDestinationPopover({
  children,
  open,
  onOpenChange,
  value,
  onSelect,
  searchQuery,
}: TourDestinationPopoverProps) {
  return (
    <Popover
      trigger="click"
      open={open}
      onOpenChange={onOpenChange}
      placement="bottomLeft"
      align={{ offset: [-16, 12] }}
      showArrow={false}
      content={
        <TourDestinationContent
          value={value}
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
