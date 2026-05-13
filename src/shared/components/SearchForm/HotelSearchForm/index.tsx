import { useState } from 'react'

import { Button, ConfigProvider, DatePicker, Select } from 'antd'

import dayjs from 'dayjs'

import { brandColors } from '@/shared/lib/antd-theme/tokens'

import { DestinationSearchInput } from './DestinationSearchInput'
import { HotelGuestSelectPopover } from './HotelGuestSelect'

import {
  CalendarIcon,
  Search2Icon,
  WorldIcon,
} from '@/assets/icons/icons'

const { RangePicker } = DatePicker

interface HotelSearchFormProps {
  onSearch?: (params: HotelSearchParams) => void
  className?: string
}

export interface HotelSearchParams {
  destination: string
  checkIn: string
  checkOut: string
  rooms: number
  adults: number
  children: number
  nationality: string
}

const NATIONALITY_OPTIONS = [
  { value: 'VN', label: 'Việt Nam' },
  { value: 'US', label: 'Hoa Kỳ' },
  { value: 'JP', label: 'Nhật Bản' },
  { value: 'KR', label: 'Hàn Quốc' },
  { value: 'CN', label: 'Trung Quốc' },
]

export function HotelSearchForm({ onSearch, className = '' }: HotelSearchFormProps) {
  const [destination, setDestination] = useState('')
  const [dates, setDates] = useState<[dayjs.Dayjs, dayjs.Dayjs]>([
    dayjs('2026-03-28'),
    dayjs('2026-04-02'),
  ])
  const [guestCounts, setGuestCounts] = useState({ rooms: 2, adults: 1, children: 0 })
  const [nationality, setNationality] = useState('VN')

  const handleSearch = () => {
    onSearch?.({
      destination,
      checkIn: dates[0].format('DD/MM/YYYY'),
      checkOut: dates[1].format('DD/MM/YYYY'),
      rooms: guestCounts.rooms,
      adults: guestCounts.adults,
      children: guestCounts.children,
      nationality,
    })
  }

  return (
    <ConfigProvider
      theme={{
        components: {
          Popover: { padding: 0, borderRadiusLG: 12 },
          Select: {
            controlHeight: 55,
            controlHeightLG: 55,
            borderRadius: 20,
            borderRadiusLG: 20,
            colorBorder: brandColors.borderMain,
            fontSize: 14,
          },
        },
      }}
    >
      <div className={`w-full overflow-hidden rounded-[20px] bg-white shadow-lg ${className}`}>
        {/* Form Content */}
        <div className="px-4 py-4 sm:px-6 sm:py-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:flex xl:flex-row items-start xl:items-end gap-4 xl:gap-3 w-full">

            {/* Điểm đến */}
            <DestinationSearchInput
              value={destination}
              onSelect={setDestination}
              className="col-span-1 xl:flex-[1.3]"
            />

            {/* Thời gian lưu trú */}
            <div className="col-span-1 xl:flex-[1.3] w-full">
              <p className="text-[15px] sm:text-[17px] font-semibold text-text-main mb-2 px-1 text-left">
                Thời gian lưu trú
              </p>
              <div className="relative flex items-center h-[45px] sm:h-[55px] border border-border-main rounded-[20px] bg-white hover:border-primary/60 transition-colors">
                <div className="absolute left-3 sm:left-4 z-10 pointer-events-none">
                  <CalendarIcon
                    width={22}
                    height={22}
                    color={brandColors.primary}
                    className="shrink-0"
                  />
                </div>
                <RangePicker
                  variant="borderless"
                  className="flex-1 !w-full !pl-10 sm:!pl-10 !pr-3 sm:!pr-4 hotel-range-picker [&_.ant-picker-input]:flex-1 [&_.ant-picker-input_input]:text-center [&_.ant-picker-range-separator]:px-0"
                  size="large"
                  value={dates}
                  onChange={(vals) => {
                    if (vals?.[0] && vals?.[1]) {
                      setDates([vals[0], vals[1]])
                    }
                  }}
                  format="DD/MM/YYYY"
                  placeholder={['Nhận phòng', 'Trả phòng']}
                  suffixIcon={null}
                // separator={<span className="text-text-muted text-[13px] w-[40px] text-center flex-shrink-0">đến</span>}
                />
              </div>
            </div>

            {/* Số khách & số phòng */}
            <HotelGuestSelectPopover
              counts={guestCounts}
              onCountsChange={setGuestCounts}
              className="col-span-1 xl:flex-[1.2]"
            />

            {/* Quốc tịch + Nút tìm kiếm */}
            <div className="col-span-1 xl:col-span-1 xl:flex-[1] flex items-end gap-2 sm:gap-3 w-full">
              {/* Quốc tịch */}
              <div className="flex-1 min-w-0">
                <p className="text-[15px] sm:text-[17px] font-semibold text-text-main mb-2 px-1">
                  Quốc tịch
                </p>
                <Select
                  className="w-full hotel-nationality-select !h-[45px] sm:!h-[55px] [&_.ant-select-selector]:!rounded-[20px] [&_.ant-select-selector]:!border-border-main hover:[&_.ant-select-selector]:!border-primary/60 transition-all"
                  size="large"
                  value={nationality}
                  onChange={setNationality}
                  suffixIcon={null}
                  prefix={
                    <WorldIcon
                      width={22}
                      height={22}
                      color={brandColors.primary}
                      className="shrink-0 mr-1"
                    />
                  }
                  popupClassName="hotel-nationality-dropdown"
                  options={NATIONALITY_OPTIONS}
                />
              </div>

              {/* Nút tìm kiếm Desktop */}
              <div className="hidden xl:block shrink-0">
                <Button
                  type="primary"
                  onClick={handleSearch}
                  id="hotel-search-btn-desktop"
                  className="!h-[55px] !w-[60px] !rounded-[20px] flex items-center justify-center shadow-md cursor-pointer"
                >
                  <Search2Icon color="white" width={28} height={28} />
                </Button>
              </div>

              {/* Nút tìm kiếm Tablet (sm-xl) */}
              <div className="hidden sm:block xl:hidden shrink-0">
                <Button
                  type="primary"
                  onClick={handleSearch}
                  id="hotel-search-btn-tablet"
                  className="!h-[45px] sm:!h-[55px] !w-[55px] sm:!w-[60px] !rounded-[16px] sm:!rounded-[20px] flex items-center justify-center shadow-md cursor-pointer"
                >
                  <Search2Icon color="white" width={26} height={26} />
                </Button>
              </div>
            </div>
          </div>

          {/* Nút tìm kiếm Mobile */}
          <div className="sm:hidden mt-4">
            <Button
              type="primary"
              onClick={handleSearch}
              id="hotel-search-btn-mobile"
              className="w-full !h-[45px] !rounded-[16px] flex items-center justify-center gap-2 font-semibold !text-[17px] shadow-md cursor-pointer"
            >
              <Search2Icon color="white" width={22} height={22} />
              Tìm kiếm
            </Button>
          </div>
        </div>
      </div>
    </ConfigProvider>
  )
}
