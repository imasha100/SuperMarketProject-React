import React from 'react';

const Subscription = () => {
  return (
    <div className="flex justify-center items-center bg-green-100 p-4 md:p-8 rounded-full shadow-xl m-4 min-w-screen mt-10 mb-0">
      <div className="flex flex-col md:flex-row items-center w-full max-w-4xl p-6 md:p-10 rounded-lg">
        <h2 className="text-green-900 text-2xl md:text-4xl font-bold mb-4 md:mb-0 md:mr-8">
          Subscribe to <span className="text-[#00e676]">Newsletter</span>
        </h2>
        <div className="flex flex-1 w-full md:max-w-md bg-white rounded-full overflow-hidden shadow-lg">
          <input
            type="email"
            placeholder="Enter your email..."
            className="flex-1 px-6 py-3 text-gray-700 outline-none focus:ring-2 focus:ring-[#00e676]"
          />
          <button className="bg-[#00e676] text-white font-bold py-3 px-6 cursor-pointer rounded-full transition duration-300 ease-in-out hover:bg-[#00c853] focus:outline-none focus:ring-2 focus:ring-[#00e676] focus:ring-opacity-50">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subscription;