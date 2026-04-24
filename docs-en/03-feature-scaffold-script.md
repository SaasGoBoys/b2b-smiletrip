# Feature Scaffold Script (`create:feature`)

## Run

```bash
npm run create:feature
# Non-interactive:
npm run create:feature -- --domain invoices --mode 2
npm run create:feature -- --domain approval --subs "incoming-documents,outgoing-documents" --mode 1
```

## Parameters

| Parameter | Meaning |
|-----------|---------|
| `--domain <kebab>` | Feature folder or bounded context name (for example `invoices`, `approval`). |
| `--subs a,b,c` | Sub-feature list. If present, creates `features/<domain>/_shared/` plus each sub-folder. If omitted, creates a flat `features/<domain>/`. |
| `--mode 1 \| 2` | `1` = list query + list page + route. `2` = includes detail/create/update flows (queries/commands/pages/nested routes). |

## What is generated?

- **Flat mode** (`--subs` omitted): `src/features/<domain>/` with domain, application, infrastructure, presentation, `bus.module.ts`, and `SCAFFOLD.md`.
- **Multi-sub mode** (`--subs` provided):
  - `features/<domain>/_shared/index.ts` placeholder
  - one feature slice per sub-folder
  - `features/<domain>/presentation/routes/index.ts` to aggregate domain child routes

For multi-sub structures, shared entities are generated under `features/<domain>/_shared/domain/entities/`.

## Required manual steps after scaffold

The script intentionally does **not** auto-edit project-level wiring files. Follow generated `SCAFFOLD.md`:

1. Add repositories to `AppCompositionDeps` and instantiate them in `AppModule.ts`.
2. Import and append feature routes in `src/app/router/routes.tsx`.
3. Update API paths in generated repository adapters to match backend endpoints.

Until dependency wiring is completed, the app may not compile because `bus.module.ts` is auto-discovered by `import.meta.glob`.

## Scale tips

- If a sub-feature has many handlers, split command/query files and keep `bus.module.ts` as a registration entrypoint.
- For new sub-features, add folder + `bus.module.ts`; glob picks it up automatically.
