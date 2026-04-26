import { SafetyCertificateOutlined } from '@ant-design/icons'

const BANNER_IMG = '/images/banner.jpg'
const SHIELD_ICON = '/images/shield-check.svg'

interface Props {
  children?: React.ReactNode
}

export function HeroBanner({ children }: Props) {
  return (
    <div className="relative w-full h-[300px]">
      <img
        src={BANNER_IMG}
        alt="VFJLink banner"
        className="w-full h-full object-cover pointer-events-none absolute inset-0"
      />

      <div
        style={{
          position: 'relative',
          zIndex: 10,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          paddingTop: 70,
          textAlign: 'center',
        }}
      >
        <h1
          style={{
            color: 'rgba(255,255,255,0.95)',
            fontSize: 52,
            fontWeight: 700,
            margin: '0 0 24px',
            lineHeight: 1.2,
            letterSpacing: '-1px',
            textShadow: '0 2px 8px rgba(0,0,0,0.3)',
          }}
        >
          Đi khắp muôn nơi cùng VFJLink
        </h1>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 48,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <img
              src={SHIELD_ICON}
              alt="shield"
              style={{ width: 32, height: 32 }}
              onError={(e) => {
                e.currentTarget.style.display = 'none'
              }}
            />
            <SafetyCertificateOutlined
              style={{ color: '#4ade80', fontSize: 24, display: 'none' }}
            />
            <span
              style={{
                color: '#fff',
                fontSize: 18,
                fontWeight: 600,
              }}
            >
              Thanh toán an toàn
            </span>
          </div>
          <div className="flex items-center gap-2">
            <img
              src={SHIELD_ICON}
              alt="shield"
              style={{ width: 32, height: 32 }}
              onError={(e) => {
                e.currentTarget.style.display = 'none'
              }}
            />
            <span className="text-white text-sm font-medium">Hỗ trợ nhanh chóng</span>
          </div>
        </div>

        {children}
      </div>
    </div>
  )
}
