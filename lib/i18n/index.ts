"use client"

import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import enCommon from './locales/en/common.json'
import amCommon from './locales/am/common.json'
import omCommon from './locales/om/common.json'
import tgCommon from './locales/tg/common.json'

const savedLanguage = localStorage.getItem('lambadina_i18nextLgn') || 'en'

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources: {
      en: {
        translation: enCommon
      },
      am: {
        translation: amCommon
      },
      om: {
        translation: omCommon
      },
      tg: {
        translation: tgCommon
      }
    },
    lng: savedLanguage, // if you're using a language detector, do not define the lng option
    fallbackLng: "en",
    interpolation: {
      escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    }
  });

export default i18n;