import { useState } from 'react'
import { Button, DatePicker, Select, Tabs } from 'antd'
import {
  SwapOutlined,
  SearchOutlined,
  EnvironmentOutlined,
  CalendarOutlined,
  TeamOutlined,
} from '@ant-design/icons'
import dayjs from 'dayjs'

const { RangePicker } = DatePicker

const TICKET_TYPES = [
  { key: 'le-dong', label: 'Vé lẻ đợng' },
  { key: 'doan-dong', label: 'Vé đoàn đợng' },
  { key: 'ebuoc', label: 'Vé eBuộc' },
  { key: 'charter', label: 'Vé Charter' },
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

const TRIP_TYPES = [
  { value: 'round-trip', label: 'Khứ hồi' },
  { value: 'one-way', label: 'Một chiều' },
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
  const [activeTab, setActiveTab] = useState('le-dong')
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
      dates: [dates[0].format('DD/MM/YYYY'), dates[1].format('DD/MM/YYYY')],
      tripType,
      passengers,
    })
  }

  return (
    <div
      style={{
        background: '#fff',
        borderRadius: 16,
        boxShadow: '0 8px 40px rgba(0,0,0,0.18)',
        overflow: 'hidden',
        width: '100%',
        maxWidth: 1120,
      }}
    >
      <Tabs
        activeKey={activeTab}
        onChange={setActiveTab}
        items={TICKET_TYPES.map((t) => ({ key: t.key, label: t.label }))}
        style={{ padding: '0 24px' }}
        tabBarStyle={{
          marginBottom: 0,
          borderBottom: '1px solid #f0f0f0',
        }}
      />

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          padding: '16px 24px',
          flexWrap: 'wrap',
        }}
      >
        <div style={{ flex: '1 1 180px', minWidth: 160 }}>
          <Select
            style={{ width: '100%' }}
            size="large"
            value={from}
            onChange={setFrom}
            options={CITIES}
            showSearch
            filterOption={(input, option) =>
              (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
            }
            suffixIcon={<EnvironmentOutlined />}
            placeholder="Chọn điểm đi"
          />
        </div>

        <Button
          icon={<SwapOutlined />}
          shape="circle"
          size="large"
          onClick={handleSwap}
          style={{
            flexShrink: 0,
            border: '1px solid #d9d9d9',
            color: '#2563eb',
          }}
        />

        <div style={{ flex: '1 1 180px', minWidth: 160 }}>
          <Select
            style={{ width: '100%' }}
            size="large"
            value={to}
            onChange={setTo}
            options={CITIES}
            showSearch
            filterOption={(input, option) =>
              (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
            }
            suffixIcon={<EnvironmentOutlined />}
            placeholder="Chọn điểm đến"
          />
        </div>

        <div style={{ flex: '1 1 260px', minWidth: 220 }}>
          <RangePicker
            style={{ width: '100%' }}
            size="large"
            value={dates}
            onChange={(vals) => {
              if (vals?.[0] && vals?.[1]) {
                setDates([vals[0], vals[1]])
              }
            }}
            format="DD/MM/YYYY"
            suffixIcon={<CalendarOutlined />}
          />
        </div>

        <div style={{ flex: '0 0 130px' }}>
          <Select
            style={{ width: '100%' }}
            size="large"
            value={tripType}
            onChange={setTripType}
            options={TRIP_TYPES}
          />
        </div>

        <div style={{ flex: '1 1 200px', minWidth: 180 }}>
          <Select
            style={{ width: '100%' }}
            size="large"
            value={passengers}
            onChange={setPassengers}
            options={PASSENGER_OPTIONS}
            suffixIcon={<TeamOutlined />}
          />
        </div>

        <Button
          type="primary"
          size="large"
          icon={<SearchOutlined />}
          onClick={handleSearch}
          style={{
            flexShrink: 0,
            background: '#2563eb',
            borderColor: '#2563eb',
            borderRadius: 10,
            height: 40,
            paddingInline: 28,
            fontWeight: 600,
          }}
        >
          Tìm kiếm
        </Button>
      </div>
    </div>
  )
}
