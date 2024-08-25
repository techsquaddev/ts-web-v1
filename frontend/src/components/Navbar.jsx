import { ts_logo, ts_logo_white } from "../assets";
import { useState, useEffect } from "react";
import DarkModeToggle from "./DarkModeToggle";
import LanguageSelector from "./LanguageSelector";
import { useTranslation } from "react-i18next";

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
        <nav className="flex items-center space-x-6">
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
      </div>
    </header>
  );
};

export default Navbar;
