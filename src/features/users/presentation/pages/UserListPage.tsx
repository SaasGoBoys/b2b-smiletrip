import { useTranslation } from 'react-i18next'

import { useQueryClient } from '@tanstack/react-query'

import { Button, message,Modal, Space, Typography } from 'antd'

import { EmptyState } from '@/shared/components/feedback/EmptyState'
import { PageWrapper } from '@/shared/components/layout/PageWrapper'

import type { CreateUserDto } from '../../application/dtos/UserDto'
import { UserForm } from '../components/UserForm'
import { UserTable } from '../components/UserTable'
import { useCreateUserMutation } from '../hooks/useCreateUserMutation'
import { userKeys,useUsersQuery } from '../hooks/useUsersQuery'
import { useUserUIStore } from '../store/userStore'

const { Title } = Typography

export default function UserListPage() {
  const { t } = useTranslation('common')
  const queryClient = useQueryClient()
  const { filters, isCreateModalOpen, openCreateModal, closeCreateModal } = useUserUIStore()
  const usersQuery = useUsersQuery(filters)
  const createMutation = useCreateUserMutation()

  const users = usersQuery.data?.items ?? []
  const total = usersQuery.data?.total ?? 0
  const isLoading = usersQuery.isLoading
  const isError = usersQuery.isError
  const isCreating = createMutation.isPending

  const handleCreate = (values: CreateUserDto) => {
    createMutation.mutate(values, {
      onSuccess: () => {
        void queryClient.invalidateQueries({ queryKey: userKeys.lists() })
        message.success(t('action.createSuccess'))
        closeCreateModal()
      },
      onError: (error: unknown) => {
        message.error(error instanceof Error ? error.message : 'Error')
      },
    })
  }

  return (
    <PageWrapper>
      <Space direction="vertical" size="large" style={{ width: '100%' }}>
        <Space style={{ justifyContent: 'space-between', width: '100%' }}>
          <Title level={3} style={{ margin: 0 }}>
            {t('nav.users')}
          </Title>
          <Button type="primary" onClick={openCreateModal}>
            {t('action.create')}
          </Button>
        </Space>
        {isError ? (
          <EmptyState description={t('app.error')} />
        ) : (
          <UserTable users={users} loading={isLoading} />
        )}
        {!isLoading && !isError && (
          <Typography.Text type="secondary">
            {t('pagination.total', { total })}
          </Typography.Text>
        )}
      </Space>

      <Modal
        title={t('action.create')}
        open={isCreateModalOpen}
        onCancel={closeCreateModal}
        footer={null}
        destroyOnHidden
      >
        <UserForm onSubmit={handleCreate} loading={isCreating} />
      </Modal>
    </PageWrapper>
  )
}
