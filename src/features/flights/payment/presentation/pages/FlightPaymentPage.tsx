import { Checkbox, DatePicker, Input, Select } from 'antd'

import { AirlineLogo } from '@/shared/components/common/AirlineLogo'

import { ArrowRightCircleIcon, ChevronDown2Icon, FlightSolidIcon, LuggageLineIcon, TicketPlaneIcon,TimelinePlaneIcon, UserKeyIcon, WarningTriangleIcon } from '@/assets/icons/icons'

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
      className="flex flex-col gap-4 border border-[#EAEAEA] rounded-xl p-3 shadow-[0_2px_8px_rgba(0,0,0,0.01)]"
      style={{ background: 'linear-gradient(180deg, #FFFFFF 1%, rgba(241, 255, 219, 0.2) 41%, #FFFFFF 100%)' }}
    >
      {/* Badge */}
      <div className="flex items-center gap-1.5 px-3 py-2 bg-[#86CED9]/20 text-[#54858C] text-[16px] font-semibold rounded-[10px] w-fit">
        <span className={type === 'return' ? 'rotate-180 inline-block' : ''}>
          <FlightSolidIcon width={22} height={22} color="#54858C" />
        </span>
        <span>{type === 'departure' ? 'Khởi hành' : 'Khứ hồi'}</span>
      </div>

      {/* Flight schedule times */}
      <div className="flex justify-between items-center gap-4">
        <div className="text-left flex-1 min-w-0">
          <span className="block text-[14px] font-semibold text-[#3A3A3A] truncate">{departureCity} ({departureCode})</span>
          <span className="text-[12px] text-[#909090] font-semibold block mt-0.5 truncate">{departureDate}</span>
          <span className="text-[12px] text-[#909090] font-semibold block mt-0.5">{departureTime}</span>
        </div>

        {/* Center line with airplane */}
        <div className="flex flex-col items-center flex-1 max-w-[120px] shrink-0">
          <span className="text-[14px] text-[#3A3A3A] font-normal leading-none">{duration}</span>
          <div className="flex items-center w-full gap-1.5 py-1">
            <TimelinePlaneIcon color="#D9D9D9" width={22} height={22} className="shrink-0" />
            <svg className="flex-1 h-[2px] w-full self-center">
              <line x1="0" y1="1" x2="100%" y2="1" stroke="#D9D9D9" strokeWidth="1.5" strokeDasharray="4 6" />
            </svg>
            <div className="w-2.5 h-2.5 rounded-full bg-[#D9D9D9] shrink-0" />
          </div>
          <span className="text-[14px] text-[#3A3A3A] font-normal leading-none">{isDirect ? 'Bay thẳng' : '1 điểm dừng'}</span>
        </div>

        <div className="text-right flex-1 min-w-0">
          <span className="block text-[14px] font-semibold text-[#3A3A3A] truncate">{arrivalCity} ({arrivalCode})</span>
          <span className="text-[12px] text-[#909090] font-semibold block mt-0.5 truncate">{arrivalDate}</span>
          <span className="text-[12px] text-[#909090] font-semibold block mt-0.5">{arrivalTime}</span>
        </div>
      </div>

      {/* Airline logo and name */}
      <div className="flex items-center gap-2 mt-1">
        <AirlineLogo airline={airlineName} logoUrl={airlineLogoUrl} />
        <span className="font-semibold text-[14px] text-[#3A3A3A]">{airlineName}</span>
      </div>

      {/* Luggage & ticket class */}
      <div className="flex items-center justify-between gap-4 mt-0.5">
        <div className="flex items-center gap-2 text-[14px] text-[#3A3A3A] font-semibold">
          <LuggageLineIcon color="#54858C" width={24} height={24} />
          <span>{luggageType}</span>
        </div>

        <div className="flex items-center gap-1 px-3 py-2 bg-[#86CED9]/20 text-[#54858C] text-[14px] font-semibold rounded-[10px] border border-[#C2DDE0]/50 whitespace-nowrap">
          <TicketPlaneIcon color="#54858C" width={30} height={18} className="mr-0.5" />
          <span>{ticketClass}</span>
        </div>
      </div>

      {/* Policy list */}
      <div className="flex flex-col gap-2 mt-1">
        {policies.map((p, idx) => {
          let styleClass = '';
          if (p.type === 'orange') {
            styleClass = 'text-[#E3B057]';
          } else if (p.type === 'blue') {
            styleClass = 'text-[#4558B6]';
          } else {
            styleClass = 'text-[#B64545]';
          }
          return (
            <span
              key={idx}
              className={`px-3 py-1.5 text-[14px] font-semibold rounded-[20px] border transition-colors w-fit text-left leading-snug ${styleClass}`}
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
          <div className="relative flex items-center justify-between pt-4 pb-4 sm:pt-6 sm:pb-6">
            <div className="flex-1 flex justify-start">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-[22px] h-[22px] sm:w-[25px] sm:h-[25px] rounded-full bg-[#54858C] text-white flex items-center justify-center text-[13px] sm:text-[16px] font-semibold shrink-0">1</div>
                <span className="text-[#54858C] font-semibold text-[12px] sm:text-[15px] lg:text-[18px] leading-tight">Chi tiết chuyến đi</span>
              </div>
            </div>

            <div className="flex-none mx-2 sm:mx-3">
              <ArrowRightCircleIcon width={20} height={20} color="#D9D9D9" />
            </div>

            <div className="flex-1 flex justify-end">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-[22px] h-[22px] sm:w-[25px] sm:h-[25px] rounded-full bg-[#4558B6] text-white flex items-center justify-center text-[13px] sm:text-[16px] font-semibold shrink-0">2</div>
                <span className="text-[#4558B6] font-semibold text-[12px] sm:text-[15px] lg:text-[18px] leading-tight">Thanh toán</span>
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
              <TimelinePlaneIcon width={22} height={22} color="#54858C" />
            </div>

            {/* Gray line for the rest */}
            <div className="flex-1 relative h-full flex items-center">
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[5000px] h-[2px] bg-[#D9D9D9]" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 py-6 sm:py-8 lg:py-10 container">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          {/* Left Column: Forms */}
          <div className="flex-[2] flex flex-col gap-6 lg:gap-8 w-full min-w-0">

            {/* Contact Info Section */}
            <div className="bg-white rounded-[20px] border border-[#EAEAEA] shadow-sm overflow-hidden">
              <div className="p-4 sm:p-5 pb-4">
                <h3 className="text-[16px] sm:text-[18px] font-semibold text-[#3A3A3A] m-0">Thông tin liên hệ (nhận vé/phiếu thanh toán)</h3>
              </div>

              {/* Blue Promo Banner */}
              <div className="w-full px-4 sm:px-5 py-3 sm:py-3.5 bg-gradient-to-r from-[#4558B6] to-[#5B74EB] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-white mb-6">
                <div className="flex items-center gap-2 sm:gap-3">
                  <UserKeyIcon width={26} height={26} color="white" />
                  <span className="font-semibold text-[14px] sm:text-[16px] lg:text-[17px] leading-snug">Đăng nhập hoặc đăng ký để có giá rẻ hơn và nhiều ưu đãi hơn!</span>
                </div>
                <div className="bg-[#CDE7FF] text-[#4558B6] px-4 sm:px-5 py-1.5 sm:py-2 rounded-full text-[13px] sm:text-[15px] font-semibold shadow-sm transition-all flex items-center gap-1.5 whitespace-nowrap self-start sm:self-auto shrink-0">
                  <button className="hover:opacity-80 active:scale-95 transition-all focus:outline-none">Đăng nhập</button>
                  <span className="text-[#4558B6] font-semibold select-none">|</span>
                  <button className="hover:opacity-80 active:scale-95 transition-all focus:outline-none">Đăng Ký</button>
                </div>
              </div>

              <div className="px-4 sm:px-5 pb-5 sm:pb-6 space-y-5 sm:space-y-6">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[16px] sm:text-[17px] font-semibold text-[#3A3A3A]">Họ tên<span className="text-red-500">*</span></label>
                  <Input placeholder="" className="h-[48px] rounded-lg text-[15px] border-[#D9D9D9] hover:border-[#4262E0] focus:border-[#4262E0]" />
                  <span className="text-[13px] sm:text-[14px] text-[#909090] leading-normal font-normal">Người Việt: nhập Tên đệm + Tên chính + Họ. Người nước ngoài: nhập Tên + Họ.</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[16px] sm:text-[17px] font-semibold text-[#3A3A3A]">Điện thoại di động<span className="text-red-500">*</span></label>
                    <div className="flex gap-3">
                      <Select
                        defaultValue="+84"
                        suffixIcon={<ChevronDown2Icon color="#8C8C8C" width={16} height={16} />}
                        className="w-[100px] sm:w-[110px] h-[48px] [&>.ant-select-selector]:!rounded-lg [&>.ant-select-selector]:!border-[#D9D9D9] [&>.ant-select-selector]:!h-[48px] [&>.ant-select-selector]:!flex [&>.ant-select-selector]:!items-center [&>.ant-select-selector]:!px-3]"
                        options={[
                          {
                            value: '+84',
                            label: (
                              <div className="flex items-center gap-2.5">
                                <div className="w-5 h-5 rounded-full bg-[#DA251D] flex items-center justify-center shrink-0 overflow-hidden relative border border-black/5">
                                  <span className="text-[#FFFF00] text-[10px] mb-[1.5px] leading-none select-none">★</span>
                                </div>
                                <span className="font-semibold !text-[15px] text-[#333]">+84</span>
                              </div>
                            )
                          }
                        ]}
                      />
                      <Input placeholder="" className="flex-1 h-[48px] rounded-lg text-[15px] border-[#D9D9D9] hover:border-[#4262E0] focus:border-[#4262E0]" />
                    </div>
                    <span className="text-[13px] sm:text-[14px] text-[#909090] leading-normal font-normal">VD: +84 901234567 trong đó (+84) là mã quốc gia và 901234567 là số di động</span>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[16px] sm:text-[17px] font-semibold text-[#3A3A3A]">Email<span className="text-red-500">*</span></label>
                    <Input placeholder="" className="h-[48px] rounded-lg text-[15px] border-[#D9D9D9] hover:border-[#4262E0] focus:border-[#4262E0]" />
                    <span className="text-[13px] sm:text-[14px] text-[#909090] leading-normal font-normal">VD: email@example.com</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Passenger Info Section */}
            <div className="bg-white rounded-[20px] border border-[#EAEAEA] shadow-sm overflow-hidden">
              <div className="p-4 sm:p-5 pb-4">
                <h3 className="text-[16px] sm:text-[18px] font-semibold text-[#3A3A3A] m-0">Thông tin hành khách</h3>
              </div>

              {/* Blue Header Strip */}
              <div className="w-full px-4 sm:px-5 py-3 sm:py-3.5 bg-[#E4E8FF] text-[#3A3A3A] font-semibold text-[16px] sm:text-[18px] border-y border-[#D1E0FF]/40">
                01 người lớn
              </div>

              {/* Warning/Caution Strip */}
              <div className="w-full px-4 sm:px-5 py-3 sm:py-4 bg-[#FFF2E2] border-b border-[#FFE2C2] flex gap-2 sm:gap-3 text-[14px] sm:text-[16px]">
                <WarningTriangleIcon width={24} height={24} color="#FF5E00" className='shrink-0 mt-0.5' />
                <div className="flex flex-col gap-1">
                  <span className="text-[#3A3A3A] font-semibold">Vui lòng chú ý cho những điều sau đây:</span>
                  <span className="text-[#3A3A3A] leading-normal font-semibold">
                    Vui lòng nhập tên bằng tiếng Anh không dấu (không có ký tự đặc biệt), chính xác như trên giấy tờ tùy thân. Nếu không, bạn có thể bị từ chối lên máy bay hoặc phát sinh thêm chi phí.
                  </span>
                </div>
              </div>

              {/* Forms Section */}
              <div className="p-4 sm:p-6 space-y-5 sm:space-y-6">

                {/* Gender Dropdown */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[16px] sm:text-[17px] font-semibold text-[#3A3A3A]">Giới tính<span className="text-red-500">*</span></label>
                    <Select
                      placeholder="-- Giới tính --"
                      suffixIcon={<ChevronDown2Icon color="#8C8C8C" width={16} height={16} />}
                      className="w-full h-[48px] [&>.ant-select-selector]:!rounded-lg [&>.ant-select-selector]:!border-[#D9D9D9] [&>.ant-select-selector]:!h-[48px] [&>.ant-select-selector]:!flex [&>.ant-select-selector]:!items-center [&>.ant-select-selector]:!px-3"
                      options={[
                        { value: 'male', label: 'Nam' },
                        { value: 'female', label: 'Nữ' }
                      ]}
                    />
                  </div>
                  <div></div>
                </div>

                {/* Name Form Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[16px] sm:text-[17px] font-semibold text-[#3A3A3A]">Họ (vd: NGUYEN)<span className="text-red-500">*</span></label>
                    <Input placeholder="" className="h-[48px] rounded-lg text-[15px] border-[#D9D9D9] hover:border-[#4262E0] focus:border-[#4262E0]" />
                    <span className="text-[13px] sm:text-[14px] text-[#909090] leading-normal font-normal">Như trên CMND (không dấu)</span>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[16px] sm:text-[17px] font-semibold text-[#3A3A3A]">Chữ đệm và tên (vd: VAN ANH)<span className="text-red-500">*</span></label>
                    <Input placeholder="" className="h-[48px] rounded-lg text-[15px] border-[#D9D9D9] hover:border-[#4262E0] focus:border-[#4262E0]" />
                    <span className="text-[13px] sm:text-[14px] text-[#909090] leading-normal font-normal">Như trên CMND (không dấu)</span>
                  </div>
                </div>

                {/* Birthdate & Nationality */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[16px] sm:text-[17px] font-semibold text-[#3A3A3A]">Ngày sinh<span className="text-red-500">*</span></label>
                    <DatePicker
                      placeholder="DD/MM/YYYY"
                      format="DD/MM/YYYY"
                      suffixIcon={<ChevronDown2Icon color="#8C8C8C" width={16} height={16} />}
                      className="w-full h-[48px] !rounded-lg !border-[#D9D9D9] hover:!border-[#4262E0] focus-within:!border-[#4262E0] !shadow-none flex items-center px-3 [&_input]:placeholder:text-[#BFBFBF] [&_input]:text-[15px]"
                    />
                    <span className="text-[13px] sm:text-[14px] text-[#909090] leading-normal font-normal">Hành khách người lớn (trên 12 tuổi)</span>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[16px] sm:text-[17px] font-semibold text-[#3A3A3A]">Quốc tịch<span className="text-red-500">*</span></label>
                    <Select
                      placeholder="-- Việt Nam --"
                      suffixIcon={<ChevronDown2Icon color="#8C8C8C" width={16} height={16} />}
                      className="w-full h-[48px] [&>.ant-select-selector]:!rounded-lg [&>.ant-select-selector]:!border-[#D9D9D9] [&>.ant-select-selector]:!h-[48px] [&>.ant-select-selector]:!flex [&>.ant-select-selector]:!items-center [&>.ant-select-selector]:!px-3"
                      options={[
                        { value: 'VN', label: 'Việt Nam' }
                      ]}
                    />
                  </div>
                </div>

                {/* Identity Number */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[16px] sm:text-[17px] font-semibold text-[#3A3A3A]">Số căn cước công dân<span className="text-red-500">*</span></label>
                  <Input placeholder="" className="h-[48px] rounded-lg text-[15px] border-[#D9D9D9] hover:border-[#4262E0] focus:border-[#4262E0]" />
                  <span className="text-[13px] sm:text-[14px] text-[#909090] leading-normal font-normal">Đối với hành khách là trẻ em hoặc trẻ sơ sinh, vui lòng nhập giấy tờ tùy thân của người giám hộ đi cùng trẻ. (Vui lòng đảm bảo chỉ nhập số trong trường này)</span>
                </div>
              </div>

              {/* Grey Bottom Checkbox Bar */}
              <div className="bg-[#E1E1E1] px-4 sm:px-5 py-3 sm:py-4 flex items-center gap-3 border-t border-[#EAEAEA]">
                <Checkbox className="scale-110" />
                <span className="text-[15px] sm:text-[17px] font-semibold text-[#3A3A3A]">Thêm tài khoản hành khách thân thiết</span>
              </div>
            </div>

          </div>

          {/* Right Column: Summary */}
          <div className="w-full lg:w-auto lg:flex-1 lg:min-w-[300px] lg:max-w-[400px] flex flex-col gap-6">

            {/* Flight Summary Card */}
            <div className="bg-[#F5F5F5] rounded-[16px] border border-[#EAEAEA] shadow-sm overflow-hidden">
              {/* Card Header: White Background */}
              <div className="bg-white px-4 sm:px-5 py-4 flex items-center justify-between border-b border-[#EAEAEA]">
                <h3 className="text-[16px] sm:text-[17px] font-bold text-[#3A3A3A] m-0">Chuyến bay của bạn</h3>
                <button className="bg-[#4558B6] hover:bg-[#324eb2] active:scale-95 text-white px-4 sm:px-5 py-1.5 rounded-full text-[13px] sm:text-[14px] font-semibold transition-all shadow-sm border-none">Chi tiết</button>
              </div>

              {/* Card Body: Grey Background */}
              <div className="p-3 sm:p-4 space-y-3 sm:space-y-4">
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
            <div className="bg-white rounded-[20px] shadow-sm p-4 sm:p-5">
              <h3 className="text-[18px] sm:text-[20px] font-semibold text-[#3A3A3A] mb-4 m-0">Chi tiết giá</h3>
              <div className="space-y-3">
                <div className="flex justify-between text-[13px] sm:text-[14px]">
                  <span className="text-[#3A3A3A] font-semibold">Bamboo Airways (Người lớn) x1</span>
                  <span className="text-[#909090] font-semibold">3.169.633 đ</span>
                </div>
                <div className="flex justify-between text-[13px] sm:text-[14px]">
                  <span className="text-[#3A3A3A] font-semibold">VietJet Air (Người lớn) x1</span>
                  <span className="text-[#909090] font-semibold">2.708.189 đ</span>
                </div>
                <div className="flex justify-between text-[13px] sm:text-[14px]">
                  <span className="text-[#3A3A3A] font-semibold">Bảo hiểm du lịch toàn diện Chubb</span>
                  <span className="text-[#909090] font-semibold">331.600 đ</span>
                </div>

                <div className="border-t border-[#F0F0F0] pt-4 flex justify-between items-center gap-2 flex-wrap">
                  <span className="text-[15px] sm:text-[16px] font-semibold text-[#3A3A3A]">Tổng tiền thanh toán</span>
                  <span className="text-[24px] sm:text-[28px] lg:text-[32px] font-semibold text-[#4558B6]">6.209.422 đ</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
