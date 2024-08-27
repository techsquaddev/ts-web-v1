import { useTranslation } from "react-i18next";
import { contact } from "../assets";
import ContactForm from "./ContactForm";
import { Facebook, LinkedIn } from "@mui/icons-material";

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
          <p className="text-secondary dark:text-soft-gray mb-6">
            {t("contact.description")}
          </p>
          <div className="flex space-x-3">
            <a
              href="#"
              className="text-primary text-4xl dark:text-soft-gray hover:text-indigo-600"
            >
              <Facebook
                fontSize="inherit"
                className="rounded-full bg-soft-gray dark:bg-secondary p-1.5"
              />
            </a>
            <a
              href="#"
              className="text-primary text-4xl dark:text-soft-gray hover:text-indigo-600"
            >
              <LinkedIn
                fontSize="inherit"
                className="rounded-full bg-soft-gray dark:bg-secondary p-1.5"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
