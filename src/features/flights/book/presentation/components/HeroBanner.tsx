import { ShieldCheckIcon } from '@/assets/icons/icons'

const BANNER_IMG = '/images/banner.webp'

interface Props {
  children?: React.ReactNode
}

export function HeroBanner({ children }: Props) {
  return (
    <div className="relative w-full h-auto md:h-[350px] lg:h-[380px]">
      <img
        src={BANNER_IMG}
        alt="VFJLink banner"
        className="w-full h-full object-cover pointer-events-none absolute inset-0"
      />

      <div className="relative z-10 flex flex-col items-center pt-2 sm:pt-8 md:pt-12 lg:pt-[50px] px-4 text-center">
        <h1 className="text-white/90 text-[25px] sm:text-[36px] md:text-[45px] lg:text-[60px] font-semibold mb-4 lg:mb-5 leading-tight">
          Đi khắp muôn nơi cùng VFJLink
        </h1>

        <div className="flex items-center gap-3 sm:gap-4 md:gap-6 lg:gap-12">
          <div className="flex items-center gap-2.5">
            <ShieldCheckIcon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
            <span className="text-white text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] font-semibold whitespace-nowrap">
              Thanh toán an toàn
            </span>
          </div>
          <div className="flex items-center gap-2.5">
            <ShieldCheckIcon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
            <span className="text-white text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] font-semibold whitespace-nowrap">
              Hỗ trợ nhanh chóng
            </span>
          </div>
        </div>
      </div>

      <div className="relative pb-4 pt-6 md:py-0 md:absolute left-0 right-0 bottom-0 md:translate-y-15 md:translate-y-30 xl:translate-y-15 z-20">
        <div className="container mx-auto px-4">
          {children}
        </div>
      </div>
    </div>
  )
}
