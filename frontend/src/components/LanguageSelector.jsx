import React from "react";
import { useTranslation } from "react-i18next";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const languages = [
  { code: "en", lng: "English" },
  { code: "si", lng: "සිංහල" },
];

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex gap-2">
      <DropdownMenu>
        <DropdownMenuTrigger>Open</DropdownMenuTrigger>
        <DropdownMenuContent className="bg-white border-none flex flex-col gap-1">
          <DropdownMenuLabel>Languages</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {languages.map((lng) => {
            return (
              <DropdownMenuItem
                className={`cursor-pointer rounded-md ${
                  lng.code === i18n.language ? "bg-primary text-white" : ""
                }`}
                key={lng.code}
                onClick={() => changeLanguage(lng.code)}
              >
                {lng.lng}
              </DropdownMenuItem>
            );
          })}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default LanguageSelector;
