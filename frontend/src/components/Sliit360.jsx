import React from "react";
import { sliit360, sliit360_bg } from "../assets";
import { Trans, useTranslation } from "react-i18next";

const Sliit360 = () => {
  const { t } = useTranslation();
  const { title, description, button } = t("sliit360");
  return (
    <div
      id="about"
      className="relative mt-7 p-5 w-full bg-[#00045B] bg-cover bg-center rounded-3xl md:p-10"
      style={{ backgroundImage: `url(${sliit360_bg})` }}
    >
      <div className="absolute rounded-3xl inset-0 bg-gradient-to-t from-[#00045B] to-transparent"></div>

      <div className="relative flex flex-col lg:flex-row items-center justify-between lg:gap-20">
        <div className="lg:w-2/5 lg:mt-0 flex justify-start">
          <img
            src={sliit360}
            alt="Modern website header image"
            className="w-full max-w-sm rounded-xl"
          />
        </div>
        <div className="lg:w-3/5 text-center lg:text-left">
          <h2 className="text-3xl font-bold text-white mb-5 pt-4 md:p-0">
            {title}
          </h2>
          <p className="text-base text-zinc-200 mb-6">
            <Trans
              i18nKey={description}
              components={{
                1: <span className="bg-accent text-primary rounded"></span>,
              }}
            />
          </p>
          <a
            href="https://sliit360.me/"
            rel="noopener noreferrer"
            target="_blank"
            className="inline-block border-2 border-[#F2B33D] px-6 py-2 text-white text-base font-semibold rounded-lg hover:bg-[#003585] transition-colors duration-300"
          >
            {button}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sliit360;
