import { Controller, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

import { Button, Card, Checkbox, Form, Input, Typography } from 'antd'

import { zodResolver } from '@hookform/resolvers/zod'

import { type LoginDto,loginSchema } from '../../application/dtos/LoginDto'
import { useAuth } from '../hooks/useAuth'

const { Title } = Typography

export default function LoginPage() {
  const { t } = useTranslation('auth')
  const { login, isLoading } = useAuth()

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginDto>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: '', password: '', rememberMe: false },
  })

  const onSubmit = (data: LoginDto) => login(data)

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Card style={{ width: 400 }}>
        <Title level={3} style={{ textAlign: 'center', marginBottom: 24 }}>
          {t('login.title')}
        </Title>

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
      </Card>
    </div>
  )
}
