import { Spin } from 'antd'

interface Props {
  fullScreen?: boolean
}

export function LoadingSpinner({ fullScreen }: Props) {
  return (
    <div
      style={
        fullScreen
          ? {
              minHeight: '40vh',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }
          : { padding: 24 }
      }
    >
      <Spin size="large" />
    </div>
  )
}
