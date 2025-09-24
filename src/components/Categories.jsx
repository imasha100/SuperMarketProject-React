import React from 'react';
import FishesImage from '../assets/fish1.png';
import FruitsImage from '../assets/fruits.png';
import BreadsImage from '../assets/bread.png';
import MilksImage from '../assets/milk.png';
import CleaningImage from '../assets/fish1.png';
import ReadyImage from '../assets/fruits.png';

const categories = [
  { image: FishesImage, title: 'Fishes & Raw Meats' },
  { image: FruitsImage, title: 'Fruits & Vegetables' },
  { image: BreadsImage, title: 'Breads & Sweets' },
  { image: MilksImage, title: 'Milks & Proteins' },
  { image: CleaningImage, title: 'Cleaning Materials' },
  { image: ReadyImage, title: 'Ready to Use Foods' },
];

const CategoryCard = ({ image, title }) => (
  <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 p-6 flex flex-col items-center justify-center text-center cursor-pointer min-h-[180px] w-full max-w-[180px]">
    <div className="mb-4">
      <img src={image} alt={title} className="w-16 h-16 object-contain" />
    </div>
    <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
  </div>
);

const CategoriesSection = () => {
  return (
    <div className="py-16 bg-gray-50 font-sans px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl sm:text-6xl font-bold text-gray-900 text-center mb-12">
          Discover our <span className="bg-green-500 px-2 rounded-md">Categories</span>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 justify-items-center">
          {categories.map((category, index) => (
            <CategoryCard key={index} image={category.image} title={category.title} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoriesSection;
