import { Button, Input, Space } from 'antd'
import {
  SearchOutlined,
  UserOutlined,
  DownOutlined,
} from '@ant-design/icons'

const BANNER_IMG = 'http://localhost:3845/assets/86dfffd8d2e44a87911db030ae4b650c5b370ebd.png'

export function HomeNavbar() {
  return (
    <header
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 80px',
        height: 72,
        background: 'rgba(0,0,0,0.15)',
        backdropFilter: 'blur(4px)',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <div
          style={{
            width: 36,
            height: 36,
            borderRadius: 8,
            background: 'linear-gradient(135deg, #1d4ed8, #06b6d4)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 800,
            color: '#fff',
            fontSize: 14,
          }}
        >
          VFJ
        </div>
        <span
          style={{
            color: '#fff',
            fontWeight: 700,
            fontSize: 20,
            letterSpacing: '-0.5px',
          }}
        >
          VFJLink
        </span>
      </div>

      <nav style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
        <button
          style={{
            background: 'none',
            border: 'none',
            color: '#fff',
            fontSize: 14,
            fontWeight: 500,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: 4,
            padding: 0,
          }}
        >
          Sản Phẩm <DownOutlined style={{ fontSize: 10 }} />
        </button>
        <button
          style={{
            background: 'none',
            border: 'none',
            color: '#fff',
            fontSize: 14,
            fontWeight: 500,
            cursor: 'pointer',
            padding: 0,
          }}
        >
          Chính sách đại lý
        </button>
        <button
          style={{
            background: 'none',
            border: 'none',
            color: '#fff',
            fontSize: 14,
            fontWeight: 500,
            cursor: 'pointer',
            padding: 0,
          }}
        >
          Thống kê liên hệ
        </button>
      </nav>

      <div style={{ flex: 1, maxWidth: 320, margin: '0 32px' }}>
        <Input
          prefix={<SearchOutlined style={{ color: 'rgba(255,255,255,0.7)' }} />}
          placeholder="Tìm kiếm..."
          style={{
            background: 'rgba(255,255,255,0.15)',
            border: '1px solid rgba(255,255,255,0.3)',
            borderRadius: 8,
            color: '#fff',
          }}
        />
      </div>

      <Space size={12}>
        <Button
          icon={<UserOutlined />}
          style={{
            background: 'rgba(255,255,255,0.15)',
            border: '1px solid rgba(255,255,255,0.3)',
            color: '#fff',
            borderRadius: 8,
          }}
        />
        <Button
          style={{
            background: 'transparent',
            border: '1px solid #fff',
            color: '#fff',
            borderRadius: 8,
            fontWeight: 500,
          }}
        >
          Đăng nhập
        </Button>
        <Button
          type="primary"
          style={{
            borderRadius: 8,
            fontWeight: 500,
            background: '#4558B6',
          }}
        >
          Đăng ký
        </Button>
      </Space>
    </header>
  )
}

export { BANNER_IMG }
