import { Component, type ErrorInfo, type ReactNode } from 'react'
import { Button, Result } from 'antd'

interface Props {
  children: ReactNode
  fallback?: ReactNode
}

interface State {
  hasError: boolean
  error: Error | null
}

export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false, error: null }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('ErrorBoundary caught:', error, info)
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) return this.props.fallback
      return (
        <Result
          status="500"
          title="Đã xảy ra lỗi"
          subTitle={this.state.error?.message}
          extra={
            <Button
              type="primary"
              onClick={() => this.setState({ hasError: false, error: null })}
            >
              Thử lại
            </Button>
          }
        />
      )
    }
    return this.props.children
  }
}
