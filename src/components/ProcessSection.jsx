const ProcessSteps = () => {
  const steps = [
    {
      icon: "📝",
      title: "Fill up Application Form",
      bgColor: "bg-pink-500",
      iconBgColor: "bg-pink-500",
    },
    {
      icon: "💳",
      title: "Make Online Payment",
      bgColor: "bg-green-500",
      iconBgColor: "bg-green-500",
    },
    {
      icon: "👤",
      title: "Executive will Process Application",
      bgColor: "bg-yellow-500",
      iconBgColor: "bg-yellow-500",
    },
    {
      icon: "✉️",
      title: "Get Confirm Mail",
      bgColor: "bg-gray-500",
      iconBgColor: "bg-gray-500",
    },
  ];

  return (
    <div className="w-full bg-orange-400 py-6 sm:py-8 lg:py-10 overflow-x-auto">
      <div className="max-w-7xl mx-auto px-4">
        {/* Desktop View */}
        <div className="hidden md:flex justify-between items-center">
          {steps.map((step, index) => (
            <div key={index} className="flex items-center">
              <div className="flex items-center">
                <div
                  className={`w-10 h-10 lg:w-12 lg:h-12 ${step.iconBgColor} rounded-full flex items-center justify-center text-white text-lg lg:text-xl shadow-lg`}
                >
                  {step.icon}
                </div>
                <span className="ml-3 font-medium text-[#3C2109] text-sm lg:text-base whitespace-nowrap">
                  {step.title}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View */}
        <div className="md:hidden">
          <div className="flex flex-col space-y-4">
            {steps.map((step, index) => (
              <div key={index} className="flex items-center">
                <div
                  className={`w-10 h-10 ${step.iconBgColor} rounded-full flex items-center justify-center text-white text-lg shadow-lg flex-shrink-0`}
                >
                  {step.icon}
                </div>
                <span className="ml-3 font-medium text-[#3C2109] text-sm">
                  {step.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessSteps;
