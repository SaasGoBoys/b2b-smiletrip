import { Typography } from 'antd'

const { Title } = Typography

interface Destination {
  rank: number
  name: string
}

const DESTINATIONS: Destination[] = [
  { rank: 1, name: 'Vịnh Hạ Long' },
  { rank: 2, name: 'Sun World Bà Nà Hill' },
  { rank: 3, name: 'Địa đạo Củ Chi' },
  { rank: 4, name: 'Phố đường Tàu Hà Nội' },
  { rank: 5, name: 'Hòn Gầm Ghì' },
  { rank: 6, name: 'Di Sản Tràng An - Ninh Binh' },
  { rank: 7, name: 'Ngũ Hành Sơn' },
  { rank: 8, name: 'Phố cổ Hội An' },
  { rank: 9, name: 'Đồng Bằng Sông Cửu Long' },
  { rank: 10, name: 'Sông Sài Gòn' },
  { rank: 11, name: 'Cầu Rồng' },
  { rank: 12, name: 'Vịnh Lan Hạ' },
  { rank: 13, name: 'Khu phố cổ Hà Nội' },
  { rank: 14, name: 'Bản Cát Cát' },
  { rank: 15, name: 'Bãi Sao' },
  { rank: 16, name: 'Phan xi păng' },
  { rank: 17, name: 'Grand Phú Quốc' },
  { rank: 18, name: 'Tam Côc Bích Động' },
  { rank: 19, name: 'Bãi biển Mỹ Khê' },
  { rank: 20, name: 'Cầu Vàng' },
]

export function TopDestinations() {
  return (
    <div
      style={{
        padding: '40px 0 60px',
        background: '#f9fafb',
      }}
    >
      <div
        style={{
          maxWidth: 1580,
          margin: '0 auto',
          paddingInline: 16,
        }}
      >
        <Title
          level={2}
          style={{
            fontSize: 32,
            fontWeight: 700,
            color: '#111827',
            marginBottom: 32,
          }}
        >
          Các điểm tham quan hàng đầu Việt Nam
        </Title>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '12px 0',
          }}
        >
          {DESTINATIONS.map((dest) => (
            <div
              key={dest.rank}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 6,
                marginRight: 24,
                cursor: 'pointer',
              }}
            >
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minWidth: 28,
                  height: 28,
                  borderRadius: 6,
                  background: '#4558B6',
                  color: '#fff',
                  fontSize: 12,
                  fontWeight: 700,
                  flexShrink: 0,
                }}
              >
                {dest.rank}
              </span>
              <span
                style={{
                  fontSize: 14,
                  color: '#374151',
                  fontWeight: 500,
                  transition: 'color 0.15s',
                }}
                onMouseEnter={(e) => {
                  ;(e.currentTarget as HTMLSpanElement).style.color = '#4558B6'
                }}
                onMouseLeave={(e) => {
                  ;(e.currentTarget as HTMLSpanElement).style.color = '#374151'
                }}
              >
                {dest.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
