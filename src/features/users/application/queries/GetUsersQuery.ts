import { z } from 'zod'
import type { IQuery, IQueryHandler } from '@/app/bus/types'
import { UserRoles, type UserRole } from '@/shared/types/user-role'
import type { IUserRepository, UserListFilters } from '../../domain/repositories/IUserRepository'
import type { PaginatedResponse } from '@/shared/types/api.types'
import type { UserProfile } from '../../domain/entities/UserProfile.entity'

const userRoleFilterSchema = z.union([
  z.enum([UserRoles.ADMIN, UserRoles.USER, UserRoles.MODERATOR]),
  z.null(),
])

export class GetUsersQuery implements IQuery {
  readonly _type = 'query' as const
  static readonly requiredPermission = 'users:read'
  static readonly schema = z.object({
    search: z.string(),
    role: userRoleFilterSchema,
    page: z.number().int().positive(),
    pageSize: z.number().int().positive(),
  })

  readonly search: string
  readonly role: UserRole | null
  readonly page: number
  readonly pageSize: number

  constructor(search: string, role: UserRole | null, page: number, pageSize: number) {
    this.search = search
    this.role = role
    this.page = page
    this.pageSize = pageSize
  }
}

export class GetUsersQueryHandler implements IQueryHandler<GetUsersQuery, PaginatedResponse<UserProfile>> {
  private readonly userRepository: IUserRepository

  constructor(userRepository: IUserRepository) {
    this.userRepository = userRepository
  }

  async handle(query: GetUsersQuery): Promise<PaginatedResponse<UserProfile>> {
    const filters: UserListFilters = {
      search: query.search,
      role: query.role,
      page: query.page,
      pageSize: query.pageSize,
    }
    return this.userRepository.getMany(filters)
  }
}
