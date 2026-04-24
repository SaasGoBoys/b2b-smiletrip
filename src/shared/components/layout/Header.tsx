import { Layout, Space, Button } from 'antd'
import { MoonOutlined, SunOutlined } from '@ant-design/icons'
import { useAuth } from '@/features/auth'
import { LanguageSwitcher } from '../common/LanguageSwitcher'
import { useTheme } from '@/app/providers/ThemeProvider'

const { Header: AntHeader } = Layout

export function Header() {
  const { logout, user } = useAuth()
  const { themeMode, toggleTheme } = useTheme()

  return (
    <AntHeader
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        gap: 16,
        paddingInline: 24,
        background: 'var(--ant-color-bg-container)',
        borderBottom: '1px solid var(--ant-color-border-secondary)',
      }}
    >
      <span style={{ marginRight: 'auto' }}>{user?.fullName ?? user?.email ?? ''}</span>
      <Space>
        <LanguageSwitcher />
        <Button
          type="text"
          icon={themeMode === 'dark' ? <SunOutlined /> : <MoonOutlined />}
          onClick={toggleTheme}
          aria-label="Toggle theme"
        />
        <Button type="link" onClick={logout}>
          Log out
        </Button>
      </Space>
    </AntHeader>
  )
}
