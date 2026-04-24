import type { FeatureBusModule, FeatureBusModuleContext } from './types'

const moduleLoaders = import.meta.glob<{ default: FeatureBusModule }>(
  '../../features/**/bus.module.ts'
)

/** Segment đầu dưới `features/` (vd `auth`, `approval`). */
function firstFeatureSegment(path: string): string | null {
  const m = path.match(/features\/([^/]+)\//)
  return m?.[1] ?? null
}

/** Tier 1: chỉ những feature phải có trước mọi route (vd login). */
const CRITICAL_FIRST_SEGMENTS = new Set(['auth'])

let tierContext: FeatureBusModuleContext | null = null

export function setFeatureBusTierContext(ctx: FeatureBusModuleContext): void {
  tierContext = ctx
}

function getFeatureBusTierContext(): FeatureBusModuleContext {
  if (!tierContext) {
    throw new Error(
      '[Bus] Bootstrap must call setFeatureBusTierContext / registerCriticalModules before route loaders.'
    )
  }
  return tierContext
}

function pathsForCritical(): string[] {
  return Object.keys(moduleLoaders)
    .filter((p) => {
      const seg = firstFeatureSegment(p)
      return seg !== null && CRITICAL_FIRST_SEGMENTS.has(seg)
    })
    .sort()
}

/** Các segment đường dẫn dưới `features/` (không tính file cuối). */
function segmentsUnderFeatures(path: string): string[] {
  const parts = path.split('/')
  const i = parts.indexOf('features')
  if (i === -1) return []
  const rest = parts.slice(i + 1)
  if (rest.length === 0) return []
  return rest.slice(0, -1)
}

/**
 * Mọi `bus.module` nằm trong cây `features/...` mà **có một thư mục tên đúng** `featureDir`.
 * Hỗ trợ feature lồng nhau: `features/approval/van-ban-den/bus.module.ts` + `featureRouteLoader('van-ban-den')`.
 * (Không dùng `includes('/features/foo/')` vì giữa `features` và `van-ban-den` có thể có `approval`.)
 */
function pathsForFeatureDir(featureDir: string): string[] {
  return Object.keys(moduleLoaders)
    .filter((p) => segmentsUnderFeatures(p).includes(featureDir))
    .sort()
}

async function registerPaths(ctx: FeatureBusModuleContext, paths: string[]): Promise<void> {
  const loaded = await Promise.all(paths.map((p) => moduleLoaders[p]()))
  for (let i = 0; i < paths.length; i++) {
    const fn = loaded[i].default
    if (typeof fn !== 'function') {
      throw new Error(`[Bus] Missing default export in ${paths[i]}`)
    }
    fn(ctx)
  }
}

export async function registerCriticalModules(ctx: FeatureBusModuleContext): Promise<void> {
  setFeatureBusTierContext(ctx)
  const paths = pathsForCritical()
  await registerPaths(ctx, paths)
}

const completedFeatureDirs = new Set<string>()
const inflightFeatureLoads = new Map<string, Promise<void>>()

async function ensureFeatureDirLoaded(featureDir: string): Promise<void> {
  if (completedFeatureDirs.has(featureDir)) return

  let load = inflightFeatureLoads.get(featureDir)
  if (!load) {
    load = (async () => {
      const ctx = getFeatureBusTierContext()
      const paths = pathsForFeatureDir(featureDir)
      if (paths.length > 0) {
        await registerPaths(ctx, paths)
      } else if (import.meta.env.DEV) {
        console.warn(`[Bus] No bus.module match for feature dir "${featureDir}"`)
      }
      completedFeatureDirs.add(featureDir)
    })().finally(() => {
      inflightFeatureLoads.delete(featureDir)
    })
    inflightFeatureLoads.set(featureDir, load)
  }
  await load
}

/**
 * Tier 2 — gắn vào React Router `loader`. Idempotent; an toàn khi navigate song song (một lần chờ chung).
 */
export function featureRouteLoader(featureDir: string) {
  return async (): Promise<null> => {
    await ensureFeatureDirLoaded(featureDir)
    return null
  }
}

/** Test / debug */
export function getBusModuleGlobKeys(): string[] {
  return Object.keys(moduleLoaders).sort()
}
