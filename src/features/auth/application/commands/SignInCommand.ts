import { z } from 'zod'

import type { ICommand, ICommandHandler } from '@/app/bus/types'

import type { User } from '../../domain/entities/User.entity'
import type { IAuthRepository } from '../../domain/repositories/IAuthRepository'
import { Email } from '../../domain/value-objects/Email.vo'

export class SignInCommand implements ICommand {
  readonly _type = 'command' as const
  static readonly schema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
  })

  readonly email: string
  readonly password: string

  constructor(email: string, password: string) {
    this.email = email
    this.password = password
  }
}

export interface SignInCommandResult {
  user: User
  accessToken: string
  refreshToken: string
}

export class SignInCommandHandler implements ICommandHandler<SignInCommand, SignInCommandResult> {
  private readonly authRepository: IAuthRepository

  constructor(authRepository: IAuthRepository) {
    this.authRepository = authRepository
  }

  async handle(cmd: SignInCommand): Promise<SignInCommandResult> {
    const email = Email.create(cmd.email)

    const result = await this.authRepository.login({
      email: email.value,
      password: cmd.password,
    })

    return {
      user: result.user,
      accessToken: result.tokens.accessToken,
      refreshToken: result.tokens.refreshToken,
    }
  }
}
