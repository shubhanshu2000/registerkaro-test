import { useState } from "react";

// Import all your logo images
import dropboxLogo from "../assets/clientLogo1.png";
import atlasLogo from "../assets/clientLogo2.png";
import pinterestLogo from "../assets/clientLogo3.png";
import shopifyLogo from "../assets/clientLogo4.png";
import unityLogo from "../assets/clientLogo5.png";
import teamsLogo from "../assets/clientLogo6.png";
import figmaLogo from "../assets/clientLogo7.png";
import bufferLogo from "../assets/clientLogo8.png";
import slackLogo from "../assets/clientLogo9.png";
import mediumLogo from "../assets/clientLogo10.png";
import newrelicLogo from "../assets/clientLogo11.png";
import sketchLogo from "../assets/clientLogo12.png";
import trelloLogo from "../assets/clientLogo13.png";
import windowsLogo from "../assets/clientLogo14.png";
import githubLogo from "../assets/clientLogo15.png";
import herokuLogo from "../assets/clientLogo16.png";
import dropbox2Logo from "../assets/clientLogo17.png";
import cloudflareLogo from "../assets/clientLogo18.png";
import deliverooLogo from "../assets/clientLogo19.png";

const HappyClientLogos = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);

  // First page logos
  const logos = [
    { src: dropboxLogo, left: "8%", top: "35%", size: "w-14 h-14" },
    { src: atlasLogo, left: "18%", top: "18%", size: "w-12 h-12" },
    { src: pinterestLogo, left: "22%", top: "38%", size: "w-16 h-16" },
    { src: shopifyLogo, left: "32%", top: "28%", size: "w-14 h-14" },
    { src: unityLogo, left: "38%", top: "15%", size: "w-12 h-12" },
    { src: teamsLogo, left: "45%", top: "25%", size: "w-16 h-16" },
    { src: figmaLogo, left: "55%", top: "18%", size: "w-14 h-14" },
    { src: bufferLogo, left: "65%", top: "22%", size: "w-12 h-12" },
    { src: slackLogo, left: "75%", top: "20%", size: "w-14 h-14" },
    { src: mediumLogo, left: "28%", top: "45%", size: "w-12 h-12" },
    { src: newrelicLogo, left: "35%", top: "42%", size: "w-16 h-16" },
    { src: sketchLogo, left: "42%", top: "38%", size: "w-14 h-14" },
    { src: trelloLogo, left: "52%", top: "42%", size: "w-12 h-12" },
    { src: windowsLogo, left: "62%", top: "38%", size: "w-16 h-16" },
    { src: githubLogo, left: "68%", top: "45%", size: "w-14 h-14" },
    { src: herokuLogo, left: "78%", top: "35%", size: "w-12 h-12" },
    { src: dropbox2Logo, left: "82%", top: "42%", size: "w-14 h-14" },
    { src: cloudflareLogo, left: "88%", top: "38%", size: "w-16 h-16" },
    { src: deliverooLogo, left: "92%", top: "32%", size: "w-12 h-12" },
  ];

  const logosPerPage = 20;
  const totalPages = Math.ceil(logos.length / logosPerPage);

  // Get logos for a specific page
  const getLogosForPage = (pageNumber) => {
    const startIndex = (pageNumber - 1) * logosPerPage;
    const endIndex = startIndex + logosPerPage;
    return logos.slice(startIndex, endIndex);
  };

  const handleShowMore = () => {
    if (isAnimating) return;

    setIsAnimating(true);
    setCurrentPage((prev) => (prev >= totalPages ? 1 : prev + 1));

    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  return (
    <div className="py-16 px-4 max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4">Our Happy Clients</h2>
        <p className="max-w-2xl mx-auto text-gray-600 text-lg">
          Professionally cultivate one-to-one customer service with robust
          ideas. Dynamically innovate resource-leveling customer service for
          state of the art customer service.
        </p>
      </div>

      {/* Logo Layout Container */}
      <div className="relative h-[200px] mb-8 overflow-hidden">
        {/* Current Page */}
        <div
          className="absolute w-full h-full transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${(currentPage - 1) * 100}%)`,
          }}
        >
          {Array.from({ length: totalPages }).map((_, pageIndex) => (
            <div
              key={pageIndex}
              className="absolute w-full h-full"
              style={{ left: `${pageIndex * 100}%` }}
            >
              {getLogosForPage(pageIndex + 1).map((logo, logoIndex) => (
                <div
                  key={logoIndex}
                  className={`absolute ${logo.size} bg-white rounded-full shadow-sm flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-md`}
                  style={{
                    left: logo.left,
                    top: logo.top,
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <div className={`${logo.size} p-3`}>
                    <img
                      src={logo.src}
                      alt={`Client ${logoIndex + 1}`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Show More Button */}
      {totalPages > 1 && (
        <div className="text-center mt-8">
          <button
            className={`text-blue-600 flex items-center gap-2 mx-auto hover:underline group transition-all duration-300 ${
              isAnimating ? "pointer-events-none opacity-50" : ""
            }`}
            onClick={handleShowMore}
          >
            Show more
            <span className="transform group-hover:translate-x-1 transition-transform duration-300">
              →
            </span>
          </button>
        </div>
      )}
    </div>
  );
};

export default HappyClientLogos;
