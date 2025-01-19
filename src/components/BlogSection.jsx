import blog1 from "../assets/blog1.png";
import blog2 from "../assets/blog2.png";
import blog3 from "../assets/blog3.png";
import blog4 from "../assets/blog4.png";
import blog5 from "../assets/blog5.png";
import blog6 from "../assets/blog6.png";

// BlogCard Component
const BlogCard = ({ image, author, date, title, description, tags }) => (
  <div className="flex flex-col h-full bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
    {/* Image */}
    <div className="relative h-48 sm:h-56 md:h-48 lg:h-56 mb-4 overflow-hidden rounded-t-lg">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
      />
    </div>

    {/* Content */}
    <div className="flex flex-col flex-grow p-4 sm:p-6">
      {/* Author and Date */}
      <div className="text-xs sm:text-sm text-gray-600 mb-2">
        {author} • {date} • Today
      </div>

      {/* Title */}
      <h3 className="text-lg sm:text-xl font-semibold mb-2 group cursor-pointer hover:text-blue-600 transition-colors">
        <div className="flex items-center">
          {title}
          <span className="opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-200 ml-1">
            →
          </span>
        </div>
      </h3>

      {/* Description */}
      <p className="text-gray-600 mb-4 flex-grow text-sm sm:text-base line-clamp-3">
        {description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 sm:gap-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm ${
              tag.color || "bg-gray-100 text-gray-700"
            }`}
          >
            {tag.name}
          </span>
        ))}
      </div>
    </div>
  </div>
);

// BlogSection Component
const BlogSection = () => {
  const blogs = [
    {
      image: blog1,
      author: "Prabhash Mishra",
      date: "1 Jan 2023",
      title: "Small business & Startup",
      description:
        "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
      tags: [
        { name: "Tax & Audit", color: "bg-purple-100 text-purple-700" },
        { name: "Management", color: "bg-blue-100 text-blue-700" },
      ],
    },
    {
      image: blog2,
      author: "Mahesh Kumar",
      date: "1 Jan 2023",
      title: "Scale-Up Company Offer",
      description:
        "Mental models are simple expressions of complex processes or relationships.",
      tags: [
        { name: "Tax", color: "bg-blue-100 text-blue-700" },
        { name: "Research", color: "bg-green-100 text-green-700" },
        { name: "Compliance", color: "bg-red-100 text-red-700" },
      ],
    },
    {
      image: blog3,
      author: "Mahesh Kumar",
      date: "1 Jan 2023",
      title: "Scale-Up Company Offer",
      description:
        "Mental models are simple expressions of complex processes or relationships.",
      tags: [
        { name: "Tax", color: "bg-blue-100 text-blue-700" },
        { name: "Research", color: "bg-green-100 text-green-700" },
        { name: "Compliance", color: "bg-red-100 text-red-700" },
      ],
    },
    {
      image: blog4,
      author: "Mahesh Kumar",
      date: "1 Jan 2023",
      title: "Scale-Up Company Offer",
      description:
        "Mental models are simple expressions of complex processes or relationships.",
      tags: [
        { name: "Tax", color: "bg-blue-100 text-blue-700" },
        { name: "Research", color: "bg-green-100 text-green-700" },
        { name: "Compliance", color: "bg-red-100 text-red-700" },
      ],
    },
    {
      image: blog5,
      author: "Mahesh Kumar",
      date: "1 Jan 2023",
      title: "Scale-Up Company Offer",
      description:
        "Mental models are simple expressions of complex processes or relationships.",
      tags: [
        { name: "Tax", color: "bg-blue-100 text-blue-700" },
        { name: "Research", color: "bg-green-100 text-green-700" },
        { name: "Compliance", color: "bg-red-100 text-red-700" },
      ],
    },
    {
      image: blog6,
      author: "Mahesh Kumar",
      date: "1 Jan 2023",
      title: "Scale-Up Company Offer",
      description:
        "Mental models are simple expressions of complex processes or relationships.",
      tags: [
        { name: "Tax", color: "bg-blue-100 text-blue-700" },
        { name: "Research", color: "bg-green-100 text-green-700" },
        { name: "Compliance", color: "bg-red-100 text-red-700" },
      ],
    },
  ];
  return (
    <div className="py-8 sm:py-12 lg:py-16 px-4 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-8 sm:mb-12">
        <p className="text-orange-500 uppercase text-xs sm:text-sm mb-2">
          EXPLORE OUR BLOGS
        </p>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#2D2D2D] px-4">
          Accelerate Digital Transformation
        </h2>
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
        {blogs.map((blog, index) => (
          <BlogCard key={index} {...blog} />
        ))}
      </div>

      {/* Show More Button */}
      <div className="text-center">
        <button className="bg-[#1B3B65] text-white px-4 sm:px-6 py-2 sm:py-3 rounded flex items-center gap-2 mx-auto hover:bg-[#152C4D] transition-colors text-sm sm:text-base group">
          Show more blogs
          <span className="transform group-hover:translate-x-1 transition-transform">
            →
          </span>
        </button>
      </div>
    </div>
  );
};

export default BlogSection;
