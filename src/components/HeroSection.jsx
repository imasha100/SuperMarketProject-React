import React from 'react';
// Import the right-side image from assets folder
import HeroImage from '../assets/hero.png';

const HeroSection = () => {
  return (
    <section className="bg-white min-h-screen flex items-center justify-center py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center">

        {/* Left Content Area */}
        <div className="lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0 pr-0 lg:pr-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
            <span className="text-green-500 text-7xl ">XtraSupermarket</span>
            <br />
            Fresher than Ever
          </h1>
          <p className=" text-gray-600 mb-8 max-w-md mx-auto lg:mx-0 font-semibold text-xl">
            A supermarket is a self-service shop offering a wide variety
            of food, beverages and household products, organized
            into sections.
          </p>
          <div className="flex justify-center lg:justify-start space-x-4">
            <button className="bg-[#0f2c3f] text-white font-semibold py-3 px-6 rounded-full hover:bg-green-400 cursor-pointer transition-colors duration-300 shadow-lg text-2xl decoration-none focus:outline-none">
              25% Off Festival
            </button>
            <button className="bg-transparent border border-gray-400 text-gray-800 font-semibold py-3 px-6 rounded-full hover:bg-gray-300 cursor-pointer text-2xl transition-colors duration-300 shadow-md decoration-none focus:outline-none">
              Discover Shop
            </button>
          </div>
        </div>

        {/* Right Image Area */}
        <div className="lg:w-1/2 flex justify-center">
          <img
            src={HeroImage}
            alt="Hero"
            className="max-w-full h-auto object-contain transform hover:scale-105 transition-transform duration-500 ease-in-out"
            style={{ maxHeight: '500px' }}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
