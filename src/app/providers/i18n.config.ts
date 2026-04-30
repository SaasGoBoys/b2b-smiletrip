import { initReactI18next } from 'react-i18next'

import i18n from 'i18next'
import HttpBackend from 'i18next-http-backend'

void i18n
  .use(HttpBackend)
  .use(initReactI18next)
  .init({
    lng: 'vi',
    fallbackLng: 'vi',
    supportedLngs: ['vi', 'ja', 'fr', 'en'],
    defaultNS: 'common',
    ns: ['common', 'auth', 'users', 'dashboard'],
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
    interpolation: {
      escapeValue: false,
    },
  })

export default i18n
