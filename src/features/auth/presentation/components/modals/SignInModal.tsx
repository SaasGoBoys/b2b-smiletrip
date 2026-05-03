import { Controller } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

import { Button, Form, Input, Modal } from 'antd'

import { useModalController } from '@/shared/components/modals/hooks/useModalController'
import type { ModalEngineProps } from '@/shared/components/modals/store/modal.type'

import useSignInController from '../../hooks/useSignInController'

import { AuthRegistryModalKeys } from './auth.registry.modal'

const SignInModal = ({ type }: ModalEngineProps<unknown>) => {
  const { t } = useTranslation('auth')

  const { close, open } = useModalController()

  const {
    form: {
      handleSubmit,
      control,
      formState: { errors },
    },
    onSubmit,
    isLoading,
  } = useSignInController()

  const onCancel = () => {
    close(type)
  }

  const onForgotPassword = () => {
    close(type)
    open(AuthRegistryModalKeys.ForgotPassword)
  }

  const onRegister = () => {
    close(type)
    open(AuthRegistryModalKeys.SignUp)
  }

  return (
    <Modal open={true} title={t('login.title')} footer={null} onCancel={onCancel}>
      <Form layout="vertical" onFinish={handleSubmit(onSubmit)}>
        <Form.Item
          label={t('login.email')}
          validateStatus={errors.email ? 'error' : ''}
          help={errors.email?.message}
        >
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <Input {...field} placeholder="email@example.com" size="large" />
            )}
          />
        </Form.Item>

        <Form.Item
          label={t('login.password')}
          validateStatus={errors.password ? 'error' : ''}
          help={errors.password?.message}
          className="!mb-3"
        >
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <Input.Password {...field} placeholder={t('login.password')} size="large" />
            )}
          />
        </Form.Item>

        <div className="mb-6">
          <a
            className="text-primary text-sm hover:text-primary-hover hover:!underline transition-colors cursor-pointer"
            onClick={onForgotPassword}
          >
            {t('login.forgotPassword')}
          </a>
        </div>

        <Button
          type="primary"
          htmlType="submit"
          block
          size="large"
          loading={isLoading}
          className="h-12 text-base font-medium rounded-xl"
        >
          {t('login.submit')}
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

export default SignInModal
