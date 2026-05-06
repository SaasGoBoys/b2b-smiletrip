import { useEffect, useState } from 'react'

import { AirlineLogo } from '@/shared/components/common/AirlineLogo'

import type { Flight } from '../FlightCard'

import { ChevronDownBoxBlueIcon, ChevronDownIcon, CloseCircleIcon, ConditionAirplaneWhiteIcon, ConditionCalendarWhiteIcon, ConditionPersonIcon } from '@/assets/icons/icons'

type SectionKey = 'policy' | 'estimate' | 'process'

// --- Section Sidebar Item ---
function SidebarItem({
  label,
  active,
  onClick,
}: {
  label: string
  active: boolean
  onClick: () => void
}) {
  return (
    <button
      onClick={onClick}
      className={`w-max md:w-full text-center px-[15px] py-[10px] md:py-[17px] rounded-[10px] text-[14px] md:text-[18px] font-semibold transition-all flex items-center justify-center cursor-pointer shrink-0
        ${active
          ? 'bg-white border border-primary text-text-main'
          : 'bg-white border border-border-main text-text-main hover:border-primary'
        }`}
    >
      {label}
    </button>
  )
}

// --- Accordion Item ---
function AccordionItem({ title, children, hasDivider = true }: { title: string; children: React.ReactNode; hasDivider?: boolean }) {
  return (
    <>
      <details className="group overflow-hidden">
        <summary className="list-none flex items-center justify-between px-4 md:px-5 py-3 md:py-4 text-[16px] md:text-[18px] text-text-main font-semibold bg-white hover:bg-surface-hover transition-colors cursor-pointer outline-none select-none [&::-webkit-details-marker]:hidden">
          <span>{title}</span>
          <ChevronDownBoxBlueIcon
            width={24}
            height={24}
            color="#4558B6"
            className="group-open:rotate-180 transition-transform duration-200"
          />
        </summary>
        <div className="px-4 md:px-5 pb-4 md:pb-5 pt-4 md:pt-5 text-[14px] md:text-[16px] text-text-main bg-white leading-relaxed border-t border-border-main">
          {children}
        </div>
      </details>
      {hasDivider && <div className="h-[1px] bg-border-main w-full"></div>}
    </>
  )
}

// --- Dropdown (read-only style) ---
function ReadonlyDropdown({ label, value, note, active = false, hasDivider = true }: { label: string; value: string; note?: string; active?: boolean; hasDivider?: boolean }) {
  return (
    <div className="mb-4">
      <div className="px-5">
        <div className="text-[14px] font-semibold text-text-main mb-1.5">{label}</div>
        <div className="flex items-center justify-between py-2">
          <span className="text-[18px] font-semibold text-text-main">{value}</span>
          <ChevronDownIcon width={24} height={24} color={active ? "#4558B6" : "#DBDBDB"} />
        </div>
      </div>
      {hasDivider && <div className="h-[1px] bg-border-main w-full mt-2"></div>}
      {note && <div className="px-5 text-[14px] font-semibold text-text-secondary mt-3">{note}</div>}
    </div>
  )
}

// --- SECTION: Chính sách hoàn vé ---
function PolicySection() {
  return (
    <div>
      <div className="text-[20px] font-semibold text-text-main mb-3">Chính sách hoàn vé của bạn</div>
      <p className="text-[15px] text-text-main leading-relaxed mb-3">
        Tuy nhiên, nếu bạn cần hoàn lại vé do những lý do ngoài tầm kiểm soát của mình, bạn vẫn có thể gửi
        yêu cầu hoàn tiền. Những lý do nằm ngoài tầm kiểm soát của bạn bao gồm:
      </p>
      <ul className="list-disc list-inside text-[15hpx] text-text-main space-y-1">
        <li>Hãng hàng không hủy chuyến bay</li>
        <li>Hãng hàng không đổi lịch của chuyến bay</li>
      </ul>
    </div>
  )
}

// --- SECTION: Giá trị hoàn lại ước tính ---
function EstimateSection() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <div className="space-y-6">
      <div className="text-[20px] font-semibold text-text-main mb-4 px-1">Giá trị hoàn lại ước tính</div>

      <div className="border border-border-main rounded-[10px] py-5">

        <ReadonlyDropdown
          label="Lý do hoàn vé"
          value="Hãng hàng không không hủy chuyến bay"
          note="Chính sách hoàn vé khác nhau dựa trên lý do hoàn vé của bạn"
          active={true}
        />

        <ReadonlyDropdown
          label="Phương thức hoàn vé"
          value="Bảo lưu định danh hành khách trên vé (tín dụng du lịch)"
          note="Mục này không có phương thức hoàn vé khác"
        />

        {/* Timeline */}
        <div className="mt-6 px-5">
          <div className="flex items-center gap-2 text-[14px] font-semibold text-text-main mb-6">
            <ConditionPersonIcon width={18} height={18} color="#3A3A3A" />
            <span>Giá trị hoàn ước tính cho 1 hành khách là người lớn</span>
          </div>

          {/* Timeline steps */}
          <div className="relative pl-10">
            {/* Step 1: Ticket issued */}
            <div className="relative flex items-start gap-4 mb-8">
              {/* Vertical line segment - From center of this icon to top of next icon */}
              <div className="absolute left-[-26px] top-[14px] h-[calc(100%+32px)] w-[1px] bg-[#FF7F50]" />
              <div className="absolute left-[-40px] w-[28px] h-[28px] rounded-full bg-primary flex items-center justify-center z-10">
                <ConditionCalendarWhiteIcon width={16} height={16} />
              </div>
              <div className="text-[14px] font-semibold text-text-main">Vé điện tử của bạn đã được phát hành</div>
            </div>

            {/* Step 2: Flight departure */}
            <div className="relative flex items-start gap-4 mb-10">
              {/* Vertical line segment - From top of this icon to center of next icon (orange circle) */}
              <div className="absolute left-[-26px] top-0 h-[calc(100%+54px)] w-[1px] bg-[#FF7F50]" />
              <div className="absolute left-[-40px] w-[28px] h-[28px] rounded-full bg-primary flex items-center justify-center z-10">
                <ConditionAirplaneWhiteIcon width={16} height={16} />
              </div>
              <div>
                <div className="text-[14px] font-semibold text-text-main">Điểm khởi hành của chuyến bay của bạn</div>
                <div className="text-[14px] text-text-secondary mt-1 font-semibold">26 April 2026 (13:15 Da Nang)</div>
              </div>
            </div>

            {/* Step 3: Estimated value area */}
            <div className="relative flex items-start gap-4 mb-6">
              <div className="absolute left-[-40px] top-0 w-[28px] h-[28px] flex items-center justify-center z-10">
                <div className="w-[10px] h-[10px] rounded-full border border-[#FF7F50] bg-white"></div>
              </div>
              <div className="flex-1">
                <div className="bg-[#C9F7FE] rounded-[10px] p-4">
                  <div className="text-[14px] font-semibold text-primary mb-1">Giá trị hoàn lại ước tính</div>
                  <div className="text-[14px] font-semibold text-text-main">Phí hoàn vé: 0 VND</div>
                  <div className="text-[14px] font-semibold text-text-main">Hoàn vé trước 27 April 2026 (07:15 Da Nang)</div>
                </div>

                <div className="flex justify-center mt-6">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="flex items-center gap-2 text-[16px] font-semibold text-primary hover:underline cursor-pointer"
                  >
                    Xem thêm
                    <ChevronDownIcon width={18} height={18} color="#4558B6" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border border-border-main rounded-[10px] p-5">
        <div className="text-[14px] font-bold text-text-main mb-2">Phí dịch vụ hoàn tiền</div>
        <div className="text-[14px] font-semibold text-text-main">Nếu có, sẽ được áp dụng khi quý khách yêu cầu hoàn tiền.</div>
      </div>

      <RefundEstimateModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  )
}

// --- Refund Estimate Modal ---
function RefundEstimateModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => { document.body.style.overflow = 'unset' }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"
        onClick={onClose}
      />

      <div className="relative w-full max-w-[640px] bg-white rounded-[20px] overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-200">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-border-main">
          <h3 className="text-[20px] font-bold text-text-main">Ước tính hoàn vé</h3>
          <button
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors cursor-pointer"
          >
            <CloseCircleIcon width={40} height={40} color="#3A3A3A" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="p-6 max-h-[80vh] overflow-y-auto custom-scrollbar">
          <div className="flex items-center gap-2 text-[15px] font-semibold text-text-main mb-6">
            <ConditionPersonIcon width={18} height={18} color="#3A3A3A" />
            <span>Giá trị hoàn ước tính cho 1 hành khách là người lớn</span>
          </div>

          <div className="ml-10">
            {/* Step 1 */}
            <div className="relative flex items-start gap-4 mb-8">
              {/* Blue line from Step 1 to Step 2 */}
              <div className="absolute left-[-26px] top-[14px] h-[calc(100%+36px)] w-[1px] bg-primary" />
              <div className="absolute left-[-40px] w-[28px] h-[28px] rounded-full bg-primary flex items-center justify-center z-10">
                <ConditionCalendarWhiteIcon width={16} height={16} />
              </div>
              <div className="text-[15px] font-semibold text-text-main">Vé điện tử của bạn đã được phát hành</div>
            </div>

            {/* Step 2 */}
            <div className="relative flex items-start gap-4 mb-10">
              {/* Orange line from Step 2 to Step 3 */}
              <div className="absolute left-[-26px] top-[14px] h-[calc(100%+44px)] w-[1px] bg-[#FF7F50]" />
              <div className="absolute left-[-40px] w-[28px] h-[28px] rounded-full bg-primary flex items-center justify-center z-10">
                <ConditionAirplaneWhiteIcon width={16} height={16} />
              </div>
              <div>
                <div className="text-[15px] font-semibold text-text-main">Điểm khởi hành của chuyến bay của bạn</div>
                <div className="text-[14px] text-text-secondary mt-1 font-semibold">26 April 2026 (13:15 Da Nang)</div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative flex items-start gap-4 mb-8">
              <div className="absolute left-[-40px] top-0 w-[28px] h-[28px] flex items-center justify-center z-10">
                <div className="w-[10px] h-[10px] rounded-full border border-[#FF7F50] bg-white"></div>
              </div>
              <div className="flex-1">
                <div className="bg-[#C9F7FE] rounded-[10px] p-4">
                  <div className="text-[15px] font-bold text-primary mb-1">Giá trị hoàn lại ước tính</div>
                  <div className="text-[14px] font-bold text-text-main">Phí hoàn vé: 0 VND</div>
                  <div className="text-[14px] font-bold text-text-main">Hoàn vé trước 27 April 2026 (07:15 Da Nang)</div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Sections in Modal */}
          <div className="space-y-4">
            <div className="border border-border-main rounded-[15px] p-5">
              <div className="text-[15px] font-bold text-text-main mb-2">Phí dịch vụ hoàn tiền</div>
              <div className="text-[14px] font-semibold text-text-main">Nếu có, sẽ được áp dụng khi quý khách yêu cầu hoàn tiền.</div>
            </div>

            <div className="border border-border-main rounded-[15px] p-5">
              <div className="text-[15px] font-bold text-text-main mb-2">Quy trình hoàn lại vé</div>
              <div className="text-[14px] font-semibold text-text-main">
                Nếu được chấp thuận, bạn sẽ nhận được số vé hoàn lại trong vòng 90 ngày sau khi yêu cầu hoàn vé của bạn được gửi.
              </div>
              <div className="text-[14px] font-semibold text-primary mt-3 cursor-pointer hover:underline">
                Xem chi tiết thời gian hoàn vé
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-surface-hover p-6">
          <div className="text-[15px] font-bold text-text-main mb-2">Ước tính hoàn vé</div>
          <p className="text-[13px] font-semibold text-text-secondary leading-relaxed">
            Số vé trên chỉ là ước tính. Số tiền hoàn lại của bạn sẽ được xác nhận sau khi yêu cầu hoàn vé của bạn được chấp thuận.
          </p>
        </div>
      </div>
    </div>
  )
}

// --- SECTION: Quy trình hoàn lại vé ---
function ProcessSection() {
  return (
    <div>
      <div className="text-[20px] font-semibold text-text-main mb-4 px-1">Quy trình hoàn lại vé</div>

      <div className="border border-border-main rounded-[10px] overflow-hidden py-1">
        <AccordionItem title="Cách gửi yêu cầu hoàn vé">
          <div className="space-y-6">
            <p className="text-[16px] font-semibold text-text-main leading-relaxed">
              Để quá trình hoàn vé dễ dàng hơn, hãy nhớ đăng nhập vào tài khoản VFJLink của bạn khi đặt vé. Sau đó, hãy làm
              theo các bước sau để gửi yêu cầu hoàn vé:
            </p>

            <div className="space-y-5">
              <div>
                <div className="text-[14px] font-semibold text-text-main">1. Đăng nhập hoặc đăng ký VFJLink</div>
                <div className="text-[14px] text-text-main mt-1 leading-relaxed">
                  Đăng nhập vào tài khoản VFJLink đã sử dụng khi đặt vé. Nếu bạn chưa có tài khoản, vui lòng đăng
                  ký VFJLink bằng chính email đã dùng để đặt vé.
                </div>
              </div>

              <div>
                <div className="text-[14px] font-semibold text-text-main">2. Mở vé điện tử của bạn thông qua Đặt chỗ của tôi</div>
                <div className="text-[14px] text-text-main mt-1 leading-relaxed">
                  Đi tới Đặt chỗ của tôi và chọn đặt chỗ bạn muốn hoàn vé. Sau đó, nhấp vào Hoàn lại tiền.
                </div>
              </div>

              <div>
                <div className="text-[14px] font-semibold text-text-main">3. Đọc chính sách hoàn vé và số tiền ước tính của bạn</div>
                <div className="text-[14px] text-text-main mt-1 leading-relaxed">
                  Bạn sẽ có thể xem chính sách hoàn vé cho đặt chỗ của mình, cũng như số tiền ước tính hoàn lại.
                  Sau đó, bạn có thể nhấp vào Bắt đầu hoàn lại tiền của tôi.
                </div>
              </div>

              <div>
                <div className="text-[14px] font-semibold text-text-main">4. Hoàn tất các chi tiết và giấy tờ hoàn vé của bạn</div>
                <div className="text-[14px] text-text-main mt-1 leading-relaxed">
                  Chọn chuyến bay và (các) hành khách bạn muốn hoàn vé. Đảm bảo chọn đúng lý do hoàn vé, và tải
                  lên các giấy tờ hỗ trợ có liên quan (nếu có).
                </div>
              </div>

              <div>
                <div className="text-[14px] font-semibold text-text-main">5. Gửi yêu cầu hoàn vé của bạn</div>
                <div className="text-[14px] text-text-main mt-1 leading-relaxed">
                  Vui lòng kiểm tra chi tiết giá trị hoàn lại và chọn gửi Gửi yêu cầu. Yêu cầu hoàn của bạn sẽ được
                  VFJLink xem xét và chuyển đến hãng hàng không.
                </div>
              </div>
            </div>
          </div>
        </AccordionItem>

        <AccordionItem title="Cách kiểm tra trạng thái hoàn vé">
          <p className="text-[16px] font-semibold text-text-main leading-relaxed">
            Khi bạn gửi yêu cầu hoàn vé, hãy mở vé điện tử của bạn thông qua Đặt chỗ của tôi.
            Nhấp vào Hoàn vé, sau đó chuyển đến thanh Trạng thái hoàn vé
          </p>
        </AccordionItem>

        <AccordionItem title="Chính sách hoàn cho các dịch vụ tiện ích kèm theo" hasDivider={false}>
          <div className="space-y-3">
            <p className="text-[16px] font-semibold text-text-main leading-relaxed">
              Để xem chính sách hoàn vé của các tiện ích của hãng hàng không này (ví dụ: hành lý, chọn chỗ ngồi, suất ăn, v.v.), vui lòng xem <span className="text-primary cursor-pointer hover:underline">tại đây</span>.
            </p>
            <div className="space-y-2">
              <p className="text-[16px] font-semibold text-text-main">Vui lòng lưu ý một số điều quan trọng dưới đây:</p>
              <ul className="list-disc list-inside space-y-3 text-[16px] font-semibold text-text-main ml-2">
                <li className="leading-relaxed">
                  Chính sách hoàn vé của các tiện ích của chuyến bay có thể khác với vé máy bay.
                </li>
                <li className="leading-relaxed">
                  Vé máy bay và các tiện ích của chuyến bay sẽ được hoàn lại cùng nhau. Nói cách khác, tiện ích của chuyến bay của bạn không thể được hoàn vé riêng biệt với vé của bạn.
                </li>
              </ul>
            </div>
          </div>
        </AccordionItem>
      </div>
    </div>
  )
}

// --- Main Component ---
export function RefundTab({ flight }: { flight: Flight }) {
  const [activeSection, setActiveSection] = useState<SectionKey>('policy')

  const sections: { key: SectionKey; label: string }[] = [
    { key: 'policy', label: 'Chính sách hoàn vé của bạn' },
    { key: 'estimate', label: 'Giá trị hoàn lại ước tính' },
    { key: 'process', label: 'Quy trình hoàn lại vé' },
  ]

  return (
    <div className="bg-surface-hover border-x border-border-main p-3">
      <div className="rounded-[10px] overflow-hidden bg-white">
        {/* Airline */}
        <div className="flex items-center gap-2 pt-3 px-4">
          <AirlineLogo airline={flight.airline} logoUrl={flight.logoUrl} className="w-[36px] h-[36px] shrink-0" />
          <span className="text-[18px] font-semibold text-text-main">{flight.airline}</span>
        </div>
        <div className="text-[13px] md:text-[14px] font-semibold text-text-secondary px-4 pb-2">
          Hà Nội → TP HCM • phổ thông
        </div>

        {/* Status badge */}
        <div className="bg-border-main px-4 py-2 flex items-center gap-2">
          <CloseCircleIcon width={30} height={30} color="#000000" />
          <span className="text-[20px] font-semibold text-text-main">Không hoàn vé</span>
        </div>

        {/* Layout */}
        <div className="flex flex-col md:flex-row gap-3 p-3 md:p-4">
          {/* Sidebar */}
          <div className="w-full md:w-[200px] shrink-0 flex flex-row md:flex-col gap-2 md:gap-4 overflow-x-auto no-scrollbar pb-1 md:pb-0">
            {sections.map(s => (
              <SidebarItem
                key={s.key}
                label={s.label}
                active={activeSection === s.key}
                onClick={() => setActiveSection(s.key)}
              />
            ))}
          </div>

          {/* Content */}
          <div className="flex-1 bg-white md:p-[10px] min-h-[200px]">
            {activeSection === 'policy' && <PolicySection />}
            {activeSection === 'estimate' && <EstimateSection />}
            {activeSection === 'process' && <ProcessSection />}
          </div>
        </div>
      </div>
    </div>
  )
}
