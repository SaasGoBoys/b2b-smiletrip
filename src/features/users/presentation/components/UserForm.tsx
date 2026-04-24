import { Button, Form, Input, Select } from 'antd'
import { UserRoles } from '@/shared/types/user-role'
import type { CreateUserDto } from '../../application/dtos/UserDto'

interface Props {
  onSubmit: (values: CreateUserDto) => void
  loading?: boolean
}

export function UserForm({ onSubmit, loading }: Props) {
  const [form] = Form.useForm<CreateUserDto>()

  return (
    <Form form={form} layout="vertical" onFinish={onSubmit}>
      <Form.Item name="email" label="Email" rules={[{ required: true, type: 'email' }]}>
        <Input />
      </Form.Item>
      <Form.Item name="fullName" label="Full name" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="role" label="Role" rules={[{ required: true }]}>
        <Select
          options={[
            { value: UserRoles.USER, label: 'User' },
            { value: UserRoles.ADMIN, label: 'Admin' },
            { value: UserRoles.MODERATOR, label: 'Moderator' },
          ]}
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" loading={loading}>
          Save
        </Button>
      </Form.Item>
    </Form>
  )
}
