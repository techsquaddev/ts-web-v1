import { ts_logo } from "../assets";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`bg-white sticky z-50 mb-7 rounded-3xl transition-all duration-300 ${
        isScrolled ? "shadow-lg top-0 rounded-t-none" : "top-3"
      }`}
    >
      <div className="flex items-center justify-between py-5 px-5 ">
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <img src={ts_logo} alt="Logo" className="w-24 h-auto" />
          </a>
        </div>
        <nav className="flex items-center space-x-6">
          <a
            href="/"
            className="text-primary hover:text-black transition-colors duration-200"
          >
            Home
          </a>
          <a
            href="/about"
            className="text-primary hover:text-black transition-colors duration-200"
          >
            About
          </a>
          <a
            href="/templates"
            className="text-primary hover:text-black transition-colors duration-200"
          >
            Templates
          </a>
          <a
            href="/products"
            className="text-primary hover:text-black transition-colors duration-200"
          >
            Products
          </a>
          <a
            href="/blog"
            className="text-primary hover:text-black transition-colors duration-200"
          >
            Blog
          </a>
          <a
            href="/contact"
            className="bg-primary text-white py-2 px-4 rounded-lg hover:bg-black transition-colors duration-300"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
