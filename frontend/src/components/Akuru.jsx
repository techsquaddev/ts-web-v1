import React from "react";
import { akuru, akuru_bg } from "../assets";
import { Trans, useTranslation } from "react-i18next";

const Akuru = () => {
  const { t } = useTranslation();
  const { title, description, button } = t("akuru");
  return (
    <div
      id="about"
      className="relative mt-5 p-5 w-full bg-[#0D0D0D] bg-cover bg-center rounded-3xl md:p-10"
      style={{ backgroundImage: `url(${akuru_bg})` }}
    >
      <div className="absolute rounded-3xl inset-0 bg-gradient-to-t from-[#0D0D0D] to-transparent"></div>

      <div className="relative flex flex-col lg:flex-row items-center justify-between lg:gap-20">
        <div className="lg:w-3/5 text-center lg:text-left">
          <h2 className="text-3xl font-bold text-white mb-5 pt-4 md:p-0">
            {title}
          </h2>
          <p className="text-base text-soft-gray mb-6">
            <Trans
              i18nKey={description}
              components={{
                1: <span className="bg-accent text-primary rounded"></span>,
              }}
            />
          </p>
          <a
            href="https://www.akuru.net/"
            rel="noopener noreferrer"
            target="_blank"
            className="inline-block border-2 border-border px-6 py-2 text-white text-base font-semibold rounded-lg hover:bg-secondary transition-colors duration-300"
          >
            {button}
          </a>
        </div>
        <div className="lg:w-2/5 mt-5 lg:mt-0 flex justify-end">
          <img
            src={akuru}
            alt="Modern website header image"
            className="w-full max-w-sm rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Akuru;
