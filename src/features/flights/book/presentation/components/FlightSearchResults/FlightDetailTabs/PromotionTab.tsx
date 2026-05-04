import { useState } from 'react'

import type { Flight } from '../FlightCard'

interface Promotion {
  id: string
  code: string
  title: string
  description: string
  discountLabel: string
  discountAmount: string
}

// --- Coupon Icon ---
function CouponIcon({ amount, label }: { amount: string; label: string }) {
  return (
    <div
      className="relative shrink-0 w-[94px] h-[94px] rounded-[10px] flex flex-col items-center justify-center select-none overflow-hidden"
      style={{ background: `radial-gradient(circle, rgba(229, 0, 0, 0.3) 0%, rgba(76, 0, 0, 0.3) 100%), #D11E1E` }}
    >
      {/* Top notch */}
      <div className="absolute top-[-7px] left-1/2 -translate-x-1/2 w-[14px] h-[14px] rounded-full bg-white shadow-inner" />
      {/* Bottom notch */}
      <div className="absolute bottom-[-7px] left-1/2 -translate-x-1/2 w-[14px] h-[14px] rounded-full bg-white shadow-inner" />
      
      {/* Content */}
      <div className="flex flex-col items-center justify-center pt-1">
        <span className="text-[14px] font-semibold text-white/90 leading-tight">{label}</span>
        <span className="text-[28px] font-extrabold text-white leading-none tracking-tight">{amount}</span>
      </div>
    </div>
  )
}

// --- Single Promotion Card ---
function PromotionCard({ promo }: { promo: Promotion }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(promo.code).catch(() => { })
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="bg-white border border-border-main rounded-[20px] overflow-hidden flex flex-col">
      {/* Top: Icon + Info */}
      <div className="flex items-center gap-3 p-4 pb-3">
        <CouponIcon amount={promo.discountAmount} label={promo.discountLabel} />
        <div className="flex-1 min-w-0">
          <p className="text-[16px] font-semibold text-text-main leading-snug mb-1 line-clamp-2">
            {promo.title}
          </p>
          <p className="text-[14px] text-text-secondary leading-snug line-clamp-2">
            {promo.description}
          </p>
        </div>
      </div>

      {/* Bottom: Code + Copy Box */}
      <div className="px-4 pb-5 mt-2">
        <div className="bg-surface-hover border border-dashed border-border-main rounded-[12px] flex items-center justify-between px-4 py-3">
          <span className="text-[16px] font-semibold text-text-main tracking-wide uppercase">
            {promo.code}
          </span>
          <button
            onClick={handleCopy}
            className="text-[16px] font-semibold text-primary hover:underline transition-colors cursor-pointer"
          >
            {copied ? 'Đã sao chép!' : 'Sao chép'}
          </button>
        </div>
      </div>
    </div>
  )
}

// --- Mock Data ---
const MOCK_PROMOTIONS: Promotion[] = [
  {
    id: '1',
    code: 'BAYFSHOLIDAY',
    title: 'BAYBAYFSHOLIDAY giảm đến 600K',
    description: 'Ưu đãi chỉ áp dụng trên app. Mở app xem ngay!',
    discountLabel: 'Giảm đến',
    discountAmount: '600K',
  },
  {
    id: '2',
    code: 'BAYHOLIDAYDNA',
    title: 'BAYHOLIDAYDNA giảm đến 300K',
    description: 'Ưu đãi chỉ áp dụng trên app. Mở app xem ngay!',
    discountLabel: 'Giảm đến',
    discountAmount: '300K',
  },
  {
    id: '3',
    code: 'BAYHOLIDAYDNA',
    title: 'BAYHOLIDAYDNA giảm đến 300K',
    description: 'Ưu đãi chỉ áp dụng trên app. Mở app xem ngay!',
    discountLabel: 'Giảm đến',
    discountAmount: '300K',
  },
  {
    id: '4',
    code: 'BAYHOLIDAYDNA',
    title: 'BAYHOLIDAYDNA giảm đến 300K',
    description: 'Ưu đãi chỉ áp dụng trên app. Mở app xem ngay!',
    discountLabel: 'Giảm đến',
    discountAmount: '300K',
  },
  {
    id: '5',
    code: 'BAYHOLIDAYDNA',
    title: 'BAYHOLIDAYDNA giảm đến 300K',
    description: 'Ưu đãi chỉ áp dụng trên app. Mở app xem ngay!',
    discountLabel: 'Giảm đến',
    discountAmount: '300K',
  },
]

// --- Main Export ---
export function PromotionTab({ flight }: { flight: Flight }) {
  console.log(flight)

  const promotions = MOCK_PROMOTIONS

  if (promotions.length === 0) {
    return (
      <div className="p-6 text-center text-[16px] text-text-secondary">
        Không có khuyến mãi nào hiện tại.
      </div>
    )
  }

  return (
    <div className="p-4">
      <div className="grid grid-cols-3 gap-4">
        {promotions.map((promo) => (
          <PromotionCard key={promo.id} promo={promo} />
        ))}
      </div>
    </div>
  )
}
