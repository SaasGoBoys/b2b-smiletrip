#!/usr/bin/env node
/**
 * Scaffold CQRS feature: queries/commands, repository stubs, hooks, pages, routes, bus.module.
 *
 *   node scripts/create-feature.mjs
 *   node scripts/create-feature.mjs --domain invoices --mode 1
 *   node scripts/create-feature.mjs --domain approval --subs "van-ban-den,van-ban-di" --mode 2
 *
 * Mode 1: list query + list page + route
 * Mode 2: + detail, create, update (queries/commands + pages)
 *
 * --subs non-empty → features/<domain>/_shared/ + một folder per sub-feature (bounded context).
 */

import fs from 'node:fs'
import path from 'node:path'
import readline from 'node:readline/promises'
import { fileURLToPath } from 'node:url'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const SRC = path.join(ROOT, 'src')

function toPascal(kebab) {
  return kebab
    .split(/[-_/]/)
    .filter(Boolean)
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1).toLowerCase())
    .join('')
}

function entityPascalFromKebab(kebab) {
  const p = toPascal(kebab)
  if (p.endsWith('s') && p.length > 2) return p.slice(0, -1)
  return p
}

function toCamel(pascal) {
  return pascal.charAt(0).toLowerCase() + pascal.slice(1)
}

/** `user-profile` → `userProfile` — matches a key on `AppCompositionDeps`. */
function toCamelFromKebab(kebab) {
  return toCamel(toPascal(kebab))
}

function repoDepKey(pascal) {
  return `${toCamel(pascal)}Repository`
}

function parseArgs(argv) {
  const out = { domain: null, subs: null, mode: null, help: false }
  for (let i = 2; i < argv.length; i++) {
    const a = argv[i]
    if (a === '--help' || a === '-h') out.help = true
    else if (a === '--domain') out.domain = argv[++i]
    else if (a === '--subs') out.subs = argv[++i]
    else if (a === '--mode') out.mode = Number(argv[++i])
  }
  return out
}

async function prompt(rl, q, def = '') {
  const v = (await rl.question(def ? `${q} [${def}]: ` : `${q}: `)).trim()
  return v || def
}

function ensureDir(d) {
  fs.mkdirSync(d, { recursive: true })
}

function write(p, content) {
  ensureDir(path.dirname(p))
  fs.writeFileSync(p, content, 'utf8')
  console.log('  write', path.relative(ROOT, p))
}

/** Relative import từ application/queries|commands tới entity */
function entityImportRelFromSubApp(hasShared, EP) {
  if (!hasShared) return `../../domain/entities/${EP}.entity`
  return `../../../_shared/domain/entities/${EP}.entity`
}

function entityImportRelFromSubInfra(hasShared, EP) {
  if (!hasShared) return `../../domain/entities/${EP}.entity`
  return `../../../_shared/domain/entities/${EP}.entity`
}

function entityImportRelFromSubDomainRepo(hasShared, EP) {
  if (!hasShared) return `../entities/${EP}.entity`
  // features/<domain>/<sub>/domain/repositories → lên 3 cấp tới <domain>/_shared
  return `../../../_shared/domain/entities/${EP}.entity`
}

function irepo({ entityPascal, pascal, mode, relEntity }) {
  const head = `import type { PaginatedResponse } from '@/shared/types/api.types'
import type { ${entityPascal} } from '${relEntity}'

export interface ${pascal}ListFilters {
  search: string
  page: number
  pageSize: number
}
`
  const listOnly = `
export interface I${pascal}Repository {
  getMany(filters: ${pascal}ListFilters): Promise<PaginatedResponse<${entityPascal}>>
}
`
  const full = `
export interface I${pascal}Repository {
  getMany(filters: ${pascal}ListFilters): Promise<PaginatedResponse<${entityPascal}>>
  getById(id: string): Promise<${entityPascal} | null>
  create(input: { name: string }): Promise<${entityPascal}>
  update(id: string, input: Partial<{ name: string }>): Promise<${entityPascal}>
}
`
  return head + (mode === 1 ? listOnly : full)
}

function repoImpl({ pascal, entityPascal, apiSegment, mode, relEntity }) {
  const list = `  async getMany(filters: ${pascal}ListFilters): Promise<PaginatedResponse<${entityPascal}>> {
    const response = await apiClient.get<PaginatedResponse<{ id: string; name: string; createdAt?: string }>>(
      '/${apiSegment}',
      { params: { search: filters.search || undefined, page: filters.page, pageSize: filters.pageSize } }
    )
    const { items, total, page, pageSize, totalPages } = response.data
    return {
      items: items.map((row) => this.mapRow(row)),
      total,
      page,
      pageSize,
      totalPages,
    }
  }`

  const rest =
    mode === 2
      ? `
  async getById(id: string): Promise<${entityPascal} | null> {
    try {
      const response = await apiClient.get<{ id: string; name: string; createdAt?: string }>(
        \`/${apiSegment}/\${id}\`
      )
      return this.mapRow(response.data)
    } catch {
      return null
    }
  }

  async create(input: { name: string }): Promise<${entityPascal}> {
    const response = await apiClient.post<{ id: string; name: string; createdAt?: string }>(
      '/${apiSegment}',
      input
    )
    return this.mapRow(response.data)
  }

  async update(id: string, input: Partial<{ name: string }>): Promise<${entityPascal}> {
    const response = await apiClient.patch<{ id: string; name: string; createdAt?: string }>(
      \`/${apiSegment}/\${id}\`,
      input
    )
    return this.mapRow(response.data)
  }`
      : ''

  return `import type { I${pascal}Repository, ${pascal}ListFilters } from '../../domain/repositories/I${pascal}Repository'
import type { PaginatedResponse } from '@/shared/types/api.types'
import { ${entityPascal} } from '${relEntity}'
import { apiClient } from '@/shared/lib/axios'

interface ApiRow {
  id: string
  name: string
  createdAt?: string
}

export class ${pascal}Repository implements I${pascal}Repository {
${list}
${rest}

  private mapRow(data: ApiRow): ${entityPascal} {
    return new ${entityPascal}({
      id: data.id,
      name: data.name,
      createdAt: new Date(data.createdAt ?? Date.now()),
    })
  }
}
`
}

function tmplGetListQuery({ pascal, entityPascal, relEntity }) {
  return `import { z } from 'zod'
import type { IQuery, IQueryHandler } from '@/app/bus/types'
import type { I${pascal}Repository, ${pascal}ListFilters } from '../../domain/repositories/I${pascal}Repository'
import type { PaginatedResponse } from '@/shared/types/api.types'
import type { ${entityPascal} } from '${relEntity}'

export class Get${pascal}ListQuery implements IQuery {
  readonly _type = 'query' as const
  static readonly schema = z.object({
    search: z.string(),
    page: z.number().int().positive(),
    pageSize: z.number().int().positive(),
  })
  readonly search: string
  readonly page: number
  readonly pageSize: number
  constructor(search: string, page: number, pageSize: number) {
    this.search = search
    this.page = page
    this.pageSize = pageSize
  }
}

export class Get${pascal}ListQueryHandler implements IQueryHandler<Get${pascal}ListQuery, PaginatedResponse<${entityPascal}>> {
  private readonly repo: I${pascal}Repository
  constructor(repo: I${pascal}Repository) {
    this.repo = repo
  }
  async handle(query: Get${pascal}ListQuery): Promise<PaginatedResponse<${entityPascal}>> {
    const filters: ${pascal}ListFilters = {
      search: query.search,
      page: query.page,
      pageSize: query.pageSize,
    }
    return this.repo.getMany(filters)
  }
}
`
}

function tmplGetById({ pascal, entityPascal, relEntity }) {
  return `import { z } from 'zod'
import type { IQuery, IQueryHandler } from '@/app/bus/types'
import type { I${pascal}Repository } from '../../domain/repositories/I${pascal}Repository'
import type { ${entityPascal} } from '${relEntity}'

export class Get${pascal}ByIdQuery implements IQuery {
  readonly _type = 'query' as const
  static readonly schema = z.object({ id: z.string().min(1) })
  readonly id: string
  constructor(id: string) {
    this.id = id
  }
}

export class Get${pascal}ByIdQueryHandler implements IQueryHandler<Get${pascal}ByIdQuery, ${entityPascal} | null> {
  private readonly repo: I${pascal}Repository
  constructor(repo: I${pascal}Repository) {
    this.repo = repo
  }
  async handle(q: Get${pascal}ByIdQuery): Promise<${entityPascal} | null> {
    return this.repo.getById(q.id)
  }
}
`
}

function tmplCreate({ pascal, entityPascal, relEntity }) {
  return `import { z } from 'zod'
import type { ICommand, ICommandHandler } from '@/app/bus/types'
import type { I${pascal}Repository } from '../../domain/repositories/I${pascal}Repository'
import type { ${entityPascal} } from '${relEntity}'

export class Create${pascal}Command implements ICommand {
  readonly _type = 'command' as const
  static readonly schema = z.object({ name: z.string().min(1) })
  readonly name: string
  constructor(name: string) {
    this.name = name
  }
}

export class Create${pascal}CommandHandler implements ICommandHandler<Create${pascal}Command, ${entityPascal}> {
  private readonly repo: I${pascal}Repository
  constructor(repo: I${pascal}Repository) {
    this.repo = repo
  }
  async handle(cmd: Create${pascal}Command): Promise<${entityPascal}> {
    return this.repo.create({ name: cmd.name })
  }
}
`
}

function tmplUpdate({ pascal, entityPascal, relEntity }) {
  return `import { z } from 'zod'
import type { ICommand, ICommandHandler } from '@/app/bus/types'
import type { I${pascal}Repository } from '../../domain/repositories/I${pascal}Repository'
import type { ${entityPascal} } from '${relEntity}'

export class Update${pascal}Command implements ICommand {
  readonly _type = 'command' as const
  static readonly schema = z.object({
    id: z.string().min(1),
    name: z.string().min(1).optional(),
  })
  readonly id: string
  readonly name?: string
  constructor(id: string, name?: string) {
    this.id = id
    this.name = name
  }
}

export class Update${pascal}CommandHandler implements ICommandHandler<Update${pascal}Command, ${entityPascal}> {
  private readonly repo: I${pascal}Repository
  constructor(repo: I${pascal}Repository) {
    this.repo = repo
  }
  async handle(cmd: Update${pascal}Command): Promise<${entityPascal}> {
    return this.repo.update(cmd.id, {
      ...(cmd.name !== undefined ? { name: cmd.name } : {}),
    })
  }
}
`
}

function tmplHookList({ pascal, entityPascal, featureImportBase }) {
  return `import { useQuery } from '@tanstack/react-query'
import { queryBus } from '@/app/bus'
import { Get${pascal}ListQuery } from '${featureImportBase}/application/queries/Get${pascal}ListQuery'
import type { PaginatedResponse } from '@/shared/types/api.types'
import type { ${entityPascal} } from '${featureImportBase}/domain/entities/${entityPascal}.entity'

export const ${toCamel(pascal)}ListKeys = {
  all: ['${toCamel(pascal)}'] as const,
  list: (filters: object) => [...${toCamel(pascal)}ListKeys.all, 'list', filters] as const,
}

export function use${pascal}List(filters: { search: string; page: number; pageSize: number }) {
  return useQuery({
    queryKey: ${toCamel(pascal)}ListKeys.list(filters),
    queryFn: () =>
      queryBus.query<Get${pascal}ListQuery, PaginatedResponse<${entityPascal}>>(
        new Get${pascal}ListQuery(filters.search, filters.page, filters.pageSize)
      ),
  })
}
`
}

function tmplHookListShared({ pascal, entityPascal, featureImportBase, sharedEntityImport }) {
  return `import { useQuery } from '@tanstack/react-query'
import { queryBus } from '@/app/bus'
import { Get${pascal}ListQuery } from '${featureImportBase}/application/queries/Get${pascal}ListQuery'
import type { PaginatedResponse } from '@/shared/types/api.types'
import type { ${entityPascal} } from '${sharedEntityImport}'

export const ${toCamel(pascal)}ListKeys = {
  all: ['${toCamel(pascal)}'] as const,
  list: (filters: object) => [...${toCamel(pascal)}ListKeys.all, 'list', filters] as const,
}

export function use${pascal}List(filters: { search: string; page: number; pageSize: number }) {
  return useQuery({
    queryKey: ${toCamel(pascal)}ListKeys.list(filters),
    queryFn: () =>
      queryBus.query<Get${pascal}ListQuery, PaginatedResponse<${entityPascal}>>(
        new Get${pascal}ListQuery(filters.search, filters.page, filters.pageSize)
      ),
  })
}
`
}

function tmplHookDetail({ pascal, entityPascal, featureImportBase, sharedEntityImport }) {
  const entImport =
    sharedEntityImport || `${featureImportBase}/domain/entities/${entityPascal}.entity`
  return `import { useQuery } from '@tanstack/react-query'
import { queryBus } from '@/app/bus'
import { Get${pascal}ByIdQuery } from '${featureImportBase}/application/queries/Get${pascal}ByIdQuery'
import type { ${entityPascal} } from '${entImport}'
import { ${toCamel(pascal)}ListKeys } from './use${pascal}List'

export function use${pascal}Detail(id: string | undefined) {
  return useQuery({
    queryKey: id ? [...${toCamel(pascal)}ListKeys.all, 'detail', id] : ['${toCamel(pascal)}', 'detail', 'none'],
    queryFn: () =>
      queryBus.query<Get${pascal}ByIdQuery, ${entityPascal} | null>(new Get${pascal}ByIdQuery(id!)),
    enabled: Boolean(id),
  })
}
`
}

function tmplHookMutations({ pascal, entityPascal, featureImportBase, sharedEntityImport }) {
  const ent = sharedEntityImport || `${featureImportBase}/domain/entities/${entityPascal}.entity`
  return `import { useMutation, useQueryClient } from '@tanstack/react-query'
import { message } from 'antd'
import { commandBus } from '@/app/bus'
import { Create${pascal}Command } from '${featureImportBase}/application/commands/Create${pascal}Command'
import { Update${pascal}Command } from '${featureImportBase}/application/commands/Update${pascal}Command'
import type { ${entityPascal} } from '${ent}'
import { ${toCamel(pascal)}ListKeys } from './use${pascal}List'

export function use${pascal}Mutations() {
  const qc = useQueryClient()
  const create = useMutation({
    mutationFn: (name: string) =>
      commandBus.send<Create${pascal}Command, ${entityPascal}>(new Create${pascal}Command(name)),
    onSuccess: () => {
      void qc.invalidateQueries({ queryKey: ${toCamel(pascal)}ListKeys.all })
      message.success('Created')
    },
  })
  const update = useMutation({
    mutationFn: (payload: { id: string; name?: string }) =>
      commandBus.send<Update${pascal}Command, ${entityPascal}>(
        new Update${pascal}Command(payload.id, payload.name)
      ),
    onSuccess: (_, v) => {
      void qc.invalidateQueries({ queryKey: [...${toCamel(pascal)}ListKeys.all, 'detail', v.id] })
      void qc.invalidateQueries({ queryKey: ${toCamel(pascal)}ListKeys.all })
      message.success('Updated')
    },
  })
  return { create, update }
}
`
}

function tmplListPage({ pascal, routeSegment, mode }) {
  const nav = mode === 2 ? `import { Link } from 'react-router-dom'\n` : ''
  const body =
    mode === 2
      ? `<Link to={\`/${routeSegment}/new\`}>Create</Link>
        <ul>
          {data?.items?.map((row) => (
            <li key={row.id}>
              <Link to={\`/${routeSegment}/\${row.id}\`}>{row.name}</Link>
            </li>
          ))}
        </ul>`
      : `<ul>
          {data?.items?.map((row) => (
            <li key={row.id}>{row.name}</li>
          ))}
        </ul>`

  return `import { Typography } from 'antd'
${nav}import { PageWrapper } from '@/shared/components/layout/PageWrapper'
import { use${pascal}List } from '../hooks/use${pascal}List'

const { Title } = Typography

export default function ${pascal}ListPage() {
  const { data, isLoading, isError } = use${pascal}List({ search: '', page: 1, pageSize: 10 })
  return (
    <PageWrapper>
      <Title level={3}>${pascal} list</Title>
      {isLoading && <p>Loading…</p>}
      {isError && <p>Error</p>}
      {!isLoading && !isError && (
        <>
        ${body}
        </>
      )}
    </PageWrapper>
  )
}
`
}

function tmplDetailPage({ pascal, routeSegment }) {
  return `import { useParams, Link } from 'react-router-dom'
import { Button, Form, Input, Typography } from 'antd'
import { PageWrapper } from '@/shared/components/layout/PageWrapper'
import { use${pascal}Detail } from '../hooks/use${pascal}Detail'
import { use${pascal}Mutations } from '../hooks/use${pascal}Mutations'

const { Title } = Typography

export default function ${pascal}DetailPage() {
  const { id } = useParams<{ id: string }>()
  const { data, isLoading } = use${pascal}Detail(id)
  const { update } = use${pascal}Mutations()
  const [form] = Form.useForm()
  return (
    <PageWrapper>
      <Link to="/${routeSegment}">Back</Link>
      <Title level={3}>${pascal} detail</Title>
      {isLoading && <p>Loading…</p>}
      {data && (
        <Form
          form={form}
          layout="vertical"
          initialValues={{ name: data.name }}
          onFinish={(v) => id && update.mutate({ id, name: v.name })}
        >
          <Form.Item name="name" label="Name" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Button type="primary" htmlType="submit" loading={update.isPending}>
            Save
          </Button>
        </Form>
      )}
    </PageWrapper>
  )
}
`
}

function tmplCreatePage({ pascal, routeSegment }) {
  return `import { Link, useNavigate } from 'react-router-dom'
import { Button, Form, Input, Typography } from 'antd'
import { PageWrapper } from '@/shared/components/layout/PageWrapper'
import { use${pascal}Mutations } from '../hooks/use${pascal}Mutations'

const { Title } = Typography

export default function ${pascal}CreatePage() {
  const nav = useNavigate()
  const { create } = use${pascal}Mutations()
  const [form] = Form.useForm()
  return (
    <PageWrapper>
      <Link to="/${routeSegment}">Back</Link>
      <Title level={3}>Create ${pascal}</Title>
      <Form
        form={form}
        layout="vertical"
        onFinish={async (v) => {
          const r = await create.mutateAsync(v.name)
          void nav(\`/${routeSegment}/\${r.id}\`)
        }}
      >
        <Form.Item name="name" label="Name" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Button type="primary" htmlType="submit" loading={create.isPending}>
          Create
        </Button>
      </Form>
    </PageWrapper>
  )
}
`
}

function tmplRoutes({ pascal, routeSegment, mode, lazyImportPath }) {
  if (mode === 1) {
    return `import { lazy } from 'react'
import type { RouteObject } from 'react-router-dom'
import { SuspenseWrapper } from '@/shared/router/SuspenseWrapper'

const ${pascal}ListPage = lazy(() => import('${lazyImportPath}/presentation/pages/${pascal}ListPage'))

export const ${toCamel(pascal)}ChildRoutes: RouteObject[] = [
  {
    path: '${routeSegment}',
    element: (
      <SuspenseWrapper>
        <${pascal}ListPage />
      </SuspenseWrapper>
    ),
  },
]
`
  }
  return `import { lazy } from 'react'
import type { RouteObject } from 'react-router-dom'
import { SuspenseWrapper } from '@/shared/router/SuspenseWrapper'

const ${pascal}ListPage = lazy(() => import('${lazyImportPath}/presentation/pages/${pascal}ListPage'))
const ${pascal}DetailPage = lazy(() => import('${lazyImportPath}/presentation/pages/${pascal}DetailPage'))
const ${pascal}CreatePage = lazy(() => import('${lazyImportPath}/presentation/pages/${pascal}CreatePage'))

export const ${toCamel(pascal)}ChildRoutes: RouteObject[] = [
  {
    path: '${routeSegment}',
    children: [
      {
        index: true,
        element: (
          <SuspenseWrapper>
            <${pascal}ListPage />
          </SuspenseWrapper>
        ),
      },
      {
        path: 'new',
        element: (
          <SuspenseWrapper>
            <${pascal}CreatePage />
          </SuspenseWrapper>
        ),
      },
      {
        path: ':id',
        element: (
          <SuspenseWrapper>
            <${pascal}DetailPage />
          </SuspenseWrapper>
        ),
      },
    ],
  },
]
`
}

function tmplBus({ pascal, mode, moduleNs }) {
  const list = `import { Get${pascal}ListQuery, Get${pascal}ListQueryHandler } from './application/queries/Get${pascal}ListQuery'`
  if (mode === 1) {
    return `import type { FeatureBusModule } from '@/app/composition/types'
${list}

const register: FeatureBusModule = ({ queryBus, deps }) => {
  queryBus.register(
    Get${pascal}ListQuery,
    new Get${pascal}ListQueryHandler(deps.${moduleNs}.repository)
  )
}

export default register
`
  }
  return `import type { FeatureBusModule } from '@/app/composition/types'
${list}
import { Get${pascal}ByIdQuery, Get${pascal}ByIdQueryHandler } from './application/queries/Get${pascal}ByIdQuery'
import { Create${pascal}Command, Create${pascal}CommandHandler } from './application/commands/Create${pascal}Command'
import { Update${pascal}Command, Update${pascal}CommandHandler } from './application/commands/Update${pascal}Command'

const register: FeatureBusModule = ({ commandBus, queryBus, deps }) => {
  const r = deps.${moduleNs}.repository
  queryBus
    .register(Get${pascal}ListQuery, new Get${pascal}ListQueryHandler(r))
    .register(Get${pascal}ByIdQuery, new Get${pascal}ByIdQueryHandler(r))
  commandBus
    .register(Create${pascal}Command, new Create${pascal}CommandHandler(r))
    .register(Update${pascal}Command, new Update${pascal}CommandHandler(r))
}

export default register
`
}

function tmplScaffold({ pascal, moduleNs, repoKey, repoClass, routeExport }) {
  return `# Scaffold ${pascal}

> **Lưu ý:** \`bus.module.ts\` được tải Tier 2 qua \`featureRouteLoader('${moduleNs}')\` trên route (hoặc Tier 1 nếu thêm segment vào \`CRITICAL_FIRST_SEGMENTS\` trong \`featureBusTiered.ts\`). **Build sẽ lỗi** nếu thiếu DI (bước 1–2) trong cùng commit.

## Bước gắn DI

1. \`src/app/composition/types.ts\` — thêm vào \`AppCompositionDeps\`:
   - \`${moduleNs}: { repository: I${pascal}Repository }\`

2. \`src/app/composition/AppModule.ts\` — trong \`registerCriticalModules\` / object \`deps\`:
   - \`const ${repoKey} = new ${repoClass}()\`
   - Thêm \`${moduleNs}: { repository: ${repoKey} }\`

3. Route — \`loader: featureRouteLoader('${moduleNs}')\` trên segment tương ứng (folder dưới \`features/\`, hoặc sub-path như \`van-ban-den\` nếu URL folder là \`features/.../van-ban-den/\`).

4. \`src/app/router/routes.tsx\` — import và spread routes:
   - \`import { ${routeExport} } from '...'\`
   - \`children: [ ..., ...${routeExport} ]\`

5. Tuỳ chọn: RBAC — thêm resource vào \`PermissionService\` / \`PermissionRoute\`.

6. Chỉnh API path trong \`${repoClass}\` cho khớp backend.
`
}

function generateFeatureSlice({ baseDir, domainKebab, subKebab, mode, hasShared }) {
  const apiSegment = subKebab || domainKebab
  const pascal = toPascal(subKebab || domainKebab)
  const EP = hasShared
    ? `${toPascal(domainKebab)}${toPascal(subKebab)}`
    : entityPascalFromKebab(subKebab || domainKebab)

  const relFromQueries = entityImportRelFromSubApp(hasShared, EP)
  const relFromDomainRepo = entityImportRelFromSubDomainRepo(hasShared, EP)
  const relFromInfra = entityImportRelFromSubInfra(hasShared, EP)

  const featureImportBase = `@/features/${domainKebab}${subKebab ? `/${subKebab}` : ''}`
  const lazyImportPath = featureImportBase
  const sharedEntityImport = hasShared
    ? `@/features/${domainKebab}/_shared/domain/entities/${EP}.entity`
    : null

  const routeSeg = apiSegment
  const repoClass = `${pascal}Repository`
  const repoKey = repoDepKey(pascal)
  const moduleNs = toCamelFromKebab(subKebab || domainKebab)
  const routeFileName = subKebab || domainKebab
  const routeExport = `${toCamel(pascal)}ChildRoutes`

  const entityBody = `export interface ${EP}Props {
  id: string
  name: string
  createdAt: Date
}

export class ${EP} {
  readonly id: string
  readonly name: string
  readonly createdAt: Date

  constructor(props: ${EP}Props) {
    this.id = props.id
    this.name = props.name
    this.createdAt = props.createdAt
  }
}
`
  const entityDir = hasShared
    ? path.join(SRC, 'features', domainKebab, '_shared/domain/entities')
    : path.join(baseDir, 'domain/entities')
  write(path.join(entityDir, `${EP}.entity.ts`), entityBody)

  write(
    path.join(baseDir, `domain/repositories/I${pascal}Repository.ts`),
    irepo({ entityPascal: EP, pascal, mode, relEntity: relFromDomainRepo })
  )
  write(
    path.join(baseDir, `infrastructure/repositories/${repoClass}.ts`),
    repoImpl({ pascal, entityPascal: EP, apiSegment, mode, relEntity: relFromInfra })
  )

  write(
    path.join(baseDir, `application/queries/Get${pascal}ListQuery.ts`),
    tmplGetListQuery({ pascal, entityPascal: EP, relEntity: relFromQueries })
  )
  if (mode === 2) {
    write(
      path.join(baseDir, `application/queries/Get${pascal}ByIdQuery.ts`),
      tmplGetById({ pascal, entityPascal: EP, relEntity: relFromQueries })
    )
    write(
      path.join(baseDir, `application/commands/Create${pascal}Command.ts`),
      tmplCreate({ pascal, entityPascal: EP, relEntity: relFromQueries })
    )
    write(
      path.join(baseDir, `application/commands/Update${pascal}Command.ts`),
      tmplUpdate({ pascal, entityPascal: EP, relEntity: relFromQueries })
    )
  }

  if (hasShared && sharedEntityImport) {
    write(
      path.join(baseDir, `presentation/hooks/use${pascal}List.ts`),
      tmplHookListShared({ pascal, entityPascal: EP, featureImportBase, sharedEntityImport })
    )
  } else {
    write(
      path.join(baseDir, `presentation/hooks/use${pascal}List.ts`),
      tmplHookList({ pascal, entityPascal: EP, featureImportBase })
    )
  }
  if (mode === 2) {
    write(
      path.join(baseDir, `presentation/hooks/use${pascal}Detail.ts`),
      tmplHookDetail({ pascal, entityPascal: EP, featureImportBase, sharedEntityImport })
    )
    write(
      path.join(baseDir, `presentation/hooks/use${pascal}Mutations.ts`),
      tmplHookMutations({ pascal, entityPascal: EP, featureImportBase, sharedEntityImport })
    )
  }

  write(
    path.join(baseDir, `presentation/pages/${pascal}ListPage.tsx`),
    tmplListPage({ pascal, routeSegment: routeSeg, mode })
  )
  if (mode === 2) {
    write(
      path.join(baseDir, `presentation/pages/${pascal}DetailPage.tsx`),
      tmplDetailPage({ pascal, routeSegment: routeSeg })
    )
    write(
      path.join(baseDir, `presentation/pages/${pascal}CreatePage.tsx`),
      tmplCreatePage({ pascal, routeSegment: routeSeg })
    )
  }

  write(
    path.join(baseDir, `presentation/routes/${routeFileName}.routes.tsx`),
    tmplRoutes({ pascal, routeSegment: routeSeg, mode, lazyImportPath })
  )
  write(path.join(baseDir, 'bus.module.ts'), tmplBus({ pascal, mode, moduleNs }))
  write(
    path.join(baseDir, 'SCAFFOLD.md'),
    tmplScaffold({ pascal, moduleNs, repoKey, repoClass, routeExport })
  )
}

async function main() {
  const args = parseArgs(process.argv)
  if (args.help) {
    console.log(`Usage: node scripts/create-feature.mjs [--domain kebab] [--subs a,b] [--mode 1|2]`)
    process.exit(0)
  }

  const rl = readline.createInterface({ input: process.stdin, output: process.stdout })
  let domain = args.domain
  let subsStr = args.subs
  let mode = args.mode

  if (!domain) domain = await prompt(rl, 'Domain / feature (kebab-case)', 'my-feature')
  if (subsStr === null || subsStr === undefined) {
    subsStr =
      args.domain !== null &&
      args.domain !== undefined &&
      args.mode != null &&
      !Number.isNaN(args.mode)
        ? ''
        : await prompt(rl, 'Sub-features (comma, empty = flat)', '')
  }
  if (mode == null || Number.isNaN(mode)) {
    const m = await prompt(rl, 'Mode 1=list only, 2=full CRUD', '1')
    mode = Number(m) === 2 ? 2 : 1
  }
  await rl.close()

  const subs = subsStr
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean)
  const hasShared = subs.length > 0

  if (!hasShared) {
    console.log(`\n→ Flat: features/${domain}/ (mode ${mode})\n`)
    generateFeatureSlice({
      baseDir: path.join(SRC, 'features', domain),
      domainKebab: domain,
      subKebab: null,
      mode,
      hasShared: false,
    })
  } else {
    console.log(`\n→ Bounded context: features/${domain}/ + _shared + [${subs.join(', ')}]\n`)
    write(
      path.join(SRC, 'features', domain, '_shared/index.ts'),
      `/**\n * Shared kernel cho bounded context "${domain}".\n * Entity chung, util, port dùng lại giữa các sub-feature.\n */\nexport {}\n`
    )
    for (const sub of subs) {
      generateFeatureSlice({
        baseDir: path.join(SRC, 'features', domain, sub),
        domainKebab: domain,
        subKebab: sub,
        mode,
        hasShared: true,
      })
    }
    const imports = subs
      .map((s) => {
        const pa = toPascal(s)
        return `import { ${toCamel(pa)}ChildRoutes } from '@/features/${domain}/${s}/presentation/routes/${s}.routes'`
      })
      .join('\n')
    const spreads = subs.map((s) => `...${toCamel(toPascal(s))}ChildRoutes`).join(',\n  ')
    const domainCamel = toCamel(toPascal(domain))
    write(
      path.join(SRC, 'features', domain, 'presentation', 'routes', 'index.ts'),
      `${imports}

import type { RouteObject } from 'react-router-dom'

/** Ghép routes mọi sub-feature — import một lần trong app/router/routes.tsx */
export const ${domainCamel}DomainChildRoutes: RouteObject[] = [
  ${spreads},
]
`
    )
  }

  console.log('\nDone. Mở SCAFFOLD.md trong feature và nối AppCompositionDeps + routes.\n')
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
