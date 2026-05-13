import { useState } from 'react'

import { Button } from 'antd'

import { SEAT_CLASSES } from './index'

import { MinusIcon, PlusIcon } from '@/assets/icons/icons'

interface PassengerCounts {
  adults: number
  children: number
  infants: number
}

interface PassengerSelectContentProps {
  counts: PassengerCounts
  seatClass: string
  onCountsChange: (counts: PassengerCounts) => void
  onSeatClassChange: (value: string) => void
  onClose: () => void
}

export function PassengerSelectContent({
  counts,
  seatClass,
  onCountsChange,
  onSeatClassChange,
  onClose,
}: PassengerSelectContentProps) {
  const [tempCounts, setTempCounts] = useState(counts)
  const [tempSeatClass, setTempSeatClass] = useState(seatClass)

  const handleUpdateCount = (type: keyof PassengerCounts, delta: number) => {
    const newVal = Math.max(0, tempCounts[type] + delta)
    if (type === 'adults' && newVal < 1) return

    setTempCounts((prev) => ({
      ...prev,
      [type]: newVal,
    }))
  }

  const handleApply = () => {
    onCountsChange(tempCounts)
    onSeatClassChange(tempSeatClass)
    onClose()
  }

  return (
    <div className="w-[340px] bg-white rounded-[20px]">
      {/* Seat Classes - Custom Radio-like Selection */}
      <div className="flex flex-col gap-4 mb-6">
        {SEAT_CLASSES.map((cls) => {
          const isSelected = tempSeatClass === cls.value
          return (
            <button
              key={cls.value}
              onClick={() => setTempSeatClass(cls.value)}
              className="flex items-center gap-3 cursor-pointer group text-left"
            >
              <div
                className={`w-[26px] h-[26px] rounded-[5px] border flex items-center justify-center transition-all ${isSelected
                  ? 'border-primary bg-white'
                  : 'border-text-secondary bg-white group-hover:border-primary/50'
                  }`}
              >
                {isSelected && (
                  <div className="w-[10px] h-[10px] rounded-full bg-primary" />
                )}
              </div>
              <span className={`text-[16px] text-text-main ${isSelected ? 'font-semibold' : 'font-normal'}`}>
                {cls.label}
              </span>
            </button>
          )
        })}
      </div>

      {/* Passenger Counters */}
      <div className="flex flex-col gap-4 mb-6">
        <CounterRow
          label="Người lớn"
          subLabel="+12 tuổi"
          value={tempCounts.adults}
          onDecrement={() => handleUpdateCount('adults', -1)}
          onIncrement={() => handleUpdateCount('adults', 1)}
          min={1}
        />
        <CounterRow
          label="Trẻ em"
          subLabel="2 - 11 tuổi"
          value={tempCounts.children}
          onDecrement={() => handleUpdateCount('children', -1)}
          onIncrement={() => handleUpdateCount('children', 1)}
        />
        <CounterRow
          label="Em bé"
          subLabel="< 24 tháng"
          value={tempCounts.infants}
          onDecrement={() => handleUpdateCount('infants', -1)}
          onIncrement={() => handleUpdateCount('infants', 1)}
        />
      </div>

      {/* Action Button */}
      <div className="flex justify-end">
        <Button
          type="primary"
          onClick={handleApply}
          className="!h-[44px] !px-4 !rounded-[5px] !font-semibold !text-[16px]"
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
  subLabel: string
  value: number
  onDecrement: () => void
  onIncrement: () => void
  min?: number
}) {
  const isAtMin = value <= min
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <span className="text-[16px] font-normal text-text-main">{label}</span>
        <span className="text-[12px] text-text-secondary font-normal">{subLabel}</span>
      </div>
      <div className="flex items-center gap-5">
        <button
          onClick={onDecrement}
          disabled={isAtMin}
          className={`w-[20px] h-[20px] rounded-full border flex items-center justify-center transition-all cursor-pointer ${isAtMin
            ? 'border-text-muted text-text-muted cursor-not-allowed'
            : 'border-primary text-primary hover:border-primary-hover hover:text-primary-hover'
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
