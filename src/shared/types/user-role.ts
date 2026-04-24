export const UserRoles = {
  ADMIN: 'admin',
  USER: 'user',
  MODERATOR: 'moderator',
} as const

export type UserRole = (typeof UserRoles)[keyof typeof UserRoles]

const USER_ROLE_SET = new Set<string>(Object.values(UserRoles))

export function toUserRole(value: string): UserRole {
  if (USER_ROLE_SET.has(value)) {
    return value as UserRole
  }
  throw new Error(`Invalid user role: ${value}`)
}
