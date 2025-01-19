import { useState } from "react";
import quote from "../assets/quote.png";
import reviewer from "../assets/reviewer.png";

const ReviewSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const reviews = [
    {
      text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident ea commodo consequat aute irure sint amet occaecat cupidatat non proident",
      rating: 4.5,
      author: {
        name: "Chris",
        title: "President and CEO, PrintReach, USA",
        image: reviewer,
      },
    },
    {
      text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident ea commodo consequat aute irure sint amet occaecat cupidatat non proident",
      rating: 4.5,
      author: {
        name: "Chris",
        title: "President and CEO, PrintReach, USA",
        image: reviewer,
      },
    },
    {
      text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident ea commodo consequat aute irure sint amet occaecat cupidatat non proident",
      rating: 4.5,
      author: {
        name: "Chris",
        title: "President and CEO, PrintReach, USA",
        image: reviewer,
      },
    },
    {
      text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident ea commodo consequat aute irure sint amet occaecat cupidatat non proident",
      rating: 4.5,
      author: {
        name: "Chris",
        title: "President and CEO, PrintReach, USA",
        image: reviewer,
      },
    },
    {
      text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident ea commodo consequat aute irure sint amet occaecat cupidatat non proident",
      rating: 4.5,
      author: {
        name: "Chris",
        title: "President and CEO, PrintReach, USA",
        image: reviewer,
      },
    },
    // Add more reviews...
  ];

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="bg-[#1B3B65] py-8 sm:py-12 lg:py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white text-center sm:text-left">
            What peoples says about us
          </h2>

          {/* Navigation Buttons */}
          <div className="flex gap-2">
            <button
              onClick={handlePrevSlide}
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            >
              ←
            </button>
            <button
              onClick={handleNextSlide}
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            >
              →
            </button>
          </div>
        </div>

        {/* Reviews Container */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentSlide * 100}%)`,
              gap: "1rem",
            }}
          >
            {reviews.map((review, index) => (
              <div
                key={index}
                className="w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc(40%-0.5rem)] flex-shrink-0 px-2"
              >
                <div className="bg-white rounded-lg p-4 sm:p-6 lg:p-8">
                  {/* Quote Icon */}
                  <div className="mb-4">
                    <img src={quote} alt="Quote" className="w-8 sm:w-auto" />
                  </div>

                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span
                        key={star}
                        className={`text-lg sm:text-2xl ${
                          star <= review.rating
                            ? "text-yellow-400"
                            : "text-gray-300"
                        }`}
                      >
                        ★
                      </span>
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-gray-600 mb-6 text-sm sm:text-base line-clamp-4 sm:line-clamp-none">
                    {review.text}
                  </p>

                  {/* Author */}
                  <div className="flex items-center">
                    <img
                      src={review.author.image}
                      alt={review.author.name}
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-full mr-3 sm:mr-4"
                    />
                    <div>
                      <div className="font-semibold text-sm sm:text-base">
                        {review.author.name}
                      </div>
                      <div className="text-xs sm:text-sm text-gray-600">
                        {review.author.title}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-6 sm:mt-8">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-colors cursor-pointer ${
                currentSlide === index ? "bg-orange-500" : "bg-white/30"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewSection;
