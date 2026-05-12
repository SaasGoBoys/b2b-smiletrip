import { ConfigProvider, Modal } from 'antd'

import { useBreakpoint } from '@/shared/hooks/useBreakpoint'

import { useModalController } from '../../../modals/hooks/useModalController'
import type { ModalEngineProps } from '../../../modals/store/modal.type'

import { TourDestinationContent } from './TourDestinationContent'

export const TOUR_DESTINATION_MODAL = 'TOUR_DESTINATION_MODAL'

interface TourDestinationModalPayload {
  value: string
  onSelect: (value: string) => void
  searchQuery?: string
  onSearchChange?: (value: string) => void
}

export function TourDestinationModal({ payload }: ModalEngineProps<TourDestinationModalPayload>) {
  const { isMobile } = useBreakpoint()
  const { close } = useModalController()
  const { value, onSelect, searchQuery, onSearchChange } = payload

  const handleClose = () => {
    close(TOUR_DESTINATION_MODAL)
  }

  const handleSelect = (val: string) => {
    onSelect(val)
    handleClose()
  }

  return (
    <ConfigProvider
      theme={{
        components: {
          Modal: {
            paddingMD: isMobile ? 16 : 20,
            paddingContentHorizontalLG: isMobile ? 12 : 10,
          },
        },
      }}
    >
      <Modal
        open={true}
        onCancel={handleClose}
        footer={null}
        centered={!isMobile}
        width={isMobile ? '100%' : 680}
        closable={false}
        className={`tour-destination-modal ${isMobile ? '!m-0 !p-0 !max-w-none' : ''}`}
        styles={{
          body: {
            height: isMobile ? 'calc(100dvh - 56px)' : 'auto',
            maxHeight: isMobile ? 'none' : 'calc(100vh - 100px)',
            overflowY: 'auto',
          },
        }}
      >
        <TourDestinationContent
          value={value}
          onSelect={handleSelect}
          searchQuery={searchQuery}
          onSearchChange={onSearchChange}
        />
      </Modal>
    </ConfigProvider>
  )
}
