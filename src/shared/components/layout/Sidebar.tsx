import { Layout, Menu } from 'antd'
import {
  DashboardOutlined,
  TeamOutlined,
} from '@ant-design/icons'
import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const { Sider } = Layout

export function Sidebar() {
  const { t } = useTranslation('common')
  const location = useLocation()

  const path = location.pathname
  const selectedKey = path.startsWith('/users') ? ['/users'] : ['/dashboard']

  return (
    <Sider breakpoint="lg" collapsedWidth={0} theme="dark" width={220}>
      <div style={{ padding: 16, color: '#fff', fontWeight: 600 }}>App</div>
      <Menu
        theme="dark"
        mode="inline"
        selectedKeys={selectedKey}
        items={[
          {
            key: '/dashboard',
            icon: <DashboardOutlined />,
            label: <Link to="/dashboard">{t('nav.dashboard')}</Link>,
          },
          {
            key: '/users',
            icon: <TeamOutlined />,
            label: <Link to="/users">{t('nav.users')}</Link>,
          },
        ]}
      />
    </Sider>
  )
}
