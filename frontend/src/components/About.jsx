import React from "react";
import { about, about_dark, about_light } from "../assets";
import { Trans, useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  const { title, description, button } = t("about");
  return (
    <div
      id="about"
      className="mt-7 p-5 bg-white dark:bg-primary rounded-3xl md:p-10"
    >
      <div className="flex flex-col lg:flex-row items-center justify-between lg:gap-20">
        <div className="lg:w-2/5 p-5 mt-8 lg:mt-0 flex justify-end">
          <img
            src={about_light}
            alt="Modern website header image"
            className="w-full max-w-sm dark:hidden"
          />
          <img
            src={about_dark}
            alt="Modern website header image"
            className="hidden w-full max-w-sm dark:block"
          />
        </div>
        <div className="lg:w-3/5 text-center lg:text-left">
          <h2 className="text-2xl text-gray-900 dark:text-white font-bold mb-8 md:text-3xl">
            {title}
          </h2>
          <p className="text-base text-secondary dark:text-zinc-200 mb-6">
            <Trans
              i18nKey={description}
              components={{
                1: <span className="bg-accent text-primary rounded"></span>,
              }}
            />
          </p>
          <a
            href="#"
            target="_blank"
            className="inline-block border border-primary dark:border-border px-6 py-2 text-black dark:text-white text-base font-semibold rounded-lg hover:bg-primary dark:hover:bg-secondary hover:text-white transition-colors duration-300"
          >
            {button}
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
