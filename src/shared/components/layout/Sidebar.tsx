import { Layout } from 'antd'

const { Sider } = Layout

export function Sidebar() {
  return (
    <Sider breakpoint="lg" collapsedWidth={0} width={40} style={{ background: '#4F65CD' }}></Sider>
  )
}
