import { ts_logo } from "../assets";

const Footer = () => {
  return (
    <footer className="mb-3 p-5 bg-white dark:bg-primary rounded-3xl md:py-8">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="mb-5 md:mb-0">
          <img src={ts_logo} alt="Logo" className="h-6 md:h-8" />
        </div>

        <div className="text-center mb-2 md:mb-0">
          <p className="text-sm text-primary dark:text-white">
            &copy; 2024 Your Company. All rights reserved.
          </p>
        </div>

        <div className="text-center md:text-right">
          <a
            href="/privacy-policy"
            className="text-sm text-primary dark:text-white hover:text-black transition-colors duration-200 mr-4"
          >
            Privacy Policy
          </a>
          <a
            href="/terms-of-service"
            className="text-sm text-primary dark:text-white hover:text-black transition-colors duration-200"
          >
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
