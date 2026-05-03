import type { Flight } from '../FlightCard'

import { ChevronDownCircleBlueIcon, RescheduleClockIcon,RescheduleFeeIcon } from '@/assets/icons/icons'

type RescheduleState = 'paid' | 'unavailable' | 'airline-policy'

// --- Accordion Item (reused pattern) ---
function AccordionItem({ title, children, hasDivider = true }: { title: string; children: React.ReactNode; hasDivider?: boolean }) {
  return (
    <>
      <details className="group overflow-hidden">
        <summary className="list-none flex items-center justify-between px-5 py-4 text-[16px] text-text-main font-semibold bg-white hover:bg-surface-hover transition-colors cursor-pointer outline-none select-none [&::-webkit-details-marker]:hidden">
          <span>{title}</span>
          <ChevronDownCircleBlueIcon
            width={24}
            height={24}
            color="#4558B6"
            className="group-open:rotate-180 transition-transform duration-200"
          />
        </summary>
        <div className="px-5 pb-5 pt-5 text-[14px] text-text-main bg-white leading-relaxed border-t border-border-main">
          {children}
        </div>
      </details>
      {hasDivider && <div className="h-[1px] bg-border-main w-full"></div>}
    </>
  )
}


// --- State: Đổi lịch có phí ---
function PaidRescheduleState() {
  return (
    <div>
      {/* Main card */}
      <div
        className="border border-border-main rounded-[10px] p-5 mb-9 relative"
        style={{
          background: "linear-gradient(180deg, rgba(254,255,231,0.4) 0%, #FFFFFF 47%)"
        }}
      >
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <img src="/icons/doilich-yes.webp" alt="Paid Reschedule" className="w-[50px] h-[50px] object-contain" />
          <h3 className="text-[28px] font-semibold text-primary">Đổi lịch có phí</h3>
        </div>

        {/* Fee info */}
        <div className="flex items-start gap-3 mb-3">
          <RescheduleFeeIcon width={22} height={22} color="#3A3A3A" className="mt-1" />
          <div>
            <div className="text-[16px] text-text-main font-normal">Phí đổi lịch bắt đầu từ</div>
            <div className="text-[16px] font-semibold text-text-main">17.684.071 VND<span className="font-medium text-[14px]">/hành khách</span></div>
          </div>
        </div>

        <p className="text-[16px] text-text-secondary mb-3 leading-relaxed">
          Nếu bạn đổi lịch sang chuyến bay có giá cao hơn, một <span className="font-semibold text-text-secondary">phí bổ sung sẽ được áp dụng</span> để bù đắp khoản chênh lệch giá.
        </p>

        {/* Deadline info */}
        <div className="flex items-start gap-2 mb-3">
          <RescheduleClockIcon width={18} height={18} color="#909090" className="shrink-0 mt-1" />
          <div>
            <div className="text-[16px] text-text-secondary">
              Chúng tôi sẽ thông báo phí đổi lịch cho chuyến bay này sau khi bạn gửi yêu cầu đổi lịch.
            </div>
            <div className="text-[16px] font-bold text-text-main mt-1">
              8 thg 4 2026 · 12:15 TP HCM Time
            </div>
            <div className="text-[16px] italic text-text-secondary mt-0.5">
              hoặc 6 giờ trước giờ khởi hành
            </div>
          </div>
        </div>

        {/* CTA Button centered on bottom border */}
        <div className="absolute bottom-0 right-8 transform translate-y-1/2">
          <button className="bg-primary text-white text-[16px] font-semibold py-2.5 px-6 rounded-full hover:opacity-90 shadow-md transition-all">
            Phí ra hạn lịch trình diễn ra như thế nào
          </button>
        </div>
      </div>

      {/* Description below box */}
      <div className="px-1 mb-6">
        <p className="text-[16px] text-text-main font-normal">
          Áp dụng phí dịch vụ VJFLink là <span className="font-semibold">85.000 VND</span> /khách cho việc đổi lịch.
        </p>
        <p className="text-[16px] text-text-main font-normal">
          Để thay đổi <span className="font-semibold">Thời gian khởi hành, Tuyến đường, và Hãng hàng không</span>, bạn có thể kiểm tra chính sách <span className="font-semibold">Reschedule+</span>
        </p>
      </div>

      {/* Accordion Cards */}
      <div className="grid grid-cols-2 gap-4">
        <div className="border border-border-main rounded-[16px] overflow-hidden bg-white shadow-sm">
          <AccordionItem title="Chi tiết quan trọng cần biết để regular Reschedule" hasDivider={false}>
            <p className="text-[14px] font-medium text-text-main leading-relaxed">
              Vui lòng lưu ý các điều kiện quan trọng khi thực hiện đổi lịch thông thường để đảm bảo quyền lợi của bạn.
            </p>
          </AccordionItem>
        </div>
        <div className="border border-border-main rounded-[16px] overflow-hidden bg-white shadow-sm">
          <AccordionItem title="Chính sách regular Reschedule cho các tiện ích chuyến bay" hasDivider={false}>
            <p className="text-[14px] font-medium text-text-main leading-relaxed">
              Tiện ích kèm theo (hành lý, chỗ ngồi, suất ăn) có thể không được chuyển sang chuyến bay mới. Vui lòng kiểm tra chính sách từng tiện ích.
            </p>
          </AccordionItem>
        </div>
      </div>
    </div>
  )
}

// --- State: Không thể đổi lịch ---
function UnavailableRescheduleState() {
  return (
   <div
  className="border border-border-main rounded-[10px] p-5"
  style={{
    background: "linear-gradient(180deg, rgba(255,231,231,0.4) 0%, #FFFFFF 47%)"
  }}
>
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <img src="/icons/doilich-no.webp" alt="Reschedule Unavailable" className="w-[50px] h-[50px] object-contain" />
        <h3 className="text-[28px] font-semibold text-[#B64545]">Không thể đổi lịch</h3>
      </div>

      <p className="text-[16px] font-normal text-text-secondary mb-5 leading-relaxed">
        Thời gian đổi lịch chuyến bay này đã hết. Bạn không thể yêu cầu đổi lịch nữa.
      </p>

      {/* Deadline info */}
      <div className="flex items-start gap-2">
        <RescheduleClockIcon />
        <div>
          <div className="text-[16px] font-normal text-text-secondary">
            Thời hạn gửi yêu cầu đổi lịch là vào ngày
          </div>
          <div className="text-[16px] font-semibold text-text-secondary mt-1">7 thg 4 2026 · 19:40 TP HCM Time</div>
          <div className="text-[16px] font-normal text-text-secondary italic">hoặc 24 giờ trước giờ khởi hành</div>
        </div>
      </div>
    </div>
  )
}

// --- State: Đổi lịch theo chính sách hãng ---
function AirlinePolicyRescheduleState() {
  return (
    <div>
      {/* Main card */}
      <div className="border border-border-main rounded-[12px] p-5 mb-4">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <img src="/icons/doilich-csh.webp" alt="Airline Policy Reschedule" className="w-[50px] h-[50px] object-contain" />
          <h3 className="text-[28px] font-semibold text-[#E3B057]">Đổi lịch theo chính sách của hãng hàng không</h3>
        </div>

        <p className="text-[16px] font-normal text-text-secondary mb-4 leading-relaxed">
          Bạn vẫn có thể gửi yêu cầu đổi lịch, nhưng phí và điều kiện đổi lịch cho chuyến bay này sẽ phụ thuộc vào chính sách của hãng hàng không và sẽ được cung cấp sau khi bạn gửi yêu cầu.
        </p>

        {/* Deadline info */}
        <div className="flex items-start gap-2">
          <RescheduleClockIcon width={16} height={16} color="#909090" className="shrink-0 mt-[2px]" />
          <div>
            <div className="text-[16px] font-semibold text-text-secondary">
              Chúng tôi sẽ thông báo phí đổi lịch cho chuyến bay này sau khi bạn gửi yêu cầu đổi lịch.
            </div>
            <div className="text-[16px] font-bold text-text-secondary mt-1">8 thg 4 2026 · 12:15 TP HCM Time</div>
            <div className="text-[16px] font-normal text-text-secondary italic">hoặc 6 giờ trước giờ khởi hành</div>
          </div>
        </div>
      </div>

      {/* Accordion cards */}
      <div className="grid grid-cols-2 gap-3">
        <div className="border border-border-main rounded-[12px] overflow-hidden">
          <AccordionItem title="Chi tiết quan trọng cần biết để regular Reschedule" hasDivider={false}>
            <p className="text-[14px] font-semibold text-text-main leading-relaxed">
              Đổi lịch thông thường cho phép thay đổi ngày và giờ bay trên cùng tuyến đường. Phí đổi lịch sẽ được tính dựa trên chính sách của hãng hàng không.
            </p>
          </AccordionItem>
        </div>
        <div className="border border-border-main rounded-[12px] overflow-hidden">
          <AccordionItem title="Chính sách regular Reschedule cho các tiện ích chuyến bay" hasDivider={false}>
            <p className="text-[14px] font-semibold text-text-main leading-relaxed">
              Tiện ích kèm theo (hành lý, chỗ ngồi, suất ăn) có thể không được chuyển sang chuyến bay mới. Vui lòng kiểm tra chính sách từng tiện ích.
            </p>
          </AccordionItem>
        </div>
      </div>
    </div>
  )
}

// --- Main Export ---
export function RescheduleTab({ flight }: { flight: Flight }) {
  console.log(flight)

  // Demo switcher – in production this would be derived from flight data
  const state = 'paid' as RescheduleState

  const renderContent = () => {
    switch (state) {
      case 'paid': return <PaidRescheduleState />
      case 'unavailable': return <UnavailableRescheduleState />
      case 'airline-policy': return <AirlinePolicyRescheduleState />
    }
  }

  return (
   <div className="bg-surface-hover border-x border-border-main p-3">
      {renderContent()}
    </div>
  )
}
