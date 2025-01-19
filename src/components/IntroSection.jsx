const IntroSection = () => {
  const features = [
    {
      icon: "💡",
      title: "Explore ideas together",
      description:
        "Engage audience segments and finally create actionable insights. Amplify vertical integration.",
    },
    {
      icon: "💬",
      title: "Bring those ideas to life",
      description:
        "Engage audience segments and finally create actionable insights. Amplify vertical integration.",
    },
  ];

  return (
    <div className="bg-[#1B3B65] py-8 sm:py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-12">
          {/* Left Content */}
          <div className="w-full lg:max-w-xl">
            <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-center lg:text-left">
              Our Video Introductions
            </h2>
            <p className="text-gray-300 mb-8 lg:mb-12 text-sm sm:text-base text-center lg:text-left">
              Velit purus egestas tellus phasellus. Mattis eget sed faucibus
              magna vulputate pellentesque a diam tincidunt apis qui.
            </p>

            {/* Features */}
            <div className="space-y-6 sm:space-y-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left"
                >
                  <div className="bg-orange-500 p-2 sm:p-3 rounded-full flex-shrink-0">
                    <span className="text-xl sm:text-2xl">{feature.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-white text-lg sm:text-xl font-semibold mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Video Section */}
          <div className="w-full lg:w-[600px] aspect-video bg-[#152C4D] rounded-lg overflow-hidden shadow-lg">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/_HU7i5peA24?si=IjUXFdxSUAmmMBVZ"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
