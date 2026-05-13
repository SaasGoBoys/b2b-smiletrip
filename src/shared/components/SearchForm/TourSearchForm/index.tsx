import { useState } from 'react'

import { Button, ConfigProvider, DatePicker, Input } from 'antd'

import dayjs from 'dayjs'

import { brandColors } from '@/shared/lib/antd-theme/tokens'

import { Tag } from '../../common/Tag'

import { TourAreaSelect } from './TourAreaSelect'
import { TourDestinationInput } from './TourDestinationInput'

import {
  Search2Icon,
  TourCalendarIcon,
  TourCustomIcon,
  TourGroupIcon,
  TourUsersIcon,
} from '@/assets/icons/icons'

// ── Mock Data ────────────────────────────────────────────────────────────────

const TOUR_TYPES = [
  { key: 'group', label: 'Tour ghép', icon: TourGroupIcon },
  { key: 'custom', label: 'Tour tự thiết kế', icon: TourCustomIcon },
]


const SORT_OPTIONS_GROUP = [
  { key: 'cheapest', label: 'Rẻ nhất' },
  { key: 'popular', label: 'Nhiều người chọn nhất' },
]

// ── Types ─────────────────────────────────────────────────────────────────────

interface TourSearchFormProps {
  onSearch?: (params: TourSearchParams) => void
  className?: string
}

export interface TourSearchParams {
  tourType: string
  destination: string
  area: string
  date: string
  sort?: string
  participants?: number
}

// ── Component ─────────────────────────────────────────────────────────────────

export function TourSearchForm({ onSearch, className = '' }: TourSearchFormProps) {
  const [tourType, setTourType] = useState('group')
  const [destination, setDestination] = useState('')
  const [area, setArea] = useState('urban')
  const [date, setDate] = useState(dayjs('2026-04-07'))
  const [sortBy, setSortBy] = useState<string | null>('cheapest')
  const [participants, setParticipants] = useState<string>('')

  const handleParticipantsChange = (val: string) => {
    // Only allow digits and remove leading zeros
    const numericVal = val.replace(/\D/g, '').replace(/^0+/, '')
    setParticipants(numericVal)
  }

  const isGroup = tourType === 'group'

  const handleSearch = () => {
    onSearch?.({
      tourType,
      destination,
      area,
      date: date.format('DD/MM/YYYY'),
      sort: isGroup ? sortBy ?? undefined : undefined,
      participants: !isGroup && participants ? Number(participants) : undefined,
    })
  }

  return (
    <ConfigProvider
      theme={{
        components: {
          Select: {
            borderRadius: 20,
          },
          Input: {
            borderRadius: 20,
          },
        },
      }}
    >
      <div className={`w-full overflow-hidden rounded-[20px] bg-white shadow-lg ${className}`}>
        {/* Sub-Tab Header */}
        <div className="px-6 pt-5 pb-0 flex flex-wrap gap-3">
          {TOUR_TYPES.map((type) => {
            const Icon = type.icon
            const isActive = tourType === type.key
            return (
              <button
                key={type.key}
                onClick={() => setTourType(type.key)}
                className={`flex items-center gap-2 px-2 h-[35px] rounded-[5px] border transition-all cursor-pointer font-semibold text-[15px] sm:text-[17px] ${isActive
                  ? 'border-primary text-primary bg-primary/5 shadow-[0_0_0_1px_rgba(69,88,182,0.1)]'
                  : 'border-text-secondary text-text-main hover:border-primary/50 hover:text-primary/80'
                  }`}
              >
                <Icon width={18} height={18} color={isActive ? brandColors.primary : brandColors.textMain} />
                {type.label}
              </button>
            )
          })}
        </div>

        {/* Form Content */}
        <div className="px-4 py-4 sm:px-6 sm:py-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:flex xl:flex-row items-start sm:items-end gap-4 xl:gap-3 w-full">

            <TourDestinationInput
              value={destination}
              onSelect={setDestination}
              className="col-span-1 sm:col-span-1 xl:flex-[2] w-full"
            />

            <TourAreaSelect
              value={area}
              onSelect={setArea}
              className="col-span-1 sm:col-span-1 xl:flex-[1] w-full"
            />

            {/* Thời gian */}
            <div className="col-span-1 sm:col-span-1 xl:flex-[1] w-full">
              <p className="text-[15px] sm:text-[17px] font-semibold text-text-main mb-2 px-1">
                Thời gian
              </p>
              <div className="flex items-center h-[45px] sm:h-[55px] border border-border-main rounded-[20px] bg-white px-4 gap-2">
                <TourCalendarIcon width={20} height={20} className="shrink-0" />
                <DatePicker
                  variant="borderless"
                  value={date}
                  onChange={(val) => { if (val) setDate(val) }}
                  format="DD/MM/YYYY"
                  placeholder="Chọn ngày"
                  suffixIcon={null}
                  size="large"
                  className="flex-1 !px-0 font-semibold"
                />
              </div>
            </div>

            {/* Nút sắp xếp (Tour ghép) | Số người tham gia (Tour tự thiết kế) + Search */}
            <div className="col-span-1 sm:col-span-1 xl:flex-[1.5] flex items-end gap-2 w-full">
              {isGroup ? (
                /* Sort buttons */
                <div className="flex-1 flex items-center sm:justify-center gap-2 h-[45px] sm:h-[55px]">
                  {SORT_OPTIONS_GROUP.map((opt) => {
                    const isSelected = sortBy === opt.key
                    return (
                      <Tag
                        key={opt.key}
                        onClick={() => setSortBy(opt.key)}
                        className={`cursor-pointer transition-all px-4 h-[32px] rounded-[5px] text-[15px] font-semibold whitespace-nowrap flex items-center justify-center ${isSelected
                          ? 'bg-[#54858C] text-white'
                          : 'bg-[#54858C]/50 text-white'
                          }`}
                      >
                        {opt.label}
                      </Tag>
                    )
                  })}
                </div>
              ) : (
                /* Số người tham gia */
                <div className="flex-1 w-full">
                  <p className="text-[15px] sm:text-[17px] font-semibold text-text-main mb-2 px-1">
                    Số người tham gia
                  </p>
                  <div className="flex items-center h-[45px] sm:h-[55px] border border-border-main rounded-[20px] bg-white px-4 gap-2">
                    <TourUsersIcon width={20} height={20} color="#4558B6" className="shrink-0" />
                    <Input
                      variant="borderless"
                      placeholder="Nhập số người"
                      value={participants}
                      onChange={(e) => handleParticipantsChange(e.target.value)}
                      className="flex-1 !px-0 !text-[15px] sm:!text-[17px] font-semibold"
                      size="large"
                    />
                  </div>
                </div>
              )}

              {/* Nút tìm kiếm (Desktop) */}
              <div className={`hidden xl:block ${isGroup ? '' : 'mt-[30px]'}`}>
                <Button
                  type="primary"
                  onClick={handleSearch}
                  className="!h-[45px] sm:!h-[55px] !w-[55px] sm:!w-[60px] !rounded-[20px] flex items-center justify-center shadow-md cursor-pointer"
                >
                  <Search2Icon color="white" width={26} height={26} />
                </Button>
              </div>
            </div>
          </div>

          {/* Nút tìm kiếm (Mobile/Tablet) */}
          <div className="xl:hidden mt-6">
            <Button
              type="primary"
              onClick={handleSearch}
              className="w-full !h-[45px] sm:!h-[55px] !rounded-[16px] sm:!rounded-[20px] flex items-center justify-center gap-2 font-semibold !text-[17px] shadow-md cursor-pointer"
            >
              <Search2Icon color="white" width={26} height={26} />
              Tìm kiếm
            </Button>
          </div>
        </div>
      </div>
    </ConfigProvider>
  )
}
