import { useState, useEffect } from "react";

const CountingNumber = ({ end, suffix, duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp = null;
    const endNumber = parseInt(end.replace(/\D/g, ""));

    const animate = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = timestamp - startTimestamp;

      const currentCount = Math.min(
        Math.floor((progress / duration) * endNumber),
        endNumber
      );

      setCount(currentCount);

      if (progress < duration) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};

const StatisticsSection = () => {
  const stats = [
    {
      number: "1",
      suffix: "M",
      label: "CUSTOMERS",
      gradient: "from-[#FFA229] to-[#2F5795]",
    },
    {
      number: "12",
      suffix: "",
      label: "YEARS OF EXCELLENCE",
      gradient: "from-[#F53843] to-[#2F5795]",
    },
    {
      number: "41",
      suffix: "",
      label: "R&D ENGINEERS",
      gradient: "from-[#FFA229] to-[#1C4670]",
    },
    {
      number: "78",
      suffix: "",
      label: "COUNTRIES",
      gradient: "from-[#FFA229] to-[#1C4670]",
    },
    {
      number: "3287",
      suffix: "",
      label: "PARTNERS",
      gradient: "from-[#FFA229] to-[#1C4670]",
    },
    {
      number: "41",
      suffix: "",
      label: "AWARDS RECEIVED",
      gradient: "from-[#FFA229] to-[#1C4670]",
    },
  ];

  return (
    <div className="py-8 sm:py-12 lg:py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <p className="text-orange-500 uppercase text-xs sm:text-sm tracking-wider mb-2">
            WHY REGISTER KARO
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#2D2D2D] px-4">
            Some Numbers are important
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-4 sm:p-6 hover:transform hover:scale-105 transition-transform duration-300"
            >
              {/* Number with Gradient */}
              <div className="flex items-center justify-center mb-2">
                <span
                  className={`text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}
                >
                  <CountingNumber end={stat.number} suffix={stat.suffix} />
                </span>
                <span
                  className={`text-xl sm:text-2xl lg:text-2xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent -mt-2 sm:-mt-3 lg:-mt-4`}
                >
                  +
                </span>
              </div>

              {/* Label */}
              <p className="text-xs sm:text-sm font-medium text-[#181617] uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatisticsSection;
