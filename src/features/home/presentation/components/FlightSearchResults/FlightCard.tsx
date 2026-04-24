import { Button, Tag, Tooltip } from 'antd'
import { DownOutlined } from '@ant-design/icons'

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
  onDetail?: (flight: Flight) => void
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
          opacity: active ? 1 : 0.3,
          cursor: 'default',
        }}
      >
        {icon}
      </span>
    </Tooltip>
  )
}

export function FlightCard({ flight, onBook, onDetail }: Props) {
  const formattedPrice = flight.price.toLocaleString('vi-VN') + ' đ'

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        padding: '12px 16px',
        borderBottom: '1px solid #f3f4f6',
        background: flight.isFeatured ? '#fffbf0' : '#fff',
        transition: 'background 0.15s',
        cursor: 'default',
      }}
      onMouseEnter={(e) => {
        if (!flight.isFeatured)
          (e.currentTarget as HTMLDivElement).style.background = '#f9fafb'
      }}
      onMouseLeave={(e) => {
        if (!flight.isFeatured)
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

      <div style={{ flex: 1, fontSize: 14, color: '#374151', fontWeight: 500 }}>
        {flight.departTime} - {flight.arriveTime}
      </div>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          width: 180,
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

      <div style={{ width: 140, textAlign: 'right' }}>
        <div
          style={{
            fontSize: 16,
            fontWeight: 700,
            color: '#111827',
          }}
        >
          {formattedPrice}
        </div>
      </div>

      <div style={{ width: 100, display: 'flex', justifyContent: 'center' }}>
        <Button
          type="link"
          size="small"
          icon={<DownOutlined />}
          onClick={() => onDetail?.(flight)}
          style={{ color: '#2563eb', fontSize: 13 }}
        >
          Chi tiết
        </Button>
      </div>

      <div style={{ width: 110, display: 'flex', justifyContent: 'flex-end' }}>
        <Button
          type="primary"
          size="middle"
          onClick={() => onBook?.(flight)}
          style={{
            background: '#f97316',
            borderColor: '#f97316',
            borderRadius: 8,
            fontWeight: 600,
            fontSize: 14,
          }}
        >
          Đặt vé
        </Button>
      </div>
    </div>
  )
}
