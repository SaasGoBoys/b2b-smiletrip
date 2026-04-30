import { type UserRole,UserRoles } from '@/shared/types/user-role'

import type { Permission } from './Permission.entity'

export { toUserRole,type UserRole, UserRoles } from '@/shared/types/user-role'

export interface UserProps {
  id: string
  email: string
  fullName: string
  role: UserRole
  createdAt: Date
  permissions?: Permission[]
}

export class User {
  readonly id: string
  readonly email: string
  readonly fullName: string
  readonly role: UserRole
  readonly createdAt: Date
  readonly permissions: Permission[]

  constructor(props: UserProps) {
    this.id = props.id
    this.email = props.email
    this.fullName = props.fullName
    this.role = props.role
    this.createdAt = props.createdAt
    this.permissions = props.permissions ?? []
  }

  isAdmin(): boolean {
    return this.role === UserRoles.ADMIN
  }

  canModerate(): boolean {
    return this.role === UserRoles.ADMIN || this.role === UserRoles.MODERATOR
  }

  static create(props: Omit<UserProps, 'createdAt'>): User {
    return new User({ ...props, createdAt: new Date() })
  }
}
