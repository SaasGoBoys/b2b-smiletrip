import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'

import { Typography } from 'antd'

import { EmptyState } from '@/shared/components/feedback/EmptyState'
import { LoadingSpinner } from '@/shared/components/feedback/LoadingSpinner'
import { PageWrapper } from '@/shared/components/layout/PageWrapper'

import { UserCard } from '../components/UserCard'
import { useUserDetail } from '../hooks/useUserDetail'

const { Title } = Typography

export default function UserDetailPage() {
  const { id } = useParams<{ id: string }>()
  const { t } = useTranslation('common')
  const { data: user, isLoading } = useUserDetail(id)

  if (isLoading) {
    return <LoadingSpinner fullScreen />
  }

  if (!user) {
    return (
      <PageWrapper>
        <EmptyState description={t('app.error')} />
      </PageWrapper>
    )
  }

  return (
    <PageWrapper>
      <Title level={3}>{user.fullName}</Title>
      <UserCard user={user} />
    </PageWrapper>
  )
}
