import { Checkbox, Input, Select } from 'antd'

import { ArrowRightCircleIcon,FlightSolidIcon, TimelinePlaneIcon } from '@/assets/icons/icons'

interface FlightSummaryItemProps {
  type: 'departure' | 'return';
  airlineName: string;
  airlineLogoUrl: string;
  departureCity: string;
  departureCode: string;
  departureTime: string;
  departureDate: string;
  arrivalCity: string;
  arrivalCode: string;
  arrivalTime: string;
  arrivalDate: string;
  duration: string;
  isDirect: boolean;
  luggageType: string;
  ticketClass: string;
  policies: { text: string; type: 'orange' | 'blue' | 'red' }[];
}

function FlightSummaryItem({
  type,
  airlineName,
  airlineLogoUrl,
  departureCity,
  departureCode,
  departureTime,
  departureDate,
  arrivalCity,
  arrivalCode,
  arrivalTime,
  arrivalDate,
  duration,
  isDirect,
  luggageType,
  ticketClass,
  policies
}: FlightSummaryItemProps) {
  return (
    <div 
      className="flex flex-col gap-4 border border-[#EAEAEA] rounded-xl p-5 shadow-[0_2px_8px_rgba(0,0,0,0.01)]"
      style={{ background: 'linear-gradient(180deg, #FFFFFF 1%, rgba(241, 255, 219, 0.2) 41%, #FFFFFF 100%)' }}
    >
      {/* Badge */}
      <div className="flex items-center gap-1.5 px-3 py-1 bg-[#E8F3F5] text-[#3F7A82] text-[13px] font-bold rounded-lg w-fit">
        <span className={type === 'return' ? 'rotate-180 inline-block' : ''}>
          <FlightSolidIcon width={16} height={16} color="#3F7A82" />
        </span>
        <span>{type === 'departure' ? 'Khởi hành' : 'Khứ hồi'}</span>
      </div>

      {/* Flight schedule times */}
      <div className="flex justify-between items-center gap-4">
        <div className="text-left flex-1 min-w-0">
          <span className="block text-[15px] font-bold text-[#1A1A1A] truncate">{departureCity} ({departureCode})</span>
          <span className="text-[12px] text-[#8C8C8C] block mt-0.5 truncate">{departureDate}</span>
          <span className="text-[13px] text-[#8C8C8C] block mt-0.5">{departureTime}</span>
        </div>

        {/* Center line with airplane */}
        <div className="flex flex-col items-center gap-1 flex-1 max-w-[120px] shrink-0">
          <span className="text-[12px] text-[#8C8C8C] font-medium">{duration}</span>
          <div className="flex items-center w-full relative">
            <div className="w-full h-[1px] border-t border-dashed border-[#D9D9D9]" />
            <div className="absolute left-[40%] top-1/2 -translate-y-1/2 bg-white px-1 text-[#8C8C8C] flex items-center justify-center">
              <TimelinePlaneIcon color="#D9D9D9" width={18} height={18} />
            </div>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#D9D9D9]"></div>
          </div>
          <span className="text-[12px] text-[#1A1A1A] font-bold mt-0.5">{isDirect ? 'Bay thẳng' : '1 điểm dừng'}</span>
        </div>

        <div className="text-right flex-1 min-w-0">
          <span className="block text-[15px] font-bold text-[#1A1A1A] truncate">{arrivalCity} ({arrivalCode})</span>
          <span className="text-[12px] text-[#8C8C8C] block mt-0.5 truncate">{arrivalDate}</span>
          <span className="text-[13px] text-[#8C8C8C] block mt-0.5">{arrivalTime}</span>
        </div>
      </div>

      {/* Airline logo and name */}
      <div className="flex items-center gap-2 mt-1">
        {airlineLogoUrl ? (
          <img
            src={airlineLogoUrl}
            alt={airlineName}
            className="h-5 w-auto object-contain shrink-0 rounded"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
        ) : (
          <div className="w-6 h-6 rounded bg-[#4262E0]/10 flex items-center justify-center shrink-0">
            <TimelinePlaneIcon width={20} height={20} color="#54858C" />
          </div>
        )}
        <span className="font-bold text-[14px] text-[#1A1A1A]">{airlineName}</span>
      </div>

      {/* Luggage & ticket class */}
      <div className="flex items-center justify-between gap-4 mt-0.5">
        <div className="flex items-center gap-2 text-[14px] text-[#1A1A1A] font-bold">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="text-[#8C8C8C]">
            <rect x="3" y="7" width="18" height="12" rx="2" />
            <path d="M9 7V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v3" />
            <line x1="12" y1="11" x2="12" y2="15" />
            <line x1="9" y1="13" x2="15" y2="13" />
          </svg>
          <span>{luggageType}</span>
        </div>

        <div className="flex items-center gap-1 px-3 py-1 bg-[#E8F3F5] text-[#3F7A82] text-[12px] font-bold rounded-lg border border-[#C2DDE0]/50 whitespace-nowrap">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="mr-0.5">
            <rect x="2" y="4" width="20" height="14" rx="2" />
            <line x1="6" y1="8" x2="6" y2="14" />
            <line x1="18" y1="8" x2="18" y2="14" />
          </svg>
          <span>{ticketClass}</span>
        </div>
      </div>

      {/* Policy list */}
      <div className="flex flex-col gap-2 mt-1">
        {policies.map((p, idx) => {
          let styleClass = '';
          if (p.type === 'orange') {
            styleClass = 'text-[#E67E22] border-[#FADBD8] bg-[#FFF8F2] hover:bg-[#FDF2E9]';
          } else if (p.type === 'blue') {
            styleClass = 'text-[#4262E0] border-[#D1E0FF] bg-[#F1F5FF] hover:bg-[#EAF0FF]';
          } else {
            styleClass = 'text-[#E53E3E] border-[#FED2D2] bg-[#FFF5F5] hover:bg-[#FFEBEB]';
          }
          return (
            <span
              key={idx}
              className={`px-3 py-1.5 text-[12px] font-bold rounded-full border transition-colors w-fit text-left leading-snug ${styleClass}`}
            >
              {p.text}
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default function FlightPaymentPage() {

  return (
    <div className="min-h-screen bg-[#E5E7EB] flex flex-col font-sans">
      {/* Stepper Header */}
      <div className="bg-white shadow-sm overflow-visible relative">
        <div className="container mx-auto">
          <div className="relative flex items-center justify-between pt-6 pb-6">
            <div className="flex-1 flex justify-start">
              <div className="flex items-center gap-3">
                <div className="w-[28px] h-[28px] rounded-full bg-[#54858C] text-white flex items-center justify-center text-[14px] font-bold">1</div>
                <span className="text-[#54858C] font-semibold text-[18px]">Chi tiết chuyến đi của bạn</span>
              </div>
            </div>

            <div className="flex-none">
              <ArrowRightCircleIcon width={24} height={24} color="#D9D9D9" />
            </div>

            <div className="flex-1 flex justify-end">
              <div className="flex items-center gap-3">
                <div className="w-[28px] h-[28px] rounded-full bg-[#385898] text-white flex items-center justify-center text-[14px] font-bold">2</div>
                <span className="text-[#385898] font-semibold text-[18px]">Thanh toán</span>
              </div>
            </div>
          </div>
        </div>

        {/* Progress line pinned to bottom edge */}
        <div className="absolute bottom-0 left-0 right-0 h-[40px] translate-y-1/2 z-10 overflow-hidden">
          <div className="container mx-auto flex items-center h-full">
            {/* Teal line up to 33% (before the center arrow) */}
            <div className="w-[33%] relative h-full flex items-center">
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[5000px] h-[2px] bg-[#54858C]" />
            </div>

            <div className="flex-none flex items-center justify-center relative z-10">
              <TimelinePlaneIcon width={20} height={20} color="#54858C" />
            </div>

            {/* Gray line for the rest */}
            <div className="flex-1 relative h-full flex items-center">
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[5000px] h-[2px] bg-[#D9D9D9]" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 py-10 container">
        <div className="flex gap-8">
          {/* Left Column: Forms */}
          <div className="flex-[2] flex flex-col gap-8">

            {/* Contact Info Section */}
            <div className="bg-white rounded-[16px] border border-[#EAEAEA] shadow-sm overflow-hidden">
              <div className="p-6 pb-4">
                <h3 className="text-[18px] font-bold text-[#1A1A1A] m-0">Thông tin liên hệ (nhận vé/phiếu thanh toán)</h3>
              </div>

              {/* Blue Promo Banner */}
              <div className="w-full px-6 py-3.5 bg-[#4262E0] flex items-center justify-between text-white mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-white/15 rounded-full flex items-center justify-center shrink-0">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                      <circle cx="19" cy="11" r="1.5" />
                      <path d="M19 12.5v3h1.5" />
                    </svg>
                  </div>
                  <span className="font-semibold text-[15px] leading-snug">Đăng nhập hoặc đăng ký để có giá rẻ hơn và nhiều ưu đãi hơn!</span>
                </div>
                <button className="bg-[#EAF0FF] hover:bg-[#DCE6FF] text-[#4262E0] active:scale-95 px-5 py-2 rounded-full text-[13px] font-bold shadow-sm transition-all flex items-center gap-1.5 whitespace-nowrap">
                  <span>Đăng nhập</span>
                  <span className="text-[#4262E0]/30 font-normal">|</span>
                  <span>Đăng Ký</span>
                </button>
              </div>

              <div className="px-6 pb-6 space-y-6">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[14px] font-bold text-[#1A1A1A]">Họ tên<span className="text-red-500">*</span></label>
                  <Input placeholder="" className="h-[48px] rounded-lg text-[15px] border-[#D9D9D9] hover:border-[#4262E0] focus:border-[#4262E0]" />
                  <span className="text-[12px] text-[#8C8C8C] leading-normal font-normal">Người Việt: nhập Tên đệm + Tên chính + Họ. Người nước ngoài: nhập Tên + Họ.</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[14px] font-bold text-[#1A1A1A]">Điện thoại di động<span className="text-red-500">*</span></label>
                    <div className="flex gap-3">
                      <Select
                        defaultValue="+84"
                        className="w-[110px] h-[48px] [&>.ant-select-selector]:!rounded-lg [&>.ant-select-selector]:!border-[#D9D9D9] [&>.ant-select-selector]:!h-[48px] [&>.ant-select-selector]:!flex [&>.ant-select-selector]:!items-center [&>.ant-select-selector]:!px-3"
                        options={[
                          {
                            value: '+84',
                            label: (
                              <div className="flex items-center gap-1.5">
                                <div className="w-5 h-5 rounded-full bg-[#DA251D] flex items-center justify-center shrink-0 overflow-hidden relative border border-black/5">
                                  <span className="text-[#FFFF00] text-[10px] mb-[1.5px] leading-none select-none">★</span>
                                </div>
                                <span className="font-semibold text-[14px] text-[#333]">+84</span>
                              </div>
                            )
                          }
                        ]}
                      />
                      <Input placeholder="" className="flex-1 h-[48px] rounded-lg text-[15px] border-[#D9D9D9] hover:border-[#4262E0] focus:border-[#4262E0]" />
                    </div>
                    <span className="text-[12px] text-[#8C8C8C] leading-normal font-normal">VD: +84 901234567 trong đó (+84) là mã quốc gia và 901234567 là số di động</span>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[14px] font-bold text-[#1A1A1A]">Email<span className="text-red-500">*</span></label>
                    <Input placeholder="" className="h-[48px] rounded-lg text-[15px] border-[#D9D9D9] hover:border-[#4262E0] focus:border-[#4262E0]" />
                    <span className="text-[12px] text-[#8C8C8C] leading-normal font-normal">VD: email@example.com</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Passenger Info Section */}
            <div className="bg-white rounded-[16px] border border-[#EAEAEA] shadow-sm overflow-hidden">
              <div className="p-6 pb-4">
                <h3 className="text-[18px] font-bold text-[#1A1A1A] m-0">Thông tin hành khách</h3>
              </div>

              {/* Blue Header Strip */}
              <div className="w-full px-6 py-3.5 bg-[#EAF0FF] text-[#4262E0] font-bold text-[15px] border-y border-[#D1E0FF]/40">
                01 người lớn
              </div>

              {/* Warning/Caution Strip */}
              <div className="w-full px-6 py-4 bg-[#FFF2E2] border-b border-[#FFE2C2] flex gap-3 text-[13px]">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#FF9900] mt-0.5 shrink-0">
                  <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
                  <line x1="12" y1="9" x2="12" y2="13" />
                  <line x1="12" y1="17" x2="12.01" y2="17" />
                </svg>
                <div className="flex flex-col gap-1">
                  <span className="text-[#B25E00] font-bold">Vui lòng chú ý cho những điều sau đây:</span>
                  <span className="text-[#1A1A1A] leading-normal font-normal">
                    Vui lòng nhập tên bằng tiếng Anh không dấu (không có ký tự đặc biệt), chính xác như trên giấy tờ tùy thân. Nếu không, bạn có thể bị từ chối lên máy bay hoặc phát sinh thêm chi phí.
                  </span>
                </div>
              </div>

              {/* Forms Section */}
              <div className="p-6 space-y-6">

                {/* Gender Dropdown */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[14px] font-bold text-[#1A1A1A]">Giới tính<span className="text-red-500">*</span></label>
                    <Select
                      placeholder="-- Giới tính --"
                      className="w-full h-[48px] [&>.ant-select-selector]:!rounded-lg [&>.ant-select-selector]:!border-[#D9D9D9] [&>.ant-select-selector]:!h-[48px] [&>.ant-select-selector]:!flex [&>.ant-select-selector]:!items-center [&>.ant-select-selector]:!px-3 [&>.ant-select-arrow]:!text-[#8C8C8C]"
                      options={[
                        { value: 'male', label: 'Nam' },
                        { value: 'female', label: 'Nữ' }
                      ]}
                    />
                  </div>
                  <div></div>
                </div>

                {/* Name Form Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[14px] font-bold text-[#1A1A1A]">Họ (vd: NGUYEN)<span className="text-red-500">*</span></label>
                    <Input placeholder="" className="h-[48px] rounded-lg text-[15px] border-[#D9D9D9] hover:border-[#4262E0] focus:border-[#4262E0]" />
                    <span className="text-[12px] text-[#8C8C8C] leading-normal font-normal">Như trên CMND (không dấu)</span>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[14px] font-bold text-[#1A1A1A]">Chữ đệm và tên (vd: VAN ANH)<span className="text-red-500">*</span></label>
                    <Input placeholder="" className="h-[48px] rounded-lg text-[15px] border-[#D9D9D9] hover:border-[#4262E0] focus:border-[#4262E0]" />
                    <span className="text-[12px] text-[#8C8C8C] leading-normal font-normal">Như trên CMND (không dấu)</span>
                  </div>
                </div>

                {/* Birthdate & Nationality */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[14px] font-bold text-[#1A1A1A]">Ngày sinh<span className="text-red-500">*</span></label>
                    <div className="flex gap-2 w-full">
                      <Input placeholder="DD" className="w-[70px] h-[48px] rounded-lg text-center text-[15px] border-[#D9D9D9] hover:border-[#4262E0] focus:border-[#4262E0]" />
                      <Input placeholder="MM" className="w-[70px] h-[48px] rounded-lg text-center text-[15px] border-[#D9D9D9] hover:border-[#4262E0] focus:border-[#4262E0]" />
                      <Input placeholder="YYYY" className="flex-1 h-[48px] rounded-lg text-center text-[15px] border-[#D9D9D9] hover:border-[#4262E0] focus:border-[#4262E0]" />
                    </div>
                    <span className="text-[12px] text-[#8C8C8C] leading-normal font-normal">Hành khách người lớn (trên 12 tuổi)</span>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[14px] font-bold text-[#1A1A1A]">Quốc tịch<span className="text-red-500">*</span></label>
                    <Select
                      placeholder="-- Việt Nam --"
                      className="w-full h-[48px] [&>.ant-select-selector]:!rounded-lg [&>.ant-select-selector]:!border-[#D9D9D9] [&>.ant-select-selector]:!h-[48px] [&>.ant-select-selector]:!flex [&>.ant-select-selector]:!items-center [&>.ant-select-selector]:!px-3 [&>.ant-select-arrow]:!text-[#8C8C8C]"
                      options={[
                        { value: 'VN', label: 'Việt Nam' }
                      ]}
                    />
                  </div>
                </div>

                {/* Identity Number */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[14px] font-bold text-[#1A1A1A]">Số căn cước công dân<span className="text-red-500">*</span></label>
                  <Input placeholder="" className="h-[48px] rounded-lg text-[15px] border-[#D9D9D9] hover:border-[#4262E0] focus:border-[#4262E0]" />
                  <span className="text-[12px] text-[#8C8C8C] leading-normal font-normal">Đối với hành khách là trẻ em hoặc trẻ sơ sinh, vui lòng nhập giấy tờ tùy thân của người giám hộ đi cùng trẻ. (Vui lòng đảm bảo chỉ nhập số trong trường này)</span>
                </div>
              </div>

              {/* Grey Bottom Checkbox Bar */}
              <div className="bg-[#EAEAEA] px-6 py-4 flex items-center gap-3 border-t border-[#EAEAEA]">
                <Checkbox className="scale-110" />
                <span className="text-[14px] font-bold text-[#1A1A1A]">Thêm tài khoản hành khách thân thiết</span>
              </div>
            </div>

          </div>

          {/* Right Column: Summary */}
          <div className="flex-1 flex flex-col gap-6">

            {/* Flight Summary Card */}
            <div className="bg-[#F5F5F5] rounded-[16px] border border-[#EAEAEA] shadow-sm overflow-hidden">
              {/* Card Header: White Background */}
              <div className="bg-white p-5 flex items-center justify-between border-b border-[#EAEAEA]">
                <h3 className="text-[18px] font-bold text-[#1A1A1A] m-0">Chuyến bay của bạn</h3>
                <button className="bg-[#4262E0] hover:bg-[#324eb2] active:scale-95 text-white px-5 py-1.5 rounded-full text-[13px] font-bold transition-all shadow-sm border-none">Chi tiết</button>
              </div>

              {/* Card Body: Grey Background */}
              <div className="p-4 space-y-4">
                {/* Departure */}
                <FlightSummaryItem
                  type="departure"
                  airlineName="Bamboo Airway"
                  airlineLogoUrl="/icons/bbIcon.webp"
                  departureCity="TP HCM"
                  departureCode="SGN"
                  departureTime="06:30"
                  departureDate="Thứ 5, 9 thg 4 2026"
                  arrivalCity="Hà Nội"
                  arrivalCode="HAN"
                  arrivalTime="08:45"
                  arrivalDate="Thứ 5, 9 thg 4 2026"
                  duration="2h 15m"
                  isDirect={true}
                  luggageType="Hành lý+"
                  ticketClass="Phổ thông"
                  policies={[
                    { text: 'Đổi lịch phụ thuộc vào chính sách của hãng hàng không', type: 'orange' },
                    { text: 'Có thể hoàn vé', type: 'blue' }
                  ]}
                />

                {/* Return */}
                <FlightSummaryItem
                  type="return"
                  airlineName="VietJet Air"
                  airlineLogoUrl="/icons/vjIcon.webp"
                  departureCity="Hà Nội"
                  departureCode="HAN"
                  departureTime="06:30"
                  departureDate="Thứ 5, 9 thg 4 2026"
                  arrivalCity="TP HCM"
                  arrivalCode="SGN"
                  arrivalTime="08:45"
                  arrivalDate="Thứ 5, 9 thg 4 2026"
                  duration="2h 15m"
                  isDirect={true}
                  luggageType="Nguyên bản"
                  ticketClass="Phổ thông"
                  policies={[
                    { text: 'Không áp dụng đổi lịch bay', type: 'red' },
                    { text: 'Không đổi vé', type: 'red' }
                  ]}
                />
              </div>
            </div>

            {/* Price Detail Card */}
            <div className="bg-white rounded-[20px] shadow-sm p-6">
              <h3 className="text-[20px] font-bold text-[#3A3A3A] mb-6 m-0">Chi tiết giá</h3>
              <div className="space-y-4">
                <div className="flex justify-between text-[14px]">
                  <span className="text-[#3A3A3A] font-medium">Bamboo Airways (Người lớn) x1</span>
                  <span className="text-[#3A3A3A]">3.169.633 đ</span>
                </div>
                <div className="flex justify-between text-[14px]">
                  <span className="text-[#3A3A3A] font-medium">VietJet Air (Người lớn) x1</span>
                  <span className="text-[#3A3A3A]">2.708.189 đ</span>
                </div>
                <div className="flex justify-between text-[14px]">
                  <span className="text-[#3A3A3A] font-medium">Bảo hiểm du lịch toàn diện Chubb</span>
                  <span className="text-[#3A3A3A]">331.600 đ</span>
                </div>

                <div className="border-t border-[#F0F0F0] pt-6 flex justify-between items-center">
                  <span className="text-[16px] font-semibold text-[#3A3A3A]">Tổng tiền thanh toán</span>
                  <span className="text-[28px] font-bold text-[#4558B6]">6.209.422 đ</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
