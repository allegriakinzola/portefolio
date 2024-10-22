import React, { useState } from "react";

const Navbar = () => {
  // State to track whether the mobile menu is open
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the mobile menu open/close
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="shadow-lg pt-10 bg-black">
      <div className="container mx-auto flex bg-black border-4  rounded-full fixed top-4 left-0 right-0 z-50 justify-between items-center" style={{ borderColor: 'rgba(255, 255, 255, 0.3)' }}>
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <span className="text-white text-2xl font-bold">AK</span>
        </div>

        {/* Links - Hidden on mobile and visible on larger screens */}
        <ul className="hidden md:flex space-x-8 text-white">
          <li><a href="#" className="hover:text-gray-300">Features</a></li>
          <li><a href="#" className="hover:text-gray-300">Pricing</a></li>
          <li><a href="#" className="hover:text-gray-300">Blog</a></li>
          <li><a href="#" className="hover:text-gray-300">Contact</a></li>
        </ul>

        {/* Buttons - Hidden on mobile and visible on larger screens */}
        <div className="hidden md:flex items-center space-x-4">
          <a href="#" className="text-white font-bold border border-white py-2 px-4 rounded hover:bg-gray-700">
            Register
          </a>
          <a href="#" className="bg-blue-400 text-white font-bold py-2 px-4 rounded hover:bg-blue-500">
            Book a demo
          </a>
        </div>

        {/* Mobile Menu (hamburger button) */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            {isOpen ? (
              // Close icon when the menu is open
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            ) : (
              // Hamburger icon when the menu is closed
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-16 6h16"
                ></path>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu (Dropdown) */}
      {isOpen && (
        <div className="md:hidden fixed z-50 bg-black top-0 left-0 right-0 bottom-0">
          <ul className="space-y-4 text-white text-center bg-[#2e2c24] py-4">
            <li><a href="#" className="block hover:text-gray-300">Features</a></li>
            <li><a href="#" className="block hover:text-gray-300">Pricing</a></li>
            <li><a href="#" className="block hover:text-gray-300">Blog</a></li>
            <li><a href="#" className="block hover:text-gray-300">Contact</a></li>
            <li>
              <a
                href="#"
                className="block bg-white text-black font-bold py-2 px-4 rounded hover:bg-gray-200"
              >
                Register
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block bg-blue-400 text-white font-bold py-2 px-4 rounded hover:bg-blue-500"
              >
                Book a demo
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
