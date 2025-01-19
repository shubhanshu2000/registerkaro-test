import { useEffect, useRef, useState } from "react";
import logo from "../../assets/logo.svg";
import { FaChevronDown, FaSearch, FaBars, FaTimes } from "react-icons/fa";

const MainNavbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  const mobileMenuRef = useRef(null);

  const handleClickOutside = (event) => {
    // Only handle desktop dropdown close
    if (
      !isMobileMenuOpen &&
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target)
    ) {
      setIsDropdownOpen(false);
    }
    if (
      mobileMenuRef.current &&
      !mobileMenuRef.current.contains(event.target)
    ) {
      setIsMobileMenuOpen(false);
      setIsDropdownOpen(false); // Close dropdown when mobile menu closes
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  // Separate handlers for desktop and mobile dropdowns
  const handleDesktopDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleMobileDropdown = (e) => {
    e.stopPropagation(); // Prevent event bubbling
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="relative">
      <div className="flex justify-between items-center p-4 bg-white shadow-md">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src={logo}
            alt="logo"
            className="h-8 sm:h-12 w-32 sm:w-44 pb-[0.6rem]"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-6">
          <a href="#" className="text-gray-700 hover:text-blue-900">
            Home
          </a>
          <div className="relative" ref={dropdownRef}>
            <div className="flex items-center">
              <button
                onClick={handleDesktopDropdown}
                className="text-gray-700 hover:text-blue-900 focus:outline-none mr-2"
              >
                Our Services
              </button>
              <FaChevronDown
                className={`transform transition-transform duration-200 ${
                  isDropdownOpen && !isMobileMenuOpen ? "rotate-180" : ""
                }`}
                fontSize={"0.8rem"}
              />
            </div>
            {isDropdownOpen && !isMobileMenuOpen && (
              <div className="absolute mt-2 w-48 bg-white border rounded shadow-lg z-50">
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Service 1
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Service 2
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Service 3
                </a>
              </div>
            )}
          </div>
          <a href="#" className="text-gray-700 hover:text-blue-900">
            Blog
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-900">
            Contact Us
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-900">
            About Us
          </a>
          <FaSearch className="text-gray-700 hover:text-blue-900 cursor-pointer" />
          <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition-colors">
            Talk An Expert
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center gap-4">
          <FaSearch className="text-gray-700 cursor-pointer" />
          <button
            onClick={() => {
              setIsMobileMenuOpen(!isMobileMenuOpen);
              setIsDropdownOpen(false); // Close dropdown when toggling mobile menu
            }}
            className="text-gray-700 focus:outline-none"
          >
            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          ref={mobileMenuRef}
          className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg z-50"
        >
          <div className="flex flex-col py-4">
            <a
              href="#"
              className="px-6 py-3 text-gray-700 hover:bg-gray-100 transition-colors"
            >
              Home
            </a>
            <button
              onClick={handleMobileDropdown}
              className="px-6 py-3 text-gray-700 hover:bg-gray-100 text-left flex items-center justify-between transition-colors"
            >
              Our Services
              <FaChevronDown
                className={`transform transition-transform duration-200 ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
                fontSize={"0.8rem"}
              />
            </button>
            {isDropdownOpen && (
              <div className="bg-gray-50">
                <a
                  href="#"
                  className="block px-8 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
                >
                  Service 1
                </a>
                <a
                  href="#"
                  className="block px-8 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
                >
                  Service 2
                </a>
                <a
                  href="#"
                  className="block px-8 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
                >
                  Service 3
                </a>
              </div>
            )}
            <a
              href="#"
              className="px-6 py-3 text-gray-700 hover:bg-gray-100 transition-colors"
            >
              Blog
            </a>
            <a
              href="#"
              className="px-6 py-3 text-gray-700 hover:bg-gray-100 transition-colors"
            >
              Contact Us
            </a>
            <a
              href="#"
              className="px-6 py-3 text-gray-700 hover:bg-gray-100 transition-colors"
            >
              About Us
            </a>
            <div className="px-6 py-3">
              <button className="w-full bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition-colors">
                Talk An Expert
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MainNavbar;
