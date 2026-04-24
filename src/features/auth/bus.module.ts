import type { FeatureBusModule } from '@/app/composition/types'
import { LoginCommand, LoginCommandHandler } from './application/commands/LoginCommand'
import { LogoutCommand, LogoutCommandHandler } from './application/commands/LogoutCommand'

const registerAuthBus: FeatureBusModule = ({ commandBus, deps }) => {
  const { repository: authRepository } = deps.auth

  commandBus
    .register(LoginCommand, new LoginCommandHandler(authRepository))
    .register(LogoutCommand, new LogoutCommandHandler(authRepository))
}

export default registerAuthBus
