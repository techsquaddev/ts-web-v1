import { about } from "../assets";

const Header = () => {
  return (
    <header className="p-5 bg-white rounded-3xl md:p-10">
      <div className="flex flex-col lg:flex-row items-center justify-between">
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl font-bold text-black mb-4 pt-4 md:p-0">
            Welcome to TechSquad
          </h1>
          <p className="text-base text-secondary mb-6">
            Discover our range of products and templates designed to bring you
            the best experience.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-accent text-black text-lg font-semibold rounded-lg hover:bg-primary hover:text-white transition-colors duration-300"
          >
            Get Started
          </a>
        </div>
        <div className="lg:w-1/2 mt-8 lg:mt-0 flex justify-center">
          <img
            src={about}
            alt="Modern website header image"
            className="w-full max-w-sm"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
