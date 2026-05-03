import { Col, Divider, Row, Space, Typography } from 'antd'

import {
  FacebookBoxIcon,
  InstagramBoxIcon,
  MastercardIcon,
  ThreadsBoxIcon,
  TikTokBoxIcon,
  VisaIcon,
} from '@/assets/icons/icons'

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
    <footer className="bg-white border-t border-border-main">
      {/* Main links section */}
      <div className="container mx-auto px-4 py-10">
        <Row gutter={[40, 32]}>
          {Object.entries(FOOTER_LINKS).map(([section, links]) => (
            <Col xs={24} sm={12} md={6} key={section}>
              <Title
                level={5}
                className="!text-[18px] !font-semibold !text-text-main !mb-4"
              >
                {section}
              </Title>
              <div className="flex flex-col gap-[10px]">
                {links.map((link) => (
                  <Link
                    key={link}
                    href="#"
                    className="!text-[14px] !text-text-main !font-normal hover:!text-primary hover:!underline transition-colors duration-150"
                  >
                    {link}
                  </Link>
                ))}
              </div>
            </Col>
          ))}

          {/* Payment channels */}
          <Col xs={24} sm={12} md={6}>
            <Title
              level={5}
              className="!text-[18px] !font-semibold !text-text-main !mb-4"
            >
              Kênh thanh toán
            </Title>
            <div className="flex gap-2 flex-wrap items-center">
              <MastercardIcon />
              <VisaIcon />
            </div>
          </Col>
        </Row>
      </div>

      <Divider className="!m-0" />

      {/* Bottom bar */}
      <div className="container mx-auto px-4 py-4 flex items-center justify-between flex-wrap gap-3">
        <Text className="!text-[16px] !text-text-main">
          © 2014-2026 VFJLink. All Rights Reserved.
        </Text>
        <Space size={8}>
          <Link
            href="#"
            className="flex items-center opacity-60 hover:opacity-100 hover:scale-110 transition-all duration-150"
          >
            <FacebookBoxIcon width={25} height={25} />
          </Link>
          <Link
            href="#"
            className="flex items-center opacity-60 hover:opacity-100 hover:scale-110 transition-all duration-150"
          >
            <TikTokBoxIcon width={25} height={25} />
          </Link>
          <Link
            href="#"
            className="flex items-center opacity-60 hover:opacity-100 hover:scale-110 transition-all duration-150"
          >
            <InstagramBoxIcon width={25} height={25} />
          </Link>
          <Link
            href="#"
            className="flex items-center opacity-60 hover:opacity-100 hover:scale-110 transition-all duration-150"
          >
            <ThreadsBoxIcon width={25} height={25} />
          </Link>
        </Space>
      </div>
    </footer>
  )
}
