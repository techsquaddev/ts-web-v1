import React from "react";
import { useTranslation } from "react-i18next";

const languages = [
  { code: "en", lng: "English" },
  { code: "si", lng: "Sinhala" },
];

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex gap-2">
      {languages.map((lng) => {
        return (
          <button
            className={`py-1 px-3 bg-accent rounded-md ${
              lng.code === i18n.language ? "bg-primary text-white" : ""
            }`}
            key={lng.code}
            onClick={() => changeLanguage(lng.code)}
          >
            {lng.lng}
          </button>
        );
      })}
    </div>
  );
};

export default LanguageSelector;
