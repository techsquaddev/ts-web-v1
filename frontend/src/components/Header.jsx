import { useTranslation } from "react-i18next";
import { about, header_dark, header_light } from "../assets";

const Header = () => {
  const { t } = useTranslation();
  const { title, description, button } = t("header");
  return (
    <header className="p-5 bg-white dark:bg-primary rounded-3xl md:p-10">
      <div className="flex flex-col lg:flex-row items-center justify-between">
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 pt-4 md:p-0">
            {title}✌️
          </h1>
          <p className="text-base text-secondary dark:text-soft-gray mb-6">
            {description} ✨
          </p>
          <a
            href="#get-started"
            className="inline-block px-8 py-3 bg-accent text-black text-lg font-semibold rounded-lg hover:bg-primary dark:hover:bg-secondary hover:text-white transition-colors duration-300"
          >
            {button}
          </a>
        </div>
        <div className="lg:w-1/2 mt-8 lg:mt-0 flex justify-center">
          <img
            src={header_light}
            alt="Modern website header image"
            className="w-full max-w-sm dark:hidden"
          />
          <img
            src={header_dark}
            alt="Modern website header image"
            className="hidden w-full max-w-sm dark:block"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
