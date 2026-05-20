import { type ReactNode, useState } from 'react'

import type { CollapseProps } from 'antd'
import { Checkbox, Collapse, ConfigProvider, Slider } from 'antd'
import type { CheckboxChangeEvent } from 'antd/es/checkbox'

import { AirlineLogo } from '@/shared/components/common/AirlineLogo'
import { useBreakpoint } from '@/shared/hooks/useBreakpoint'
import { brandColors } from '@/shared/lib/antd-theme/tokens'

import { useFlightFilterStore } from '../../store/flightFilterStore'

import { LaborIcon, LuggageIcon, TravelBagIcon } from '@/assets/icons/icons'

const TICKET_TYPE_ICONS: Record<string, ReactNode> = {
  'Vé lao động': <LaborIcon width={22} height={22} color="#54858C" />,
  'Có hành lý xách tay': <TravelBagIcon width={22} height={22} color="#54858C" />,
  'Có hành lý ký gửi': <LuggageIcon width={22} height={22} color="#54858C" />,
}

function formatTime(value: number) {
  const h = Math.floor(value)
  const m = Math.round((value - h) * 60)
  return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`
}

function formatDuration(value: number) {
  const h = Math.floor(value)
  const m = Math.round((value - h) * 60)
  if (m === 0) return `${h}g`
  return `${h}g ${m}p`
}

function formatPrice(value: number) {
  return value.toLocaleString('vi-VN') + 'đ'
}

function SliderRow({
  label,
  min,
  max,
  value,
  onChange,
  formatter,
  step = 0.1,
}: {
  label: string
  min: number
  max: number
  value: [number, number]
  onChange: (val: [number, number]) => void
  formatter?: (v: number) => string
  step?: number
}) {
  const fmt = formatter ?? formatTime
  if (min >= max) return null

  return (
    <div className="mb-6 last:mb-2">
      <div className="flex items-center justify-between text-[18px] text-text-main mb-1">
        <span className="font-normal">{label}</span>
        <div className="flex gap-4">
          <span className="text-text-main">{fmt(min)}</span>
          <span className="text-text-main">{fmt(max)}</span>
        </div>
      </div>
      <div className="px-[6px] py-1">
        <Slider
          range
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(val) => onChange(val as [number, number])}
          tooltip={{ open: false }}
          className="m-0 py-1"
        />
      </div>
      <div className="flex items-center justify-between text-[18px] text-text-main mt-[-4px]">
        <span>{fmt(value[0])}</span>
        <span>{fmt(value[1])}</span>
      </div>
    </div>
  )
}

export function FlightFilterPanel() {
  const { isTabletToXl, isMobile } = useBreakpoint()
  const filters = useFlightFilterStore((s) => s.filters)
  const bounds = useFlightFilterStore((s) => s.bounds)
  const setFilters = useFlightFilterStore((s) => s.setFilters)

  const isLargeDesktop = !isTabletToXl && !isMobile
  const [airlinesExpanded, setAirlinesExpanded] = useState(false)

  const visibleAirlines =
    airlinesExpanded || bounds.airlines.length <= 9
      ? bounds.airlines
      : bounds.airlines.slice(0, 9)

  const handleAirlineChange = (code: string, checked: boolean) => {
    const updated = checked
      ? [...filters.airlines, code]
      : filters.airlines.filter((a) => a !== code)
    setFilters({ airlines: updated })
  }

  const handleSeatClassChange = (cls: string, checked: boolean) => {
    const updated = checked
      ? [...filters.seatClasses, cls]
      : filters.seatClasses.filter((c) => c !== cls)
    setFilters({ seatClasses: updated })
  }

  const handleStopChange = (value: string, checked: boolean) => {
    const updated = checked
      ? [...filters.stops, value]
      : filters.stops.filter((s) => s !== value)
    setFilters({ stops: updated })
  }

  const handleTicketTypeChange = (label: string, checked: boolean) => {
    const updated = checked
      ? [...filters.ticketTypes, label]
      : filters.ticketTypes.filter((t) => t !== label)
    setFilters({ ticketTypes: updated })
  }

  const renderTicketTypes = () => (
    <div className="flex flex-col gap-2 w-full">
      {bounds.availableTicketTypes.length === 0 ? (
        <p className="text-[14px] text-text-secondary">Chưa có dữ liệu lọc</p>
      ) : (
        bounds.availableTicketTypes.map((label) => (
          <Checkbox
            key={label}
            checked={filters.ticketTypes.includes(label)}
            onChange={(e: CheckboxChangeEvent) => handleTicketTypeChange(label, e.target.checked)}
          >
            <span className="flex items-center gap-2">
              {TICKET_TYPE_ICONS[label]}
              <span className="text-[18px] text-text-main">{label}</span>
            </span>
          </Checkbox>
        ))
      )}
    </div>
  )

  const renderTimeFilters = () => (
    <div className="flex flex-col">
      <SliderRow
        label="Giờ cất cánh"
        min={bounds.depTimeMin}
        max={bounds.depTimeMax}
        value={filters.timeFrom}
        onChange={(val) => setFilters({ timeFrom: val })}
      />
      <SliderRow
        label="Giờ hạ cánh"
        min={bounds.arrTimeMin}
        max={bounds.arrTimeMax}
        value={filters.timeTo}
        onChange={(val) => setFilters({ timeTo: val })}
      />
    </div>
  )

  const renderPriceFilter = () => (
    <SliderRow
      label="Khoảng giá"
      min={bounds.priceMin}
      max={bounds.priceMax}
      value={filters.priceRange}
      onChange={(val) => setFilters({ priceRange: val })}
      formatter={formatPrice}
      step={1000}
    />
  )

  const renderFlightTimeFilters = () => (
    <SliderRow
      label="Thời gian bay"
      min={bounds.durationMin}
      max={bounds.durationMax}
      value={filters.flightDuration}
      onChange={(val) => setFilters({ flightDuration: val })}
      formatter={formatDuration}
    />
  )

  const renderStops = () => {
    if (bounds.stops.length === 0) return null

    return (
      <div className="flex flex-col gap-3 w-full">
        {bounds.stops.map(({ value, label }) => (
          <Checkbox
            key={value}
            checked={filters.stops.includes(value)}
            onChange={(e: CheckboxChangeEvent) => handleStopChange(value, e.target.checked)}
          >
            <span className="text-[18px] text-text-main">{label}</span>
          </Checkbox>
        ))}
      </div>
    )
  }

  const renderAirlines = () => {
    if (bounds.airlines.length === 0) {
      return <p className="text-[14px] text-text-secondary">Chưa có dữ liệu hãng bay</p>
    }

    return (
      <div className="flex flex-col gap-3 w-full">
        {visibleAirlines.map(({ code, name }) => (
          <Checkbox
            key={code}
            checked={filters.airlines.includes(code)}
            onChange={(e: CheckboxChangeEvent) => handleAirlineChange(code, e.target.checked)}
          >
            <span className="flex items-center gap-2">
              <AirlineLogo airline={name} className="w-[22px] h-[22px]" />
              <span className="text-[18px] text-text-main">{name}</span>
            </span>
          </Checkbox>
        ))}
        {bounds.airlines.length > 9 && (
          <button
            type="button"
            onClick={() => setAirlinesExpanded((v) => !v)}
            className="text-left text-[14px] font-semibold text-primary cursor-pointer bg-transparent border-none p-0"
          >
            {airlinesExpanded ? 'Thu gọn' : 'Xem thêm'}
          </button>
        )}
      </div>
    )
  }

  const renderSeatClasses = () => {
    if (bounds.seatClasses.length === 0) {
      return <p className="text-[14px] text-text-secondary">Chưa có dữ liệu hạng vé</p>
    }

    return (
      <div className="flex flex-col gap-3 w-full">
        {bounds.seatClasses.map((cls) => (
          <Checkbox
            key={cls}
            checked={filters.seatClasses.includes(cls)}
            onChange={(e: CheckboxChangeEvent) => handleSeatClassChange(cls, e.target.checked)}
          >
            <span className="text-[18px] text-text-main">{cls}</span>
          </Checkbox>
        ))}
      </div>
    )
  }

  const collapseItems: CollapseProps['items'] = [
    {
      key: 'suggested',
      label: <span className="text-[18px] font-semibold text-text-main">Được đề xuất</span>,
      children: renderTicketTypes(),
      className: '!border-b !border-border-main',
      showArrow: false,
    },
    {
      key: 'price',
      label: <span className="text-[18px] font-semibold text-text-main">Khoảng giá</span>,
      children: renderPriceFilter(),
      className: '!border-b !border-border-main',
      showArrow: false,
    },
    {
      key: 'time',
      label: <span className="text-[18px] font-semibold text-text-main">Thời gian</span>,
      children: renderTimeFilters(),
      className: '!border-b !border-border-main',
      showArrow: false,
    },
    {
      key: 'flightTime',
      label: <span className="text-[18px] font-semibold text-text-main">Thời gian bay</span>,
      children: renderFlightTimeFilters(),
      className: '!border-b !border-border-main',
      showArrow: false,
    },
    ...(bounds.stops.length > 0
      ? [
          {
            key: 'stops',
            label: <span className="text-[18px] font-semibold text-text-main">Điểm dừng</span>,
            children: renderStops(),
            className: '!border-b !border-border-main',
            showArrow: false,
          },
        ]
      : []),
    {
      key: 'airlines',
      label: <span className="text-[18px] font-semibold text-text-main">Hãng hàng không</span>,
      children: renderAirlines(),
      className: '!border-b !border-border-main',
      showArrow: false,
    },
    {
      key: 'seats',
      label: <span className="text-[18px] font-semibold text-text-main">Hạng vé</span>,
      children: renderSeatClasses(),
      className: 'last:border-b-0',
      showArrow: false,
    },
  ]

  return (
    <ConfigProvider
      theme={{
        components: {
          Checkbox: {
            borderRadiusSM: 0,
            colorBorder: brandColors.borderMain,
            controlInteractiveSize: 22,
          },
          Slider: {
            handleColor: brandColors.textMain,
            handleActiveColor: brandColors.textMain,
            colorPrimary: brandColors.textMain,
            trackBg: brandColors.textMain,
            trackHoverBg: brandColors.textMain,
            railBg: brandColors.borderMain,
            railHoverBg: brandColors.borderMain,
            handleSize: 12,
            handleSizeHover: 12,
            handleLineWidth: 1,
            handleLineWidthHover: 1,
            colorPrimaryBorderHover: brandColors.textMain,
            railSize: 1,
          },
          Collapse: {
            headerPadding: '12px 0',
            contentPadding: '12px 0',
          },
        },
      }}
    >
      <div className="overflow-hidden">
        {isLargeDesktop ? (
          <Collapse
            ghost
            defaultActiveKey={['suggested', 'price', 'time', 'flightTime', 'stops', 'airlines', 'seats']}
            items={collapseItems}
          />
        ) : (
          <div className={`${isTabletToXl ? 'grid grid-cols-2 gap-6 relative' : 'flex flex-col gap-4'}`}>
            {isTabletToXl && (
              <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[1px] bg-border-main z-10" />
            )}

            <div className="flex flex-col gap-4">
              <div className="bg-white border border-border-main rounded-[16px] p-5 shadow-sm">
                <div className="text-[18px] font-semibold text-text-main mb-4">Được đề xuất</div>
                {renderTicketTypes()}
              </div>

              <div className="bg-white border border-border-main rounded-[16px] p-5 shadow-sm">
                <div className="text-[18px] font-semibold text-text-main mb-4">Khoảng giá</div>
                {renderPriceFilter()}
              </div>

              {bounds.stops.length > 0 && (
                <div className="bg-white border border-border-main rounded-[16px] p-5 shadow-sm">
                  <div className="text-[18px] font-semibold text-text-main mb-4">Điểm dừng</div>
                  {renderStops()}
                </div>
              )}

              <div className="bg-white border border-border-main rounded-[16px] p-5 shadow-sm">
                <div className="text-[18px] font-semibold text-text-main mb-4">Hãng hàng không</div>
                {renderAirlines()}
              </div>

              <div className="bg-white border border-border-main rounded-[16px] p-5 shadow-sm">
                <div className="text-[18px] font-semibold text-text-main mb-4">Hạng vé</div>
                {renderSeatClasses()}
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="bg-white border border-border-main rounded-[16px] p-5 shadow-sm">
                <div className="text-[18px] font-semibold text-text-main mb-4">Thời gian</div>
                {renderTimeFilters()}
              </div>

              <div className="bg-white border border-border-main rounded-[16px] p-5 shadow-sm">
                <div className="text-[18px] font-semibold text-text-main mb-4">Thời gian bay</div>
                {renderFlightTimeFilters()}
              </div>
            </div>
          </div>
        )}
      </div>
    </ConfigProvider>
  )
}


