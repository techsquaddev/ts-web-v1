import { useTranslation } from "react-i18next";
import { contact } from "../assets";
import ContactForm from "./ContactForm";
import { Facebook, LinkedIn, WhatsApp } from "@mui/icons-material";

const Contact = () => {
  const { t } = useTranslation();
  return (
    <section
      id="contact"
      className="my-7 p-5 bg-white dark:bg-primary rounded-3xl md:p-10"
    >
      <div className="flex flex-col lg:flex-row items-center lg:items-start">
        <div className="w-full lg:w-2/5 mb-8 lg:mb-0">
          <ContactForm />
        </div>
        <div className="w-full lg:w-3/5 lg:pl-12 flex flex-col items-center lg:items-start text-center lg:text-left">
          <img
            src={contact}
            alt="Contact Us"
            className="w-full h-64 object-cover rounded-xl mb-6"
          />
          <h2 className="text-2xl font-semibold mb-4 dark:text-white">
            {t("contact.contact")}
          </h2>
          <p className="text-secondary dark:text-soft-gray mb-5">
            {t("contact.description")}
          </p>
          <div className="flex items-center space-x-3">
            <a href="https://wa.me/1XXXXXXXXXX">
              <button className="flex items-center gap-1.5 py-2 px-3 text-white font-semibold bg-[#25D366] hover:bg-[#128c7e] rounded-lg transition-colors duration-200">
                <WhatsApp fontSize="medium" className="" />
                WhatsApp
              </button>
            </a>
            <a
              href="#"
              className="text-primary dark:text-soft-gray hover:text-indigo-600"
            >
              <Facebook
                fontSize="string"
                className="rounded-full text-4xl bg-soft-gray dark:bg-secondary p-1.5"
              />
            </a>
            <a
              href="#"
              className="text-primary dark:text-soft-gray hover:text-indigo-600"
            >
              <LinkedIn
                fontSize="string"
                className="rounded-full text-4xl bg-soft-gray dark:bg-secondary p-1.5"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
