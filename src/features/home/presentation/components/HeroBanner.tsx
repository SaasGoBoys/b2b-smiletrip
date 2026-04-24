import { SafetyCertificateOutlined } from '@ant-design/icons'

const BANNER_IMG = 'http://localhost:3845/assets/86dfffd8d2e44a87911db030ae4b650c5b370ebd.png'
const SHIELD_ICON = 'http://localhost:3845/assets/fb40f24c3927b5cbe35d8b36c358f1bb202361df.svg'

interface Props {
  children?: React.ReactNode
}

export function HeroBanner({ children }: Props) {
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        minHeight: 480,
        overflow: 'hidden',
      }}
    >
      <img
        src={BANNER_IMG}
        alt="VFJLink banner"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          pointerEvents: 'none',
        }}
        onError={(e) => {
          const target = e.currentTarget
          target.style.display = 'none'
          const parent = target.parentElement
          if (parent) {
            parent.style.background =
              'linear-gradient(135deg, #0f2d6b 0%, #1a5276 40%, #1abc9c 100%)'
          }
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(180deg, rgba(10,30,80,0.55) 0%, rgba(10,30,80,0.3) 60%, rgba(10,30,80,0.5) 100%)',
        }}
      />

      <div
        style={{
          position: 'relative',
          zIndex: 10,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          paddingTop: 140,
          paddingBottom: 80,
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
            marginBottom: 32,
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
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <img
              src={SHIELD_ICON}
              alt="shield"
              style={{ width: 32, height: 32 }}
              onError={(e) => {
                e.currentTarget.style.display = 'none'
              }}
            />
            <span
              style={{
                color: '#fff',
                fontSize: 18,
                fontWeight: 600,
              }}
            >
              Hỗ trợ nhanh chóng
            </span>
          </div>
        </div>

        {children}
      </div>
    </div>
  )
}
