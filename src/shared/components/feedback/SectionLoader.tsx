import { Spin } from 'antd'

export function SectionLoader() {
  return (
    <div className="flex justify-center py-10">
      <Spin size="large" />
    </div>
  )
}
