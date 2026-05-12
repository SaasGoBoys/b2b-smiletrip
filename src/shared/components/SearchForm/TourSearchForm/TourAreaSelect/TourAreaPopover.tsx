import { Popover } from 'antd'

import { TourAreaContent } from './TourAreaContent'

interface TourAreaPopoverProps {
  children: React.ReactNode
  open: boolean
  onOpenChange: (open: boolean) => void
  value: string
  onSelect: (value: string) => void
}

export function TourAreaPopover({
  children,
  open,
  onOpenChange,
  value,
  onSelect,
}: TourAreaPopoverProps) {
  return (
    <Popover
      trigger="click"
      open={open}
      onOpenChange={onOpenChange}
      placement="bottom"
      align={{ offset: [-16, 12] }}
      showArrow={false}
      overlayClassName="tour-area-popover"
      overlayInnerStyle={{ padding: 0, borderRadius: '20px' }}
      content={
        <TourAreaContent
          value={value}
          onSelect={onSelect}
        />
      }
    >
      {children}
    </Popover>
  )
}
