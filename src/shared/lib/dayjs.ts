import dayjs from 'dayjs'

import 'dayjs/locale/vi'
import 'dayjs/locale/en'

/** Ant Design date pickers work best with a configured dayjs instance. */
export function configureDayjsLocale(locale: string) {
  const lng = locale.startsWith('vi') ? 'vi' : 'en'
  dayjs.locale(lng)
}

export { dayjs }
