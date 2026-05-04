import { useState } from 'react'

import { useBreakpoint } from '@/shared/hooks/useBreakpoint'
import { brandColors } from '@/shared/lib/antd-theme/tokens'

import { ChevronLeftLargeIcon, ChevronRightLargeIcon } from '@/assets/icons/icons'
import { DATE_PRICES } from '@/mocks/data/flights'

interface Props {
  selectedDate?: string
  onDateChange?: (date: string) => void
}

export function DatePriceSlider({ selectedDate, onDateChange }: Props) {
  const {isSmallMobile, isMobile, isTablet } = useBreakpoint()
  const [startIndex, setStartIndex] = useState(0)
  const [active, setActive] = useState(selectedDate ?? '28/03')

  // Dynamic visible count
  const visibleCount = isSmallMobile ? 3 : isMobile ? 4 : isTablet ? 5 : 7

  // Derive the effective start index to avoid state updates during render or effects
  const effectiveStartIndex = Math.min(startIndex, Math.max(0, DATE_PRICES.length - visibleCount))
  const visibleDates = DATE_PRICES.slice(effectiveStartIndex, effectiveStartIndex + visibleCount)

  const handlePrev = () => {
    if (startIndex > 0) setStartIndex((i) => i - 1)
  }

  const handleNext = () => {
    if (startIndex + visibleCount < DATE_PRICES.length) setStartIndex((i) => i + 1)
  }

  const handleSelect = (date: string) => {
    setActive(date)
    onDateChange?.(date)
  }

  // Find index of active date in the current visible slice to position the sliding underline
  const activeIndexInVisible = visibleDates.findIndex((item) => item.date === active)
  const itemWidthPercent = 100 / visibleCount

  return (
    <div className="w-full bg-white rounded-[20px] shadow-[0_4px_20px_rgba(0,0,0,0.08)] flex items-center h-[64px] sm:h-[74px] overflow-hidden">
      {/* Nút Prev */}
      <button
        onClick={handlePrev}
        disabled={startIndex === 0}
        className={`w-[50px] sm:w-[74px] h-full flex items-center justify-center border-r-[2px] sm:border-r-[4px] border-surface-hover transition-all duration-300
          ${startIndex === 0 ? 'cursor-not-allowed opacity-30' : 'cursor-pointer hover:bg-surface-hover active:scale-95'}`}
      >
        <ChevronLeftLargeIcon width={isSmallMobile ? 14 : 20} height={isSmallMobile ? 24 : 36} color={brandColors.textMain} />
      </button>

      {/* Danh sách ngày */}
      <div className="flex-1 flex h-full relative">
        {/* Sliding Underline Indicator */}
        {activeIndexInVisible !== -1 && (
          <div
            className="absolute bottom-0 h-[2px] md:h-[4px] bg-text-main transition-all duration-300 ease-out z-10"
            style={{
              width: `${itemWidthPercent}%`,
              left: `${activeIndexInVisible * itemWidthPercent}%`,
            }}
          />
        )}

        {visibleDates.map((item) => {
          const isActive = item.date === active
          return (
            <button
              key={item.date}
              onClick={() => handleSelect(item.date)}
              className="flex-1 flex flex-col items-center justify-center relative cursor-pointer group px-1 transition-all duration-300"
            >
              <div className={`flex flex-col items-center transition-transform duration-300 ${isActive ? 'scale-110' : 'scale-100 group-hover:scale-105'}`}>
                <span className={`text-[15px] sm:text-[17px] transition-colors duration-300 ${isActive ? 'font-bold text-text-main' : 'font-semibold text-text-main/70 group-hover:text-text-main'}`}>
                  {item.displayDate}
                </span>
                <span className={`text-[14px] sm:text-[17px] transition-colors duration-300 ${isActive ? 'font-medium text-text-secondary' : 'text-text-secondary/70 group-hover:text-text-secondary'} whitespace-nowrap`}>
                  {item.price}
                </span>
              </div>
            </button>
          )
        })}
      </div>

      {/* Nút Next */}
      <button
        onClick={handleNext}
        disabled={startIndex + visibleCount >= DATE_PRICES.length}
        className={`w-[50px] sm:w-[74px] h-full flex items-center justify-center border-l-[2px] sm:border-l-[4px] border-surface-hover transition-all duration-300
          ${startIndex + visibleCount >= DATE_PRICES.length ? 'cursor-not-allowed opacity-30' : 'cursor-pointer hover:bg-surface-hover active:scale-95'}`}
      >
        <ChevronRightLargeIcon width={isSmallMobile ? 14 : 20} height={isSmallMobile ? 24 : 36} color={brandColors.textMain} />
      </button>
    </div>
  )
}
