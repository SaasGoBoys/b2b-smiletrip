import { Table } from 'antd'
import type { ColumnsType } from 'antd/es/table'
import type { UserProfile } from '../../domain/entities/UserProfile.entity'
import { Link } from 'react-router-dom'

interface Props {
  users: UserProfile[]
  loading?: boolean
}

export function UserTable({ users, loading }: Props) {
  const columns: ColumnsType<UserProfile> = [
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Name',
      dataIndex: 'fullName',
      key: 'fullName',
    },
    {
      title: 'Role',
      dataIndex: 'role',
      key: 'role',
    },
    {
      title: '',
      key: 'actions',
      render: (_, record) =>
        record.canUpdate() ? <Link to={`/users/${record.id}`}>View</Link> : null,
    },
  ]

  return (
    <Table<UserProfile>
      rowKey="id"
      loading={loading}
      columns={columns}
      dataSource={users}
      pagination={false}
    />
  )
}
