import { ShieldCheckIcon } from '@/assets/icons/icons'

const BANNER_IMG = '/images/banner.webp'

interface Props {
  children?: React.ReactNode
}

export function HeroBanner({ children }: Props) {
  return (
    <div className="relative w-full h-[280px] md:h-[350px] lg:h-[380px]">
      <img
        src={BANNER_IMG}
        alt="VFJLink banner"
        className="w-full h-full object-cover pointer-events-none absolute inset-0"
      />

      <div className="relative z-10 flex flex-col items-center pt-8 md:pt-12 lg:pt-[50px] px-4 text-center">
        <h1 className="text-white/90 text-[28px] md:text-[45px] lg:text-[60px] font-semibold mb-4 lg:mb-5 leading-tight">
          Đi khắp muôn nơi cùng VFJLink
        </h1>

        <div className="flex items-center gap-12">
          <div className="flex items-center gap-2.5">
            <ShieldCheckIcon className="w-6 h-6 md:w-8 md:h-8" />
            <span className="text-white text-[16px] md:text-[18px] lg:text-[20px] font-semibold whitespace-nowrap">
              Thanh toán an toàn
            </span>
          </div>
          <div className="flex items-center gap-2.5">
            <ShieldCheckIcon className="w-6 h-6 md:w-8 md:h-8" />
            <span className="text-white text-[16px] md:text-[18px] lg:text-[20px] font-semibold whitespace-nowrap">
              Hỗ trợ nhanh chóng
            </span>
          </div>
        </div>

        <div className="mt-6 md:mt-8 lg:mt-10 w-full">
          {children}
        </div>
      </div>
    </div>
  )
}
