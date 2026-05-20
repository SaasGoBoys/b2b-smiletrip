import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import type { ActivePromotionEntity } from '@/shared/kernels/voucher/domain/entities/ActivePromotionEntity'

interface Props {
  promotion: ActivePromotionEntity
  onTermsClick: (promotion: ActivePromotionEntity) => void
}

export function PromoVoucherCard({ promotion, onTermsClick }: Props) {
  const { t } = useTranslation('homepage')
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(promotion.voucherCode).catch(() => {})
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <article className="promo-card flex h-full w-full min-h-[140px] overflow-hidden rounded-2xl border border-[#B8D4E8] bg-white shadow-sm">
      <div className="promo-card-left flex flex-1 flex-col justify-between gap-3 p-4 md:p-5 min-w-0">
        <div className="promo-name text-[15px] md:text-[16px] font-bold text-text-main leading-snug">
          {promotion.name}
        </div>
        <div className="promo-meta text-[13px] md:text-[14px] font-medium text-[#4A6B8A]">
          {t('promos.expiry', { date: promotion.expiryDate })}
        </div>
        <button
          type="button"
          className="promo-link promo-terms-link self-start text-left text-[13px] md:text-[14px] font-bold text-[#F37021] hover:underline"
          onClick={() => onTermsClick(promotion)}
        >
          {t('promos.termsLink')}
        </button>
      </div>

      <div
        className="shrink-0 w-px self-stretch my-4 border-l border-dashed border-[#E85D5D]/70"
        aria-hidden
      />

      <div className="promo-card-right flex w-[130px] md:w-[150px] shrink-0 flex-col items-center justify-center gap-2 px-3 py-4 md:px-4">
        <div className="promo-code-label text-[12px] md:text-[13px] font-medium text-[#005BAA]">
          {t('promos.enterCode')}
        </div>
        <div className="promo-code text-[20px] font-extrabold leading-none text-[#F37021] tracking-tight">
          {promotion.voucherCode}
        </div>
        <button
          type="button"
          className="promo-copy-btn rounded-full bg-[#1A64D6] px-5 py-1.5 text-[13px] md:text-[14px] font-bold text-white hover:opacity-90 transition-opacity"
          onClick={handleCopy}
        >
          {copied ? t('promos.copied') : t('promos.copy')}
        </button>
      </div>
    </article>
  )
}
