import { useState } from 'react'
import { Button, Tag, Tabs, Tooltip } from 'antd'
import {
  WarningFilled,
  CheckCircleFilled,
  CloseCircleFilled,
  SwapOutlined,
} from '@ant-design/icons'
import type { Flight } from './FlightCard'

const PRIMARY = '#4558B6'

interface FareTier {
  id: string
  name: string
  price: number
  originalPrice?: number
  tag?: string
  tagColor?: string
  baggage: string
  changeFee: string
  refundFee: string
  meal: boolean
  entertainment: boolean
  charging: boolean
}

const FARE_TIERS: FareTier[] = [
  {
    id: 'eco-basic',
    name: 'Phổ thông cơ bản',
    price: 2882660,
    originalPrice: 5834000,
    tag: 'Rẻ nhất',
    tagColor: '#059669',
    baggage: '7kg xách tay',
    changeFee: '550.000đ',
    refundFee: 'Không hoàn',
    meal: false,
    entertainment: false,
    charging: false,
  },
  {
    id: 'eco-flex',
    name: 'Phổ thông linh hoạt',
    price: 3450000,
    baggage: '7kg xách tay + 23kg ký gửi',
    changeFee: '220.000đ',
    refundFee: '550.000đ',
    meal: true,
    entertainment: false,
    charging: true,
  },
  {
    id: 'business',
    name: 'Thương gia',
    price: 6900000,
    baggage: '10kg xách tay + 32kg ký gửi',
    changeFee: 'Miễn phí',
    refundFee: 'Miễn phí',
    meal: true,
    entertainment: true,
    charging: true,
  },
]

const PROMOTIONS = [
  { code: 'BAYFSHOLIDAY', label: 'BAYFSHOLIDAY giảm đến 50%', color: '#ef4444' },
  { code: 'BAYFS44', label: 'BAYFS44 giảm đến 999K', color: '#f97316' },
  { code: 'UU_DAI', label: 'Ưu đãi mừng 30/4', color: '#dc2626' },
]

interface Benefit {
  label: string
  included: boolean
}

function BenefitRow({ label, included }: Benefit) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        padding: '6px 0',
        borderBottom: '1px solid #f3f4f6',
        fontSize: 13,
        color: included ? '#111827' : '#9ca3af',
      }}
    >
      {included ? (
        <CheckCircleFilled style={{ color: '#059669', fontSize: 15 }} />
      ) : (
        <CloseCircleFilled style={{ color: '#d1d5db', fontSize: 15 }} />
      )}
      {label}
    </div>
  )
}

function FareTierCard({
  tier,
  selected,
  onSelect,
}: {
  tier: FareTier
  selected: boolean
  onSelect: () => void
}) {
  return (
    <div
      onClick={onSelect}
      style={{
        border: selected ? `2px solid ${PRIMARY}` : '2px solid #e5e7eb',
        borderRadius: 10,
        padding: '14px 16px',
        cursor: 'pointer',
        background: selected ? '#f0f3ff' : '#fff',
        transition: 'all 0.15s',
        flex: '1 1 0',
        minWidth: 0,
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          marginBottom: 10,
        }}
      >
        <div>
          <div style={{ fontSize: 13, fontWeight: 700, color: '#111827', marginBottom: 2 }}>
            {tier.name}
          </div>
          {tier.tag && (
            <Tag
              style={{
                background: tier.tagColor,
                borderColor: tier.tagColor,
                color: '#fff',
                fontSize: 11,
                borderRadius: 4,
                padding: '0 6px',
              }}
            >
              {tier.tag}
            </Tag>
          )}
        </div>
        <div style={{ textAlign: 'right' }}>
          {tier.originalPrice && (
            <div
              style={{
                fontSize: 11,
                color: '#9ca3af',
                textDecoration: 'line-through',
                lineHeight: 1.2,
              }}
            >
              {tier.originalPrice.toLocaleString('vi-VN')}đ
            </div>
          )}
          <div style={{ fontSize: 15, fontWeight: 700, color: PRIMARY }}>
            {tier.price.toLocaleString('vi-VN')}đ
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        <div style={{ fontSize: 12, color: '#6b7280' }}>🧳 {tier.baggage}</div>
        <div style={{ fontSize: 12, color: '#6b7280' }}>
          <SwapOutlined style={{ fontSize: 11 }} /> Đổi lịch: {tier.changeFee}
        </div>
        <div style={{ fontSize: 12, color: '#6b7280' }}>↩ Hoàn vé: {tier.refundFee}</div>
      </div>

      <Button
        type={selected ? 'primary' : 'default'}
        size="small"
        block
        style={{
          marginTop: 12,
          borderRadius: 6,
          background: selected ? PRIMARY : undefined,
          borderColor: selected ? PRIMARY : undefined,
          fontWeight: 600,
          fontSize: 12,
        }}
      >
        {selected ? 'Đã chọn' : 'Chọn hạng này'}
      </Button>
    </div>
  )
}

function TabChiTiet({ flight }: { flight: Flight }) {
  const [selectedTier, setSelectedTier] = useState(FARE_TIERS[0].id)

  console.log({ flight })

  return (
    <div style={{ padding: '16px 0' }}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          padding: '8px 12px',
          background: '#fffbeb',
          border: '1px solid #fde68a',
          borderRadius: 8,
          marginBottom: 16,
        }}
      >
        <WarningFilled style={{ color: '#f59e0b', fontSize: 16 }} />
        <span style={{ fontSize: 13, color: '#92400e', fontWeight: 500 }}>
          Còn 9 ghế cho chuyến bay này
        </span>
      </div>

      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
        {FARE_TIERS.map((tier) => (
          <FareTierCard
            key={tier.id}
            tier={tier}
            selected={selectedTier === tier.id}
            onSelect={() => setSelectedTier(tier.id)}
          />
        ))}
      </div>
    </div>
  )
}

function TabLoiIch({ flight }: { flight: Flight }) {
  const benefits: Benefit[] = [
    { label: 'Hành lý xách tay (7kg)', included: flight.amenities.handLuggage },
    { label: 'Hành lý ký gửi (23kg)', included: flight.amenities.checkInLuggage },
    { label: 'Sạc điện thoại / cổng USB', included: flight.amenities.charging },
    { label: 'Suất ăn trên máy bay', included: flight.amenities.meal },
    { label: 'Màn hình giải trí cá nhân', included: flight.amenities.entertainment },
    { label: 'Chọn chỗ ngồi', included: true },
    { label: 'Ưu tiên lên máy bay', included: false },
    { label: 'Phòng chờ thương gia', included: false },
  ]

  return (
    <div style={{ padding: '16px 0' }}>
      {benefits.map((b) => (
        <BenefitRow key={b.label} {...b} />
      ))}
    </div>
  )
}

function TabHoanVe() {
  return (
    <div style={{ padding: '16px 0', fontSize: 13, color: '#374151', lineHeight: 1.8 }}>
      <p>
        <strong>Phí hoàn vé:</strong> Theo quy định của hãng hàng không
      </p>
      <p>
        <strong>Hạng Phổ thông cơ bản:</strong> Không được hoàn vé
      </p>
      <p>
        <strong>Hạng Phổ thông linh hoạt:</strong> Phí hoàn 550.000đ/hành khách
      </p>
      <p>
        <strong>Hạng Thương gia:</strong> Miễn phí hoàn vé trước 24 giờ khởi hành
      </p>
      <p style={{ color: '#6b7280', fontSize: 12, marginTop: 8 }}>
        * Chính sách hoàn vé có thể thay đổi theo quy định của hãng và thời điểm đặt vé
      </p>
    </div>
  )
}

function TabDoiLich() {
  return (
    <div style={{ padding: '16px 0', fontSize: 13, color: '#374151', lineHeight: 1.8 }}>
      <p>
        <strong>Phí đổi lịch:</strong> Theo quy định của hãng hàng không
      </p>
      <p>
        <strong>Hạng Phổ thông cơ bản:</strong> 550.000đ/hành khách + chênh lệch giá vé
      </p>
      <p>
        <strong>Hạng Phổ thông linh hoạt:</strong> 220.000đ/hành khách + chênh lệch giá vé
      </p>
      <p>
        <strong>Hạng Thương gia:</strong> Miễn phí đổi lịch (1 lần)
      </p>
      <p style={{ color: '#6b7280', fontSize: 12, marginTop: 8 }}>
        * Đổi lịch phải thực hiện trước giờ khởi hành ít nhất 2 giờ
      </p>
    </div>
  )
}

function TabKhuyenMai() {
  return (
    <div style={{ padding: '16px 0' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {PROMOTIONS.map((promo) => (
          <div
            key={promo.code}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              padding: '12px 16px',
              border: '1px dashed #e5e7eb',
              borderRadius: 8,
              background: '#fff',
            }}
          >
            <div
              style={{
                padding: '4px 10px',
                borderRadius: 6,
                background: promo.color,
                color: '#fff',
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: '0.5px',
                flexShrink: 0,
              }}
            >
              {promo.code}
            </div>
            <span style={{ fontSize: 13, color: '#374151', fontWeight: 500 }}>{promo.label}</span>
          </div>
        ))}
      </div>
      <p style={{ fontSize: 12, color: '#9ca3af', marginTop: 12 }}>
        * Áp dụng mã khuyến mãi khi thanh toán. Điều kiện áp dụng tùy theo từng chương trình.
      </p>
    </div>
  )
}

interface Props {
  flight: Flight
  onBook?: (flight: Flight) => void
}

export function FlightDetailPanel({ flight, onBook }: Props) {
  const [activeTab, setActiveTab] = useState('chi-tiet')

  const tabItems = [
    {
      key: 'chi-tiet',
      label: 'Chi tiết',
      children: <TabChiTiet flight={flight} />,
    },
    {
      key: 'loi-ich',
      label: 'Các lợi ích đi kèm',
      children: <TabLoiIch flight={flight} />,
    },
    {
      key: 'hoan-ve',
      label: 'Hoàn vé',
      children: <TabHoanVe />,
    },
    {
      key: 'doi-lich',
      label: 'Đổi lịch',
      children: <TabDoiLich />,
    },
    {
      key: 'khuyen-mai',
      label: 'Khuyến mãi',
      children: <TabKhuyenMai />,
    },
  ]

  return (
    <div
      style={{
        background: '#f8f9ff',
        border: '1px solid #dde3f7',
        borderTop: `3px solid ${PRIMARY}`,
        padding: '0 20px 20px',
        animation: 'slideDown 0.2s ease',
      }}
    >
      <div
        style={{
          display: 'flex',
          gap: 8,
          padding: '12px 0',
          flexWrap: 'wrap',
        }}
      >
        {PROMOTIONS.map((promo) => (
          <Tooltip key={promo.code} title={promo.label}>
            <span
              style={{
                padding: '3px 10px',
                borderRadius: 20,
                background: promo.color,
                color: '#fff',
                fontSize: 11,
                fontWeight: 600,
                cursor: 'default',
                whiteSpace: 'nowrap',
              }}
            >
              {promo.label}
            </span>
          </Tooltip>
        ))}
      </div>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Tabs
          activeKey={activeTab}
          onChange={setActiveTab}
          items={tabItems}
          size="small"
          style={{ flex: 1 }}
          tabBarStyle={{ marginBottom: 0 }}
          tabBarExtraContent={
            <Button
              type="primary"
              style={{
                background: PRIMARY,
                borderColor: PRIMARY,
                borderRadius: 8,
                fontWeight: 600,
              }}
              onClick={() => onBook?.(flight)}
            >
              Đặt vé ngay
            </Button>
          }
        />
      </div>
    </div>
  )
}
