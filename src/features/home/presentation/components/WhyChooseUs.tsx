import { Col, Row, Typography } from 'antd'

const { Title, Paragraph } = Typography

interface Reason {
  icon: string
  title: string
  description: string
  color: string
}

const REASONS: Reason[] = [
  {
    icon: '🗺️',
    title: 'Vô vàn lựa chọn',
    description:
      'Với hàng trăm ngàn điểm tham quan, khách sạn & nhiều hơn nữa, chắc chắn bạn sẽ tìm thấy niềm vui.',
    color: '#eff6ff',
  },
  {
    icon: '🎭',
    title: 'Chơi vui, giá tốt',
    description: 'Trải nghiệm chất lượng với giá tốt nhất.',
    color: '#f0fdf4',
  },
  {
    icon: '📱',
    title: 'Dễ dàng và tiện lợi',
    description:
      'Đặt vé xác nhận ngay, miễn xếp hàng, miễn phí hủy, tiện lợi cho bạn tha hồ khám phá.',
    color: '#fefce8',
  },
  {
    icon: '🤝',
    title: 'Đáng tin cậy',
    description:
      'Tham khảo đánh giá chân thực. Dịch vụ hỗ trợ tận tình, đồng hành cùng bạn mọi lúc, mọi nơi.',
    color: '#fdf4ff',
  },
]

export function WhyChooseUs() {
  return (
    <div style={{ padding: '60px 0 40px' }}>
      <div
        style={{
          maxWidth: 1580,
          margin: '0 auto',
          paddingInline: 16,
        }}
      >
        <Title
          level={2}
          style={{
            fontSize: 32,
            fontWeight: 700,
            color: '#111827',
            marginBottom: 40,
          }}
        >
          Vì sao bạn nên chọn VFJLink
        </Title>

        <Row gutter={[24, 24]}>
          {REASONS.map((reason) => (
            <Col xs={24} sm={12} lg={6} key={reason.title}>
              <div
                style={{
                  background: '#fff',
                  border: '1px solid #f0f0f0',
                  borderRadius: 16,
                  padding: 24,
                  height: '100%',
                  transition: 'box-shadow 0.2s, transform 0.2s',
                  cursor: 'default',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLDivElement
                  el.style.boxShadow = '0 8px 24px rgba(0,0,0,0.1)'
                  el.style.transform = 'translateY(-2px)'
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLDivElement
                  el.style.boxShadow = 'none'
                  el.style.transform = 'translateY(0)'
                }}
              >
                <div
                  style={{
                    width: 64,
                    height: 64,
                    borderRadius: 16,
                    background: reason.color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 32,
                    marginBottom: 16,
                  }}
                >
                  {reason.icon}
                </div>
                <Title level={4} style={{ marginBottom: 8, fontSize: 18, color: '#111827' }}>
                  {reason.title}
                </Title>
                <Paragraph
                  style={{
                    fontSize: 14,
                    color: '#6b7280',
                    margin: 0,
                    lineHeight: 1.6,
                  }}
                >
                  {reason.description}
                </Paragraph>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  )
}
