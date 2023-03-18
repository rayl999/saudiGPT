import i18n from "i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import enTrans from "./locales/en/translation.json";
import arTrans from "./locales/ar/translation.json";

i18n
  // load translation using http -> see /public/locales
  // learn more: https://github.com/i18next/i18next-http-backend
  .use(Backend)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  // .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    fallbackLng: "en",

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: { translation: enTrans },
      ar: { translation: arTrans },
    },
    // backend: {

    //   referenceLng: 'en',

    //   projectId: "c5b7da9c-05cb-46e9-a873-867174523851",
    //   apiKey : "723eef2e-999d-4db2-bae7-c65173d147a0"
    // }
  });

export default i18n;
