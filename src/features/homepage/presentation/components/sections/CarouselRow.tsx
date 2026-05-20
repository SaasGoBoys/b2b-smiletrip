import { useRef } from 'react'

interface CarouselRowProps {
  children: React.ReactNode
}

export function CarouselRow({ children }: CarouselRowProps) {
  const ref = useRef<HTMLDivElement>(null)

  const scrollBy = (delta: number) => {
    ref.current?.scrollBy({ left: delta, behavior: 'smooth' })
  }

  return (
    <div className="relative group">
      <div
        ref={ref}
        className="flex items-stretch gap-4 overflow-x-auto pb-2 scroll-smooth snap-x snap-mandatory scrollbar-thin [-ms-overflow-style:none] [scrollbar-width:thin]"
      >
        {children}
      </div>
      <button
        type="button"
        aria-label="Scroll right"
        onClick={() => scrollBy(360)}
        className="absolute right-0 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white shadow-md border border-gray-100 flex items-center justify-center text-[#4558B6] hover:bg-gray-50 opacity-90"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  )
}
