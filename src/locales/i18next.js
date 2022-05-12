import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';


import LanguageDetector from 'i18next-browser-languagedetector';

import PTBR from './pt/pt-br.json'
import ENUS from './en/en-us.json'

const resources = {
  'pt-BR' : PTBR,
  'en-us' : ENUS
}


i18n

  .use(LanguageDetector)
  .use(initReactI18next)

  .init({
    resources,
    lng:navigator.language,
    fallbackLng: 'pt-BR',
    debug: true,
    interpolation: {
      escapeValue: false, 
    }
  });


export default i18n;