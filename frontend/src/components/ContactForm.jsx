import React from "react";

const ContactForm = () => {
  return (
    <form className="bg-white shadow-lg rounded-xl p-8">
      <h2 className="text-2xl font-semibold text-black mb-6">Get in Touch</h2>
      <div className="mb-4">
        <label
          htmlFor="name"
          className="block text-sm font-medium text-primary"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          className="mt-1 p-2 block w-full border border-border rounded-md shadow-sm focus:ring-secondary focus:border-secondary"
          placeholder="Your Name"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-primary"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          className="mt-1 p-2 block w-full border border-border rounded-md shadow-sm focus:ring-secondary focus:border-secondary"
          placeholder="you@example.com"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="message"
          className="block text-sm font-medium text-primary"
        >
          Message
        </label>
        <textarea
          id="message"
          rows="4"
          className="mt-1 p-2 block w-full border border-border rounded-md shadow-sm focus:ring-secondary focus:border-secondary"
          placeholder="Your message"
        />
      </div>
      <button
        type="submit"
        className="w-full py-2 px-4 bg-accent text-lg font-semibold text-black rounded-md transition-colors duration-200 hover:bg-primary hover:text-white"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
