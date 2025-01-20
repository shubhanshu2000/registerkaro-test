import heroBackground from "../assets/herobg.svg";
import { FaHandshake, FaUsers } from "react-icons/fa";
import { HiOutlineSquares2X2 } from "react-icons/hi2";

const HeroSection = () => {
  const stats = [
    {
      number: "4.5+",
      label: "Customer Rating",
      icon: <HiOutlineSquares2X2 />,
    },
    {
      number: "20,000+",
      label: "Clients",
      icon: <FaUsers />,
    },
    {
      number: "99.8%",
      label: "Financial Stability",
      icon: <FaHandshake />,
    },
  ];

  return (
    <div className="relative w-full bg-gradient-to-br from-[#f8f9ff] to-[#dee6f3] md:bg-none">
      {/* Background image - hidden on mobile */}
      <img
        src={heroBackground}
        alt=""
        className="hidden md:block w-full h-auto object-cover min-h-[800px] sm:min-h-[700px] md:min-h-[650px] lg:min-h-[600px]"
      />

      {/* Content container */}
      <div className="md:absolute md:top-0 md:left-0 w-full h-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center py-12 md:py-0">
          {/* Left Content */}
          <div className="max-w-[600px] lg:max-w-[800px]">
            {/* Google Rating */}
            <div className="flex items-center gap-2 mb-6">
              <span className="text-yellow-400 text-lg">★</span>
              <span className="text-sm">Google Rating</span>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star} className="text-white px-1 bg-yellow-400">
                    ★
                  </span>
                ))}
              </div>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-[48px] font-bold leading-tight mb-6">
              Your trusted partner
              <br />
              for compliance business needs
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-gray-600 mb-10 max-w-[90%]">
              An online business compliance platform that helps entrepreneurs
              and other individuals with various,{" "}
              <span className="font-medium">registrations, tax filings</span>,
              and other <span className="font-medium">legal matters</span>.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 sm:gap-16 mb-10">
              {stats.map((stat, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="text-[#4F4F4F] text-4xl">{stat.icon}</div>
                  <div>
                    <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-[#F53843] to-[#2F5795] bg-clip-text text-transparent">
                      {stat.number}
                    </div>
                    <div className="text-sm text-[#4F4F4F]">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-6">
              <button className="bg-[#1E3A8A] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-md text-base sm:text-lg hover:bg-[#152C4D] transition-colors">
                Talk An Expert
              </button>
              <button className="flex items-center gap-2 text-[#1E3A8A] text-base sm:text-lg hover:opacity-80 transition-opacity">
                <span className="text-red-500 text-2xl">•</span>
                See how it works
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
