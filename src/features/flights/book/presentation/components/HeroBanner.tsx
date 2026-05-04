import { ShieldCheckIcon } from '@/assets/icons/icons'

const BANNER_IMG = '/images/banner.webp'

interface Props {
  children?: React.ReactNode
}

export function HeroBanner({ children }: Props) {
  return (
    <div className="relative w-full h-[400px]">
      <img
        src={BANNER_IMG}
        alt="VFJLink banner"
        className="w-full h-full object-cover pointer-events-none absolute inset-0"
      />

      <div className="relative z-10 flex flex-col items-center pt-[50px] text-center">
        <h1 className="text-white/90 text-[60px] font-semibold mb-5">
          Đi khắp muôn nơi cùng VFJLink
        </h1>

        <div className="flex items-center gap-12">
          <div className="flex items-center gap-2.5">
            <ShieldCheckIcon width={32} height={32} />
            <span className="text-white text-[20px] font-semibold">
              Thanh toán an toàn
            </span>
          </div>
          <div className="flex items-center gap-2.5">
            <ShieldCheckIcon width={32} height={32} />
            <span className="text-white text-[20px] font-medium">Hỗ trợ nhanh chóng</span>
          </div>
        </div>

        <div className='mt-10'>
          {children}
        </div>
      </div>
    </div>
  )
}
