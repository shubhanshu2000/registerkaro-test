import {
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaPinterest,
  FaPhone,
} from "react-icons/fa";

const TopNavbar = () => {
  return (
    <div className="hidden sm:bg-blue-900 p-2 sm:flex justify-end items-center">
      <div className="flex items-center text-white">
        <span className="mr-4 flex items-center border-r-2 border-white pr-4">
          <i className="fas fa-envelope mr-2"></i> www.registerkaro.in
        </span>
        <span className="mr-4 flex items-center border-r-2 border-white pr-4">
          <FaPhone className="mr-1" />
          <span className=" px-1 py-1 rounded">+918447746183</span>
        </span>
      </div>
      <div className="flex items-center ml-2 text-white">
        <FaInstagram className="mx-2 cursor-pointer hover:text-pink-500" />
        <FaFacebook className="mx-2 cursor-pointer hover:text-pink-500" />
        <FaTwitter className="mx-2 cursor-pointer hover:text-pink-500" />
        <FaPinterest className="mx-2 cursor-pointer hover:text-pink-500" />
      </div>
    </div>
  );
};

export default TopNavbar;
