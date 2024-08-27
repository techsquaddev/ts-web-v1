import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import enLang from "./locales/en/home.json";
import siLang from "./locales/si/home.json";

const resources = {
  en: {
    translation: enLang,
  },
  si: {
    translation: siLang,
  },
};

i18n.use(LanguageDetector).use(initReactI18next).init({
  resources,
  debug: true,
  fallbackLng: "en",
  returnObjects: true,
});
