import { useState } from 'react'

import { Button } from 'antd'

import { MinusIcon, PlusIcon } from '@/assets/icons/icons'

interface GuestCounts {
  rooms: number
  adults: number
  children: number
}

interface HotelGuestSelectContentProps {
  counts: GuestCounts
  onCountsChange: (counts: GuestCounts) => void
  onClose: () => void
}

export function HotelGuestSelectContent({
  counts,
  onCountsChange,
  onClose,
}: HotelGuestSelectContentProps) {
  const [tempCounts, setTempCounts] = useState(counts)

  const handleUpdateCount = (type: keyof GuestCounts, delta: number) => {
    const min = type === 'rooms' || type === 'adults' ? 1 : 0
    const newVal = Math.max(min, tempCounts[type] + delta)
    setTempCounts((prev) => ({ ...prev, [type]: newVal }))
  }

  const handleApply = () => {
    onCountsChange(tempCounts)
    onClose()
  }

  return (
    <div className="w-[320px] bg-white rounded-[20px] p-1">
      <div className="flex flex-col gap-4 mb-6">
        <CounterRow
          label="Phòng"
          value={tempCounts.rooms}
          onDecrement={() => handleUpdateCount('rooms', -1)}
          onIncrement={() => handleUpdateCount('rooms', 1)}
          min={1}
        />
        <CounterRow
          label="Người lớn"
          subLabel="+18 tuổi"
          value={tempCounts.adults}
          onDecrement={() => handleUpdateCount('adults', -1)}
          onIncrement={() => handleUpdateCount('adults', 1)}
          min={1}
        />
        <CounterRow
          label="Trẻ em"
          subLabel="0 - 17 tuổi"
          value={tempCounts.children}
          onDecrement={() => handleUpdateCount('children', -1)}
          onIncrement={() => handleUpdateCount('children', 1)}
          min={0}
        />
      </div>

      <div className="flex justify-end">
        <Button
          type="primary"
          onClick={handleApply}
          className="!h-[44px] !px-8 !rounded-[8px] !font-semibold !text-[16px]"
        >
          Hoàn thành
        </Button>
      </div>
    </div>
  )
}

function CounterRow({
  label,
  subLabel,
  value,
  onDecrement,
  onIncrement,
  min = 0,
}: {
  label: string
  subLabel?: string
  value: number
  onDecrement: () => void
  onIncrement: () => void
  min?: number
}) {
  const isAtMin = value <= min
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <span className="text-[16px] font-normal text-text-main">{label}</span>
        {subLabel && (
          <span className="text-[12px] text-text-secondary font-normal">{subLabel}</span>
        )}
      </div>
      <div className="flex items-center gap-5">
        <button
          onClick={onDecrement}
          disabled={isAtMin}
          className={`w-[20px] h-[20px] rounded-full border flex items-center justify-center transition-all cursor-pointer ${
            isAtMin
              ? 'border-text-muted text-text-muted cursor-not-allowed'
              : 'border-primary text-primary hover:bg-primary/5'
          }`}
        >
          <MinusIcon width={8} height={2} />
        </button>
        <span className="text-[16px] font-normal text-text-main min-w-[14px] text-center">
          {value}
        </span>
        <button
          onClick={onIncrement}
          className="w-[20px] h-[20px] rounded-full border border-primary flex items-center justify-center text-primary hover:bg-primary/5 transition-all cursor-pointer"
        >
          <PlusIcon width={8} height={8} />
        </button>
      </div>
    </div>
  )
}
