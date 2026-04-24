import { Button, Divider } from 'antd'
import { SendOutlined } from '@ant-design/icons'

interface SelectedFlight {
  leg: number
  day: string
  route: string
  airline: string
  departTime: string
  arriveTime: string
  isDirectFlight: boolean
  changeLabel: string
}

interface Props {
  flights: SelectedFlight[]
  totalPrice: number
  onContinue?: () => void
}

export function FlightSummaryCard({ flights, totalPrice, onContinue }: Props) {
  return (
    <div
      style={{
        background: '#fff',
        border: '1px solid #e5e7eb',
        borderRadius: 12,
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          padding: '14px 16px',
          borderBottom: '1px solid #f0f0f0',
        }}
      >
        <SendOutlined style={{ color: '#4558B6', fontSize: 18 }} />
        <span style={{ fontSize: 15, fontWeight: 600, color: '#111827' }}>Chuyến bay của bạn</span>
      </div>

      {flights.map((flight, index) => (
        <div key={flight.leg}>
          <div style={{ padding: '12px 16px 8px' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 10 }}>
              <div
                style={{
                  width: 24,
                  height: 24,
                  borderRadius: '50%',
                  background: '#4558B6',
                  color: '#fff',
                  fontSize: 12,
                  fontWeight: 700,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  marginTop: 2,
                }}
              >
                {flight.leg}
              </div>
              <div>
                <div style={{ fontSize: 13, fontWeight: 600, color: '#374151', lineHeight: 1.4 }}>
                  {flight.day}
                </div>
                <div style={{ fontSize: 12, color: '#6b7280', lineHeight: 1.4 }}>
                  {flight.route}
                </div>
              </div>
            </div>

            <div
              style={{
                paddingLeft: 34,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: 4,
              }}
            >
              <div>
                <div style={{ fontSize: 12, color: '#9ca3af', marginBottom: 2 }}>
                  {flight.airline}
                </div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    fontSize: 15,
                    fontWeight: 700,
                    color: '#111827',
                  }}
                >
                  <span>{flight.departTime}</span>
                  <span style={{ fontSize: 12, color: '#9ca3af' }}>✈</span>
                  <span>{flight.arriveTime}</span>
                </div>
                {flight.isDirectFlight && (
                  <div style={{ fontSize: 11, color: '#059669', marginTop: 2 }}>Bay thẳng</div>
                )}
              </div>
            </div>

            <div style={{ paddingLeft: 34 }}>
              <Button
                size="small"
                style={{
                  borderRadius: 6,
                  fontSize: 12,
                  color: '#4558B6',
                  borderColor: '#4558B6',
                }}
              >
                {flight.changeLabel}
              </Button>
            </div>
          </div>

          {index < flights.length - 1 && (
            <Divider style={{ margin: '0 16px', width: 'calc(100% - 32px)', minWidth: 'unset' }} />
          )}
        </div>
      ))}

      <div
        style={{
          padding: '12px 16px',
          borderTop: '1px solid #f0f0f0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div>
          <div style={{ fontSize: 11, color: '#9ca3af' }}>Tổng</div>
          <div style={{ fontSize: 16, fontWeight: 700, color: '#111827' }}>
            {totalPrice.toLocaleString('vi-VN')} đ
            <span style={{ fontSize: 12, color: '#9ca3af', fontWeight: 400 }}>/khách</span>
          </div>
        </div>
        <Button
          type="primary"
          style={{
            background: '#4558B6',
            borderColor: '#4558B6',
            borderRadius: 8,
            fontWeight: 600,
          }}
          onClick={onContinue}
        >
          Tiếp tục
        </Button>
      </div>
    </div>
  )
}
