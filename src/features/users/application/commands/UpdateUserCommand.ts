import { z } from 'zod'

import type { ICommand, ICommandHandler } from '@/app/bus/types'

import { type UserRole,UserRoles } from '@/shared/types/user-role'

import type { UserProfile } from '../../domain/entities/UserProfile.entity'
import type { IUserRepository } from '../../domain/repositories/IUserRepository'

const userRoleSchema = z.enum([UserRoles.ADMIN, UserRoles.USER, UserRoles.MODERATOR])

export class UpdateUserCommand implements ICommand {
  readonly _type = 'command' as const
  static readonly requiredPermission = 'users:update'
  static readonly schema = z.object({
    id: z.string().min(1),
    email: z.string().email().optional(),
    fullName: z.string().min(1).optional(),
    role: userRoleSchema.optional(),
  })

  readonly id: string
  readonly email?: string
  readonly fullName?: string
  readonly role?: UserRole

  constructor(id: string, email?: string, fullName?: string, role?: UserRole) {
    this.id = id
    this.email = email
    this.fullName = fullName
    this.role = role
  }
}

export class UpdateUserCommandHandler implements ICommandHandler<UpdateUserCommand, UserProfile> {
  private readonly userRepository: IUserRepository

  constructor(userRepository: IUserRepository) {
    this.userRepository = userRepository
  }

  async handle(cmd: UpdateUserCommand): Promise<UserProfile> {
    return this.userRepository.update(cmd.id, {
      ...(cmd.email !== undefined ? { email: cmd.email } : {}),
      ...(cmd.fullName !== undefined ? { fullName: cmd.fullName } : {}),
      ...(cmd.role !== undefined ? { role: cmd.role } : {}),
    })
  }
}
