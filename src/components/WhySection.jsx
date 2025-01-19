const FeatureCard = ({ icon, title, description, bgColor }) => (
  <div
    className={`p-4 sm:p-6 rounded-lg ${bgColor} hover:shadow-lg transition-shadow w-full sm:w-[250px] lg:w-[300px] h-auto min-h-[180px] sm:h-[200px]`}
  >
    <div className="flex flex-col items-center text-center h-full justify-center">
      <div className="mb-3 text-2xl sm:text-3xl">{icon}</div>
      <h3 className="text-base sm:text-lg font-semibold mb-2">{title}</h3>
      <p className="text-xs sm:text-sm text-gray-600">{description}</p>
    </div>
  </div>
);

const WhyChooseSection = () => {
  const topFeatures = [
    {
      icon: "🛡️",
      title: "Confidential & Safe",
      description: "All your private information is safe with us",
      bgColor: "bg-red-50",
    },
    {
      icon: "✓",
      title: "No Hidden Fee",
      description:
        "Everything is put before you with no hidden charges or conditions",
      bgColor: "bg-green-50",
    },
  ];

  const bottomFeatures = [
    {
      icon: "😊",
      title: "Guaranteed Satisfaction",
      description:
        "We ensure that you stay 100% satisfied with our offered services",
      bgColor: "bg-blue-50",
    },
    {
      icon: "👤",
      title: "Expert CA/CS Assistance",
      description: "Prompt support from our in-house expert professionals",
      bgColor: "bg-pink-50",
    },
    {
      icon: "🛡️",
      title: "Confidential & Safe",
      description: "All your private information is safe with us",
      bgColor: "bg-orange-50",
    },
  ];

  return (
    <div className="py-8 sm:py-12 lg:py-16 px-4 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mb-8 lg:mb-12">
        {/* Left Content */}
        <div className="w-full lg:max-w-md text-center lg:text-left">
          <p className="text-orange-500 uppercase text-xs sm:text-sm mb-2">
            WHY REGISTERKARO.IN
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Why Choose Register Karo
          </h2>
          <p className="text-gray-600 text-sm sm:text-base">
            It is with consistent services and results that build trust with the
            people and that in turn help us to serve the business better.
          </p>
        </div>

        {/* Top row cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 w-full">
          {topFeatures.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              bgColor={feature.bgColor}
            />
          ))}
        </div>
      </div>

      {/* Bottom row cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 w-full lg:w-[85%] lg:ml-auto">
        {bottomFeatures.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
            bgColor={feature.bgColor}
          />
        ))}
      </div>
    </div>
  );
};

export default WhyChooseSection;
