import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import tr from './locales/tr.translation.json';

i18n.use(initReactI18next).init({
  lng: 'tr',
  fallbackLng: 'tr',
  resources: {
    tr: {
      translation: tr,
    },
  },
  debug: false,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
