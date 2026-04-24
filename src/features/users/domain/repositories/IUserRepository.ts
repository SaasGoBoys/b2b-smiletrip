import type { PaginatedResponse } from '@/shared/types/api.types'
import type { UserRole } from '@/shared/types/user-role'
import type { UserProfile } from '../entities/UserProfile.entity'

export interface UserListFilters {
  search: string
  role: UserRole | null
  page: number
  pageSize: number
}

export interface IUserRepository {
  getMany(filters: UserListFilters): Promise<PaginatedResponse<UserProfile>>
  getById(id: string): Promise<UserProfile | null>
  create(input: { email: string; fullName: string; role: UserRole }): Promise<UserProfile>
  update(
    id: string,
    input: Partial<{ email: string; fullName: string; role: UserRole }>
  ): Promise<UserProfile>
}
