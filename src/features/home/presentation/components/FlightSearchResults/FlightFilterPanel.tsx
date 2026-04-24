import { Checkbox, Collapse, Slider, Space, Typography } from 'antd'
import type { CheckboxChangeEvent } from 'antd/es/checkbox'

const { Panel } = Collapse
const { Text } = Typography

interface FilterState {
  ticketTypes: string[]
  directOnly: boolean
  handLuggage: boolean
  checkInLuggage: boolean
  timeFrom: [number, number]
  timeTo: [number, number]
  airlines: string[]
  seatClasses: string[]
}

interface Props {
  filters: FilterState
  onFilterChange: (filters: Partial<FilterState>) => void
}

const AIRLINES = [
  'Vietnam Airlines',
  'Bamboo Airways',
  'Vietjet Air',
  'Sun Phu Quoc Airway',
  'Vietravel Airlines',
]

const SEAT_CLASSES = [
  'Vé phổ thông',
  'Vé phổ thông cao cấp',
  'Vé hạng nhất',
  'Vé thương gia',
]

function formatTime(value: number) {
  const h = Math.floor(value)
  const m = Math.round((value - h) * 60)
  return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`
}

export function FlightFilterPanel({ filters, onFilterChange }: Props) {
  const handleAirlineChange = (airline: string, checked: boolean) => {
    const updated = checked
      ? [...filters.airlines, airline]
      : filters.airlines.filter((a) => a !== airline)
    onFilterChange({ airlines: updated })
  }

  const handleSeatClassChange = (cls: string, checked: boolean) => {
    const updated = checked
      ? [...filters.seatClasses, cls]
      : filters.seatClasses.filter((c) => c !== cls)
    onFilterChange({ seatClasses: updated })
  }

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
          padding: '14px 16px',
          borderBottom: '1px solid #f0f0f0',
          fontSize: 15,
          fontWeight: 600,
          color: '#111827',
        }}
      >
        Bộ lọc
      </div>

      <Collapse
        ghost
        defaultActiveKey={['ticket', 'time', 'airlines', 'seats']}
        style={{ padding: '0 4px' }}
      >
        <Panel header={<Text strong>Được sắc</Text>} key="ticket">
          <Space direction="vertical" size={6}>
            <Checkbox
              checked={filters.directOnly}
              onChange={(e: CheckboxChangeEvent) =>
                onFilterChange({ directOnly: e.target.checked })
              }
            >
              Bay Thẳng
            </Checkbox>
            <Checkbox
              checked={filters.handLuggage}
              onChange={(e: CheckboxChangeEvent) =>
                onFilterChange({ handLuggage: e.target.checked })
              }
            >
              Có hành lý xách tay
            </Checkbox>
            <Checkbox
              checked={filters.checkInLuggage}
              onChange={(e: CheckboxChangeEvent) =>
                onFilterChange({ checkInLuggage: e.target.checked })
              }
            >
              Có hành lý ký gửi
            </Checkbox>
          </Space>
        </Panel>

        <Panel header={<Text strong>Thời gian</Text>} key="time">
          <div style={{ paddingInline: 8 }}>
            <div style={{ marginBottom: 12 }}>
              <Text type="secondary" style={{ fontSize: 12 }}>
                Giờ đi: {formatTime(filters.timeFrom[0])} - {formatTime(filters.timeFrom[1])}
              </Text>
              <Slider
                range
                min={0}
                max={24}
                step={0.5}
                value={filters.timeFrom}
                onChange={(val) => onFilterChange({ timeFrom: val as [number, number] })}
                tooltip={{ formatter: formatTime }}
              />
            </div>
            <div>
              <Text type="secondary" style={{ fontSize: 12 }}>
                Giờ về: {formatTime(filters.timeTo[0])} - {formatTime(filters.timeTo[1])}
              </Text>
              <Slider
                range
                min={0}
                max={24}
                step={0.5}
                value={filters.timeTo}
                onChange={(val) => onFilterChange({ timeTo: val as [number, number] })}
                tooltip={{ formatter: formatTime }}
              />
            </div>
          </div>
        </Panel>

        <Panel header={<Text strong>Hãng hàng không</Text>} key="airlines">
          <Space direction="vertical" size={6}>
            {AIRLINES.map((airline) => (
              <Checkbox
                key={airline}
                checked={filters.airlines.includes(airline)}
                onChange={(e: CheckboxChangeEvent) =>
                  handleAirlineChange(airline, e.target.checked)
                }
              >
                {airline}
              </Checkbox>
            ))}
          </Space>
        </Panel>

        <Panel header={<Text strong>Hạng vé</Text>} key="seats">
          <Space direction="vertical" size={6}>
            {SEAT_CLASSES.map((cls) => (
              <Checkbox
                key={cls}
                checked={filters.seatClasses.includes(cls)}
                onChange={(e: CheckboxChangeEvent) =>
                  handleSeatClassChange(cls, e.target.checked)
                }
              >
                {cls}
              </Checkbox>
            ))}
          </Space>
        </Panel>
      </Collapse>
    </div>
  )
}

export type { FilterState }
