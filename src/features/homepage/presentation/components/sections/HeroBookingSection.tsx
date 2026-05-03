import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import { Button, DatePicker, Radio, Select } from 'antd'
import {
  CalendarOutlined,
  EnvironmentOutlined,
  SearchOutlined,
  TeamOutlined,
} from '@ant-design/icons'

import dayjs from 'dayjs'

const BOOKING_TABS = ['flight', 'tour', 'train', 'hotel', 'transfer'] as const

const CITIES = [
  { value: 'HAN', label: 'Hà Nội (HAN)' },
  { value: 'SGN', label: 'TP. Hồ Chí Minh (SGN)' },
  { value: 'DAD', label: 'Đà Nẵng (DAD)' },
  { value: 'CXR', label: 'Nha Trang (CXR)' },
  { value: 'PQC', label: 'Phú Quốc (PQC)' },
]

export function HeroBookingSection() {
  const { t } = useTranslation('homepage')
  const [tab, setTab] = useState<(typeof BOOKING_TABS)[number]>('flight')
  const [trip, setTrip] = useState<'one' | 'round' | 'multi'>('round')
  const [from, setFrom] = useState('HAN')
  const [to, setTo] = useState('SGN')
  const [depart, setDepart] = useState(dayjs('2026-05-10'))
  const [ret, setRet] = useState(dayjs('2026-05-12'))
  const [pax, setPax] = useState('1-econ')

  return (
    <section className="relative w-full">
      <div
        className="relative min-h-[300px] md:min-h-[340px] overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #4558B6 0%, #5a4fcf 45%, #6b5bb5 100%)',
        }}
      >
        <img
          src="/images/banner.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-25 mix-blend-overlay pointer-events-none"
        />
        <div className="relative z-10 max-w-[1200px] mx-auto px-4 pt-10 pb-28 text-center">
          <h1 className="text-white text-3xl md:text-[44px] font-bold leading-tight drop-shadow-sm mb-6">
            {t('hero.title')}
          </h1>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 text-white">
            <div className="flex items-center gap-2">
              <img src="/images/shield-check.svg" alt="" className="w-8 h-8" />
              <span className="font-semibold text-base md:text-lg">{t('hero.badge.safe')}</span>
            </div>
            <div className="flex items-center gap-2">
              <img src="/images/shield-check.svg" alt="" className="w-8 h-8" />
              <span className="font-semibold text-base md:text-lg">{t('hero.badge.support')}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 -mt-24 relative z-20 pb-10">
        <div className="rounded-2xl bg-white shadow-xl border border-gray-100 overflow-hidden">
          <div className="flex flex-wrap border-b border-gray-100 bg-gray-50/80">
            {BOOKING_TABS.map((key) => (
              <button
                key={key}
                type="button"
                onClick={() => setTab(key)}
                className={`px-4 py-3 text-sm font-semibold transition-colors border-b-2 -mb-px
                  ${tab === key ? 'text-[#4558B6] border-[#4558B6] bg-white' : 'text-gray-600 border-transparent hover:text-gray-900'}`}
              >
                {t(`booking.tabs.${key}`)}
              </button>
            ))}
          </div>

          <div className="p-4 md:p-6 space-y-4">
            <Radio.Group
              value={trip}
              onChange={(e) => setTrip(e.target.value)}
              className="flex flex-wrap gap-4"
            >
              <Radio value="one">{t('booking.trip.one')}</Radio>
              <Radio value="round">{t('booking.trip.round')}</Radio>
              <Radio value="multi">{t('booking.trip.multi')}</Radio>
            </Radio.Group>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3 items-end">
              <div className="lg:col-span-3 space-y-1">
                <p className="text-xs font-medium text-gray-500">{t('booking.from')}</p>
                <Select
                  size="large"
                  className="w-full"
                  value={from}
                  onChange={setFrom}
                  options={CITIES}
                  suffixIcon={<EnvironmentOutlined />}
                  showSearch
                  filterOption={(input, option) =>
                    (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                  }
                />
              </div>
              <div className="lg:col-span-3 space-y-1">
                <p className="text-xs font-medium text-gray-500">{t('booking.to')}</p>
                <Select
                  size="large"
                  className="w-full"
                  value={to}
                  onChange={setTo}
                  options={CITIES}
                  suffixIcon={<EnvironmentOutlined />}
                  showSearch
                  filterOption={(input, option) =>
                    (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                  }
                />
              </div>
              <div className="lg:col-span-2 space-y-1">
                <p className="text-xs font-medium text-gray-500">{t('booking.depart')}</p>
                <DatePicker
                  size="large"
                  className="w-full"
                  value={depart}
                  onChange={(d) => d && setDepart(d)}
                  suffixIcon={<CalendarOutlined />}
                />
              </div>
              <div className="lg:col-span-2 space-y-1">
                <p className="text-xs font-medium text-gray-500">{t('booking.return')}</p>
                <DatePicker
                  size="large"
                  className="w-full"
                  value={ret}
                  onChange={(d) => d && setRet(d)}
                  suffixIcon={<CalendarOutlined />}
                />
              </div>
              <div className="lg:col-span-1 space-y-1 min-w-[140px]">
                <p className="text-xs font-medium text-gray-500">{t('booking.pax')}</p>
                <Select
                  size="large"
                  className="w-full"
                  value={pax}
                  onChange={setPax}
                  suffixIcon={<TeamOutlined />}
                  options={[
                    { value: '1-econ', label: t('booking.paxOptions.1econ') },
                    { value: '2-econ', label: t('booking.paxOptions.2econ') },
                  ]}
                />
              </div>
              <div className="lg:col-span-1 flex lg:justify-end">
                <Button
                  type="primary"
                  size="large"
                  icon={<SearchOutlined />}
                  className="h-12! w-full! lg:w-12! rounded-xl! bg-[#4558B6]! shadow-md"
                  style={{ minWidth: 48 }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
