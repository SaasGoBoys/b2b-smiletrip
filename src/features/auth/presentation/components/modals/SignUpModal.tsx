import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

import { Button, Form, Input, Modal } from 'antd'

import { useModalController } from '@/shared/components/modals/hooks/useModalController'
import type { ModalEngineProps } from '@/shared/components/modals/store/modal.type'

import { AuthRegistryModalKeys } from './auth.registry.modal'

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

interface SignUpFormValues {
  phone: string
}

const SignUpForm = ({ member, type }: { member: string; type: string }) => {
  const { t } = useTranslation('auth')
  const { close, open } = useModalController()

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<SignUpFormValues>({
    defaultValues: { phone: '' },
  })

  const onSubmit = (data: SignUpFormValues) => {
    console.log('SignUp submission:', { member, ...data })
  }

  const onLogin = () => {
    close(type)
    open(AuthRegistryModalKeys.SignIn)
  }

  return (
    <div className="mt-4">
      <Form layout="vertical" onFinish={handleSubmit(onSubmit)}>
        <Form.Item
          label={t('register.phone')}
          validateStatus={errors.phone ? 'error' : ''}
          help={errors.phone?.message}
          className="!mb-3"
        >
          <Controller
            name="phone"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <Input
                {...field}
                placeholder={t('register.phonePlaceholder')}
                size="large"
              />
            )}
          />
        </Form.Item>

        <Button
          type="primary"
          htmlType="submit"
          block
          size="large"
          className="h-16 text-base font-medium rounded-xl mt-4"
        >
          {t('register.submit')}
        </Button>

        <div className="mt-8 text-center text-text-secondary">
          {t('register.hasAccount')}{' '}
          <a
            className="text-primary text-sm hover:text-primary-hover hover:!underline transition-colors cursor-pointer font-medium"
            onClick={onLogin}
          >
            {t('register.signIn')}
          </a>
        </div>
      </Form>
    </div>
  )
}

const SignUpModal = ({ type }: ModalEngineProps<unknown>) => {
  const { t } = useTranslation('auth')

  const { close, open } = useModalController()

  const [selectedMember, setSelectedMember] = useState<string>('')

  const handleSelectMember = (member: string) => {
    setSelectedMember(member)
  }

  const onCancel = () => {
    close(type)
  }

  const onLogin = () => {
    close(type)
    open(AuthRegistryModalKeys.SignIn)
  }

  return (
    <Modal open={true} title={t('register.title')} footer={null} onCancel={onCancel}>
      {!selectedMember ? (
        <div className="mt-4">
          <div className="grid grid-cols-2 gap-8 w-full mb-8">
            {listMembers.map((member) => (
              <div
                key={member.id}
                className="flex w-full flex-col items-center justify-center gap-1 cursor-pointer group"
                onClick={() => handleSelectMember(member.id)}
              >
                <div className="w-16 h-16 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  {member.icon}
                </div>
                <div className="text-base font-bold text-text-main">
                  {t(`register.${member.label}`)}
                </div>
                <Button 
                  type="primary" 
                  className="w-full h-12 rounded-xl font-medium mt-4"
                >
                  {t('register.title')}
                </Button>
              </div>
            ))}
          </div>

          <div className="text-center text-text-secondary">
            {t('register.hasAccount')}{' '}
            <a
              className="text-primary text-sm hover:text-primary-hover hover:!underline transition-colors cursor-pointer font-medium"
              onClick={onLogin}
            >
              {t('register.signIn')}
            </a>
          </div>
        </div>
      ) : (
        <SignUpForm member={selectedMember} type={type} />
      )}
    </Modal>
  )
}

export default SignUpModal
