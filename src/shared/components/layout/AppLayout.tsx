import { Layout } from 'antd'
import { Outlet } from 'react-router-dom'
import { Sidebar } from './Sidebar'
import { Header } from './Header'

const { Content } = Layout

export function AppLayout() {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sidebar />
      <Layout>
        <Header />
        <Content style={{ padding: 0, background: 'var(--ant-color-bg-layout)' }}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  )
}
