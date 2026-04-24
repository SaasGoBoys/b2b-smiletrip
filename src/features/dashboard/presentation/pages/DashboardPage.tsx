import { Col, Row, Typography } from 'antd'
import { useTranslation } from 'react-i18next'
import { StatCard } from '../components/StatCard'
import { RecentActivityList } from '../components/RecentActivityList'
import { PageWrapper } from '@/shared/components/layout/PageWrapper'

const { Title } = Typography

export default function DashboardPage() {
  const { t } = useTranslation('dashboard')

  return (
    <PageWrapper>
      <Title level={3}>{t('title')}</Title>
      <Row gutter={[16, 16]} style={{ marginBottom: 24 }}>
        <Col xs={24} sm={12} lg={8}>
          <StatCard title={t('stats.activeUsers')} value={128} />
        </Col>
        <Col xs={24} sm={12} lg={8}>
          <StatCard title={t('stats.revenue')} value={45820} />
        </Col>
        <Col xs={24} sm={12} lg={8}>
          <StatCard title={t('stats.tasks')} value={12} />
        </Col>
      </Row>
      <RecentActivityList />
    </PageWrapper>
  )
}
