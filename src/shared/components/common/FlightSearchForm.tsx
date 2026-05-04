import { useState } from 'react'

import { Button, Checkbox, DatePicker, Select } from 'antd'

import dayjs from 'dayjs'

import { brandColors } from '@/shared/lib/antd-theme/tokens'

import {
  ArrowExchangeIcon,
  CalendarIcon,
  PlaneLandingIcon,
  PlaneTakeoffIcon,
  Search2Icon,
  UsersIcon} from '@/assets/icons/icons'
import { CITIES, PASSENGER_OPTIONS, TICKET_TYPES } from '@/mocks/data/flights'

export interface FlightSearchParams {
  ticketType: string
  from: string
  to: string
  dates: [string, string]
  tripType: string
  passengers: string
}

interface FlightSearchFormProps {
  onSearch?: (params: FlightSearchParams) => void
  className?: string
}

export function FlightSearchForm({ onSearch, className = '' }: FlightSearchFormProps) {
  const [activeTab, setActiveTab] = useState('lao-dong')
  const [from, setFrom] = useState<string>('HAN')
  const [to, setTo] = useState<string>('SGN')
  const [tripType, setTripType] = useState('round-trip')
  const [passengers, setPassengers] = useState('1-1')
  const [dates, setDates] = useState<[dayjs.Dayjs, dayjs.Dayjs]>([
    dayjs('2026-04-07'),
    dayjs('2026-04-09'),
  ])

  const handleSwap = () => {
    setFrom(to)
    setTo(from)
  }

  const handleSearch = () => {
    onSearch?.({
      ticketType: activeTab,
      from,
      to,
      dates: tripType === 'round-trip'
        ? [dates[0].format('DD/MM/YYYY'), dates[1].format('DD/MM/YYYY')]
        : [dates[0].format('DD/MM/YYYY'), ''],
      tripType,
      passengers,
    })
  }

  return (
    <div className={`w-full overflow-hidden rounded-[20px] bg-white shadow-lg ${className}`}>
      {/* Tab Header (Ticket Types) */}
      <div className="px-6 pt-5 pb-0 flex flex-wrap gap-4">
        {TICKET_TYPES.map((type) => {
          const Icon = type.icon
          const isActive = activeTab === type.key
          return (
            <button
              key={type.key}
              onClick={() => setActiveTab(type.key)}
              className={`flex items-center gap-2 px-2 h-[35px] rounded-[5px] border transition-all cursor-pointer font-semibold text-[15px] sm:text-[17px] ${isActive
                ? 'border-primary text-primary bg-primary/5 shadow-[0_0_0_1px_rgba(69,88,182,0.1)]'
                : 'border-[#BCBCBC] text-[#3A3A3A] hover:border-primary/50 hover:text-primary/80'
                }`}
            >
              <Icon
                width={18}
                height={18}
                color={isActive ? brandColors.primary : '#3A3A3A'}
              />
              {type.label}
            </button>
          )
        })}
      </div>

      {/* Form Content */}
      <div className="px-4 py-4 sm:px-6 sm:py-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:flex xl:flex-row items-start xl:items-end gap-4 xl:gap-3 w-full">

          {/* Điểm đi & Điểm đến */}
          <div className="col-span-1 sm:col-span-2 xl:flex-[2] flex flex-col">
            
            {/* --- MOBILE LAYOUT (< 640px) --- */}
            <div className="sm:hidden relative flex flex-col gap-4">
              <div className="relative">
                <p className="text-[15px] sm:text-[17px] font-semibold text-text-main mb-2 text-left px-1">Chọn điểm đi</p>
                <div className="flex items-center h-[45px] sm:h-[55px] border border-border-main rounded-[20px] bg-white px-4 overflow-hidden">
                  <PlaneTakeoffIcon className="shrink-0" color={brandColors.primary} />
                  <Select
                    variant="borderless"
                    className="flex-1 text-left min-w-0"
                    size="large"
                    value={from}
                    onChange={setFrom}
                    options={CITIES}
                    showSearch
                    filterOption={(input, option) =>
                      (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                    }
                    suffixIcon={null}
                    placeholder="Từ"
                  />
                </div>
              </div>

              {/* Mobile Swap Button */}
              <div className="absolute z-20 left-1/2 top-[calc(50%+16px)] -translate-x-1/2 -translate-y-1/2 rotate-90">
                <button
                  onClick={handleSwap}
                  className="w-[30px] h-[50px] bg-white border border-border-main rounded-[10px] flex items-center justify-center hover:bg-surface-hover transition-colors shadow-sm"
                >
                  <ArrowExchangeIcon width={20} height={20} color={brandColors.primary} />
                </button>
              </div>

              <div className="relative">
                <p className="text-[15px] md:text-[17px] font-semibold text-text-main mb-2 text-left px-1">Chọn điểm đến</p>
                <div className="flex items-center h-[45px] sm:h-[55px] border border-border-main rounded-[20px] bg-white px-4 overflow-hidden">
                  <PlaneLandingIcon className="shrink-0" color={brandColors.primary} />
                  <Select
                    variant="borderless"
                    className="flex-1 text-left min-w-0"
                    size="large"
                    value={to}
                    onChange={setTo}
                    options={CITIES}
                    showSearch
                    filterOption={(input, option) =>
                      (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                    }
                    suffixIcon={null}
                    placeholder="Đến"
                  />
                </div>
              </div>
            </div>

            {/* --- DESKTOP / TABLET LAYOUT (>= 640px) --- */}
            <div className="hidden sm:block">
              <div className="flex mb-2">
                <p className="text-[15px] sm:text-[17px] font-semibold text-text-main flex-1 text-left px-1">Chọn điểm đi</p>
                <p className="text-[15px] sm:text-[17px] font-semibold text-text-main flex-1 text-left px-1 pl-8">Chọn điểm đến</p>
              </div>
              <div className="relative flex items-center h-[55px] border border-border-main rounded-[20px] bg-white">
                <div className="flex items-center flex-1 h-full px-4 overflow-hidden">
                  <PlaneTakeoffIcon className="shrink-0" color={brandColors.primary} />
                  <Select
                    variant="borderless"
                    className="flex-1 text-left min-w-0"
                    size="large"
                    value={from}
                    onChange={setFrom}
                    options={CITIES}
                    showSearch
                    filterOption={(input, option) =>
                      (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                    }
                    suffixIcon={null}
                    placeholder="Từ"
                  />
                </div>

                {/* Vertical Separator and Swap Button */}
                <div className="relative flex items-center justify-center w-[1px] h-full bg-border-main">
                  <button
                    onClick={handleSwap}
                    className="absolute w-[36px] h-[36px] bg-white border border-border-main rounded-[10px] flex items-center justify-center hover:bg-surface-hover transition-colors cursor-pointer z-20 shadow-sm"
                  >
                    <ArrowExchangeIcon width={22} height={22} color={brandColors.primary} />
                  </button>
                </div>

                <div className="flex items-center flex-1 h-full px-4 pl-10 overflow-hidden">
                  <PlaneLandingIcon className="shrink-0" color={brandColors.primary} />
                  <Select
                    variant="borderless"
                    className="flex-1 text-left min-w-0"
                    size="large"
                    value={to}
                    onChange={setTo}
                    options={CITIES}
                    showSearch
                    filterOption={(input, option) =>
                      (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                    }
                    suffixIcon={null}
                    placeholder="Đến"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Thời gian */}
          <div className="col-span-1 xl:flex-[1.1]">
            <div className="flex justify-between items-center mb-2 px-1">
              <p className="text-[15px] sm:text-[17px] font-semibold text-text-main text-left">Thời gian</p>
              <Checkbox
                checked={tripType === 'round-trip'}
                onChange={(e) => setTripType(e.target.checked ? 'round-trip' : 'one-way')}
                className="text-text-main font-medium"
              >
                Khứ hồi
              </Checkbox>
            </div>
            <div className="relative flex items-center h-[45px] sm:h-[55px] border border-border-main rounded-[20px] bg-white">
              <div className="flex items-center flex-1 h-full px-3 xl:pl-4 xl:pr-2 overflow-hidden">
                <CalendarIcon width={22} height={22} className="shrink-0 mr-1 sm:mr-2" />
                <DatePicker
                  variant="borderless"
                  className="flex-1 min-w-0 !px-0"
                  size="large"
                  value={dates[0]}
                  onChange={(val) => {
                    if (val) setDates([val, dates[1]])
                  }}
                  format="DD/MM/YYYY"
                  placeholder="Ngày đi"
                  suffixIcon={null}
                />
              </div>

              <div className="w-[1px] h-full bg-border-main shrink-0" />

              <div className={`flex items-center flex-1 h-full px-3 xl:pl-4 xl:pr-2 overflow-hidden ${tripType === 'one-way' ? 'bg-surface-hover opacity-60 rounded-r-[20px]' : ''}`}>
                <CalendarIcon width={22} height={22} color={tripType === 'round-trip' ? brandColors.primary : brandColors.textMuted} className="shrink-0 mr-1 sm:mr-2" />
                <DatePicker
                  variant="borderless"
                  className="flex-1 min-w-0 !px-0"
                  size="large"
                  value={dates[1]}
                  onChange={(val) => {
                    if (val) setDates([dates[0], val])
                  }}
                  format="DD/MM/YYYY"
                  placeholder="Ngày về"
                  suffixIcon={null}
                  disabled={tripType === 'one-way'}
                />
              </div>
            </div>
          </div>

          {/* Số khách, hạng ghế */}
          <div className="col-span-1 xl:flex-[0.8] flex items-end gap-2">
            <div className="flex-1">
              <p className="text-[15px] sm:text-[17px] font-semibold text-text-main mb-2 px-1 text-left">Số khách, hạng ghế</p>
              <div className="flex items-center h-[45px] sm:h-[55px] border border-border-main rounded-[20px] bg-white px-4 overflow-hidden">
                <UsersIcon width={24} height={24} className="shrink-0" />
                <Select
                  variant="borderless"
                  className="flex-1 text-left"
                  size="large"
                  value={passengers}
                  onChange={setPassengers}
                  options={PASSENGER_OPTIONS}
                  suffixIcon={null}
                />
              </div>
            </div>

            {/* Nút tìm kiếm */}
            <div className="hidden xl:block">
              <Button
                type="primary"
                onClick={handleSearch}
                className="!h-[55px] !w-[60px] !rounded-[20px] bg-primary flex items-center justify-center shadow-md"
              >
                <Search2Icon color="#FFFFFF" width={28} height={28} />
              </Button>
            </div>
          </div>
        </div>

        {/* Nút tìm kiếm (Mobile/Tablet) */}
        <div className="xl:hidden mt-6">
          <Button
            type="primary"
            onClick={handleSearch}
            className="w-full !h-[45px] sm:!h-[55px] !rounded-[16px] sm:!rounded-[20px] bg-primary flex items-center justify-center gap-2 text-white font-semibold !text-[17px] shadow-md"
          >
            <Search2Icon color="#FFFFFF" width={26} height={26} />
            Tìm kiếm
          </Button>
        </div>
      </div>
    </div>
  )
}
