export function formatDate(value: Date | string, locale = 'vi-VN'): string {
  const d = typeof value === 'string' ? new Date(value) : value
  return new Intl.DateTimeFormat(locale, {
    dateStyle: 'medium',
    timeStyle: 'short',
  }).format(d)
}
