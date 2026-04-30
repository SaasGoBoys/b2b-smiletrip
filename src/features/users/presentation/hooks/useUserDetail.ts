import { useQuery } from '@tanstack/react-query'

import { queryBus } from '@/app/bus'

import { GetUserByIdQuery } from '../../application/queries/GetUserByIdQuery'
import type { UserProfile } from '../../domain/entities/UserProfile.entity'

import { userKeys } from './useUsersQuery'

export function useUserDetail(id: string | undefined) {
  return useQuery({
    queryKey: id ? userKeys.detail(id) : ['users', 'detail', 'none'],
    queryFn: () => {
      if (!id) return Promise.resolve(null)
      return queryBus.query<GetUserByIdQuery, UserProfile | null>(new GetUserByIdQuery(id))
    },
    enabled: Boolean(id),
  })
}
