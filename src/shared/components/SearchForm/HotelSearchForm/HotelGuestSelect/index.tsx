import { useState } from 'react'

import { Popover } from 'antd'

import { HotelGuestSelectContent } from './HotelGuestSelectContent'

import { UsersIcon } from '@/assets/icons/icons'

interface GuestCounts {
  rooms: number
  adults: number
  children: number
}

interface HotelGuestSelectPopoverProps {
  counts: GuestCounts
  onCountsChange: (counts: GuestCounts) => void
  className?: string
}

export function HotelGuestSelectPopover({
  counts,
  onCountsChange,
  className = '',
}: HotelGuestSelectPopoverProps) {
  const [isOpen, setIsOpen] = useState(false)

  const summaryText = `${counts.rooms} phòng, ${counts.adults} người lớn, ${counts.children} trẻ em`

  return (
    <div className={`flex-1 min-w-0 ${className}`}>
      <p className="text-[15px] sm:text-[17px] font-semibold text-text-main mb-2 px-1 text-left">
        Số Khách và số phòng
      </p>
      <Popover
        content={
          <HotelGuestSelectContent
            counts={counts}
            onCountsChange={onCountsChange}
            onClose={() => setIsOpen(false)}
          />
        }
        trigger="click"
        open={isOpen}
        onOpenChange={setIsOpen}
        placement="bottomLeft"
        styles={{ content: { padding: '0px' } }}
      >
        <div
          id="hotel-guest-select-trigger"
          className="flex items-center h-[45px] sm:h-[55px] border border-border-main rounded-[20px] bg-white px-4 overflow-hidden cursor-pointer hover:border-primary transition-colors group"
        >
          <UsersIcon width={24} height={24} className="shrink-0" />
          <span className="ml-2 text-[14px] sm:text-[15px] text-text-main truncate group-hover:text-primary transition-colors">
            {summaryText}
          </span>
        </div>
      </Popover>
    </div>
  )
}
