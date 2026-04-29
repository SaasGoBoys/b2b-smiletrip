import type { CommandBus } from '@/app/bus/CommandBus'
import type { QueryBus } from '@/app/bus/QueryBus'

export interface FeatureBusModuleContext {
  commandBus: CommandBus
  queryBus: QueryBus
}

// Every feature's `bus.module.ts` (under src/features) must default-export FeatureBusModule.
export type FeatureBusModule = (ctx: FeatureBusModuleContext) => void
