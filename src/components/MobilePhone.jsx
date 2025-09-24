import React from "react";
import appStore from "../assets/appStore1.png"; 
import googlePlay from "../assets/ggl1.png"; 
import phone1 from "../assets/phone.png"; 
import phone2 from "../assets/mobile1.png"; 

const MobileSection = () => {
  return (
    <section className="flex justify-center bg-green-500 rounded-full">
      <div className="relative w-full max-w-7xl bg-green-500 rounded-3xl overflow-hidden px-8 md:px-16 py-16 lg:py-24">
        {/* Content */}
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between">
          {/* Left Text Content */}
          <div className="text-white max-w-xl">
            <h3 className="text-6xl font-light mb-2">XtraSupermarket</h3>
            <h1 className="text-5xl font-extrabold leading-tight mb-6">
              Faster on <br /> Mobile
            </h1>
            <p className="text-xl leading-relaxed mb-8">
              A supermarket is a self-service shop offering a wide variety of
              food, beverages and household products, organized into sections.
            </p>
            {/* Store Buttons */}
            <div className="flex gap-4">
              <img
                src={appStore}
                alt="App Store"
                className="h-12 cursor-pointer"
              />
              <img
                src={googlePlay}
                alt="Google Play"
                className="h-12 cursor-pointer"
              />
            </div>
          </div>

          {/* Right Phone Images */}
          <div className="mt-12 lg:mt-0 flex justify-center relative">
            <img
              src={phone1}
              alt="Phone 1"
              className="w-60 md:w-72 lg:w-80 rounded-2xl shadow-xl transform rotate-[-5deg] relative z-20"
            />
            <img
              src={phone2}
              alt="Phone 2"
              className="w-60 md:w-72 lg:w-80 rounded-2xl shadow-xl transform rotate-[5deg] -ml-20 mt-8 relative z-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileSection;
