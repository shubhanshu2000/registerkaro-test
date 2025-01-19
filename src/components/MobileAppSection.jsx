import { BiLogoPlayStore } from "react-icons/bi";
import { FaApple } from "react-icons/fa";
import phone from "../assets/phone.png";

const MobileAppSection = () => {
  return (
    <div className="bg-[#1B3B65]  relative overflow-hidden">
      <div className=" mx-auto px-10 py-8   md:p-16">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-12">
          {/* Left Content */}
          <div className="max-w-xl relative z-10 text-center lg:text-left">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
              Manage Your Services by your Mobile Phone
            </h2>

            <p className="text-gray-300 mb-8 text-sm md:text-base">
              Download our app to manage and track your services. Our app
              enables you to stay in touch with our experts and aids you in
              tracking your progress.
            </p>

            {/* App Store Buttons */}
            <div>
              <p className="text-white mb-4">Get the App</p>
              <div className="flex gap-4 justify-center lg:justify-start">
                {/* App Store Button */}
                <a
                  href="#"
                  className="bg-white rounded-lg flex items-center px-3 md:px-4 py-2 hover:shadow-lg transition-shadow"
                >
                  <FaApple className="w-6 h-6 md:w-8 md:h-8 mr-2 text-[#A5C937]" />
                  <div>
                    <div className="text-[10px] md:text-xs">Get it on</div>
                    <div className="text-xs md:text-sm font-semibold">
                      App Store
                    </div>
                  </div>
                </a>

                {/* Google Play Button */}
                <a
                  href="#"
                  className="bg-white rounded-lg flex items-center px-3 md:px-4 py-2 hover:shadow-lg transition-shadow"
                >
                  <BiLogoPlayStore className="w-6 h-6 md:w-8 md:h-8 mr-2 text-[#A5C937]" />
                  <div>
                    <div className="text-[10px] md:text-xs">Get it on</div>
                    <div className="text-xs md:text-sm font-semibold">
                      Google Play
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Right Mobile Image */}
          <div className="relative w-full lg:w-auto flex justify-center lg:justify-end pt-32 pr-0">
            <img
              src={phone}
              alt="Mobile App Mockup"
              className="w-[280px] md:w-[400px] lg:w-[600px] object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileAppSection;
