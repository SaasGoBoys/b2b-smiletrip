import { Modal } from 'antd'
import type { ReactNode } from 'react'

interface Props {
  open: boolean
  title: string
  children?: ReactNode
  onOk: () => void
  onCancel: () => void
  confirmLoading?: boolean
}

export function ConfirmModal({ open, title, children, onOk, onCancel, confirmLoading }: Props) {
  return (
    <Modal open={open} title={title} onOk={onOk} onCancel={onCancel} confirmLoading={confirmLoading}>
      {children}
    </Modal>
  )
}
