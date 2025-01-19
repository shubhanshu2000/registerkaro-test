import service1 from "../assets/service1.svg";
import service2 from "../assets/service2.svg";
import service3 from "../assets/service3.svg";
import service4 from "../assets/service4.svg";
import service5 from "../assets/service5.svg";
import service6 from "../assets/service6.svg";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const ServiceCard = ({ icon, title, description, dividerConfig }) => (
  <div className="relative p-4 sm:p-6 flex flex-col items-center text-center">
    {/* Service content */}
    <div className="mb-3 sm:mb-4 text-orange-500">
      <div className="w-6 h-6 sm:w-8 sm:h-8">{icon}</div>
    </div>
    <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">{title}</h3>
    <p className="text-gray-600 mb-3 sm:mb-4 text-xs sm:text-sm px-2 sm:px-4">
      {description}
    </p>
    <a
      href="#"
      className="text-[#001038] hover:underline inline-flex items-center text-sm sm:text-base group"
    >
      Learn more{" "}
      <span className="ml-1 group-hover:translate-x-1 transition-transform">
        <FaRegArrowAltCircleRight className="w-4 h-4 sm:w-5 sm:h-5" />
      </span>
    </a>

    {/* Custom positioned divider - Hidden on mobile, shown on larger screens */}
    {dividerConfig && (
      <div className="hidden md:block absolute right-0 h-full top-0">
        <div className="absolute right-0 top-0 w-[1px] h-full bg-gray-200"></div>
        <div
          className="absolute w-[3px] h-4 bg-red-500"
          style={{
            right: "-1px",
            top: `${dividerConfig.redPosition}%`,
          }}
        ></div>
      </div>
    )}
  </div>
);

const ServicesSection = () => {
  const services = [
    {
      icon: (
        <img
          src={service1}
          alt="Company Formation"
          className="text-4xl h-8 w-8 text-orange-500"
        />
      ),
      title: "Company Formation",
      description:
        "Build web-based solutions that enhance customer experience.",
      dividerConfig: { redPosition: 20 },
    },
    {
      icon: (
        <img
          src={service2}
          alt="Company Formation"
          className="text-4xl h-8 w-8 text-orange-500"
        />
      ),
      title: "Company Secretarial Services",
      description:
        "Make data-driven decisions and utilize technology to reach business goals.",
      dividerConfig: { redPosition: 60 },
    },
    {
      icon: (
        <img
          src={service3}
          alt="Company Formation"
          className="text-4xl h-8 w-8 text-orange-500"
        />
      ),
      title: "Virtual Office Address",
      description:
        "Foster customer relationships by effectively serving your market.",
      dividerConfig: null,
    },
    {
      icon: (
        <img
          src={service4}
          alt="Company Formation"
          className="text-4xl h-8 w-8 text-orange-500"
        />
      ),
      title: "Annual Compliance Services",
      description:
        "Turn your ideas into modern products with our design experts.",
      dividerConfig: { redPosition: 20 },
    },
    {
      icon: (
        <img
          src={service5}
          alt="Company Formation"
          className="text-4xl h-8 w-8 text-orange-500"
        />
      ),
      title: "Payroll Services",
      description: "Expand your business across the globe with minimal effort.",
      dividerConfig: { redPosition: 60 },
    },
    {
      icon: (
        <img
          src={service6}
          alt="Company Formation"
          className="text-4xl h-8 w-8 text-orange-500"
        />
      ),
      title: "Bookkeeping Services",
      description:
        "Steering user behaviours with creative design, data insights & technology.",
      dividerConfig: null,
    },
  ];

  return (
    <div className="py-8 sm:py-12 lg:py-16 px-4 mx-auto bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <p className="text-orange-500 uppercase text-xs sm:text-sm tracking-wider mb-2">
            WELCOME TO REGISTERKARO.IN
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 px-4">
            Explore Our Services
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-0">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              {...service}
              // Only show divider if it's not the last item in row
              dividerConfig={
                (index + 1) % 3 === 0 ? null : service.dividerConfig
              }
            />
          ))}
        </div>

        {/* Button */}
        <div className="text-center mt-8 sm:mt-12">
          <button className="bg-blue-900 text-white px-4 sm:px-6 py-2 sm:py-3 rounded text-sm sm:text-base hover:bg-blue-800 transition-all duration-300 hover:shadow-lg">
            See All Services
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
