import { Popover } from 'antd'

import { AirportSelectContent, type AirportSelectSearchBinding } from './AirportSelectContent'

interface AirportSelectPopoverProps {
  children: React.ReactNode
  open: boolean
  onOpenChange: (open: boolean) => void
  value: string
  type: 'from' | 'to'
  onSelect: (cityCode: string, displayLabel: string) => void
  airportSearch: AirportSelectSearchBinding
}

export function AirportSelectPopover({
  children,
  open,
  onOpenChange,
  value,
  type,
  onSelect,
  airportSearch,
}: AirportSelectPopoverProps) {
  return (
    <Popover
      trigger="click"
      open={open}
      onOpenChange={onOpenChange}
      placement="bottomLeft"
      align={{ offset: [-16, 12] }}
      showArrow={false}
      content={
        <AirportSelectContent
          value={value}
          type={type}
          onSelect={onSelect}
          isPopover
          airportSearch={airportSearch}
        />
      }
    >
      {children}
    </Popover>
  )
}
