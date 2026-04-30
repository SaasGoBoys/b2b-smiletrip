import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import { Button, Form, Input, Modal } from 'antd'

import { useModalController } from '@/shared/components/modals/hooks/useModalController'
import type { ModalEngineProps } from '@/shared/components/modals/store/modal.type'

import AgencyIcon from '@/assets/auth/agency.svg?react'
import EmployeeIcon from '@/assets/auth/employee.svg?react'

const listMembers = [
  {
    id: 'agency',
    label: 'agency',
    icon: <AgencyIcon />,
  },
  {
    id: 'employee',
    label: 'employee',
    icon: <EmployeeIcon />,
  },
]

const SignUpForm = ({ member, onBack }: { member: string; onBack: () => void }) => {
  const { t } = useTranslation('auth')

  return (
    <div>
      <Button type="primary" onClick={onBack}>
        {t('register.back')}
      </Button>

      {member === 'agency' ? (
        <div>
          <Form>
            <Form.Item name="email" label="Email">
              <Input />
            </Form.Item>
          </Form>
        </div>
      ) : (
        <div>
          <Form>
            <Form.Item name="email" label="Email">
              <Input />
            </Form.Item>
          </Form>
        </div>
      )}

      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </div>
  )
}

const SignUpModal = ({ type }: ModalEngineProps<unknown>) => {
  const { t } = useTranslation('auth')

  const { close } = useModalController()

  const [selectedMember, setSelectedMember] = useState<string>('')

  const handleSelectMember = (member: string) => {
    setSelectedMember(member)
  }

  const onCancel = () => {
    close(type)
  }

  return (
    <Modal open={true} title={t('register.title')} footer={null} onCancel={onCancel}>
      {!selectedMember ? (
        <div className="grid grid-cols-2 gap-4 w-full">
          {listMembers.map((member) => (
            <div
              key={member.id}
              className="flex w-full flex-col items-center justify-center gap-3 cursor-pointer"
              onClick={() => handleSelectMember(member.id)}
            >
              <div className="w-10 h-10">{member.icon}</div>
              <div className="text-sm text-center">{t(`register.${member.label}`)}</div>
            </div>
          ))}
        </div>
      ) : (
        <SignUpForm member={selectedMember} onBack={() => setSelectedMember('')} />
      )}
    </Modal>
  )
}

export default SignUpModal
