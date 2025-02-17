import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en.json';
import fr from './locales/fr.json';
import ar from './locales/ar.json';

// Initialize i18next
i18n
  .use(initReactI18next) // Bind i18next to React
  .init({
    resources: {
      en: { translation: en },
      fr: { translation: fr },
      ar: { translation: ar },
    },
    lng: 'en', // Default language
    fallbackLng: 'en', // Fallback language in case the chosen language is missing
    interpolation: {
      escapeValue: false, // React already escapes values
    },
  });

export default i18n;
