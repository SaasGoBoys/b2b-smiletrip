import { useTranslation } from 'react-i18next'

import { Modal } from 'antd'

import { useModalController } from '@/shared/components/modals/hooks/useModalController'
import type { ModalEngineProps } from '@/shared/components/modals/store/modal.type'

export interface PromoTermsModalPayload {
  title: string
  description: string
}

export function PromoTermsModal({ type, payload }: ModalEngineProps<PromoTermsModalPayload>) {
  const { t } = useTranslation('homepage')
  const { close } = useModalController()

  return (
    <Modal
      open
      title={payload.title}
      onCancel={() => close(type)}
      onOk={() => close(type)}
      okText={t('promos.termsModalClose')}
      cancelButtonProps={{ style: { display: 'none' } }}
      width={520}
      centered
    >
      <p className="text-[14px] md:text-[15px] text-text-secondary leading-relaxed whitespace-pre-wrap">
        {payload.description}
      </p>
    </Modal>
  )
}

export default PromoTermsModal
