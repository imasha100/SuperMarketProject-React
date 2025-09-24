import React from 'react';

const Subscription = () => {
  return (
    <div className="bg-green-700 py-12 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto rounded-3xl p-8 md:p-10 lg:p-12 bg-green-400">
        <div className="flex flex-col lg:flex-row items-center justify-between text-center lg:text-left space-y-8 lg:space-y-0 lg:space-x-12">
          {/* Text Content */}
          <div className="flex-1 max-w-lg lg:max-w-none">
            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
              Subscribe to <span className="bg-green-300 text-gray-900 px-2 rounded-md">Newsletter</span>
            </h2>
          </div>

          {/* Input and Button */}
          <div className="flex-1 w-full max-w-md lg:max-w-lg">
            <form className="flex w-full bg-white rounded-full overflow-hidden p-2 shadow-lg">
              <input
                type="email"
                placeholder="Enter your email .."
                className="flex-1 min-w-0 p-3 bg-transparent text-gray-800 placeholder-gray-500 focus:outline-none"
              />
              <button
                type="submit"
                className="bg-teal-500 text-white font-semibold py-3 px-6 rounded-full cursor-pointer hover:bg-teal-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
