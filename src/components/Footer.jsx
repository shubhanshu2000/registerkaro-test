import { FaApple, FaFacebook, FaGoogle, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const footerLinks = {
    "START A BUSINESS": [
      "Features",
      "Solutions",
      "Integrations",
      "Enterprise",
      "Solutions",
    ],
    "GOVERNMENT REGISTRATION": [
      "Partners",
      "Community",
      "Developers",
      "App",
      "Blog",
    ],
    "COMPLIANCE & TAX": [
      "Channels",
      "Scale",
      "Watch the Demo",
      "Our Competition",
    ],
    "BIS & CDSCO": ["About Us", "News", "Leadership", "Media Kit"],
  };

  const socialIcons = [
    { icon: <FaFacebook />, link: "#" },
    { icon: <FaGoogle />, link: "#" },
    { icon: <FaApple />, link: "#" },
    { icon: <FaInstagram />, link: "#" },
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-[#001233]">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 lg:pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-12 lg:mb-16">
          {/* Description Column */}
          <div className="lg:col-span-1">
            <p className="text-gray-300 mb-6 text-sm sm:text-base">
              Design outstanding interfaces with advanced Figma features in a
              matter of minutes.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4">
              {socialIcons.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  className="text-white hover:text-orange-500 transition-colors"
                >
                  <div className="text-xl sm:text-2xl w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center hover:border-orange-500">
                    <span>{social.icon}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([title, links], index) => (
            <div key={index} className="flex flex-col">
              <h3 className="text-orange-500 font-semibold mb-4 text-sm sm:text-base">
                {title}
              </h3>
              <ul className="space-y-2 sm:space-y-3">
                {links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base block py-1"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center py-6 sm:py-8">
            {/* Scroll to Top Button */}
            <button
              onClick={scrollToTop}
              className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-500 rounded-full flex items-center justify-center hover:bg-orange-600 transition-all duration-300 mb-4 group"
              aria-label="Scroll to top"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="transform transition-transform group-hover:-translate-y-1"
              >
                <path
                  d="M12 19L12 5M12 5L5 12M12 5L19 12"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {/* Copyright Text */}
            <p className="text-gray-400 text-xs sm:text-sm text-center px-4">
              © 2024 Registerkaro. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
