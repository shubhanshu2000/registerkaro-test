const CheckIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-[#1C4670] bg-white rounded-full p-1 min-w-[20px]"
  >
    <path
      d="M16.6666 5L7.49992 14.1667L3.33325 10"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const SubscriptionSection = () => {
  const features = [
    {
      text: "Instant results",
    },
    {
      text: "User-friendly interface",
    },
    {
      text: "Personalized customization",
    },
  ];

  return (
    <div
      className="py-8 sm:py-12 md:py-16 px-4 text-center"
      style={{
        background: "linear-gradient(90deg, #FFA500 0%, #1B3B65 100%)",
      }}
    >
      {/* Top Label */}
      <div className="text-white/80 text-xs sm:text-sm mb-3 sm:mb-4">
        1% OF THE INDUSTRY
      </div>

      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 sm:mb-8 max-w-3xl mx-auto px-4">
        Welcome to your new digital reality. Now.
      </h2>

      {/* Email Form */}
      <form className="max-w-xl mx-auto mb-8 px-4">
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-0">
          <input
            type="email"
            placeholder="Enter Your Email"
            className="flex-1 px-4 py-3 rounded-md sm:rounded-l-md sm:rounded-r-none focus:outline-none w-full"
            required
          />
          <button
            type="submit"
            className="bg-orange-500 text-white px-6 py-3 rounded-md sm:rounded-l-none sm:rounded-r-md hover:bg-orange-600 transition-colors w-full sm:w-auto"
          >
            Submit
          </button>
        </div>
      </form>

      {/* Features */}
      <div className="flex flex-col sm:flex-row justify-center items-center sm:items-start gap-4 sm:gap-8 text-white px-4">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex items-center gap-2 w-full sm:w-auto justify-center sm:justify-start"
          >
            <CheckIcon />
            <span className="text-sm whitespace-nowrap">{feature.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubscriptionSection;
