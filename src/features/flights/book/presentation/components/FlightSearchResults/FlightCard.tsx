import { useState } from 'react'

import { Button, Tooltip } from 'antd'
import { DownOutlined, UpOutlined } from '@ant-design/icons'

import { FlightDetailPanel } from './FlightDetailPanel'

const PRIMARY = '#4558B6'

export interface Flight {
  id: string
  airline: string
  airlineCode: string
  logoUrl?: string
  flightNumber: string
  departTime: string
  arriveTime: string
  duration: string
  isDirectFlight: boolean
  price: number
  amenities: {
    handLuggage: boolean
    checkInLuggage: boolean
    charging: boolean
    meal: boolean
    entertainment: boolean
  }
  promotions?: string[]
  isFeatured?: boolean
}

interface Props {
  flight: Flight
  onBook?: (flight: Flight) => void
}

const AIRLINE_COLORS: Record<string, string> = {
  'Vietnam Airlines': '#e8f4fd',
  'Vietjet Air': '#fff0f0',
  'Bamboo Airway': '#f0fff4',
  'Vietravel Airlines': '#fff7e6',
  'Sun Phu Quoc Airway': '#fdf4ff',
}

function AirlineLogo({ airline, logoUrl }: { airline: string; logoUrl?: string }) {
  const color = AIRLINE_COLORS[airline] ?? '#f5f5f5'
  const initials = airline
    .split(' ')
    .map((w) => w[0])
    .join('')
    .slice(0, 3)
    .toUpperCase()

  if (logoUrl) {
    return (
      <div
        style={{
          width: 40,
          height: 40,
          borderRadius: 8,
          background: color,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
        }}
      >
        <img src={logoUrl} alt={airline} style={{ width: 32, height: 32, objectFit: 'contain' }} />
      </div>
    )
  }

  return (
    <div
      style={{
        width: 40,
        height: 40,
        borderRadius: 8,
        background: color,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 10,
        fontWeight: 700,
        color: '#374151',
        letterSpacing: '0.5px',
      }}
    >
      {initials}
    </div>
  )
}

function AmenityIcon({ icon, active, label }: { icon: string; active: boolean; label: string }) {
  return (
    <Tooltip title={label}>
      <span
        style={{
          fontSize: 16,
          opacity: active ? 1 : 0.25,
          cursor: 'default',
          filter: active ? 'none' : 'grayscale(100%)',
        }}
      >
        {icon}
      </span>
    </Tooltip>
  )
}

export function FlightCard({ flight, onBook }: Props) {
  const [showDetail, setShowDetail] = useState(false)

  const formattedPrice = flight.price.toLocaleString('vi-VN') + ' đ'

  const rowBg = showDetail ? '#f0f3ff' : flight.isFeatured ? '#fffbf0' : '#fff'

  return (
    <div style={{ borderBottom: '1px solid #f3f4f6' }}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          padding: '12px 16px',
          background: rowBg,
          transition: 'background 0.15s',
          cursor: 'default',
        }}
        onMouseEnter={(e) => {
          if (!showDetail && !flight.isFeatured)
            (e.currentTarget as HTMLDivElement).style.background = '#f9fafb'
        }}
        onMouseLeave={(e) => {
          if (!showDetail && !flight.isFeatured)
            (e.currentTarget as HTMLDivElement).style.background = '#fff'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, width: 280 }}>
          <AirlineLogo airline={flight.airline} logoUrl={flight.logoUrl} />
          <div>
            <div style={{ fontSize: 14, fontWeight: 600, color: '#111827' }}>
              {flight.airline}
            </div>
            <div style={{ fontSize: 12, color: '#9ca3af' }}>{flight.flightNumber}</div>
          </div>
        </div>

        <div style={{ width: 160 }}>
          <div style={{ fontSize: 14, fontWeight: 600, color: '#111827' }}>
            {flight.departTime} – {flight.arriveTime}
          </div>
          {flight.isDirectFlight && (
            <div style={{ fontSize: 11, color: '#059669' }}>✈ Bay thẳng</div>
          )}
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            width: 170,
          }}
        >
          <AmenityIcon icon="🧳" active={flight.amenities.handLuggage} label="Hành lý xách tay" />
          <AmenityIcon
            icon="🏷️"
            active={flight.amenities.checkInLuggage}
            label="Hành lý ký gửi"
          />
          <AmenityIcon icon="⚡" active={flight.amenities.charging} label="Sạc điện thoại" />
          <AmenityIcon icon="🍽️" active={flight.amenities.meal} label="Suất ăn" />
          <AmenityIcon icon="🎬" active={flight.amenities.entertainment} label="Giải trí" />
        </div>

        <div style={{ flex: 1 }} />

        <div style={{ textAlign: 'right', marginRight: 16 }}>
          <div style={{ fontSize: 16, fontWeight: 700, color: '#111827' }}>
            {formattedPrice}
          </div>
          <div
            style={{ fontSize: 11, color: '#9ca3af', textDecoration: 'line-through' }}
          >
            {(flight.price * 2.02).toLocaleString('vi-VN', { maximumFractionDigits: 0 })}đ
          </div>
        </div>

        <Button
          type="link"
          size="small"
          icon={showDetail ? <UpOutlined /> : <DownOutlined />}
          onClick={() => setShowDetail((v) => !v)}
          style={{
            color: showDetail ? PRIMARY : '#4b5563',
            fontSize: 13,
            fontWeight: showDetail ? 600 : 400,
            marginRight: 8,
            width: 90,
          }}
        >
          Chi tiết
        </Button>

        <Button
          type="primary"
          size="middle"
          onClick={() => onBook?.(flight)}
          style={{
            background: PRIMARY,
            borderColor: PRIMARY,
            borderRadius: 8,
            fontWeight: 600,
            fontSize: 14,
            width: 90,
          }}
        >
          Đặt vé
        </Button>
      </div>

      {showDetail && (
        <FlightDetailPanel
          flight={flight}
          onBook={onBook}
        />
      )}
    </div>
  )
}
