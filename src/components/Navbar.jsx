import { FaPhoneAlt, FaShoppingCart, FaHeart, FaUser, FaSearch, FaGift } from "react-icons/fa";
import logo from "../assets/cart.jpeg"

export default function Navbar() {
  return (
    <header className="bg-[#0f2c3f] text-white w-full fixed top-0 left-0 z-50">

      {/* Top Section */}
      <div className="flex items-center justify-between px-10 py-6">
        
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="w-15 h-15" />
          <h1 className="text-5xl font-bold">
            <span className="text-green-500">Xtra</span>Market
          </h1>
        </div>

        {/* Search Bar */}
        <div className="flex items-center bg-[#2b3d4f] rounded-full px-4 py-2 w-1/3">
          <input
            type="text"
            placeholder="What are you looking for?"
            className="bg-transparent outline-none text-sm flex-1 placeholder-gray-300"
          />
          <button className="bg-[#1e3345] p-2 rounded-full">
            <FaSearch className="text-white" />
          </button>
        </div>

        {/* Contact + Icons */}
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <FaPhoneAlt className="text-green-400" />
            <p className="text-sm cursor-pointer hover:text-green-600">
              Call Center <br />
              <span className="font-bold text-lg">818-555 67 88</span>
            </p>
          </div>

          <div className="flex items-center space-x-4">
            <div className="relative">
              <FaShoppingCart className="text-xl cursor-pointer hover:text-green-600" />
              <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full ">
                0
              </span>
            </div>
            <FaHeart className="text-xl cursor-pointer hover:text-green-600" />
            <FaUser className="text-xl cursor-pointer hover:text-green-600" />
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="flex items-center justify-between bg-[#17384d] px-8 py-3 mt-2">
        <ul className="flex space-x-6 text-xl font-medium">
          <li className="cursor-pointer hover:text-green-400">New Products</li>
          <li className="flex items-center space-x-2 cursor-pointer hover:text-green-400">
            <span>Best Sales</span>
            <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">HOT</span>
          </li>
          <li className="cursor-pointer hover:text-green-400">% Special Offers</li>
          <li className="cursor-pointer hover:text-green-400">Quick Find</li>
          <li className="cursor-pointer hover:text-green-400">News</li>
          <li className="cursor-pointer hover:text-green-400">Contact</li>
        </ul>

        {/* Daily Offers Button */}
        <button className="flex items-center space-x-2 bg-green-500 hover:bg-white text-white hover:text-green-600 px-4 py-2 rounded-full shadow-md cursor-pointer text-xl">
          <FaGift />
          <span>Daily Offers</span>
        </button>
      </nav>
    </header>
  );
}
