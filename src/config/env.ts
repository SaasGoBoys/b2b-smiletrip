const getEnvVar = (key: keyof ImportMetaEnv): string => {
  const value = import.meta.env[key]
  if (value === undefined || value === '') {
    throw new Error(`Missing env variable: ${String(key)}`)
  }
  return value
}

export const config = {
  apiBaseUrl: getEnvVar('VITE_API_BASE_URL'),
  appName: import.meta.env.VITE_APP_NAME ?? 'My App',
  isDevelopment: import.meta.env.DEV,
  isProduction: import.meta.env.PROD,
} as const
