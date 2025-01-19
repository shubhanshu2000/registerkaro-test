import about from "../assets/about.png";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const AboutSection = () => {
  return (
    <div className="py-8 sm:py-12 lg:py-16 px-4 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <p className="text-orange-500 uppercase text-xs sm:text-sm tracking-wider mb-2">
            WELCOME TO REGISTERKARO.IN
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
            About <span className="text-orange-500">Register Karo</span>
          </h2>

          <p className="text-gray-700 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
            We have been using Intelegencia as our DevOps vendor for our field
            service applications over the last couple of years and I'm extremely
            pleased with their performance, ability to execute, and willingness
            to adapt in our ever changing environment. Perry is an outstanding
            leader who is fanatical about customer satisfaction. He has built a
            solid team which has consistently delivered on projects thereby
            exceeding everyone's expectations.
          </p>

          <p className="text-gray-700 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
            I would strongly recommend their services to any organization that
            is looking for solid, reliable, and predictable outcomes.
          </p>

          <button className="bg-blue-900 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-md flex items-center gap-2 mx-auto lg:mx-0 text-sm sm:text-base hover:bg-blue-800 transition-colors">
            Learn More
            <FaRegArrowAltCircleRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>

        {/* Right Image Container */}
        <div className="relative w-full lg:w-1/2">
          <div className="relative w-full h-[250px] sm:h-[300px] lg:h-[400px] rounded-lg overflow-hidden shadow-lg">
            <img
              src={about}
              alt="About Register Karo"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
