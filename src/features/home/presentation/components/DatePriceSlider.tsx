import { useState } from 'react'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'

interface DatePrice {
  date: string
  displayDate: string
  price: string
}

const DATE_PRICES: DatePrice[] = [
  { date: '14/04', displayDate: '14/04', price: '6.667.500đ' },
  { date: '15/04', displayDate: '15/04', price: '6.667.500đ' },
  { date: '16/04', displayDate: '16/04', price: '6.667.500đ' },
  { date: '17/04', displayDate: '17/04', price: '6.667.500đ' },
  { date: '18/04', displayDate: '18/04', price: '6.667.500đ' },
  { date: '19/04', displayDate: '19/04', price: '6.667.500đ' },
  { date: '20/04', displayDate: '20/04', price: '6.667.500đ' },
  { date: '21/04', displayDate: '21/04', price: '6.667.500đ' },
  { date: '22/04', displayDate: '22/04', price: '6.667.500đ' },
  { date: '23/04', displayDate: '23/04', price: '6.667.500đ' },
  { date: '24/04', displayDate: '24/04', price: '6.667.500đ' },
  { date: '25/04', displayDate: '25/04', price: '6.667.500đ' },
]

const VISIBLE_COUNT = 7

interface Props {
  selectedDate?: string
  onDateChange?: (date: string) => void
}

export function DatePriceSlider({ selectedDate, onDateChange }: Props) {
  const [startIndex, setStartIndex] = useState(2)
  const [active, setActive] = useState(selectedDate ?? '20/04')

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
    <div
      style={{
        background: '#fff',
        borderRadius: 20,
        boxShadow: '0 2px 16px rgba(0,0,0,0.08)',
        display: 'flex',
        alignItems: 'center',
        padding: '0 4px',
        height: 90,
        overflow: 'hidden',
      }}
    >
      <button
        onClick={handlePrev}
        disabled={startIndex === 0}
        style={{
          flexShrink: 0,
          width: 36,
          height: 36,
          borderRadius: '50%',
          border: '1px solid #e5e7eb',
          background: startIndex === 0 ? '#f9fafb' : '#fff',
          cursor: startIndex === 0 ? 'not-allowed' : 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: startIndex === 0 ? '#d1d5db' : '#374151',
          fontSize: 14,
        }}
      >
        <LeftOutlined />
      </button>

      <div style={{ flex: 1, display: 'flex' }}>
        {visibleDates.map((item) => {
          const isActive = item.date === active
          return (
            <button
              key={item.date}
              onClick={() => handleSelect(item.date)}
              style={{
                flex: 1,
                height: 90,
                border: 'none',
                background: 'transparent',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 4,
                position: 'relative',
                borderBottom: isActive ? '3px solid #2563eb' : '3px solid transparent',
                transition: 'all 0.2s',
              }}
            >
              <span
                style={{
                  fontSize: 16,
                  fontWeight: isActive ? 700 : 400,
                  color: isActive ? '#2563eb' : '#3a3a3a',
                  lineHeight: 1.2,
                }}
              >
                {item.displayDate}
              </span>
              <span
                style={{
                  fontSize: 13,
                  color: '#909090',
                  fontWeight: isActive ? 600 : 400,
                }}
              >
                {item.price}
              </span>
            </button>
          )
        })}
      </div>

      <button
        onClick={handleNext}
        disabled={startIndex + VISIBLE_COUNT >= DATE_PRICES.length}
        style={{
          flexShrink: 0,
          width: 36,
          height: 36,
          borderRadius: '50%',
          border: '1px solid #e5e7eb',
          background: startIndex + VISIBLE_COUNT >= DATE_PRICES.length ? '#f9fafb' : '#fff',
          cursor: startIndex + VISIBLE_COUNT >= DATE_PRICES.length ? 'not-allowed' : 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: startIndex + VISIBLE_COUNT >= DATE_PRICES.length ? '#d1d5db' : '#374151',
          fontSize: 14,
        }}
      >
        <RightOutlined />
      </button>
    </div>
  )
}
