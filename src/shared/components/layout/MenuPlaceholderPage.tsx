import { useLocation } from 'react-router-dom'

import { Card } from 'antd'

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
