import React, { useState } from "react";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(null);

  const toggleDropdown = (menu) => {
    setDropdown(dropdown === menu ? null : menu);
  };

  return (
    <nav className="w-full  text-white">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="text-lg font-bold">
        <video 
  src="./Images/v2.mp4" 
  className="loop w-28 h-20" 
  // controls 
  autoPlay 
  loop 
  muted
></video>

        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8 ">
          <div className="relative group">
            <button
              className="hover:text-gray-400"
              aria-haspopup="true"
              aria-expanded={dropdown === "services"}
              onMouseEnter={() => toggleDropdown("services")}
              onMouseLeave={() => toggleDropdown(null)}
            >
              Our Services
            </button>
            {dropdown === "services" && (
              <div className="absolute left-0 mt-2 w-48 bg-white text-black rounded shadow-lg">
                <a href="/service1" className="block px-4 py-2 hover:bg-gray-200">
                  Service 1
                </a>
                <a href="/service2" className="block px-4 py-2 hover:bg-gray-200">
                  Service 2
                </a>
                <a href="/service3" className="block px-4 py-2 hover:bg-gray-200">
                  Service 3
                </a>
              </div>
            )}
          </div>
          <a href="/portfolio" className="hover:text-gray-400">
            Portfolio
          </a>
          <a href="/about" className="hover:text-gray-400">
            About
          </a>
          <a href="/contact" className="hover:text-gray-400">
            Contact Us
          </a>
        </div>

        {/* User Section */}
        <div className="hidden md:flex items-center space-x-4">
          <span>User</span>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => toggleDropdown("mobile")}
            className="text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            &#9776;
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {dropdown === "mobile" && (
        <div className="md:hidden bg-gray-800">
          <button
            onClick={() => toggleDropdown(null)}
            className="block text-right px-4 py-2 hover:bg-gray-700"
            aria-label="Close menu"
          >
            &times;
          </button>
          <a href="/services" className="block px-4 py-2 hover:bg-gray-700">
            Our Services
          </a>
          <a href="/portfolio" className="block px-4 py-2 hover:bg-gray-700">
            Portfolio
          </a>
          <a href="/about" className="block px-4 py-2 hover:bg-gray-700">
            About
          </a>
          <a href="/contact" className="block px-4 py-2 hover:bg-gray-700">
            Contact Us
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
