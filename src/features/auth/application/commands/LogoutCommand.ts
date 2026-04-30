import type { ICommand, ICommandHandler } from '@/app/bus/types'

import type { IAuthRepository } from '../../domain/repositories/IAuthRepository'

export class LogoutCommand implements ICommand {
  readonly _type = 'command' as const
}

export class LogoutCommandHandler implements ICommandHandler<LogoutCommand, void> {
  private readonly authRepository: IAuthRepository

  constructor(authRepository: IAuthRepository) {
    this.authRepository = authRepository
  }

  async handle(cmd: LogoutCommand): Promise<void> {
    void cmd
    await this.authRepository.logout()
  }
}
