import { useState } from 'react'

import { brandColors } from '@/shared/lib/antd-theme/tokens'

import { ChevronLeftLargeIcon, ChevronRightLargeIcon } from '@/assets/icons/icons'

interface DatePrice {
  date: string
  displayDate: string
  price: string
}

const DATE_PRICES: DatePrice[] = [
  { date: '26/03', displayDate: '26/03', price: '6.667.500đ' },
  { date: '27/03', displayDate: '27/03', price: '6.667.500đ' },
  { date: '28/03', displayDate: '28/03', price: '6.667.500đ' },
  { date: '29/03', displayDate: '29/03', price: '6.667.500đ' },
  { date: '30/03', displayDate: '30/03', price: '6.667.500đ' },
  { date: '31/03', displayDate: '31/03', price: '6.667.500đ' },
  { date: '01/04', displayDate: '01/04', price: '6.667.500đ' },
  { date: '02/04', displayDate: '02/04', price: '6.667.500đ' },
  { date: '03/04', displayDate: '03/04', price: '6.667.500đ' },
  { date: '04/04', displayDate: '04/04', price: '6.667.500đ' },
]

const VISIBLE_COUNT = 7

interface Props {
  selectedDate?: string
  onDateChange?: (date: string) => void
}

export function DatePriceSlider({ selectedDate, onDateChange }: Props) {
  const [startIndex, setStartIndex] = useState(0)
  const [active, setActive] = useState(selectedDate ?? '28/03')

  const visibleDates = DATE_PRICES.slice(startIndex, startIndex + VISIBLE_COUNT)

  const handlePrev = () => {
    if (startIndex > 0) setStartIndex((i) => i - 1)
  }

  const handleNext = () => {
    if (startIndex + VISIBLE_COUNT < DATE_PRICES.length) setStartIndex((i) => i + 1)
  }

  const handleSelect = (date: string) => {
    setActive(date)
    onDateChange?.(date)
  }

  return (
    <div className="w-full bg-white rounded-[20px] shadow-[0_4px_20px_rgba(0,0,0,0.08)] flex items-center h-[74px] overflow-hidden">
      {/* Nút Prev */}
      <button
        onClick={handlePrev}
        disabled={startIndex === 0}
        className={`w-[74px] h-full flex items-center justify-center border-r-[4px] border-surface-hover transition-colors
          ${startIndex === 0 ? 'cursor-not-allowed opacity-30' : 'cursor-pointer hover:bg-surface-hover'}`}
      >
        <ChevronLeftLargeIcon width={20} height={36} color={brandColors.textMain} />
      </button>

      {/* Danh sách ngày */}
      <div className="flex-1 flex h-full">
        {visibleDates.map((item) => {
          const isActive = item.date === active
          return (
            <button
              key={item.date}
              onClick={() => handleSelect(item.date)}
              className="flex-1 flex flex-col items-center justify-center gap-1 relative cursor-pointer group"
            >
              <span className={`text-[17px] ${isActive ? 'font-semibold text-text-main' : 'text-text-main'}`}>
                {item.displayDate}
              </span>
              <span className={`text-[17px] ${isActive ? 'text-text-secondary' : 'text-text-secondary'}`}>
                {item.price}
              </span>

              {/* Thanh gạch chân khi active */}
              {isActive && (
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[4px] bg-text-main" />
              )}
            </button>
          )
        })}
      </div>

      {/* Nút Next */}
      <button
        onClick={handleNext}
        disabled={startIndex + VISIBLE_COUNT >= DATE_PRICES.length}
        className={`w-[74px] h-full flex items-center justify-center border-l-[4px] border-surface-hover transition-colors
          ${startIndex + VISIBLE_COUNT >= DATE_PRICES.length ? 'cursor-not-allowed opacity-30' : 'cursor-pointer hover:bg-surface-hover'}`}
      >
        <ChevronRightLargeIcon width={20} height={36} color={brandColors.textMain} />
      </button>
    </div>
  )
}
