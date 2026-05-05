import React from 'react'

import { Col, Row, Typography } from 'antd'

import { BestPriceReasonIcon, EasyBookingReasonIcon, TrustReasonIcon, WhyChooseUsIcon } from '@/assets/icons/icons'

const { Title, Paragraph } = Typography

interface Reason {
  icon: React.ReactNode
  title: string
  description: string
}

const REASONS: Reason[] = [
  {
    icon: <WhyChooseUsIcon />,
    title: 'Vô vàn lựa chọn',
    description:
      'Với hàng trăm ngàn điểm tham quan, khách sạn & nhiều hơn nữa, chắc chắn bạn sẽ tìm thấy niềm vui.',
  },
  {
    icon: <BestPriceReasonIcon />,
    title: 'Chơi vui, giá tốt',
    description: 'Trải nghiệm chất lượng với giá tốt nhất.',
  },
  {
    icon: <EasyBookingReasonIcon />,
    title: 'Dễ dàng và tiện lợi',
    description:
      'Đặt vé xác nhận ngay, miễn xếp hàng, miễn phí hủy, tiện lợi cho bạn tha hồ khám phá.',
  },
  {
    icon: <TrustReasonIcon/>,
    title: 'Đáng tin cậy',
    description:
      'Tham khảo đánh giá chân thực. Dịch vụ hỗ trợ tận tình, đồng hành cùng bạn mọi lúc, mọi nơi.',
  },
]

export function WhyChooseUs() {
  return (
    <div className="py-10 md:py-[60px] pb-[10px] bg-white">
      <div className="mx-auto px-4 container">
        <Title
          level={2}
          className="!mb-8 md:!mb-10 !text-[28px] md:!text-[40px] !font-normal !text-text-main"
        >
          Vì sao bạn nên chọn VFJLink
        </Title>

        <Row gutter={[24, 24]}>
          {REASONS.map((reason) => (
            <Col xs={24} sm={12} lg={6} key={reason.title}>
              <div className="h-full cursor-default py-3">
                <div className="flex items-center mb-4 md:mb-5">
                  <div className="scale-90 md:scale-100 origin-left">
                    {reason.icon}
                  </div>
                </div>
                <Title
                  level={4}
                  className="!mb-2 md:!mb-3 !text-[18px] md:!text-[20px] !font-bold !text-text-main"
                >
                  {reason.title}
                </Title>
                <Paragraph className="!m-0 !text-[13px] md:!text-[14px] !leading-[1.6] !text-text-main opacity-80">
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

