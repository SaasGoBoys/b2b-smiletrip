import { commandBus } from '../bus/CommandBus'
import { queryBus } from '../bus/QueryBus'
import { LoggingBehavior } from '../bus/pipelines/LoggingBehavior'
import { ValidationBehavior } from '../bus/pipelines/ValidationBehavior'
import { AuthorizationBehavior } from '../bus/pipelines/AuthorizationBehavior'
import { ErrorBehavior } from '../bus/pipelines/ErrorBehavior'

import { AuthRepository } from '@/features/auth/infrastructure/repositories/AuthRepository'
import { useAuthStore } from '@/features/auth/infrastructure/store/authStore'
import { configureHttpClientAuth } from '@/shared/lib/axios'

import { registerCriticalModules } from './featureBusTiered'

export async function bootstrapApplication(): Promise<void> {
  const authRepository = new AuthRepository()

  configureHttpClientAuth({
    getAccessToken: () => useAuthStore.getState().accessToken,
    getRefreshToken: () => useAuthStore.getState().refreshToken,
    tryRefresh: async () => {
      const refreshToken = useAuthStore.getState().refreshToken
      if (!refreshToken) return false
      try {
        const tokens = await authRepository.refreshToken(refreshToken)
        useAuthStore.getState().setTokens(tokens.accessToken, tokens.refreshToken)
        return true
      } catch {
        return false
      }
    },
    onUnauthorized: () => useAuthStore.getState().clearAuth(),
  })

  const sharedBehaviors = [
    new ErrorBehavior(),
    new LoggingBehavior(),
    new ValidationBehavior(),
    new AuthorizationBehavior(),
  ]

  for (const b of sharedBehaviors) {
    commandBus.use(b)
    queryBus.use(b)
  }

  await registerCriticalModules({
    commandBus,
    queryBus,
  })
}
