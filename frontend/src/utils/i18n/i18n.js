import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import enHome from "./locales/en/home.json";
import siHome from "./locales/si/home.json";

const resources = {
  en: {
    home: enHome,
  },
  si: {
    home: siHome,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    debug: false,
    fallbackLng: "en",
    defaultNS: "home",
    ns: ["home"],
    returnObjects: true,
  });
