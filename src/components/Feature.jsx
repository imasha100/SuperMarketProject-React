import React from 'react';
import { Truck, RotateCcw, CreditCard, Headset } from 'lucide-react'; 

const Feature = ({ icon: Icon, title, description }) => (
  <div className="flex flex-col items-center p-4 text-center sm:flex-row sm:text-left">
    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-500 ring-2 ring-green-300">
      <Icon size={32} />
    </div>
    <div className="mt-2 sm:ml-4 sm:mt-0">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

const FeatureSection = () => {
  return (
    <div className="flex justify-center p-8">
      <div className="flex max-w-7xl justify-between rounded-full bg-white px-8 py-6 shadow-lg">
        <Feature
          icon={Truck}
          title="Free shipping"
          description="On all orders over $50.00"
        />
        <Feature
          icon={RotateCcw}
          title="Return for free"
          description="Returns are free 3 days"
        />
        <Feature
          icon={CreditCard}
          title="Secure Payment"
          description="Your payments 100% safe"
        />
        <Feature
          icon={Headset}
          title="24/7 Support"
          description="Contact us anytime want"
        />
      </div>
    </div>
  );
};

export default FeatureSection;
