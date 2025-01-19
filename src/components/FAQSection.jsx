import { useState } from "react";
import { FaChevronRight } from "react-icons/fa";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const faqs = [
    {
      question: "Can I recover deleted files from desktop with this software?",
      answer:
        "Yes, you can recover deleted files from your desktop using our software. The process is simple and effective, with a high recovery rate for recently deleted files.",
    },
    {
      question: "Can I recover deleted files from desktop with this software?",
      answer:
        "Yes, you can recover deleted files from your desktop using our software. The process is simple and effective, with a high recovery rate for recently deleted files.",
    },
    {
      question: "Can I recover deleted files from desktop with this software?",
      answer:
        "Yes, you can recover deleted files from your desktop using our software. The process is simple and effective, with a high recovery rate for recently deleted files.",
    },
    {
      question: "Can I recover deleted files from desktop with this software?",
      answer:
        "Yes, you can recover deleted files from your desktop using our software. The process is simple and effective, with a high recovery rate for recently deleted files.",
    },
    {
      question: "Can I recover deleted files from desktop with this software?",
      answer:
        "Yes, you can recover deleted files from your desktop using our software. The process is simple and effective, with a high recovery rate for recently deleted files.",
    },
    {
      question: "Can I recover deleted files from desktop with this software?",
      answer:
        "Yes, you can recover deleted files from your desktop using our software. The process is simple and effective, with a high recovery rate for recently deleted files.",
    },
    {
      question: "Can I recover deleted files from desktop with this software?",
      answer:
        "Yes, you can recover deleted files from your desktop using our software. The process is simple and effective, with a high recovery rate for recently deleted files.",
    },
    {
      question: "Can I recover deleted files from desktop with this software?",
      answer:
        "Yes, you can recover deleted files from your desktop using our software. The process is simple and effective, with a high recovery rate for recently deleted files.",
    },
    // Add more FAQs...
  ];
  const visibleFaqs = showAll ? faqs : faqs.slice(0, 5);

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-8 sm:py-12 lg:py-16 px-4 max-w-3xl mx-auto">
      {/* Header */}
      <div className="text-center mb-8 sm:mb-12">
        <p className="text-orange-500 uppercase text-xs sm:text-sm mb-2">FAQ</p>
        <h2 className="text-2xl sm:text-3xl font-bold text-[#2D2D2D] px-4">
          Frequent Ask Questions
        </h2>
      </div>

      {/* FAQ List */}
      <div className="space-y-3 sm:space-y-4">
        {visibleFaqs.map((faq, index) => (
          <div
            key={index}
            className="relative bg-white rounded-lg shadow-sm overflow-hidden"
          >
            {/* Gradient Border */}
            <div
              className="absolute left-0 top-0 h-full w-1"
              style={{
                background: "linear-gradient(to bottom, #FF6B6B, #4ECDC4)",
              }}
            />

            {/* Question */}
            <button
              onClick={() => toggleQuestion(index)}
              className="w-full px-4 sm:px-6 py-3 sm:py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors group"
            >
              <span className="font-medium text-gray-900 pl-2 text-sm sm:text-base pr-4">
                {faq.question}
              </span>
              <span className="text-gray-400 flex-shrink-0">
                <FaChevronRight
                  className={`transform transition-transform duration-200 w-4 h-4 sm:w-5 sm:h-5 group-hover:text-gray-600 ${
                    openIndex === index ? "rotate-90" : ""
                  }`}
                />
              </span>
            </button>

            {/* Answer */}
            <div
              className={`px-4 sm:px-6 pl-6 sm:pl-8 overflow-hidden transition-all duration-300 ${
                openIndex === index ? "max-h-[500px] py-3 sm:py-4" : "max-h-0"
              }`}
            >
              <p className="text-gray-600 text-sm sm:text-base">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Show More Button */}
      {faqs.length > 5 && (
        <div className="text-center mt-6 sm:mt-8">
          <button
            onClick={() => setShowAll(!showAll)}
            className="bg-[#1B3B65] text-white px-4 sm:px-6 py-2 sm:py-3 rounded inline-flex items-center gap-2 hover:bg-[#152C4D] transition-colors text-sm sm:text-base"
          >
            {showAll ? "Show less" : "Show more"}
            <FaChevronRight
              className={`w-3 h-3 sm:w-4 sm:h-4 transform transition-transform duration-200 ${
                showAll ? "rotate-90" : ""
              }`}
            />
          </button>
        </div>
      )}
    </div>
  );
};

export default FAQSection;
