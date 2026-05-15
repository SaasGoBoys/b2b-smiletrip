import { Button, Checkbox,Input, Select } from 'antd'

import { FlightSolidIcon, InfoCircleIcon } from '@/assets/icons/icons'

export default function FlightPaymentPage() {

  return (
    <div className="min-h-screen bg-[#E5E7EB] flex flex-col font-sans">
      {/* Stepper Header */}
      <div className="bg-white border-b border-[#F0F0F0] py-6 shadow-sm">
        <div className="max-w-[1200px] mx-auto flex items-center justify-center gap-20">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#4558B6] text-white flex items-center justify-center font-bold">1</div>
            <span className="text-[#4558B6] font-semibold text-[18px]">Chi tiết chuyến đi của bạn</span>
          </div>
          <div className="h-[1px] w-20 bg-[#D9D9D9]" />
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#4558B6] text-white flex items-center justify-center font-bold">2</div>
            <span className="text-[#4558B6] font-semibold text-[18px]">Thanh toán</span>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 py-10 container">
        <div className="flex gap-8">
          {/* Left Column: Forms */}
          <div className="flex-[2] flex flex-col gap-8">
            
            {/* Contact Info Section */}
            <div className="bg-white rounded-[20px] shadow-sm overflow-hidden">
              <div className="p-6 border-b border-[#F0F0F0]">
                <h3 className="text-[20px] font-bold text-[#3A3A3A] m-0">Thông tin liên hệ (nhận vé/phiếu thanh toán)</h3>
              </div>
              
              <div className="bg-[#4558B6] px-6 py-4 flex items-center justify-between text-white">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-[18px]">👤</span>
                  </div>
                  <span className="font-medium text-[16px]">Đăng nhập hoặc đăng ký để có giá rẻ hơn và nhiều ưu đãi hơn!</span>
                </div>
                <div className="flex gap-4">
                  <Button className="!bg-white !text-[#4558B6] !border-none !font-semibold rounded-lg">Đăng nhập</Button>
                  <Button className="!bg-transparent !text-white !border-white !font-semibold rounded-lg">Đăng ký</Button>
                </div>
              </div>

              <div className="p-8 space-y-8">
                <div className="flex flex-col gap-2">
                  <label className="text-[16px] font-semibold text-[#3A3A3A]">Họ tên<span className="text-red-500">*</span></label>
                  <Input placeholder="" className="h-[54px] rounded-xl text-[16px]" />
                  <span className="text-[14px] text-[#909090]">Người Việt: nhập Tên đệm + Tên chính + Họ. Người nước ngoài: nhập Tên + Họ.</span>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-[16px] font-semibold text-[#3A3A3A]">Điện thoại di động<span className="text-red-500">*</span></label>
                    <div className="flex gap-2">
                      <Select defaultValue="+84" className="w-[100px] h-[54px]" />
                      <Input placeholder="" className="flex-1 h-[54px] rounded-xl text-[16px]" />
                    </div>
                    <span className="text-[14px] text-[#909090]">VD: +84 901234567 trong đó (+84) là mã quốc gia và 901234567 là số di động</span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[16px] font-semibold text-[#3A3A3A]">Email<span className="text-red-500">*</span></label>
                    <Input placeholder="" className="h-[54px] rounded-xl text-[16px]" />
                    <span className="text-[14px] text-[#909090]">VD: email@example.com</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Passenger Info Section */}
            <div className="bg-white rounded-[20px] shadow-sm overflow-hidden">
              <div className="p-6 border-b border-[#F0F0F0]">
                <h3 className="text-[20px] font-bold text-[#3A3A3A] m-0">Thông tin hành khách</h3>
              </div>
              <div className="bg-[#F1F5FF] px-6 py-4 text-[#4558B6] font-bold text-[18px]">
                01 người lớn
              </div>
              
              <div className="p-8 space-y-8">
                <div className="bg-[#FFF4E5] p-6 rounded-xl flex gap-4 border border-[#FFE7C4]">
                  <InfoCircleIcon color="#FF9900" width={24} height={24} className="shrink-0 mt-1" />
                  <div className="flex flex-col gap-2">
                    <span className="text-[#FF9900] font-bold text-[18px]">Vui lòng chú ý cho những điều sau đây:</span>
                    <span className="text-[#3A3A3A] text-[16px] leading-relaxed font-medium">
                      Vui lòng nhập tên bằng tiếng Anh không dấu (không có ký tự đặc biệt), chính xác như trên giấy tờ tùy thân. Nếu không, bạn có thể bị từ chối lên máy bay hoặc phát sinh thêm chi phí.
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6 pt-4">
                  <div className="flex flex-col gap-2 col-span-1">
                    <label className="text-[16px] font-semibold text-[#3A3A3A]">Giới tính<span className="text-red-500">*</span></label>
                    <Select placeholder="-- Giới tính --" className="h-[54px]" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-[16px] font-semibold text-[#3A3A3A]">Họ (vd: NGUYEN)<span className="text-red-500">*</span></label>
                    <Input placeholder="" className="h-[54px] rounded-xl text-[16px]" />
                    <span className="text-[14px] text-[#909090]">Như trên CMND (không dấu)</span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[16px] font-semibold text-[#3A3A3A]">Chữ đệm và tên (vd: VAN ANH)<span className="text-red-500">*</span></label>
                    <Input placeholder="" className="h-[54px] rounded-xl text-[16px]" />
                    <span className="text-[14px] text-[#909090]">Như trên CMND (không dấu)</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-[16px] font-semibold text-[#3A3A3A]">Ngày sinh<span className="text-red-500">*</span></label>
                    <div className="flex gap-2">
                      <Input placeholder="DD" className="w-[80px] h-[54px] rounded-xl text-center" />
                      <Input placeholder="MM" className="w-[80px] h-[54px] rounded-xl text-center" />
                      <Input placeholder="YYYY" className="flex-1 h-[54px] rounded-xl text-center" />
                    </div>
                    <span className="text-[14px] text-[#909090]">Hành khách người lớn (trên 12 tuổi)</span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[16px] font-semibold text-[#3A3A3A]">Quốc tịch<span className="text-red-500">*</span></label>
                    <Select placeholder="-- Việt Nam --" className="h-[54px]" />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[16px] font-semibold text-[#3A3A3A]">Số căn cước công dân<span className="text-red-500">*</span></label>
                  <Input placeholder="" className="h-[54px] rounded-xl text-[16px]" />
                  <span className="text-[14px] text-[#909090]">Đối với hành khách là trẻ em hoặc trẻ sơ sinh, vui lòng nhập giấy tờ tùy thân của người giám hộ đi cùng trẻ. (Vui lòng đảm bảo chỉ nhập số trong trường này)</span>
                </div>
              </div>
            </div>

            <div className="bg-[#E5E7EB] p-6 rounded-xl flex items-center gap-4">
              <Checkbox className="scale-125" />
              <span className="text-[18px] font-semibold text-[#3A3A3A]">Thêm tài khoản hành khách thân thiết</span>
            </div>

          </div>

          {/* Right Column: Summary */}
          <div className="flex-1 flex flex-col gap-6">
            
            {/* Flight Summary Card */}
            <div className="bg-white rounded-[20px] shadow-sm p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-[20px] font-bold text-[#3A3A3A] m-0">Chuyến bay của bạn</h3>
                <Button type="link" className="!text-[#4558B6] !bg-[#F1F5FF] !font-bold rounded-full !px-6">Chi tiết</Button>
              </div>
              
              <div className="space-y-6">
                {/* Departure */}
                <div className="flex flex-col gap-4 border border-[#F0F0F0] rounded-xl p-4">
                  <div className="flex items-center gap-2 text-[#4558B6] font-bold bg-[#F1F5FF] px-3 py-1 rounded-lg w-fit">
                    <FlightSolidIcon width={16} height={16} color="#4558B6" />
                    <span>Khởi hành</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="text-center">
                      <span className="block text-[16px] font-bold">TP HCM (SGN)</span>
                      <span className="text-[12px] text-[#909090] block mt-1">Thứ 5, 9 thg 4 2026</span>
                      <span className="text-[12px] text-[#909090] block">06:30</span>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <span className="text-[12px] text-[#909090]">2h 15m</span>
                      <div className="flex items-center w-20 relative">
                        <div className="w-full h-[1px] bg-dashed bg-[#D9D9D9]" style={{ borderTop: '1px dashed #D9D9D9' }} />
                        <div className="absolute left-[50%] translate-x-[-50%] w-2 h-2 rounded-full bg-[#D9D9D9]"></div>
                      </div>
                      <span className="text-[12px] text-[#3A3A3A] font-medium">Bay thẳng</span>
                    </div>
                    <div className="text-center">
                      <span className="block text-[16px] font-bold">Hà Nội (HAN)</span>
                      <span className="text-[12px] text-[#909090] block mt-1">Thứ 5, 9 thg 4 2026</span>
                      <span className="text-[12px] text-[#909090] block">08:45</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between border-t border-[#F0F0F0] pt-4 mt-2">
                     <div className="flex items-center gap-2">
                        <div className="w-6 h-6 flex items-center justify-center">
                          <span role="img" aria-label="plane" className="text-xl">✈️</span>
                        </div>
                        <span className="font-semibold text-[14px]">Bamboo Airway</span>
                     </div>
                  </div>
                  <div className="flex items-center justify-between">
                     <div className="flex items-center gap-2">
                        <div className="w-6 h-6 flex items-center justify-center">
                          <span role="img" aria-label="luggage" className="text-xl">🧳</span>
                        </div>
                        <span className="text-[14px] text-[#3A3A3A]">Hành lý+</span>
                     </div>
                     <span className="px-3 py-1 bg-[#E8F8F5] text-[#00A86B] text-[12px] font-semibold rounded-md border border-[#00A86B]/30">
                       Phổ thông
                     </span>
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    <span className="px-2 py-1 text-[12px] text-[#FF9900] bg-[#FFF8E1] rounded border border-[#FFD54F]">Đổi lịch phụ thuộc vào chính sách của hãng hàng không</span>
                    <span className="px-2 py-1 text-[12px] text-[#4558B6] bg-[#F1F5FF] rounded border border-[#CDE7FF]">Có thể hoàn vé</span>
                  </div>
                </div>

                {/* Return */}
                <div className="flex flex-col gap-4 border border-[#F0F0F0] rounded-xl p-4">
                  <div className="flex items-center gap-2 text-[#4558B6] font-bold bg-[#F1F5FF] px-3 py-1 rounded-lg w-fit">
                    <span className="rotate-180 inline-block"><FlightSolidIcon width={16} height={16} color="#4558B6" /></span>
                    <span>Khứ hồi</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="text-center">
                      <span className="block text-[16px] font-bold">Hà Nội (HAN)</span>
                      <span className="text-[12px] text-[#909090] block mt-1">Thứ 5, 9 thg 4 2026</span>
                      <span className="text-[12px] text-[#909090] block">06:30</span>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <span className="text-[12px] text-[#909090]">2h 15m</span>
                      <div className="flex items-center w-20 relative">
                        <div className="w-full h-[1px] bg-dashed bg-[#D9D9D9]" style={{ borderTop: '1px dashed #D9D9D9' }} />
                        <div className="absolute left-[50%] translate-x-[-50%] w-2 h-2 rounded-full bg-[#D9D9D9]"></div>
                      </div>
                      <span className="text-[12px] text-[#3A3A3A] font-medium">Bay thẳng</span>
                    </div>
                    <div className="text-center">
                      <span className="block text-[16px] font-bold">TP HCM (SGN)</span>
                      <span className="text-[12px] text-[#909090] block mt-1">Thứ 5, 9 thg 4 2026</span>
                      <span className="text-[12px] text-[#909090] block">08:45</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between border-t border-[#F0F0F0] pt-4 mt-2">
                     <div className="flex items-center gap-2">
                        <div className="w-6 h-6 flex items-center justify-center">
                           <span role="img" aria-label="plane" className="text-xl text-red-500">✈️</span>
                        </div>
                        <span className="font-semibold text-[14px]">VietJet Air</span>
                     </div>
                  </div>
                  <div className="flex items-center justify-between">
                     <div className="flex items-center gap-2">
                        <div className="w-6 h-6 flex items-center justify-center">
                          <span role="img" aria-label="luggage" className="text-xl">🧳</span>
                        </div>
                        <span className="text-[14px] text-[#3A3A3A]">Nguyên bản</span>
                     </div>
                     <span className="px-3 py-1 bg-[#E8F8F5] text-[#00A86B] text-[12px] font-semibold rounded-md border border-[#00A86B]/30">
                       Phổ thông
                     </span>
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    <span className="px-2 py-1 text-[12px] text-[#E53E3E] bg-[#FFF5F5] rounded border border-[#FEB2B2]">Không áp dụng đổi lịch bay</span>
                    <span className="px-2 py-1 text-[12px] text-[#E53E3E] bg-[#FFF5F5] rounded border border-[#FEB2B2]">Không đổi vé</span>
                  </div>
                </div>
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
