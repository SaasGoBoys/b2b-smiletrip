import type { FeatureBusModule } from '@/app/composition/types'

import { LoginCommand, LoginCommandHandler } from './application/commands/LoginCommand'
import { LogoutCommand, LogoutCommandHandler } from './application/commands/LogoutCommand'
import { AuthRepository } from './infrastructure/repositories/AuthRepository'

const registerAuthBus: FeatureBusModule = ({ commandBus }) => {
  const authRepository = new AuthRepository()

  commandBus
    .register(LoginCommand, new LoginCommandHandler(authRepository))
    .register(LogoutCommand, new LogoutCommandHandler(authRepository))
}

export default registerAuthBus
