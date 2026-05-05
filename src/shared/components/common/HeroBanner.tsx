import { ShieldCheckIcon } from '@/assets/icons/icons'

const DEFAULT_BANNER_IMG = '/images/banner.webp'

interface HeroBannerProps {
  /**
   * Title of the banner. Can be a string or a React element.
   */
  title?: React.ReactNode
  /**
   * Optional background image URL.
   */
  backgroundImage?: string
  /**
   * Optional custom CSS class for the root container.
   */
  className?: string
  /**
   * Optional custom CSS class for the content (text) container.
   */
  contentClassName?: string
  /**
   * Optional custom CSS class for the overlay container (the part that overlaps the bottom).
   */
  overlayClassName?: string
  /**
   * Subtitle or content below the title.
   * If not provided, defaults to showing trust badges.
   * If null, shows nothing.
   */
  subtitle?: React.ReactNode
  /**
   * Content to be displayed in the overlapping section (e.g., Search Form).
   */
  children?: React.ReactNode
}

export function HeroBanner({
  title = 'Đi khắp muôn nơi cùng VFJLink',
  backgroundImage = DEFAULT_BANNER_IMG,
  className = '',
  contentClassName = '',
  overlayClassName = '',
  subtitle,
  children
}: HeroBannerProps) {
  // Default subtitle content (Trust Badges)
  const defaultSubtitle = (
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
  )

  return (
    <div className={`relative w-full h-auto md:h-[350px] lg:h-[380px] ${className}`}>
      {/* Banner Background */}
      <img
        src={backgroundImage}
        alt="Banner background"
        className="w-full h-full object-cover pointer-events-none absolute inset-0"
      />

      {/* Banner Content */}
      <div className={`relative z-10 flex flex-col items-center pt-2 sm:pt-8 md:pt-12 lg:pt-[50px] px-4 text-center ${contentClassName}`}>
        {typeof title === 'string' ? (
          <h1 className="text-white/90 text-[25px] sm:text-[36px] md:text-[45px] lg:text-[60px] font-semibold mb-4 lg:mb-5 leading-tight">
            {title}
          </h1>
        ) : (
          title
        )}

        {subtitle === undefined ? defaultSubtitle : subtitle} 
      </div>

      {/* Overlapping Content Section */}
      <div className={`relative pb-4 pt-6 md:py-0 md:absolute left-0 right-0 bottom-0 md:translate-y-55 xl:translate-y-15 z-20 ${overlayClassName}`}>
        <div className="container mx-auto px-4">
          {children}
        </div>
      </div>
    </div>
  )
}
