import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import Backend from 'i18next-http-backend'
import { initReactI18next } from 'react-i18next'

export const i18nInstance = i18n
  .use(LanguageDetector)
  .use(Backend)
  .use(initReactI18next)
  .init({
    fallbackLng: ['en', 'ru'],
    ns: ['translation', 'validation'],
    defaultNS: 'translation',
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['querystring', 'cookie'],
    },
    react: {
      useSuspense: true,
    },
    returnNull: false,
  })
