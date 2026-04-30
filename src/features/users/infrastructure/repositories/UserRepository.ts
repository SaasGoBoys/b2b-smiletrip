import { apiClient } from '@/shared/lib/axios'
import type { PaginatedResponse } from '@/shared/types/api.types'
import type { UserRole } from '@/shared/types/user-role'
import { toUserRole } from '@/shared/types/user-role'

import { UserProfile } from '../../domain/entities/UserProfile.entity'
import type { IUserRepository, UserListFilters } from '../../domain/repositories/IUserRepository'

interface ApiUserRow {
  id: string
  email: string
  fullName?: string
  full_name?: string
  role: string
}

export class UserRepository implements IUserRepository {
  async getMany(filters: UserListFilters): Promise<PaginatedResponse<UserProfile>> {
    const response = await apiClient.get<PaginatedResponse<ApiUserRow>>('/users', {
      params: {
        search: filters.search || undefined,
        role: filters.role || undefined,
        page: filters.page,
        pageSize: filters.pageSize,
      },
    })
    const { items, total, page, pageSize, totalPages } = response.data
    return {
      items: items.map((row) => this.mapRow(row)),
      total,
      page,
      pageSize,
      totalPages,
    }
  }

  async getById(id: string): Promise<UserProfile | null> {
    try {
      const response = await apiClient.get<ApiUserRow>(`/users/${id}`)
      return this.mapRow(response.data)
    } catch {
      return null
    }
  }

  async create(input: { email: string; fullName: string; role: UserRole }): Promise<UserProfile> {
    const response = await apiClient.post<ApiUserRow>('/users', input)
    return this.mapRow(response.data)
  }

  async update(
    id: string,
    input: Partial<{ email: string; fullName: string; role: UserRole }>
  ): Promise<UserProfile> {
    const response = await apiClient.patch<ApiUserRow>(`/users/${id}`, input)
    return this.mapRow(response.data)
  }

  private mapRow(data: ApiUserRow): UserProfile {
    return new UserProfile({
      id: data.id,
      email: data.email,
      fullName: data.fullName ?? data.full_name ?? '',
      role: toUserRole(data.role),
    })
  }
}
