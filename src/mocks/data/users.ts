import type { PaginatedResponse } from '@/shared/types/api.types'
import type { UserRole } from '@/shared/types/user-role'

import type { Permission } from '@/features/auth/domain/entities/Permission.entity'
import { UserRoles } from '@/features/auth/domain/entities/User.entity'

export interface MockApiUser {
  id: string
  email: string
  fullName: string
  role: string
  createdAt: string
  permissions: Permission[]
}

const defaultPermissions: Permission[] = [
  { resource: 'users', actions: ['read', 'update', 'create'] },
  { resource: 'products', actions: ['read'] },
]

export function buildMockLoginUser(email: string): MockApiUser {
  return {
    id: 'mock-user-id',
    email,
    fullName: 'Mock User',
    role: UserRoles.MODERATOR,
    createdAt: new Date().toISOString(),
    permissions: defaultPermissions,
  }
}

export interface MockUserRow {
  id: string
  email: string
  fullName: string
  role: UserRole
}

const initialMockUsers: MockUserRow[] = [
  { id: 'u-1', email: 'admin@example.com', fullName: 'Admin User', role: UserRoles.ADMIN },
  {
    id: 'u-2',
    email: 'moderator@example.com',
    fullName: 'Moderator User',
    role: UserRoles.MODERATOR,
  },
  { id: 'u-3', email: 'user@example.com', fullName: 'Normal User', role: UserRoles.USER },
  { id: 'u-4', email: 'alice@example.com', fullName: 'Alice Nguyen', role: UserRoles.USER },
  { id: 'u-5', email: 'bob@example.com', fullName: 'Bob Tran', role: UserRoles.MODERATOR },
]

const mockUsersDb: MockUserRow[] = [...initialMockUsers]
let mockUserIdCounter = 6

export function resetMockUsersDb(): void {
  mockUsersDb.splice(0, mockUsersDb.length, ...initialMockUsers.map((u) => ({ ...u })))
  mockUserIdCounter = 6
}

export function listMockUsers(input: {
  search: string
  role: UserRole | null
  page: number
  pageSize: number
}): PaginatedResponse<MockUserRow> {
  const search = input.search.trim().toLowerCase()
  const filtered = mockUsersDb.filter((u) => {
    const matchesRole = input.role ? u.role === input.role : true
    const matchesSearch = search
      ? u.email.toLowerCase().includes(search) || u.fullName.toLowerCase().includes(search)
      : true
    return matchesRole && matchesSearch
  })

  const total = filtered.length
  const page = Math.max(1, input.page)
  const pageSize = Math.max(1, input.pageSize)
  const totalPages = Math.max(1, Math.ceil(total / pageSize))
  const offset = (page - 1) * pageSize
  const items = filtered.slice(offset, offset + pageSize)

  return { items, total, page, pageSize, totalPages }
}

export function getMockUserById(id: string): MockUserRow | null {
  return mockUsersDb.find((u) => u.id === id) ?? null
}

export function createMockUser(input: {
  email: string
  fullName: string
  role: UserRole
}): MockUserRow {
  const next: MockUserRow = {
    id: `u-${mockUserIdCounter++}`,
    email: input.email,
    fullName: input.fullName,
    role: input.role,
  }
  mockUsersDb.unshift(next)
  return next
}

export function updateMockUser(
  id: string,
  input: Partial<{ email: string; fullName: string; role: UserRole }>
): MockUserRow | null {
  const index = mockUsersDb.findIndex((u) => u.id === id)
  if (index === -1) return null

  const current = mockUsersDb[index]
  const next: MockUserRow = {
    ...current,
    ...(input.email !== undefined ? { email: input.email } : {}),
    ...(input.fullName !== undefined ? { fullName: input.fullName } : {}),
    ...(input.role !== undefined ? { role: input.role } : {}),
  }
  mockUsersDb[index] = next
  return next
}
