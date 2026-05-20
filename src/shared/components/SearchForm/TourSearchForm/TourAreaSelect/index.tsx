import { useState } from 'react'

import { AREA_OPTIONS } from './tourAreaOptions'
import { TourAreaPopover } from './TourAreaPopover'

interface TourAreaSelectProps {
  value: string
  onSelect: (value: string) => void
  className?: string
}

const getAreaLabel = (value: string) => {
  const found = AREA_OPTIONS.find((opt) => opt.value === value)
  return found ? found.label : value
}

export function TourAreaSelect({ value, onSelect, className = '' }: TourAreaSelectProps) {
  const [popoverOpen, setPopoverOpen] = useState(false)

  const handleSelect = (val: string) => {
    onSelect(val)
    setPopoverOpen(false)
  }

  const selectedOption = AREA_OPTIONS.find((opt) => opt.value === value) || AREA_OPTIONS[0]
  const Icon = selectedOption.icon

  return (
    <div className={`flex flex-col ${className}`}>
      <p className="text-[15px] sm:text-[17px] font-semibold text-text-main mb-2 px-1">
        Khu vực
      </p>

      <TourAreaPopover
        open={popoverOpen}
        onOpenChange={setPopoverOpen}
        value={value}
        onSelect={handleSelect}
      >
        <div
          className={`relative flex items-center h-[45px] sm:h-[55px] border rounded-[20px] bg-white transition-colors overflow-hidden
            ${popoverOpen ? 'border-primary/60' : 'border-border-main hover:border-primary/40'}`}
        >
          <button
            id="tour-area-btn"
            onClick={() => setPopoverOpen(true)}
            className="flex items-center flex-1 h-full w-full text-left cursor-pointer group px-4 gap-3"
          >
            <Icon width={24} height={24} color="#4558B6" className="shrink-0" />
            <span className="flex-1 text-[15px] sm:text-[17px] font-semibold text-text-main group-hover:text-primary transition-colors truncate">
              {getAreaLabel(value)}
            </span>
          </button>
        </div>
      </TourAreaPopover>
    </div>
  )
}
