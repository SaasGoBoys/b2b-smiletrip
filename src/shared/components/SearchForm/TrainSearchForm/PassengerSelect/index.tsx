import { useState } from 'react'

import { Popover } from 'antd'

import { PassengerSelectContent } from './PassengerSelectContent'
import { SEAT_CLASSES } from './trainSeatClasses'

import { UsersIcon } from '@/assets/icons/icons'

interface PassengerCounts {
  adults: number
  children: number
  infants: number
}

interface PassengerSelectProps {
  passengerCounts: PassengerCounts
  seatClass: string
  onPassengerCountsChange: (counts: PassengerCounts) => void
  onSeatClassChange: (value: string) => void
  className?: string
}

export function PassengerSelectPopover({
  passengerCounts,
  seatClass,
  onPassengerCountsChange,
  onSeatClassChange,
  className = '',
}: PassengerSelectProps) {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false)

  const seatClassLabel = SEAT_CLASSES.find((c) => c.value === seatClass)?.label || seatClass

  const total = passengerCounts.adults + passengerCounts.children + passengerCounts.infants
  const hasMixedPassengers = passengerCounts.children > 0 || passengerCounts.infants > 0
  const passengerText = `${total} ${hasMixedPassengers ? 'hành khách' : 'người lớn'}, ${seatClassLabel}`

  return (
    <div className={`flex-1 ${className}`}>
      <p className="text-[15px] sm:text-[17px] font-semibold text-text-main mb-2 px-1 text-left">
        Số khách, hạng ghế
      </p>
      <Popover
        content={
          <PassengerSelectContent
            counts={passengerCounts}
            seatClass={seatClass}
            onCountsChange={onPassengerCountsChange}
            onSeatClassChange={onSeatClassChange}
            onClose={() => setIsPopoverOpen(false)}
          />
        }
        trigger="click"
        open={isPopoverOpen}
        onOpenChange={setIsPopoverOpen}
        placement="bottomRight"
        styles={{ content: { padding: '4px' } }}
      >
        <div className="flex items-center h-[45px] sm:h-[55px] border border-border-main rounded-[20px] bg-white px-4 overflow-hidden cursor-pointer hover:border-primary transition-colors group">
          <UsersIcon width={24} height={24} className="shrink-0" />
          <span className="ml-2 text-[16px] text-text-main font-semibold truncate group-hover:text-primary transition-colors">
            {passengerText}
          </span>
        </div>
      </Popover>
    </div>
  )
}
