import { Card } from 'antd'
import { useLocation } from 'react-router-dom'

export function MenuPlaceholderPage() {
  const { pathname } = useLocation()

  return (
    <div className="p-6">
      <Card title="Màn hình đang phát triển">
        <p>Đường dẫn: {pathname}</p>
      </Card>
    </div>
  )
}
