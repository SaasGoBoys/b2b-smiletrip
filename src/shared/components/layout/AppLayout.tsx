import { Outlet } from 'react-router-dom'

import { Layout } from 'antd'

import { Header } from './Header'
import { Sidebar } from './Sidebar'

const { Content } = Layout

export function AppLayout() {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sidebar />
      <Layout>
        <Header />
        <Content
          style={{
            padding: 0,
            background: 'var(--ant-color-bg-layout)',
            height: 'calc(100vh - 72px)',
            overflowY: 'auto',
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  )
}
