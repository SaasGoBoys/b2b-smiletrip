import { useQuery } from '@tanstack/react-query'
import { queryBus } from '@/app/bus'
import type { UserListFilters } from '../../domain/repositories/IUserRepository'
import { GetUsersQuery } from '../../application/queries/GetUsersQuery'
import type { PaginatedResponse } from '@/shared/types/api.types'
import type { UserProfile } from '../../domain/entities/UserProfile.entity'

export const userKeys = {
  all: ['users'] as const,
  lists: () => [...userKeys.all, 'list'] as const,
  list: (filters: object) => [...userKeys.lists(), filters] as const,
  detail: (id: string) => [...userKeys.all, 'detail', id] as const,
}

export function useUsersQuery(filters: UserListFilters) {
  return useQuery({
    queryKey: userKeys.list(filters),
    queryFn: () =>
      queryBus.query<GetUsersQuery, PaginatedResponse<UserProfile>>(
        new GetUsersQuery(filters.search, filters.role, filters.page, filters.pageSize)
      ),
    staleTime: 5 * 60 * 1000,
    retry: false,
  })
}
