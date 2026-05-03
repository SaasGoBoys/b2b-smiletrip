import { useState } from 'react'

import { Button } from 'antd'

import type { Flight } from '../FlightCard'

import { BenefitTab } from './BenefitTab'
import { DetailTab } from './DetailTab'
import { PromotionTab } from './PromotionTab'
import { RefundTab } from './RefundTab'
import { RescheduleTab } from './RescheduleTab'



export function FlightDetailTabs({ flight, onBook }: { flight: Flight; onBook?: (flight: Flight) => void }) {
  const [activeTab, setActiveTab] = useState<string | undefined>(undefined)

  const tabs = [
    { key: 'chi-tiet', label: 'Chi tiết' },
    { key: 'loi-ich', label: 'Các lợi ích đi kèm' },
    { key: 'hoan-ve', label: 'Hoàn vé' },
    { key: 'doi-lich', label: 'Đổi lịch' },
    { key: 'khuyen-mai', label: 'Khuyến mãi' }
  ]

  return (
    <div className="w-full bg-white border-b border-border-light">
      <div className="w-full h-[56px] px-2">
        <div className="grid grid-cols-6 h-full relative">
          {tabs.map((tab) => (
            <div
              key={tab.key}
              onClick={() => setActiveTab(activeTab === tab.key ? undefined : tab.key)}
              className="h-full flex items-center justify-center cursor-pointer group"
            >
              <span className={`text-[18px] font-semibold whitespace-nowrap transition-colors ${activeTab === tab.key ? 'text-primary' : 'text-text-main group-hover:text-primary'}`}>
                {tab.label}
              </span>
            </div>
          ))}
          <div className="flex items-center justify-center pl-4">
            <Button
              type="primary"
              className="!w-[120px] !h-[38px] !rounded-[12px] !text-[20px] !font-semibold flex items-center justify-center transition-all hover:opacity-90 hover:shadow-lg active:scale-95"
              onClick={() => onBook?.(flight)}
            >
              Đặt vé
            </Button>
          </div>

          {/* Sliding Indicator */}
          <div
            className="absolute bottom-0 left-0 h-[3px] bg-primary transition-all duration-300 ease-in-out"
            style={{
              width: `${100 / (tabs.length + 1)}%`,
              transform: `translateX(${activeTab ? tabs.findIndex(t => t.key === activeTab) * 100 : 0}%)`,
              opacity: activeTab ? 1 : 0,
              visibility: activeTab ? 'visible' : 'hidden'
            }}
          />
        </div>
      </div>

      {/* Tab Content */}
      {activeTab && (
        <div className="animate-in fade-in slide-in-from-top-2 duration-300">
          {activeTab === 'chi-tiet' && <DetailTab flight={flight} />}
          {activeTab === 'loi-ich' && <BenefitTab flight={flight} />}
          {activeTab === 'hoan-ve' && <RefundTab flight={flight} />}
          {activeTab === 'doi-lich' && <RescheduleTab flight={flight} />}
          {activeTab === 'khuyen-mai' && <PromotionTab flight={flight} />}
        </div>
      )}
    </div>
  )
}
