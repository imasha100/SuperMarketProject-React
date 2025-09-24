import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaPhoneAlt, FaEnvelope, FaChevronRight } from 'react-icons/fa';
import { BsCheckCircleFill, BsFileTextFill, BsLockFill, BsArrowRepeat } from 'react-icons/bs';

// Assuming you have an SVG logo or can import an image for your logo
// import Logo from './path-to-your-logo.svg';

const Footer = () => {
  return (
    <footer className="bg-white-950 text-gray-300 py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {/* Column 1: Brand and Socials */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center space-x-2 mb-4">
            {/* Replace with your logo component or image */}
            {/* <Logo className="h-8 w-8 text-teal-500" /> */}
            <span className="text-2xl font-bold text-white">XtraSupermarket</span>
          </div>
          <p className="text-lg leading-relaxed mb-6 max-w-sm text-green-900 font-semibold">
            "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind."
          </p>
          <div className="flex space-x-4">
            <a href="#" className="p-3 rounded-full bg-[#0f2c3f] hover:bg-green-500 transition-colors duration-300">
              <FaFacebookF />
            </a>
            <a href="#" className="p-3 rounded-full bg-[#0f2c3f] hover:bg-green-500 transition-colors duration-300">
              <FaTwitter />
            </a>
            <a href="#" className="p-3 rounded-full bg-[#0f2c3f] hover:bg-green-500 transition-colors duration-300">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Column 2: Useful Links */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h3 className="text-xl font-semibold text-green-500 mb-4">Useful Links</h3>
          <ul className="space-y-4 text-green-600 font-semibold">
            <li className="flex items-center space-x-2">
              <BsCheckCircleFill className="text-[#0f2c3f] text-xl" />
              <a href="#" className="hover:text-green-900 transition-colors duration-300">Help Center</a>
            </li>
            <li className="flex items-center space-x-2">
              <BsFileTextFill className="text-[#0f2c3f] text-xl" />
              <a href="#" className="hover:text-green-900 transition-colors duration-300">Terms & Conditions</a>
            </li>
            <li className="flex items-center space-x-2">
              <BsLockFill className="text-[#0f2c3f] text-xl" />
              <a href="#" className="hover:text-green-900 transition-colors duration-300">Privacy Policy</a>
            </li>
            <li className="flex items-center space-x-2">
              <BsArrowRepeat className="text-[#0f2c3f] text-xl" />
              <a href="#" className="hover:text-green-900 transition-colors duration-300">Refund Policy</a>
            </li>
            <li className="flex items-center space-x-2">
              <FaPhoneAlt className="text-[#0f2c3f] text-xl" />
              <span>+12 534 565 896</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaEnvelope className="text-[#0f2c3f] text-xl" />
              <span>info@xtramarket.com</span>
            </li>
          </ul>
        </div>

        {/* Column 3: Call to Action */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h3 className="text-xl font-semibold text-white mb-4">
            Interested in a Great Way <br />
            <span className="text-green-600">Make Money?</span>
          </h3>
          <p className="text-lg text-green-900 font-semibold leading-relaxed mb-6 max-w-sm">
            A supermarket is a self-service shop offering a wide variety of food, beverages and household products.
          </p>
          <button className="bg-green-500 text-white font-semibold py-3 px-8 rounded-full hover:bg-green-600 cursor-pointer text-xl transition-colors duration-300">
            Become a Seller
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;