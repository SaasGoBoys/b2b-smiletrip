import { Controller, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

import { Button, Form, Input, message,Modal } from 'antd'

import { useModalController } from '@/shared/components/modals/hooks/useModalController'
import type { ModalEngineProps } from '@/shared/components/modals/store/modal.type'

import { AuthRegistryModalKeys } from './auth.registry.modal'

interface ForgotPasswordForm {
  phone: string
}

const ForgotPasswordModal = ({ type }: ModalEngineProps<unknown>) => {
  const { t } = useTranslation('auth')
  const { close, open } = useModalController()

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ForgotPasswordForm>({
    defaultValues: { phone: '' },
  })

  const onCancel = () => {
    close(type)
  }

  const onRegister = () => {
    close(type)
    open(AuthRegistryModalKeys.SignUp)
  }

  const onSubmit = (data: ForgotPasswordForm) => {
    console.log('Forgot password request:', data)
    message.success(t('forgotPassword.submit'))
  }

  return (
    <Modal open={true} title={t('forgotPassword.title')} footer={null} onCancel={onCancel}>
      <Form layout="vertical" onFinish={handleSubmit(onSubmit)} className="!mt-4">
        <Form.Item
          label={t('forgotPassword.phone')}
          validateStatus={errors.phone ? 'error' : ''}
          help={errors.phone?.message}
          className='!mb-3'
        >
          <Controller
            name="phone"
            control={control}
            rules={{ 
              required: 'Phone number is required',
            }}
            render={({ field }) => (
              <Input {...field} placeholder={t('forgotPassword.phonePlaceholder')} size="large"/>
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
          {t('forgotPassword.submit')}
        </Button>

        <div className="mt-8 text-center text-text-secondary">
          {t('login.noAccount')}{' '}
          <a
            className="text-primary text-sm hover:text-primary-hover hover:!underline transition-colors cursor-pointer"
            onClick={onRegister}
          >
            {t('login.signUp')}
          </a>
        </div>
      </Form>
    </Modal>
  )
}

export default ForgotPasswordModal
