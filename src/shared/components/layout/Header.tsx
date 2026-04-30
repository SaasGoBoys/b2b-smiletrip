import { Button, Input,Layout, Space } from 'antd'
import { DownOutlined, SearchOutlined, UserOutlined } from '@ant-design/icons'

import { useAuth } from '@/features/auth'

const { Header: AntHeader } = Layout

export function Header() {
  const { logout, user } = useAuth()

  return (
    <AntHeader
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 20,
        paddingInline: 24,
        height: 72,
        background: '#4558B6',
        borderBottom: 'none',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 20, minWidth: 430 }}>
        <Button type="text" style={{ color: '#fff', fontWeight: 500, paddingInline: 0 }}>
          Sản Phẩm <DownOutlined style={{ fontSize: 10 }} />
        </Button>
        <Button type="text" style={{ color: '#fff', fontWeight: 500, paddingInline: 0 }}>
          Chính sách đại lý
        </Button>
        <Button type="text" style={{ color: '#fff', fontWeight: 500, paddingInline: 0 }}>
          Thông tin liên hệ
        </Button>
      </div>

      <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
        <Input
          prefix={<SearchOutlined style={{ color: '#9ca3af' }} />}
          placeholder="Tìm kiếm"
          style={{
            maxWidth: 420,
            borderRadius: 20,
            border: 'none',
            height: 40,
          }}
        />
      </div>

      <Space size={10}>
        <Button
          shape="circle"
          icon={<UserOutlined />}
          style={{
            background: '#F05A3E',
            borderColor: '#F05A3E',
            color: '#fff',
          }}
        />
        <Button
          type="default"
          style={{
            background: 'transparent',
            borderColor: 'rgba(255,255,255,0.8)',
            color: '#fff',
            fontWeight: 500,
          }}
        >
          Đăng nhập
        </Button>
        <Button type="primary" onClick={logout} style={{ fontWeight: 600 }}>
          Đăng ký
        </Button>
      </Space>
      <span style={{ color: 'rgba(255,255,255,0.85)', fontSize: 12 }}>
        {user?.fullName ?? user?.email ?? ''}
      </span>
    </AntHeader>
  )
}
