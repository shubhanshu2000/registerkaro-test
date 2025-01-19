import coinbase from "../assets/coinbase.png";
import spotify from "../assets/spotify.png";
import slack from "../assets/slack.png";
import dropbox from "../assets/dropbox.png";
import webflow from "../assets/webflow.png";
import zoom from "../assets/zoom.png";

const LogoSlider = () => {
  const logos = [
    {
      name: "Coinbase",
      alt: "Coinbase Logo",
      className: "w-24 sm:w-28 lg:w-32",
      image: coinbase,
    },
    {
      name: "Spotify",
      alt: "Spotify Logo",
      className: "w-20 sm:w-24 lg:w-28",
      image: spotify,
    },
    {
      name: "Slack",
      alt: "Slack Logo",
      className: "w-16 sm:w-20 lg:w-24",
      image: slack,
    },
    {
      name: "Dropbox",
      alt: "Dropbox Logo",
      className: "w-24 sm:w-28 lg:w-32",
      image: dropbox,
    },
    {
      name: "Webflow",
      alt: "Webflow Logo",
      className: "w-20 sm:w-24 lg:w-28",
      image: webflow,
    },
    {
      name: "Zoom",
      alt: "Zoom Logo",
      className: "w-16 sm:w-20 lg:w-24",
      image: zoom,
    },
  ];

  return (
    <div className="py-8 sm:py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 sm:gap-12">
          {logos.map((logo, index) => (
            <div
              key={index}
              className={`${logo.className} flex items-center justify-center`}
            >
              <img
                src={logo.image}
                alt={logo.alt}
                className="w-full h-full object-contain  transition-all duration-300 transform hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoSlider;
