import { Checkbox, Collapse, ConfigProvider,Slider, Space } from 'antd'
import type { CheckboxChangeEvent } from 'antd/es/checkbox'

import { AirlineLogo } from '@/shared/components/common/AirlineLogo'
import { brandColors } from '@/shared/lib/antd-theme/tokens'

import {
  AirplaneCharterIcon,
  BoltIcon,
  LaborIcon,
  LuggageIcon,
  StudyIcon,
  TravelBagIcon,
} from '@/assets/icons/icons'

const { Panel } = Collapse

interface FilterState {
  ticketTypes: string[]
  directOnly: boolean
  handLuggage: boolean
  checkInLuggage: boolean
  timeFrom: [number, number]
  timeTo: [number, number]
  transitTime: [number, number]
  flightDuration: [number, number]
  airlines: string[]
  seatClasses: string[]
}

interface Props {
  filters: FilterState
  onFilterChange: (filters: Partial<FilterState>) => void
}

const AIRLINES = [
  'Vietnam Airlines',
  'Bamboo Airways',
  'Vietjet Air',
  'Vietravel Airlines',
  'Sun Phu Quoc Airway',
]

const SEAT_CLASSES = ['Vé phổ thông', 'Vé phổ thông cao cấp', 'Vé Hạng nhất', 'Vé thương gia']

const TICKET_TYPES = [
  { label: 'Vé lao động', icon: <LaborIcon width={22} height={22} color="#54858C" /> },
  { label: 'vé du học', icon: <StudyIcon width={22} height={22} color="#54858C" /> },
  { label: 'Vé Block', icon: <LuggageIcon width={22} height={22} color="#54858C" /> },
  { label: 'Vé Charter', icon: <AirplaneCharterIcon width={22} height={22} color="#54858C" /> },
  { label: 'Bay Thẳng', icon: <BoltIcon width={22} height={22} color="#54858C" /> },
  { label: 'Có hành lý xách tay', icon: <TravelBagIcon width={22} height={22} color="#54858C" /> },
  { label: 'Có hành lý ký gửi', icon: <LuggageIcon width={22} height={22} color="#54858C" /> },
]

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

function SliderRow({
  label,
  min,
  max,
  value,
  onChange,
  formatter,
}: {
  label: string
  min: number
  max: number
  value: [number, number]
  onChange: (val: [number, number]) => void
  formatter?: (v: number) => string
}) {
  const fmt = formatter ?? formatTime
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
          step={0.1}
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

export function FlightFilterPanel({ filters, onFilterChange }: Props) {
  const handleAirlineChange = (airline: string, checked: boolean) => {
    const updated = checked
      ? [...filters.airlines, airline]
      : filters.airlines.filter((a) => a !== airline)
    onFilterChange({ airlines: updated })
  }

  const handleSeatClassChange = (cls: string, checked: boolean) => {
    const updated = checked
      ? [...filters.seatClasses, cls]
      : filters.seatClasses.filter((c) => c !== cls)
    onFilterChange({ seatClasses: updated })
  }

  const handleTicketTypeChange = (label: string, checked: boolean) => {
    const updated = checked
      ? [...filters.ticketTypes, label]
      : filters.ticketTypes.filter((t) => t !== label)
    onFilterChange({ ticketTypes: updated })
  }

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
      <Collapse
        ghost
        defaultActiveKey={['suggested', 'time', 'flightTime', 'airlines', 'seats']}
      >
        {/* Được đề xuất */}
        <Panel showArrow={false} className="!border-b !border-border-main" header={<span className="text-[18px] font-semibold text-text-main">Được đề xuất</span>} key="suggested">
          <Space direction="vertical" size={8} className="w-full">
            {TICKET_TYPES.map(({ label, icon }) => (
              <Checkbox
                key={label}
                checked={filters.ticketTypes.includes(label)}
                onChange={(e: CheckboxChangeEvent) => handleTicketTypeChange(label, e.target.checked)}
              >
                <span className="flex items-center gap-2">
                  {icon}
                  <span className="text-[18px] text-text-main">{label}</span>
                </span>
              </Checkbox>
            ))}
          </Space>
        </Panel>

        {/* Thời gian */}
        <Panel showArrow={false} className="!border-b !border-border-main" header={<span className="text-[18px] font-semibold text-text-main">Thời gian</span>} key="time">
          <div>
            <SliderRow
              label="Giờ cất cánh"
              min={0}
              max={24}
              value={filters.timeFrom}
              onChange={(val) => onFilterChange({ timeFrom: val })}
            />
            <SliderRow
              label="Giờ hạ cánh"
              min={0}
              max={24}
              value={filters.timeTo}
              onChange={(val) => onFilterChange({ timeTo: val })}
            />
          </div>
        </Panel>

        {/* Thời gian bay */}
        <Panel showArrow={false} className="!border-b !border-border-main" header={<span className="text-[18px] font-semibold text-text-main">Thời gian bay</span>} key="flightTime">
          <div>
            <SliderRow
              label="Giờ quá cảnh"
              min={1}
              max={24}
              value={filters.transitTime}
              onChange={(val) => onFilterChange({ transitTime: val })}
              formatter={formatDuration}
            />
            <SliderRow
              label="Chặng bay"
              min={2}
              max={27.5}
              value={filters.flightDuration}
              onChange={(val) => onFilterChange({ flightDuration: val })}
              formatter={formatDuration}
            />
          </div>
        </Panel>

        {/* Hãng hàng không */}
        <Panel showArrow={false} className="!border-b !border-border-main" header={<span className="text-[18px] font-semibold text-text-main">Hãng hàng không</span>} key="airlines">
          <Space direction="vertical" size={12} className="w-full">
            {AIRLINES.map((airline) => (
              <Checkbox
                key={airline}
                checked={filters.airlines.includes(airline)}
                onChange={(e: CheckboxChangeEvent) => handleAirlineChange(airline, e.target.checked)}
              >
                <span className="flex items-center gap-2">
                  <AirlineLogo airline={airline} className="w-[22px] h-[22px]" />
                  <span className="text-[18px] text-text-main">{airline}</span>
                </span>
              </Checkbox>
            ))}
          </Space>
        </Panel>

        {/* Hạng vé */}
        <Panel showArrow={false} className="last:border-b-0" header={<span className="text-[18px] font-semibold text-text-main">Hạng vé</span>} key="seats">
          <Space direction="vertical" size={12} className="w-full">
            {SEAT_CLASSES.map((cls) => (
              <Checkbox
                key={cls}
                checked={filters.seatClasses.includes(cls)}
                onChange={(e: CheckboxChangeEvent) => handleSeatClassChange(cls, e.target.checked)}
              >
                <span className="text-[18px] text-text-main">{cls}</span>
              </Checkbox>
            ))}
          </Space>
        </Panel>
      </Collapse>
    </div>
    </ConfigProvider>
  )
}

export type { FilterState }
