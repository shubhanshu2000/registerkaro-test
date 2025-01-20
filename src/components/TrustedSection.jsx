import oracle from "../assets/oracle.png";
import morpheus from "../assets/morpheous.png";
import samsung from "../assets/samsung.png";
import monday from "../assets/monday.png";
import segment from "../assets/segment.png";

const TrustedSection = () => {
  const companies = [
    {
      name: "Oracle",
      image: oracle,
      className: "w-16 sm:w-20 lg:w-24",
    },
    {
      name: "Morpheus",
      image: morpheus,
      className: "w-16 sm:w-20 lg:w-24",
    },
    {
      name: "Morpheus",
      image: morpheus,
      className: "w-16 sm:w-20 lg:w-24",
    },
    {
      name: "Samsung",
      image: samsung,
      className: "w-20 sm:w-24 lg:w-28",
    },
    {
      name: "Monday",
      image: monday,
      className: "w-16 sm:w-20 lg:w-24",
    },
    {
      name: "Segment",
      image: segment,
      className: "w-16 sm:w-20 lg:w-24",
    },
  ];

  return (
    <div className="py-8 sm:py-10 lg:py-12 px-4 max-w-6xl mx-auto w-full">
      <h2 className="text-center text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800 mb-6 sm:mb-8 px-4">
        Trusted By Over 100+ Startups and freelance business
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 lg:gap-12 items-center justify-items-center">
        {companies.map((company, index) => (
          <div
            key={index}
            className="w-full flex items-center justify-center transform hover:scale-105 transition-transform duration-300"
          >
            <img
              src={company.image}
              alt={`${company.name} logo`}
              className={`${company.className} object-contain  transition-all duration-300`}
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustedSection;
