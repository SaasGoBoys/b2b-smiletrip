import { Col, Divider, Row, Space, Typography } from 'antd'
import {
  FacebookOutlined,
  InstagramOutlined,
  TwitterOutlined,
  YoutubeOutlined,
} from '@ant-design/icons'

const { Title, Text, Link } = Typography

const FOOTER_LINKS = {
  'Về VFJLink': ['Về chúng tôi', 'Cơ hội nghề nghiệp', 'Du lịch bền vững'],
  'Đối Tác': [
    'Đăng ký nhà cung cấp',
    'Đối tác đăng nhập',
    'Đối tác liên kết',
    'Chương trình cho đại lý',
    'Hợp tác với VFJLink',
  ],
  'Điều khoản sử dụng': [
    'Điều khoản sử dụng',
    'Chính sách bảo mật của VFJLink',
    'Chính sách Cookie',
    'Chính sách và quy định',
  ],
}

export function HomeFooter() {
  return (
    <footer
      style={{
        background: '#fff',
        borderTop: '1px solid #f0f0f0',
      }}
    >
      <div
        style={{
          maxWidth: 1580,
          margin: '0 auto',
          paddingInline: 16,
          paddingTop: 40,
          paddingBottom: 24,
        }}
      >
        <Row gutter={[40, 32]}>
          {Object.entries(FOOTER_LINKS).map(([section, links]) => (
            <Col xs={24} sm={12} md={6} key={section}>
              <Title
                level={5}
                style={{
                  fontSize: 16,
                  fontWeight: 700,
                  color: '#111827',
                  marginBottom: 16,
                }}
              >
                {section}
              </Title>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {links.map((link) => (
                  <Link
                    key={link}
                    href="#"
                    style={{
                      fontSize: 14,
                      color: '#6b7280',
                      textDecoration: 'none',
                    }}
                  >
                    {link}
                  </Link>
                ))}
              </div>
            </Col>
          ))}

          <Col xs={24} sm={12} md={6}>
            <Title
              level={5}
              style={{
                fontSize: 16,
                fontWeight: 700,
                color: '#111827',
                marginBottom: 16,
              }}
            >
              Kênh thanh toán
            </Title>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {['Mastercard', 'Visa'].map((payment) => (
                <div
                  key={payment}
                  style={{
                    width: 56,
                    height: 36,
                    border: '1px solid #e5e7eb',
                    borderRadius: 6,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 10,
                    fontWeight: 700,
                    color: '#374151',
                    background: '#f9fafb',
                    letterSpacing: '-0.3px',
                  }}
                >
                  {payment}
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </div>

      <Divider style={{ margin: 0 }} />

      <div
        style={{
          maxWidth: 1580,
          margin: '0 auto',
          paddingInline: 16,
          paddingBlock: 20,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 12,
        }}
      >
        <Text style={{ fontSize: 13, color: '#9ca3af' }}>
          © 2014-2026 VFJLink. All Rights Reserved.
        </Text>
        <Space size={16}>
          <Link href="#" style={{ color: '#9ca3af', fontSize: 18 }}>
            <FacebookOutlined />
          </Link>
          <Link href="#" style={{ color: '#9ca3af', fontSize: 18 }}>
            <InstagramOutlined />
          </Link>
          <Link href="#" style={{ color: '#9ca3af', fontSize: 18 }}>
            <TwitterOutlined />
          </Link>
          <Link href="#" style={{ color: '#9ca3af', fontSize: 18 }}>
            <YoutubeOutlined />
          </Link>
        </Space>
      </div>
    </footer>
  )
}
