import { useTranslation } from 'react-i18next'

import { Card, Typography } from 'antd'

const { Title, Paragraph } = Typography

/** Placeholder route — extend with register use case + form when backend is ready. */
export default function RegisterPage() {
  const { t } = useTranslation('auth')

  return (
    <div style={{ padding: 48 }}>
      <Card>
        <Title level={3}>{t('register.title', 'Đăng ký')}</Title>
        <Paragraph type="secondary">
          {t('register.placeholder', 'Thêm use case và form theo pattern của Login.')}
        </Paragraph>
      </Card>
    </div>
  )
}
