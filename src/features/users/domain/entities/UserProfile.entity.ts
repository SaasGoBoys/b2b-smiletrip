import { UserRoles, type UserRole } from '@/shared/types/user-role'

export interface UserProfileProps {
  id: string
  email: string
  fullName: string
  role: UserRole
}

export class UserProfile {
  readonly id: string
  readonly email: string
  readonly fullName: string
  readonly role: UserRole

  constructor(props: UserProfileProps) {
    this.id = props.id
    this.email = props.email
    this.fullName = props.fullName
    this.role = props.role
  }

  get displayName(): string {
    const name = this.fullName.trim()
    if (name.length > 0) return name
    const local = this.email.split('@')[0]
    return local ?? this.email
  }

  hasRole(role: UserRole): boolean {
    return this.role === role
  }

  isAdmin(): boolean {
    return this.role === UserRoles.ADMIN
  }

  equals(other: UserProfile): boolean {
    return this.id === other.id
  }
}
