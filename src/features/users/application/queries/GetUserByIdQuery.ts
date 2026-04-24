import { z } from 'zod'
import type { IQuery, IQueryHandler } from '@/app/bus/types'
import type { IUserRepository } from '../../domain/repositories/IUserRepository'
import type { UserProfile } from '../../domain/entities/UserProfile.entity'

export class GetUserByIdQuery implements IQuery {
  readonly _type = 'query' as const
  static readonly requiredPermission = 'users:read'
  static readonly schema = z.object({
    id: z.string().min(1),
  })

  readonly id: string

  constructor(id: string) {
    this.id = id
  }
}

export class GetUserByIdQueryHandler implements IQueryHandler<GetUserByIdQuery, UserProfile | null> {
  private readonly userRepository: IUserRepository

  constructor(userRepository: IUserRepository) {
    this.userRepository = userRepository
  }

  async handle(query: GetUserByIdQuery): Promise<UserProfile | null> {
    return this.userRepository.getById(query.id)
  }
}
