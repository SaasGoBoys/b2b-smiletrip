import { useState } from 'react'

import { Button, Checkbox, ConfigProvider, DatePicker, Select, Tabs } from 'antd'

import dayjs from 'dayjs'

import { brandColors } from '@/shared/lib/antd-theme/tokens'

import { ArrowExchangeIcon, CalendarIcon, PlaneLandingIcon, PlaneTakeoffIcon, Search2Icon, UsersIcon } from '@/assets/icons/icons'

const TICKET_TYPES = [
  { key: 'lao-dong', label: 'Vé lao động' },
  { key: 'du-hoc', label: 'Vé du học' },
  { key: 'block', label: 'Vé block' },
  { key: 'charter', label: 'Vé charter' },
]

const CITIES = [
  { value: 'HAN', label: 'Hà Nội (HAN)' },
  { value: 'SGN', label: 'TP. Hồ Chí Minh (SGN)' },
  { value: 'DAD', label: 'Đà Nẵng (DAD)' },
  { value: 'CXR', label: 'Nha Trang (CXR)' },
  { value: 'PQC', label: 'Phú Quốc (PQC)' },
  { value: 'VII', label: 'Vinh (VII)' },
  { value: 'HPH', label: 'Hải Phòng (HPH)' },
  { value: 'HUI', label: 'Huế (HUI)' },
]


const PASSENGER_OPTIONS = [
  { value: '1-1', label: '1 người lớn, Phổ thông' },
  { value: '2-1', label: '2 người lớn, Phổ thông' },
  { value: '1-2', label: '1 người lớn, Thương gia' },
  { value: '3-1', label: '3 người lớn, Phổ thông' },
]

interface Props {
  onSearch?: (params: FlightSearchParams) => void
}

export interface FlightSearchParams {
  ticketType: string
  from: string
  to: string
  dates: [string, string]
  tripType: string
  passengers: string
}

export function FlightSearchForm({ onSearch }: Props) {
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
    <div className="w-full overflow-hidden rounded-[20px] bg-white shadow-lg">
      <ConfigProvider
        theme={{
          components: {
            Tabs: {
              titleFontSize: 18,
              itemColor: brandColors.textMain,
              itemHoverColor: brandColors.primary,
              itemSelectedColor: brandColors.primary,
            },
          },
        }}
      >
        <Tabs
          activeKey={activeTab}
          onChange={setActiveTab}
          items={TICKET_TYPES.map((t) => ({
            key: t.key,
            label: <span className="font-semibold">{t.label}</span>,
          }))}
          style={{ padding: '0 24px' }}
          tabBarStyle={{
            marginBottom: 0,
            borderBottom: '1px solid #f0f0f0',
          }}
        />
      </ConfigProvider>

      <div className="px-6 py-5">
        <div className="flex items-end gap-3 w-full">
          {/* Điểm đi & Điểm đến */}
          <div className="flex-[2] min-w-[500px]">
            <div className="flex mb-2">
              <p className="text-[17px] font-semibold text-text-main flex-1 text-left px-1">Chọn điểm đi</p>
              <p className="text-[17px] font-semibold text-text-main flex-1 text-left px-1 pl-8">Chọn điểm đến</p>
            </div>
            <div className="relative flex items-center h-[60px] border border-border-main rounded-[20px] bg-white">
              <div className="flex items-center flex-1 h-full px-4 overflow-hidden">
                <PlaneTakeoffIcon className="shrink-0" />
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

              <div className="relative flex items-center justify-center w-[1px] h-[40px] bg-border-main">
                <button
                  onClick={handleSwap}
                  className="absolute w-[44px] h-[40px] bg-white border border-border-main rounded-[10px] flex items-center justify-center hover:bg-surface-hover transition-colors cursor-pointer z-20"
                >
                  <ArrowExchangeIcon width={24} height={24} />
                </button>
              </div>

              <div className="flex items-center flex-1 h-full px-4 pl-10 overflow-hidden">
                <PlaneLandingIcon className="shrink-0" />
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

          {/* Thời gian */}
          <div className="flex-[0.8] min-w-[350px]">
            <div className="flex justify-between items-center mb-2 px-1">
              <p className="text-[17px] font-semibold text-text-main text-left">Thời gian</p>
              <Checkbox
                checked={tripType === 'round-trip'}
                onChange={(e) => setTripType(e.target.checked ? 'round-trip' : 'one-way')}
                className="text-text-main font-medium"
              >
                Khứ hồi
              </Checkbox>
            </div>
            <div className="relative flex items-center h-[60px] border border-border-main rounded-[20px] bg-white">
              <div className="flex items-center flex-1 h-full px-4">
                <CalendarIcon width={24} height={24} className="shrink-0" />
                <DatePicker
                  variant="borderless"
                  className="flex-1"
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

              <div className="w-[1px] h-[32px] bg-border-main" />

              <div className={`flex items-center flex-1 h-full px-4 ${tripType === 'one-way' ? 'bg-surface-hover opacity-60' : ''}`}>
                <CalendarIcon width={24} height={24} color={tripType === 'round-trip' ? brandColors.primary : brandColors.textMuted} className="shrink-0" />
                <DatePicker
                  variant="borderless"
                  className="flex-1"
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

          {/* Số lượng */}
          <div className="flex-[0.8] min-w-[240px]">
            <p className="text-[17px] font-semibold text-text-main mb-2 px-1 text-left">Số khách, hạng ghế</p>
            <div className="flex items-center h-[60px] border border-border-main rounded-[20px] bg-white px-4">
              <UsersIcon width={24} height={24} className="shrink-0" />
              <Select
                variant="borderless"
                style={{ width: '100%' }}
                size="large"
                value={passengers}
                onChange={setPassengers}
                options={PASSENGER_OPTIONS}
                suffixIcon={null}
                className="text-left flex-1"
                placeholder="Số khách, hạng ghế"
              />
            </div>
          </div>

          {/* Nút tìm kiếm */}
          <div className="shrink-0">
            <Button
              type="primary"
              icon={<Search2Icon color="#FFFFFF" width={38} height={38} />}
              onClick={handleSearch}
              className="!h-[60px] !w-[60px] flex items-center justify-center border-none !rounded-[20px] transition-all"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
