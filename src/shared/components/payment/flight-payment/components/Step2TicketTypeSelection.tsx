import { Button, Tabs } from 'antd'

import type { Flight } from '@/shared/types/flight.types'

import {
  FlexibilityIcon,
  FlightSolidIcon,
  LoyaltyCardIcon,
  LuggageIcon,
  SeatLayoutAmenityIcon,
} from '@/assets/icons/icons'

interface Step2TicketTypeSelectionProps {
  departureFlight: Flight
  returnFlight?: Flight
  onBack: () => void
  onSelect: (typeId: string) => void
}

export function Step2TicketTypeSelection({ onSelect }: Step2TicketTypeSelectionProps) {
  const ticketTypes = [
    {
      id: 'light',
      name: 'Light',
      price: '2.882.660 đ',
      buttonText: 'Chọn Light',
      buttonBg: 'rgba(69, 88, 182, 0.4)',
      features: [
        {
          icon: <SeatLayoutAmenityIcon width={24} height={24} color="#4558B6" />,
          title: 'Chỗ ngồi',
          description: 'Đặt trước chỗ ngồi với một khoản phí',
        },
        {
          icon: <LuggageIcon width={24} height={24} color="#4558B6" />,
          title: 'Hành lý',
          description: 'Hành lý xách tay 1 kiện, 7 kg mỗi kiện. Hành lý ký gửi 1 kiện, 23kg mỗi kiện',
        },
        {
          icon: <LoyaltyCardIcon width={24} height={24} color="#4558B6" />,
          title: 'Khách hàng thân thiết',
          description: 'Status Points 28. Asia Miles 2800. Nâng hạng ghế với Asia Miles tích lũy',
        },
        {
          icon: <FlexibilityIcon width={24} height={24} color="#4558B6" />,
          title: 'Linh hoạt',
          description: 'Phí thay đổi chuyến bay USD$80+ Giá vé chênh lệch (nếu có). Phí hủy vé USD$150. Phí bỏ chuyến USD$150. Trạng thái chờ chuyến bay sớm hơn -',
        },
      ],
    },
    {
      id: 'essential',
      name: 'Essential',
      price: '3.682.660 đ',
      buttonText: 'Chọn Essential',
      buttonBg: 'rgba(69, 88, 182, 0.8)',
      features: [
        {
          icon: <SeatLayoutAmenityIcon width={24} height={24} color="#4558B6" />,
          title: 'Chỗ ngồi',
          description: 'Chỗ ngồi thông thường miễn phí',
        },
        {
          icon: <LuggageIcon width={24} height={24} color="#4558B6" />,
          title: 'Hành lý',
          description: 'Hành lý xách tay 1 kiện, 7 kg mỗi kiện. Hành lý ký gửi 2 kiện, 23kg mỗi kiện',
        },
        {
          icon: <LoyaltyCardIcon width={24} height={24} color="#4558B6" />,
          title: 'Khách hàng thân thiết',
          description: 'Status Points 40. Asia Miles 4000. Nâng hạng ghế với Asia Miles Có sẵn',
        },
        {
          icon: <FlexibilityIcon width={24} height={24} color="#4558B6" />,
          title: 'Linh hoạt',
          description: 'Phí thay đổi chuyến bay USD$50+ Giá vé chênh lệch (nếu có). Phí hủy vé USD$120. Phí bỏ chuyến USD$120. Trạng thái chờ chuyến bay sớm hơn -',
        },
      ],
    },
    {
      id: 'flex',
      name: 'Flex',
      price: '4.882.660 đ',
      buttonText: 'Chọn Flex',
      buttonBg: 'rgba(69, 88, 182, 1)',
      features: [
        {
          icon: <SeatLayoutAmenityIcon width={24} height={24} color="#4558B6" />,
          title: 'Chỗ ngồi',
          description: 'Chỗ ngồi có khu vực để chân rộng hơn miễn phí. Chỗ ngồi ưa thích miễn phí. Chỗ ngồi thông thường miễn phí',
        },
        {
          icon: <LuggageIcon width={24} height={24} color="#4558B6" />,
          title: 'Hành lý',
          description: 'Hành lý xách tay 1 kiện, 7 kg mỗi kiện. Hành lý ký gửi 2 kiện, 23kg mỗi kiện',
        },
        {
          icon: <LoyaltyCardIcon width={24} height={24} color="#4558B6" />,
          title: 'Khách hàng thân thiết',
          description: 'Status Points 60. Asia Miles 6000. Nâng hạng ghế với Asia Miles có sẵn',
        },
        {
          icon: <FlexibilityIcon width={24} height={24} color="#4558B6" />,
          title: 'Linh hoạt',
          description: 'Phí thay đổi chuyến bay miễn phí+ Giá vé chênh lệch (nếu có). Phí hủy vé USD$100. Phí bỏ chuyến USD$100. Trạng thái chờ chuyến bay sớm hơn có sẵn',
        },
      ],
    },
  ]

  const renderDescription = (text: string) => {
    // Keywords to bold for better design match
    const keywords = ['miễn phí', 'với một khoản phí', '1 kiện', '7 kg', '23kg', '2 kiện', 'có sẵn', 'Có sẵn', 'tích lũy']
    let highlightedText = text
    keywords.forEach(word => {
      const reg = new RegExp(`(${word})`, 'gi')
      highlightedText = highlightedText.replace(reg, '<strong>$1</strong>')
    })
    return <span dangerouslySetInnerHTML={{ __html: highlightedText }} />
  }

  const renderCard = (type: typeof ticketTypes[0]) => (
    <div
      key={type.id}
      className="flex-1 min-w-[300px] bg-white rounded-[20px] border border-[#D9D9D9] shadow-sm flex flex-col overflow-hidden transition-all hover:shadow-md"
    >
      {/* Top Accent Bar */}
      <div
        className="h-[10px] w-full"
        style={{ backgroundColor: type.buttonBg }}
      />

      <div className="py-[14px] px-3 bg-white">
        <h3 className="text-[32px] font-light text-[#4558B6] text-center">{type.name}</h3>
      </div>

      <div className="px-3 pb-3 flex flex-col items-center flex-1">
        <div className="flex flex-col w-full gap-2">
          {type.features.map((feature, idx) => (
            <div key={idx} className={`pt-2 flex gap-4 ${idx !== 0 ? 'border-t border-[#F0F0F0]' : ''}`}>
              <div className="shrink-0 mt-1">{feature.icon}</div>
              <div className="flex flex-col">
                <span className="text-[16px] font-normal text-[#4558B6]">{feature.title}</span>
                <span className="text-[16px] text-[#3A3A3A] leading-relaxed">
                  {renderDescription(feature.description)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-[#F0F0F0] w-full" />

      <div className="flex flex-col items-center bg-white">
        <div className="py-2 px-2">
          <span className="text-[32px] font-semibold text-[#3A3A3A]">{type.price}</span>
        </div>
        <Button
          type="primary"
          onClick={() => onSelect(type.id)}
          className="w-full !h-[55px] !rounded-none !rounded-b-[20px] !text-[20px] !font-semibold !border-none !shadow-none hover:opacity-90 transition-opacity !text-white"
          style={{ backgroundColor: type.buttonBg }}
        >
          {type.buttonText}
        </Button>
      </div>
    </div>
  )

  return (
    <>
      {/* Top Header Section */}
      <div className="flex items-center justify-between px-[18px] py-[14px]">
        <div className="flex items-center gap-10">
          <div className={`flex items-center gap-[10px] px-[10px] py-[7px] rounded-[10px] bg-[#CDE7FF]`}>
            <FlightSolidIcon color='#4558B6' width={18} height={18} />
            <span className="text-[18px] font-semibold text-[#4558B6]">Khởi hành</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[18px] font-semibold text-[#3A3A3A]">Hà Nội</span>
            <span className="text-[#3A3A3A] text-[18px] font-medium">→</span>
            <span className="text-[18px] font-semibold text-[#3A3A3A]">TP HCM</span>
          </div>
          <div className="text-[18px] font-semibold text-[#909090]">
            Thứ 5, 9 thg 4 2026
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="px-[14px]" style={{ background: 'linear-gradient(180deg, rgba(253, 255, 243, 0.2) 0%, #F1F1F1 100%)' }}>
        <Tabs
          defaultActiveKey="economy"
          className="flight-class-tabs"
          items={[
            {
              key: 'economy',
              label: <span className="text-[20px]">Phổ thông</span>,
              children: (
                <div className="py-3 flex gap-3 overflow-x-auto scrollbar-hide">
                  {ticketTypes.map(renderCard)}
                </div>
              )
            },
            {
              key: 'business',
              label: <span className="text-[20px]">Thương gia từ 10.345.230 đ</span>,
              children: (
                <div className="p-6 flex gap-6 overflow-x-auto scrollbar-hide">
                  {ticketTypes.map(renderCard)}
                </div>
              )
            },
          ]}
        />
      </div>



      <style>{`
        .flight-class-tabs .ant-tabs-nav {
          margin-bottom: 0 !important;
        }
        .flight-class-tabs .ant-tabs-nav::before {
          border-bottom: 1px solid #B5BCE2;
        }
        .flight-class-tabs .ant-tabs-tab {
          padding: 12px 90px !important;
          margin: 0 !important;
        }
        .flight-class-tabs .ant-tabs-tab-btn {
          color: #3A3A3A !important;
          font-weight: 400 !important;
          transition: all 0.3s;
        }
        .flight-class-tabs .ant-tabs-tab-active .ant-tabs-tab-btn {
          color: #4558B6 !important;
          font-weight: 600 !important;
        }
        .flight-class-tabs .ant-tabs-ink-bar {
          height: 3px !important;
          background: #4558B6 !important;
          border-radius: 2px 2px 0 0;
        }
      `}</style>
    </>
  )
}
