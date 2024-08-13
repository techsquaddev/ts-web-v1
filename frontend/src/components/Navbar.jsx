import React from "react";

const Navbar = () => {
  return (
    <header className="bg-white rounded-3xl sticky top-3 z-50">
      <div className="flex items-center justify-between py-4 px-6 ">
        <div className="flex items-center">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img src="/ts.svg" alt="Logo" className="h-8 w-8" />
            <span className="ml-2 text-xl text-primary">TechSquad</span>
          </a>
        </div>
        {/* Navigation */}
        <nav className="flex items-center space-x-6">
          <a href="/" className="text-primary hover:text-[#000000]">
            Home
          </a>
          <a href="/about" className="text-primary hover:text-[#000000]">
            About
          </a>
          <a href="/templates" className="text-primary hover:text-[#000000]">
            Templates
          </a>
          <a href="/products" className="text-primary hover:text-[#000000]">
            Products
          </a>
          <a href="/blog" className="text-primary hover:text-[#000000]">
            Blog
          </a>
          {/* Contact Button */}
          <a
            href="/contact"
            className="bg-primary text-white py-2 px-4 rounded-lg hover:bg-[#000000] transition-colors duration-300"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
