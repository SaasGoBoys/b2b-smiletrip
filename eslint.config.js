import js from '@eslint/js'
import boundaries from 'eslint-plugin-boundaries'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { flatConfigs } from 'eslint-plugin-import'
import simpleImportSort from 'eslint-plugin-simple-import-sort'

export default tseslint.config(
  {
    ignores: ['dist', 'public/mockServiceWorker.js', 'scripts'],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['**/*.{ts,tsx}'],
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      import: flatConfigs.recommended.plugins.import,
      'simple-import-sort': simpleImportSort,
    },
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            // ── Group 1: Node built-ins ─────────────────────────────────
            ['^node:'],

            // ── Group 2: External packages ──────────────────────────────
            // React first, then other externals
            ['^react', '^react-dom', '^react-router'],
            ['^@tanstack', '^zustand', '^zod'],
            ['^antd', '^@ant-design'],
            ['^(?!@/)\\w', '^@(?!/)'], // Tất cả packages còn lại

            // ── Group 3: App layer ──────────────────────────────────────
            // Outer-most layer — infra của app
            ['^@/app/'],

            // ── Group 4: Shared Kernel ──────────────────────────────────
            // Domain concepts dùng chung — ổn định nhất
            ['^@/shared/kernel/'],

            // ── Group 5: Shared utilities (không có domain logic) ───────
            ['^@/shared/'],

            // ── Group 6: Cross-feature imports ─────────────────────────
            // Khi feature A cần dùng gì đó của feature B
            // Nhìn thấy ngay để review kỹ hơn
            ['^@/features/(?!.*current-feature)'],

            // ── Group 7: Cùng feature — theo layer (inward dependency) ──
            // Domain → Application → Infrastructure → Presentation
            ['^@/features/.*/domain/'],
            ['^@/features/.*/application/'],
            ['^@/features/.*/infrastructure/'],
            ['^@/features/.*/presentation/'],

            // ── Group 8: Relative imports ───────────────────────────────
            // Cùng layer, cùng thư mục
            ['^\\.\\./'], // Parent directory trước
            ['^\\.\\./domain/'],
            ['^\\.\\./application/'],
            ['^\\.\\./infrastructure/'],
            ['^\\.\\./presentation/'],
            ['^\\./', '^\\.'], // Same directory cuối cùng
          ],
        },
      ],

      'simple-import-sort/exports': ['error'],

      // Không được import vòng tròn
      'import/no-cycle': ['error', { maxDepth: 3 }],

      // Không import thứ không tồn tại
      'import/no-unresolved': 'off', // Để TypeScript lo

      // Phải có newline giữa các groups
      'import/first': 'error',
      'import/newline-after-import': ['error', { count: 1 }],
      'import/no-duplicates': 'error',
    },
  },
  {
    files: ['src/**/*.{ts,tsx}'],
    plugins: {
      boundaries,
    },
    settings: {
      'boundaries/elements': [
        { type: 'app-bus-types', pattern: 'src/app/bus/types.ts', mode: 'full' },
        {
          type: 'feature-domain',
          pattern: 'src/features/*/domain/**/*',
          mode: 'full',
          capture: ['feature'],
        },
        {
          type: 'feature-application',
          pattern: 'src/features/*/application/**/*',
          mode: 'full',
          capture: ['feature'],
        },
        {
          type: 'feature-infrastructure',
          pattern: 'src/features/*/infrastructure/**/*',
          mode: 'full',
          capture: ['feature'],
        },
        {
          type: 'feature-presentation',
          pattern: 'src/features/*/presentation/**/*',
          mode: 'full',
          capture: ['feature'],
        },
        {
          type: 'feature-module',
          pattern: 'src/features/*/bus.module.ts',
          mode: 'full',
          capture: ['feature'],
        },
        {
          type: 'feature-public',
          pattern: 'src/features/*/index.ts',
          mode: 'full',
          capture: ['feature'],
        },
        { type: 'app', pattern: 'src/app/**/*', mode: 'full' },
        { type: 'shared', pattern: 'src/shared/**/*', mode: 'full' },
        { type: 'mocks', pattern: 'src/mocks/**/*', mode: 'full' },
        { type: 'config', pattern: 'src/config/**/*', mode: 'full' },
      ],
    },
    rules: {
      'boundaries/dependencies': [
        'error',
        {
          default: 'disallow',
          rules: [
            {
              from: { type: 'feature-domain' },
              allow: {
                to: [
                  {
                    type: 'feature-domain',
                    captured: { feature: '{{from.captured.feature}}' },
                  },
                  { type: 'shared' },
                ],
              },
            },
            {
              from: { type: 'feature-application' },
              allow: {
                to: [
                  {
                    type: ['feature-domain', 'feature-application'],
                    captured: { feature: '{{from.captured.feature}}' },
                  },
                  { type: ['shared', 'app-bus-types'] },
                ],
              },
            },
            {
              from: { type: 'feature-infrastructure' },
              allow: {
                to: [
                  {
                    type: ['feature-domain', 'feature-infrastructure'],
                    captured: { feature: '{{from.captured.feature}}' },
                  },
                  { type: 'shared' },
                ],
              },
            },
            {
              from: { type: 'feature-presentation' },
              allow: {
                to: [
                  {
                    type: [
                      'feature-domain',
                      'feature-application',
                      'feature-infrastructure',
                      'feature-presentation',
                    ],
                    captured: { feature: '{{from.captured.feature}}' },
                  },
                  { type: ['shared', 'app', 'app-bus-types'] },
                ],
              },
            },
            {
              from: { type: ['feature-module', 'feature-public'] },
              allow: {
                to: [
                  {
                    type: [
                      'feature-domain',
                      'feature-application',
                      'feature-infrastructure',
                      'feature-presentation',
                      'feature-module',
                      'feature-public',
                    ],
                    captured: { feature: '{{from.captured.feature}}' },
                  },
                  { type: ['shared', 'app', 'app-bus-types'] },
                ],
              },
            },
            {
              from: { type: 'app' },
              allow: {
                to: [
                  {
                    type: [
                      'feature-presentation',
                      'feature-application',
                      'feature-domain',
                      'feature-infrastructure',
                      'feature-module',
                      'feature-public',
                    ],
                  },
                  { type: ['app', 'shared', 'config'] },
                ],
              },
            },
            {
              from: { type: 'shared' },
              allow: {
                to: [
                  { type: 'shared' },
                  {
                    type: ['feature-presentation', 'feature-domain', 'feature-public'],
                    captured: { feature: 'auth' },
                  },
                ],
              },
            },
            {
              from: { type: 'mocks' },
              allow: {
                to: [{ type: ['mocks', 'shared', 'feature-domain'] }],
              },
            },
            {
              from: { type: 'config' },
              allow: {
                to: [{ type: ['config', 'shared'] }],
              },
            },
          ],
        },
      ],
    },
  },
  {
    files: [
      'src/app/router/routes.tsx',
      'src/features/**/routes/*.routes.tsx',
      'src/app/providers/ThemeProvider.tsx',
    ],
    rules: {
      'react-refresh/only-export-components': 'off',
    },
  }
)
