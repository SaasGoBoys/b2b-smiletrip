import type { ICommand, ICommandHandler } from '@/app/bus/types'
import type { UserRole } from '@/shared/types/user-role'
import type { IUserRepository } from '../../domain/repositories/IUserRepository'
import type { UserProfile } from '../../domain/entities/UserProfile.entity'
import { createUserSchema } from '../dtos/UserDto'

export class CreateUserCommand implements ICommand {
  readonly _type = 'command' as const
  static readonly requiredPermission = 'users:create'
  static readonly schema = createUserSchema

  readonly email: string
  readonly fullName: string
  readonly role: UserRole

  constructor(email: string, fullName: string, role: UserRole) {
    this.email = email
    this.fullName = fullName
    this.role = role
  }
}

export class CreateUserCommandHandler implements ICommandHandler<CreateUserCommand, UserProfile> {
  private readonly userRepository: IUserRepository

  constructor(userRepository: IUserRepository) {
    this.userRepository = userRepository
  }

  async handle(cmd: CreateUserCommand): Promise<UserProfile> {
    return this.userRepository.create({
      email: cmd.email,
      fullName: cmd.fullName,
      role: cmd.role,
    })
  }
}
