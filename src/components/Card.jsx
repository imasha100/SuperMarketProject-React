import React from 'react';
import { FaHeart, FaExchangeAlt, FaSearch } from 'react-icons/fa';
import { BsStarFill } from 'react-icons/bs';

// Import local images from assets folder
import BananasImage from '../assets/banana.png';
import ShampooImage from '../assets/shampoo1.png';
import WaterImage from '../assets/water.png';
import ChickenImage from '../assets/chicken.png';
import BreadImage from '../assets/bread.png';
import MilkImage from '../assets/shampoo1.png';
import CheeseImage from '../assets/dove.png';
import EggsImage from '../assets/blueberry.png';

// Map images to product keys
const productImages = {
  bananas: BananasImage,
  shampoo: ShampooImage,
  water: WaterImage,
  chicken: ChickenImage,
  bread: BreadImage,
  milk: MilkImage,
  cheese: CheeseImage,
  eggs: EggsImage,
};

// Product data
const products = [
  { id: 1, name: 'Organic Natural Bananas', category: 'Supermarket', price: 79, image: productImages.bananas },
  { id: 2, name: 'Awake Shower Shampoo Gel', category: 'Fishes & Raw Meats', price: 87, image: productImages.shampoo },
  { id: 3, name: 'The Sparkling Mineral Water', category: 'Drinks', price: 99, image: productImages.water },
  { id: 4, name: 'Best Roast Chicken Slices', category: 'Meats', price: 69, image: productImages.chicken },
  { id: 5, name: 'Whole Grain Bread Loaf', category: 'Bakery', price: 45, image: productImages.bread },
  { id: 6, name: 'Fresh Farm Milk 1L', category: 'Dairy', price: 55, image: productImages.milk },
  { id: 7, name: 'Cheddar Cheese Block', category: 'Dairy', price: 120, image: productImages.cheese },
  { id: 8, name: 'Organic Free Range Eggs', category: 'Breakfast', price: 70, image: productImages.eggs },
];

// Product Card Component
const ProductCard = ({ product }) => (
  <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-lg cursor-pointer transition-shadow duration-300 flex-shrink-0 w-64 md:w-72">
    <div className="relative">
      <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-lg mb-4" />
      <div className="absolute top-2 right-2 flex flex-col space-y-2">
        <div className="p-2 bg-white rounded-full shadow-md cursor-pointer hover:scale-110 transition-transform duration-200">
          <FaHeart className="text-gray-500" />
        </div>
        <div className="p-2 bg-white rounded-full shadow-md cursor-pointer hover:scale-110 transition-transform duration-200">
          <FaExchangeAlt className="text-gray-500" />
        </div>
        <div className="p-2 bg-white rounded-full shadow-md cursor-pointer hover:scale-110 transition-transform duration-200">
          <FaSearch className="text-gray-500" />
        </div>
      </div>
    </div>
    <h3 className="text-lg font-semibold text-gray-800 mb-1">{product.name}</h3>
    <p className="text-sm text-gray-500 mb-2">{product.category}</p>
    <div className="flex items-center mb-2">
      {[...Array(5)].map((_, i) => (
        <BsStarFill key={i} className="text-yellow-400 text-sm" />
      ))}
    </div>
    <span className="text-xl font-bold text-gray-900">${product.price}</span>
  </div>
);

// Main Product Section
const ProductSection = () => {
  return (
    <div className="py-16 bg-gray-100 font-sans px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-5xl font-bold text-gray-900">
            Best Seller <span className="text-green-500">Products</span>
          </h2>
          <button className="bg-green-500 hover:bg-green-700 cursor-pointer text-xl text-white font-semibold py-2 px-6 rounded-full transition-colors duration-300">
            View all Products
          </button>
        </div>

        {/* Product Cards Container */}
        <div className="flex space-x-6 overflow-x-auto pb-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductSection;
