import type { FeatureBusModule } from '@/app/composition/types'

import { LogoutCommand, LogoutCommandHandler } from './application/commands/LogoutCommand'
import { SignInCommand, SignInCommandHandler } from './application/commands/SignInCommand'
import { AuthRepository } from './infrastructure/repositories/AuthRepository'

const registerAuthBus: FeatureBusModule = ({ commandBus }) => {
  const authRepository = new AuthRepository()

  commandBus
    .register(SignInCommand, new SignInCommandHandler(authRepository))
    .register(LogoutCommand, new LogoutCommandHandler(authRepository))
}

export default registerAuthBus
