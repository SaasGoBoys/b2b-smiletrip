import type { IAuthRepository } from '@/features/auth/domain/repositories/IAuthRepository'
import type { IUserRepository } from '@/features/users/domain/repositories/IUserRepository'
import type { CommandBus } from '@/app/bus/CommandBus'
import type { QueryBus } from '@/app/bus/QueryBus'

/**
 * Composition deps grouped by subdomain so each `bus.module.ts` only touches the slice it needs.
 * Add a new key per bounded context (e.g. `orders: { repository: IOrdersRepository }`).
 */
export interface AppCompositionDeps {
  auth: { repository: IAuthRepository }
  users: { repository: IUserRepository }
}

export interface FeatureBusModuleContext {
  commandBus: CommandBus
  queryBus: QueryBus
  deps: AppCompositionDeps
}

// Every feature's `bus.module.ts` (under src/features) must default-export FeatureBusModule.
export type FeatureBusModule = (ctx: FeatureBusModuleContext) => void
