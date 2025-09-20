// Footer.js
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { IoLink, IoCall, IoMail } from 'react-icons/io5';
import logo from "../assets/cart.jpeg";

const Footer = () => {
  return (
    <footer className="w-screen min-h-screen bg-white text-gray-200 py-16 relative">
      {/* Top line above footer */}
      <div className="w-full h-[2px] bg-green-600 mb-8"></div>

      {/* Full-width container for content */}
      <div className="px-8 lg:px-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Left Section: Logo & Quote */}
        <div className="flex flex-col items-start space-y-4">
          <div className="flex items-center space-x-2">
            <img src={logo} alt="XtraMarket Logo" className="h-15 w-15" />
            <span className="text-4xl font-bold text-green-800">XtraMarket</span>
          </div>
          <p className="max-w-sm leading-relaxed text-green-900 font-semibold">
            "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind."
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="p-3 bg-[#1e293b] hover:bg-green-800 rounded-full transition-colors duration-300">
              <FaFacebook size={20} />
            </a>
            <a href="#" className="p-3 bg-[#1e293b] hover:bg-green-800 rounded-full transition-colors duration-300">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="p-3 bg-[#1e293b] hover:bg-green-800 rounded-full transition-colors duration-300">
              <FaInstagram size={20} />
            </a>
          </div>
        </div>

        {/* Middle Section: Useful Links */}
        <div className="flex flex-col items-start space-y-4">
          <h3 className="text-lg font-bold text-green-900">Useful Links</h3>
          <div className="w-16 h-1 bg-gray-700 rounded"></div>
          <a href="#" className="flex items-center space-x-2 text-green-900 hover:text-green-600 transition-colors duration-300 font-bold">
            <IoLink className="text-[#4ade80]" size={20} />
            <span>Help Center</span>
          </a>
          <a href="#" className="flex items-center space-x-2 text-green-900 hover:text-green-600 transition-colors duration-300 font-bold">
            <IoLink className="text-[#4ade80]" size={20} />
            <span>Terms & Conditions</span>
          </a>
          <a href="#" className="flex items-center space-x-2 text-green-900 hover:text-green-600 transition-colors duration-300 font-bold">
            <IoLink className="text-[#4ade80]" size={20} />
            <span>Privacy Policy</span>
          </a>
          <a href="#" className="flex items-center space-x-2 text-green-900 hover:text-green-600 transition-colors duration-300 font-bold">
            <IoLink className="text-[#4ade80]" size={20} />
            <span>Refund Policy</span>
          </a>
          <div className="flex items-center space-x-2 text-green-900 font-semibold">
            <IoCall className="text-[#4ade80]" size={20} />
            <span>+12 534 565 896</span>
          </div>
          <div className="flex items-center space-x-2 text-green-900 font-semibold">
            <IoMail className="text-[#4ade80]" size={20} />
            <span>info@xtramarket.com</span>
          </div>
        </div>

        {/* Right Section: Call to Action */}
        <div className="flex flex-col items-start md:items-end text-left md:text-right space-y-4">
          <h3 className="text-xl md:text-2xl font-bold leading-tight text-green-900">
            Interested in a Great Way <br />
            <span className="text-[#4ade80]">Make Money?</span>
          </h3>
          <p className="max-w-xs leading-relaxed text-green-900 font-semibold">
            A supermarket is a self-service shop offering a wide variety of food, beverages and household products.
          </p>
          <button className="mt-4 px-6 py-3 bg-green-600 text-white cursor-pointer font-bold rounded-full hover:bg-green-400 transition-colors duration-300 text-2xl">
            Become a Seller
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
