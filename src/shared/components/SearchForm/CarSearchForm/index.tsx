import { useState } from 'react'

import { Button, Checkbox, ConfigProvider, DatePicker, TimePicker } from 'antd'

import dayjs from 'dayjs'

import { brandColors } from '@/shared/lib/antd-theme/tokens'

import { AirportSearchInput } from './AirportSearchInput'

import {
  CalendarIcon,
  MapPinIcon,
  RescheduleClockIcon,
  Search2Icon,
} from '@/assets/icons/icons'

export interface CarSearchParams {
  transferType: string
  airport: string
  location: string
  time: string
  date: string
  carType: string
}

interface CarSearchFormProps {
  onSearch?: (params: CarSearchParams) => void
  className?: string
}

export function CarSearchForm({ onSearch, className = '' }: CarSearchFormProps) {
  const [transferType, setTransferType] = useState('pickup')
  const [airport, setAirport] = useState('')
  const [location, setLocation] = useState('')
  const [time, setTime] = useState<dayjs.Dayjs | null>(dayjs('13:30', 'HH:mm'))
  const [date, setDate] = useState<dayjs.Dayjs | null>(dayjs('2026-03-28'))
  const [carType, setCarType] = useState('4')

  const handleSearch = () => {
    onSearch?.({
      transferType,
      airport,
      location,
      time: time ? time.format('HH:mm') : '',
      date: date ? date.format('DD/MM/YYYY') : '',
      carType,
    })
  }

  const renderAirportInput = () => (
    <AirportSearchInput
      value={airport}
      onSelect={setAirport}
      transferType={transferType}
    />
  )

  const renderLocationInput = () => (
    <div className="col-span-1 lg:col-span-2 xl:flex-[1.5] w-full">
      <p className="text-[15px] sm:text-[17px] font-semibold text-text-main mb-2 text-left px-1">
        {transferType === 'pickup' ? 'Điểm đến' : 'Điểm đón'}
      </p>
      <div className="relative flex items-center h-[45px] sm:h-[55px] border border-border-main rounded-[20px] bg-white hover:border-primary/40 transition-colors">
        <div className="flex items-center flex-1 h-full px-4 overflow-hidden group">
          <MapPinIcon className="shrink-0" color={brandColors.primary} width={22} height={22} />
          <input
            className="flex-1 bg-transparent border-none outline-none ml-2 text-[15px] text-text-main placeholder:text-text-muted w-full h-full"
            placeholder={transferType === 'pickup' ? 'Nhập điểm đến' : 'Nhập điểm đón'}
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
      </div>
    </div>
  )

  return (
    <ConfigProvider
      theme={{
        components: {
          Radio: {
            colorPrimary: brandColors.primary,
          },
          Checkbox: {
            colorPrimary: brandColors.primary,
          },
        },
      }}
    >
      <div className={`w-full overflow-hidden rounded-[20px] bg-white shadow-lg ${className}`}>
        {/* Form Content */}
        <div className="px-4 py-4 sm:px-6 sm:py-5">
          <div className="mb-4 sm:mb-5 flex gap-4 sm:gap-6">
            <Checkbox
              checked={transferType === 'pickup'}
              onChange={() => setTransferType('pickup')}
              className="text-[15px] sm:text-[16px] font-medium text-text-main m-0"
            >
              Đón tại sân bay
            </Checkbox>
            <Checkbox
              checked={transferType === 'dropoff'}
              onChange={() => setTransferType('dropoff')}
              className="text-[15px] sm:text-[16px] font-medium text-text-main m-0"
            >
              Trả khách tại sân bay
            </Checkbox>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 xl:flex xl:flex-row items-start xl:items-end gap-4 xl:gap-3 w-full">
            {/* Swap inputs based on transferType */}
            {transferType === 'pickup' ? (
              <>
                {renderAirportInput()}
                {renderLocationInput()}
              </>
            ) : (
              <>
                {renderLocationInput()}
                {renderAirportInput()}
              </>
            )}

            {/* Thời gian */}
            <div className="col-span-1 lg:col-span-1 xl:flex-[1] w-full">
              <p className="text-[15px] sm:text-[17px] font-semibold text-text-main mb-2 text-left px-1">
                Chọn Giờ đón
              </p>
              <div className="relative flex items-center h-[45px] sm:h-[55px] border border-border-main rounded-[20px] bg-white">
                <div className="flex items-center flex-1 h-full px-3 sm:px-4 overflow-hidden">
                  <RescheduleClockIcon width={22} height={22} color={brandColors.primary} className="shrink-0 mr-1 sm:mr-2" />
                  <TimePicker
                    variant="borderless"
                    className="flex-1 min-w-0 !px-0"
                    size="large"
                    value={time}
                    onChange={(val) => setTime(val)}
                    format="HH:mm"
                    placeholder="13:30"
                    suffixIcon={null}
                    allowClear={false}
                  />
                </div>
              </div>
            </div>

            <div className="col-span-1 lg:col-span-1 xl:flex-[1.1] w-full">
              <p className="text-[15px] sm:text-[17px] font-semibold text-text-main mb-2 text-left px-1">
                Chọn ngày đón
              </p>
              <div className="relative flex items-center h-[45px] sm:h-[55px] border border-border-main rounded-[20px] bg-white">
                <div className="flex items-center flex-1 h-full px-3 sm:px-4 overflow-hidden">
                  <CalendarIcon width={22} height={22} color={brandColors.primary} className="shrink-0 mr-1 sm:mr-2" />
                  <DatePicker
                    variant="borderless"
                    className="flex-1 min-w-0 !px-0"
                    size="large"
                    value={date}
                    onChange={(val) => setDate(val)}
                    format="DD/MM/YYYY"
                    placeholder="Ngày đón"
                    suffixIcon={null}
                  />
                </div>
              </div>
            </div>

            {/* Chọn loại xe */}
            <div className="col-span-1 sm:col-span-2 lg:col-span-3 xl:flex-[1.2] w-full">
              <p className="text-[15px] sm:text-[17px] font-semibold text-text-main mb-2 text-left px-1">
                Chọn loại xe
              </p>
              <div className="flex items-center justify-between xl:justify-start xl:gap-4 h-[45px] sm:h-[55px] w-full">
                <div className="flex gap-1 items-center h-full">
                  <Checkbox
                    checked={carType === '4'}
                    onChange={() => setCarType('4')}
                    className="text-[15px] sm:text-[16px] font-medium text-text-main m-0"
                  >
                    4 chỗ
                  </Checkbox>
                  <Checkbox
                    checked={carType === '7'}
                    onChange={() => setCarType('7')}
                    className="text-[15px] sm:text-[16px] font-medium text-text-main m-0"
                  >
                    7 chỗ
                  </Checkbox>
                </div>

                {/* Nút tìm kiếm Desktop/Tablet */}
                <div className="hidden sm:block xl:ml-auto">
                  <Button
                    type="primary"
                    onClick={handleSearch}
                    className="!h-[55px] !w-[60px] !rounded-[20px] flex items-center justify-center shadow-md cursor-pointer"
                  >
                    <Search2Icon color="white" width={28} height={28} />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Nút tìm kiếm Mobile */}
          <div className="sm:hidden mt-6">
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
