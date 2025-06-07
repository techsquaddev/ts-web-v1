import { ts_logo, ts_logo_white } from "../assets";
import { useState, useEffect } from "react";
import DarkModeToggle from "./DarkModeToggle";
import LanguageSelector from "./LanguageSelector";
import { useTranslation } from "react-i18next";
import { Menu } from "@mui/icons-material";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`bg-white dark:bg-primary sticky z-50 mb-7 rounded-3xl transition-all duration-300 ${
        isScrolled ? "shadow-lg top-0 rounded-t-none" : "top-3"
      }`}
    >
      <div className="flex items-center justify-between py-5 px-5 ">
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <img src={ts_logo} alt="Logo" className="w-24 h-auto dark:hidden" />
            <img
              src={ts_logo_white}
              alt="Logo"
              className="w-24 h-auto hidden dark:block"
            />
          </a>
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          <a
            href="/"
            className="text-primary dark:text-bg hover:text-black dark:hover:text-accent transition-colors duration-200"
          >
            {t("navbar.home")}
          </a>
          <a
            href="#about"
            className="text-primary dark:text-bg hover:text-black dark:hover:text-accent transition-colors duration-200"
          >
            {t("navbar.about")}
          </a>
          <a
            href="#templates"
            className="text-primary dark:text-bg hover:text-black dark:hover:text-accent transition-colors duration-200"
          >
            {t("navbar.templates")}
          </a>
          <a
            href="#products"
            className="text-primary dark:text-bg hover:text-black dark:hover:text-accent transition-colors duration-200"
          >
            {t("navbar.products")}
          </a>
          <a
            href="#tech"
            className="text-primary dark:text-bg hover:text-black dark:hover:text-accent transition-colors duration-200"
          >
            Tech
          </a>
          <a
            href="#blog"
            className="text-primary dark:text-bg hover:text-black dark:hover:text-accent transition-colors duration-200"
          >
            {t("navbar.blog")}
          </a>
          <DarkModeToggle />
          <LanguageSelector />
          <a
            href="#contact"
            className="bg-primary dark:bg-secondary text-white font-semibold py-2 px-4 rounded-lg hover:bg-black dark:hover:bg-accent dark:hover:text-black transition-colors duration-300"
          >
            {t("navbar.contact")}
          </a>
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger>
              <Menu className="w-6 h-6 text-primary dark:text-bg" />
            </SheetTrigger>
            <SheetContent
              side="left"
              className="text-left bg-white dark:bg-primary border-none rounded-r-2xl"
            >
              <div className="flex items-center mb-7 mt-2">
                <a href="/" className="flex items-center">
                  <img
                    src={ts_logo}
                    alt="Logo"
                    className="w-20 h-auto dark:hidden"
                  />
                  <img
                    src={ts_logo_white}
                    alt="Logo"
                    className="w-20 h-auto hidden dark:block"
                  />
                </a>
              </div>
              <SheetHeader className="text-left">
                <SheetTitle className="text-black dark:text-white">
                  Menu
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col space-y-4 mt-5">
                <a href="/" className="text-primary dark:text-bg">
                  {t("navbar.home")}
                </a>
                <a href="#about" className="text-primary dark:text-bg">
                  {t("navbar.about")}
                </a>
                <a href="#templates" className="text-primary dark:text-bg">
                  {t("navbar.templates")}
                </a>
                <a href="#products" className="text-primary dark:text-bg">
                  {t("navbar.products")}
                </a>
                <a href="#blog" className="text-primary dark:text-bg">
                  {t("navbar.blog")}
                </a>
                <div className="flex items-center gap-5">
                  <DarkModeToggle />
                  <LanguageSelector />
                </div>
                <a
                  href="#contact"
                  className="bg-primary w-fit dark:bg-secondary text-white font-semibold py-2 px-6 rounded-lg hover:bg-black dark:hover:bg-accent dark:hover:text-black transition-colors duration-300"
                >
                  {t("navbar.contact")}
                </a>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
