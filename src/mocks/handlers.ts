import { http, HttpResponse } from 'msw'
import { UserRoles, toUserRole } from '@/shared/types/user-role'
import {
  buildMockLoginUser,
  createMockUser,
  getMockUserById,
  listMockUsers,
  updateMockUser,
} from './data/users'

function getApiOrigin(): string {
  const base =
    typeof import.meta.env.VITE_API_BASE_URL === 'string' && import.meta.env.VITE_API_BASE_URL
      ? import.meta.env.VITE_API_BASE_URL
      : 'http://localhost:3000/api'
  return `${base.replace(/\/?$/, '/')}`
}

function getLoginUrl(): string {
  return new URL('auth/login', getApiOrigin()).toString()
}

function getRefreshUrl(): string {
  return new URL('auth/refresh', getApiOrigin()).toString()
}

function getUsersUrl(): string {
  return new URL('users', getApiOrigin()).toString()
}

function getUserByIdUrl(): string {
  return new URL('users/:id', getApiOrigin()).toString()
}

export const handlers = [
  http.post(getLoginUrl(), async ({ request }) => {
    const body = (await request.json()) as { email?: string; password?: string }
    const email = body.email ?? ''

    if (!email) {
      return HttpResponse.json({ message: 'Email is required' }, { status: 400 })
    }

    return HttpResponse.json({
      user: buildMockLoginUser(email),
      accessToken: 'mock-access-token',
      refreshToken: 'mock-refresh-token',
    })
  }),

  http.post(getRefreshUrl(), async ({ request }) => {
    const body = (await request.json()) as { refreshToken?: string }
    if (body.refreshToken === 'mock-refresh-token') {
      return HttpResponse.json({
        accessToken: 'mock-access-token-refreshed',
        refreshToken: 'mock-refresh-token-next',
      })
    }
    return HttpResponse.json({ message: 'Invalid refresh token' }, { status: 401 })
  }),

  http.get(getUsersUrl(), ({ request }) => {
    const url = new URL(request.url)
    const search = url.searchParams.get('search') ?? ''
    const roleRaw = url.searchParams.get('role')
    const page = Number(url.searchParams.get('page') ?? '1')
    const pageSize = Number(url.searchParams.get('pageSize') ?? '10')
    const role =
      roleRaw &&
      Object.values(UserRoles).includes(roleRaw as (typeof UserRoles)[keyof typeof UserRoles])
        ? toUserRole(roleRaw)
        : null

    return HttpResponse.json(
      listMockUsers({
        search,
        role,
        page: Number.isFinite(page) ? page : 1,
        pageSize: Number.isFinite(pageSize) ? pageSize : 10,
      })
    )
  }),

  http.get(getUserByIdUrl(), ({ params }) => {
    const id = String(params.id ?? '')
    const user = getMockUserById(id)
    if (!user) {
      return HttpResponse.json({ message: 'User not found' }, { status: 404 })
    }
    return HttpResponse.json(user)
  }),

  http.post(getUsersUrl(), async ({ request }) => {
    const body = (await request.json()) as { email?: string; fullName?: string; role?: string }
    if (!body.email || !body.fullName || !body.role) {
      return HttpResponse.json(
        { message: 'email, fullName and role are required' },
        { status: 400 }
      )
    }
    if (
      !Object.values(UserRoles).includes(body.role as (typeof UserRoles)[keyof typeof UserRoles])
    ) {
      return HttpResponse.json({ message: 'Invalid role' }, { status: 400 })
    }

    const created = createMockUser({
      email: body.email,
      fullName: body.fullName,
      role: toUserRole(body.role),
    })
    return HttpResponse.json(created, { status: 201 })
  }),

  http.patch(getUserByIdUrl(), async ({ params, request }) => {
    const id = String(params.id ?? '')
    const body = (await request.json()) as { email?: string; fullName?: string; role?: string }

    if (
      body.role !== undefined &&
      !Object.values(UserRoles).includes(body.role as (typeof UserRoles)[keyof typeof UserRoles])
    ) {
      return HttpResponse.json({ message: 'Invalid role' }, { status: 400 })
    }

    const updated = updateMockUser(id, {
      ...(body.email !== undefined ? { email: body.email } : {}),
      ...(body.fullName !== undefined ? { fullName: body.fullName } : {}),
      ...(body.role !== undefined ? { role: toUserRole(body.role) } : {}),
    })
    if (!updated) {
      return HttpResponse.json({ message: 'User not found' }, { status: 404 })
    }
    return HttpResponse.json(updated)
  }),
]
