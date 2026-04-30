import { Card, Descriptions } from 'antd'

import type { UserProfile } from '../../domain/entities/UserProfile.entity'

interface Props {
  user: UserProfile
}

export function UserCard({ user }: Props) {
  return (
    <Card title={user.displayName}>
      <Descriptions column={1} size="small">
        <Descriptions.Item label="Email">{user.email}</Descriptions.Item>
        <Descriptions.Item label="Role">{user.role}</Descriptions.Item>
      </Descriptions>
    </Card>
  )
}
