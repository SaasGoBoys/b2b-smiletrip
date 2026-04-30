import { Controller } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

import { Button, Checkbox, Form, Input, Modal } from 'antd'

import { useModalController } from '@/shared/components/modals/hooks/useModalController'
import type { ModalEngineProps } from '@/shared/components/modals/store/modal.type'

import useSignInController from '../../hooks/useSignInController'

const SignInModal = ({ type }: ModalEngineProps<unknown>) => {
  const { t } = useTranslation('auth')

  const { close } = useModalController()

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
        >
          <Controller
            name="password"
            control={control}
            render={({ field }) => <Input.Password {...field} size="large" />}
          />
        </Form.Item>

        <Form.Item>
          <Controller
            name="rememberMe"
            control={control}
            render={({ field }) => (
              <Checkbox checked={field.value} onChange={field.onChange}>
                {t('login.rememberMe')}
              </Checkbox>
            )}
          />
        </Form.Item>

        <Button type="primary" htmlType="submit" block size="large" loading={isLoading}>
          {t('login.submit')}
        </Button>
      </Form>
    </Modal>
  )
}

export default SignInModal
