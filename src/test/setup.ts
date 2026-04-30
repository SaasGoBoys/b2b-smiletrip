import { afterAll, afterEach, beforeAll } from 'vitest'

import '@testing-library/jest-dom/vitest'
import { resetMockUsersDb } from '@/mocks/data/users'
import { server } from '@/mocks/server'

beforeAll(() => {
  server.listen({ onUnhandledRequest: 'bypass' })
})

afterEach(() => {
  server.resetHandlers()
  resetMockUsersDb()
})

afterAll(() => {
  server.close()
})
