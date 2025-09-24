import React from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

// Import local images from assets
import manInSupermarket from '../assets/img1.png';
import womanShopping from '../assets/img2.jpg';
import handsWriting from '../assets/img3.jpg';
import manWithReceipt from '../assets/img4.jpg';

// Blog post data
const blogPosts = [
  {
    image: manInSupermarket,
    label: 'Tutorial',
    date: '10 June 2024',
    title: 'March retail sales, foot traffic take a dip',
  },
  {
    image: womanShopping,
    label: 'Interview',
    date: '10 June 2024',
    title: 'Kroger ready to expand technology reach',
  },
  {
    image: handsWriting,
    label: 'News',
    date: '10 June 2024',
    title: "Coborn's to acquire Sullivan's Foods in Illinois",
  },
  {
    image: manWithReceipt,
    label: 'Updates',
    date: '10 June 2024',
    title: 'Whole Foods announces layoffs, restructuring',
  },
];

// Blog Card Component
const BlogCard = ({ post }) => (
  <div className="flex-shrink-0 w-72 bg-white rounded-xl shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300 cursor-pointer">
    <div className="relative">
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-40 object-cover"
      />
      <span className="absolute top-4 left-4 bg-gray-900 text-white text-xs font-semibold px-3 py-1 rounded-full">
        {post.label}
      </span>
    </div>
    <div className="p-4">
      <p className="text-sm text-teal-500 mb-1">{post.date}</p>
      <h3 className="text-base font-semibold text-gray-800 leading-tight">
        {post.title}
      </h3>
    </div>
  </div>
);

// Main Section
const NewsBlogSection = () => {
  return (
    <div className="py-16 bg-gray-50 font-sans px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900">
            Latest <span className="text-teal-500">News & Blog</span>
          </h2>
          <div className="flex space-x-4">
            <button className="p-3 rounded-full border border-gray-300 text-gray-500 hover:bg-gray-200 transition-colors duration-200">
              <FaArrowLeft className="text-lg" />
            </button>
            <button className="p-3 rounded-full border border-gray-300 text-gray-500 hover:bg-gray-200 transition-colors duration-200">
              <FaArrowRight className="text-lg" />
            </button>
          </div>
        </div>

        {/* Blog Cards Container */}
        <div className="flex space-x-6 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
          {blogPosts.map((post, index) => (
            <BlogCard key={index} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsBlogSection;
