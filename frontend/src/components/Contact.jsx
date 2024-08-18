import { contact } from "../assets";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section className="my-7 p-5 bg-white rounded-3xl md:p-10">
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
          <h2 className="text-2xl font-semibold mb-4">Let's Connect</h2>
          <p className="text-gray-700 mb-6">
            We're here to help and answer any questions you might have. Reach
            out to us on our facebook page or send us a message using the
            contact form.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-600 hover:text-indigo-600">
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2.04c-5.52 0-10 4.48-10 10a10 10 0 0014.1 9.22c.75.14 1.02-.33 1.02-.73 0-.36-.01-1.31-.02-2.57-4.2.91-5.08-1.69-5.08-1.69-.68-1.74-1.65-2.21-1.65-2.21-1.35-.92.1-.9.1-.9 1.5.1 2.29 1.54 2.29 1.54 1.32 2.27 3.45 1.62 4.29 1.24.13-.95.51-1.62.92-1.99-3.35-.38-6.88-1.67-6.88-7.43 0-1.64.58-2.98 1.54-4.03-.15-.38-.67-1.91.15-3.99 0 0 1.27-.4 4.15 1.54 1.21-.34 2.51-.51 3.8-.51 1.29 0 2.59.17 3.8.51 2.88-1.94 4.15-1.54 4.15-1.54.82 2.08.3 3.61.15 3.99.96 1.05 1.54 2.39 1.54 4.03 0 5.79-3.53 7.04-6.89 7.42.53.45 1.01 1.34 1.01 2.71 0 1.96-.02 3.54-.02 4.02 0 .4.27.88 1.03.73a10.01 10.01 0 004.87-8.62c0-5.52-4.48-10-10-10z" />
              </svg>
            </a>
            <a href="#" className="text-gray-600 hover:text-indigo-600">
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2.04c-5.52 0-10 4.48-10 10a10 10 0 0014.1 9.22c.75.14 1.02-.33 1.02-.73 0-.36-.01-1.31-.02-2.57-4.2.91-5.08-1.69-5.08-1.69-.68-1.74-1.65-2.21-1.65-2.21-1.35-.92.1-.9.1-.9 1.5.1 2.29 1.54 2.29 1.54 1.32 2.27 3.45 1.62 4.29 1.24.13-.95.51-1.62.92-1.99-3.35-.38-6.88-1.67-6.88-7.43 0-1.64.58-2.98 1.54-4.03-.15-.38-.67-1.91.15-3.99 0 0 1.27-.4 4.15 1.54 1.21-.34 2.51-.51 3.8-.51 1.29 0 2.59.17 3.8.51 2.88-1.94 4.15-1.54 4.15-1.54.82 2.08.3 3.61.15 3.99.96 1.05 1.54 2.39 1.54 4.03 0 5.79-3.53 7.04-6.89 7.42.53.45 1.01 1.34 1.01 2.71 0 1.96-.02 3.54-.02 4.02 0 .4.27.88 1.03.73a10.01 10.01 0 004.87-8.62c0-5.52-4.48-10-10-10z" />
              </svg>
            </a>
            <a href="#" className="text-gray-600 hover:text-indigo-600">
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2.04c-5.52 0-10 4.48-10 10a10 10 0 0014.1 9.22c.75.14 1.02-.33 1.02-.73 0-.36-.01-1.31-.02-2.57-4.2.91-5.08-1.69-5.08-1.69-.68-1.74-1.65-2.21-1.65-2.21-1.35-.92.1-.9.1-.9 1.5.1 2.29 1.54 2.29 1.54 1.32 2.27 3.45 1.62 4.29 1.24.13-.95.51-1.62.92-1.99-3.35-.38-6.88-1.67-6.88-7.43 0-1.64.58-2.98 1.54-4.03-.15-.38-.67-1.91.15-3.99 0 0 1.27-.4 4.15 1.54 1.21-.34 2.51-.51 3.8-.51 1.29 0 2.59.17 3.8.51 2.88-1.94 4.15-1.54 4.15-1.54.82 2.08.3 3.61.15 3.99.96 1.05 1.54 2.39 1.54 4.03 0 5.79-3.53 7.04-6.89 7.42.53.45 1.01 1.34 1.01 2.71 0 1.96-.02 3.54-.02 4.02 0 .4.27.88 1.03.73a10.01 10.01 0 004.87-8.62c0-5.52-4.48-10-10-10z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
