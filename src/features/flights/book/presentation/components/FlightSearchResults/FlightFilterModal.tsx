import { useState } from 'react'

import { Button, Drawer } from 'antd'

import { useModalController } from '@/shared/components/modals/hooks/useModalController'
import type { ModalEngineProps } from '@/shared/components/modals/store/modal.type'
import { useBreakpoint } from '@/shared/hooks/useBreakpoint'

import { DEFAULT_FILTERS, type FilterState, FlightFilterPanel } from './FlightFilterPanel'

export function FlightFilterModal({ type }: ModalEngineProps<unknown>) {
  const { isMobile } = useBreakpoint()
  const { close } = useModalController()
  
  const [filters, setFilters] = useState<FilterState>(DEFAULT_FILTERS)

  const onCancel = () => {
    close(type)
  }

  const handleFilterChange = (partial: Partial<FilterState>) => {
    setFilters((prev) => ({ ...prev, ...partial }))
  }

  const onApply = () => {
    close(type)
  }

  return (
    <Drawer
      title={<span className="text-[18px] font-semibold text-text-main">Bộ lọc tìm kiếm</span>}
      placement="bottom"
      onClose={onCancel}
      open={true}
      height={isMobile ? '100%' : '85vh'}
      styles={{
        content: {
          borderRadius: isMobile ? '0' : '20px 20px 0 0',
          overflow: 'hidden',
        },
        header: {
          borderBottom: '1px solid #F0F0F0',
          padding: '16px 24px',
        },
        body: {
          padding: isMobile ? '16px' : '24px',
          paddingBottom: '100px',
          background: '#F8FAFB',
        },
      }}
      footer={
        <div className="flex gap-4 p-2 bg-white">
          <Button
            key="clear"
            onClick={() => setFilters(DEFAULT_FILTERS)}
            className="flex-1 !rounded-[8px] h-12 font-semibold"
          >
            Xóa tất cả
          </Button>
          <Button
            key="submit"
            type="primary"
            onClick={onApply}
            className="flex-1 !rounded-[8px] h-12 font-semibold"
          >
            Áp dụng
          </Button>
        </div>
      }
      extra={
        <button onClick={onCancel} className="text-[20px] leading-none cursor-pointer border-none bg-transparent outline-none">
          ✕
        </button>
      }
      closable={false}
      destroyOnClose
    >
      <div className="max-w-[1200px] mx-auto">
        <FlightFilterPanel
          filters={filters}
          onFilterChange={handleFilterChange}
        />
      </div>
    </Drawer>
  )
}

export default FlightFilterModal
