import React from 'react';
import { FaTruck, FaDollarSign, FaCreditCard, FaHeadset } from 'react-icons/fa';

const features = [
  {
    icon: FaTruck,
    title: 'Free shipping',
    description: 'On all orders over $50.00',
  },
  {
    icon: FaDollarSign,
    title: 'Return for free',
    description: 'Returns are free 3 days',
  },
  {
    icon: FaCreditCard, 
    title: 'Secure Payment',
    description: 'Your payments 100% safe',
  },
  {
    icon: FaHeadset,
    title: '24/7 Support',
    description: 'Contact us anytime want',
  },
];

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="flex flex-col items-center text-center p-4 rounded-3xl">
    <div className="bg-teal-100 text-teal-500 rounded-full p-4 mb-3">
      <Icon className="text-3xl" />
    </div>
    <h3 className="text-2xl font-semibold text-green-900 mb-1">{title}</h3>
    <p className="text-xl text-black">{description}</p>
  </div>
);

const FeaturesSection = () => {
  return (
    <div className="relative -mt-20 z-20 w-full px-4 md:px-8 lg:px-16 mb-16 rounded-full"> {/* -mt-20 to overlap with hero, z-20 to be on top */}
      <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-xl p-6 md:p-8 lg:p-10 flex flex-col md:flex-row justify-around items-center space-y-6 md:space-y-0 md:space-x-6">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;