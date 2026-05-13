import axios, {
  type AxiosError,
  type AxiosRequestHeaders,
  type InternalAxiosRequestConfig,
} from 'axios'

export interface HttpClientAuthConfig {
  getAccessToken: () => string | null
  getRefreshToken: () => string | null
  /** Return true if a new access (and refresh) token was stored. */
  tryRefresh: () => Promise<boolean>
  /** Called when the session cannot be recovered (refresh missing/failed or auth endpoints return 401). */
  onUnauthorized: () => void
}

type RetryableRequestConfig = InternalAxiosRequestConfig & { _retry?: boolean }

let httpAuth: HttpClientAuthConfig = {
  getAccessToken: () => null,
  getRefreshToken: () => null,
  tryRefresh: async () => false,
  onUnauthorized: () => {},
}

let refreshInFlight: Promise<boolean> | null = null

function tryRefreshSingleFlight(): Promise<boolean> {
  if (!refreshInFlight) {
    refreshInFlight = httpAuth.tryRefresh().finally(() => {
      refreshInFlight = null
    })
  }
  return refreshInFlight
}

function resolveApiBaseUrl(): string {
  const raw = import.meta.env.VITE_API_BASE_URL
  const base = typeof raw === 'string' && raw.length > 0 ? raw : '/api'
  return base.replace(/\/?$/, '')
}

/**
 * POST without the apiClient interceptors — used for refresh (avoids deadlock) and similar auth calls.
 */
export async function postWithoutAuthInterceptors<TResponse>(
  path: string,
  body: unknown
): Promise<TResponse> {
  const base = resolveApiBaseUrl()
  const url = path.startsWith('http') ? path : `${base}/${path.replace(/^\//, '')}`
  const { data } = await axios.post<TResponse>(url, body, {
    headers: { 'Content-Type': 'application/json' },
    timeout: 15000,
  })
  return data
}

/**
 * Wire auth from the composition root so `shared` does not depend on feature modules.
 */
export function configureHttpClientAuth(config: HttpClientAuthConfig): void {
  httpAuth = config
}

export const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 15000,
  headers: { 'Content-Type': 'application/json' },
})

apiClient.interceptors.request.use((config) => {
  const token = httpAuth.getAccessToken()
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }

  config.headers['ngrok-skip-browser-warning'] = 'true'

  return config
})

function isAuthPublicPath(url: string): boolean {
  return url.includes('/auth/login') || url.includes('/auth/refresh')
}

apiClient.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config as RetryableRequestConfig | undefined
    const status = error.response?.status

    if (status !== 401 || !originalRequest) {
      return Promise.reject(error)
    }

    const url = String(originalRequest.url ?? '')

    if (isAuthPublicPath(url)) {
      httpAuth.onUnauthorized()
      return Promise.reject(error)
    }

    if (originalRequest._retry) {
      httpAuth.onUnauthorized()
      return Promise.reject(error)
    }

    originalRequest._retry = true

    const refreshed = await tryRefreshSingleFlight()
    if (!refreshed) {
      httpAuth.onUnauthorized()
      return Promise.reject(error)
    }

    const token = httpAuth.getAccessToken()
    if (token) {
      originalRequest.headers = originalRequest.headers ?? ({} as AxiosRequestHeaders)
      originalRequest.headers.Authorization = `Bearer ${token}`
    }

    return apiClient.request(originalRequest)
  }
)
