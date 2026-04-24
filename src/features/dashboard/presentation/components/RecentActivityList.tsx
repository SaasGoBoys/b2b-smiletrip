import { List, Typography } from 'antd'

const { Text } = Typography

const MOCK = [
  { id: '1', text: 'Template bootstrapped with Clean Architecture.' },
  { id: '2', text: 'Connect your API in infrastructure repositories.' },
]

export function RecentActivityList() {
  return (
    <List
      header={<Text strong>Recent activity</Text>}
      dataSource={MOCK}
      renderItem={(item) => <List.Item>{item.text}</List.Item>}
    />
  )
}
