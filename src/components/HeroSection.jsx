import React from "react";
import HeroImage from "../assets/hero.png";

export default function HeroSection() {
  return (
    <section className="bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-16 flex flex-col lg:flex-row items-end">
        
        <div className="lg:w-1/2 space-y-8">
          <h2 className="text-green-400 font-semibold text-7xl">XtraSupermarket</h2>
          <h1 className="text-4xl md:text-5xl font-bold text-black">
            Fresher than Ever
          </h1>
          <p className="text-gray-500 text-xl">
            A supermarket is a self-service shop offering a wide variety of food, 
            beverages and household products, organized into sections.
          </p>

         <div className="flex justify-center space-x-6 mt-10">
            <button className="bg-[#0f2c3f] text-white px-6 py-3 rounded-full text-2xl font-semibold hover:bg-green-400 cursor-pointer transition">
                25% Off Festival
            </button>
            <button className="border border-gray-400 text-2xl cursor-pointer bg-white text-gray-700 px-6 py-3 rounded-full font-semibold hover:bg-green-400 transition">
                Discover Shop
            </button>
         </div>

        </div>

        
        <div className="mt-10 lg:mt-30 flex justify-center relative">
            <img
                src={HeroImage}
                alt="Supermarket Hero"
                className="w-full max-w-lg  "
            />
        </div>

      </div>
    </section>
  );
}
