import React from "react";
import { useTranslation } from "react-i18next";

const ContactForm = () => {
  const { t } = useTranslation();
  const { form, name, email, message } = t("contact");
  return (
    <form className="bg-white dark:bg-secondary shadow-lg rounded-xl p-8">
      <h2 className="text-2xl font-bold text-black dark:text-white mb-6">
        {form}
      </h2>
      <div className="mb-4">
        <label
          htmlFor="name"
          className="block text-sm font-medium text-primary dark:text-soft-gray"
        >
          {name}
        </label>
        <input
          type="text"
          id="name"
          className="mt-1 p-2 block w-full border border-border dark:bg-secondary dark:text-white rounded-md shadow-sm focus:ring-secondary focus:border-secondary"
          placeholder="Your Name"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-primary dark:text-soft-gray"
        >
          {email}
        </label>
        <input
          type="email"
          id="email"
          className="mt-1 p-2 block w-full border border-border dark:bg-secondary dark:text-white  rounded-md shadow-sm focus:ring-secondary focus:border-secondary"
          placeholder="you@example.com"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="message"
          className="block text-sm font-medium text-primary dark:text-soft-gray"
        >
          {message}
        </label>
        <textarea
          id="message"
          rows="4"
          className="mt-1 p-2 block w-full border border-border dark:bg-secondary dark:text-white  rounded-md shadow-sm focus:ring-secondary focus:border-secondary"
          placeholder="Your message"
        />
      </div>
      <button
        type="submit"
        className="w-full py-2 px-4 bg-accent text-lg font-semibold text-black rounded-md transition-colors duration-200 hover:bg-primary hover:text-white"
      >
        {form}
      </button>
    </form>
  );
};

export default ContactForm;
