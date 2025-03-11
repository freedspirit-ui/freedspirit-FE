import React from "react";
import { Link } from "react-router-dom";
import biker from "../assets/biker.png";
import jacket from "../assets/jacket.png";
import helmet from "../assets/helmet.png";

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-r from-black to-gray-900 text-white py-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center relative">
        
        {/* Left Content */}
        <div className="max-w-xl space-y-6 text-center md:text-left">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold leading-tight">
            Find the Best Motorbike Parts For{" "}
            <span className="text-red-500">Your Vehicle</span>
          </h1>
          <p className="text-base sm:text-lg text-gray-300">
            "Rev Up Your Ride with Premium Motorcycle Parts - Unleash the Power of Performance and Style!"
          </p>
          <Link
            to="/shop"
            className="inline-block bg-red-500 hover:bg-red-800 text-white font-semibold px-5 py-3 rounded-lg shadow-lg transition-all"
          >
            Shop Now
          </Link>
        </div>

        {/* Biker Image - Absolutely Centered */}
        <div className="relative w-full flex justify-center items-center mt-6 md:mt-0">
          <div className="relative w-48 sm:w-60 md:w-[450px] lg:w-[600px] xl:w-[700px] flex justify-center">
            <img
              src={biker}
              alt="Motorbike Rider"
              className="w-full mx-auto transform scale-x-[-1]"
            />
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="mt-12 flex flex-col items-center justify-center gap-6 w-full max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-4xl px-4">
          {/* Helmets */}
          <div className="flex flex-col items-center bg-gray-800 p-4 sm:p-6 rounded-xl shadow-lg w-full">
            <img src={helmet} alt="Helmet" className="w-24 h-24 object-contain mb-4" />
            <p className="text-white text-base sm:text-lg font-medium">Helmets</p>
          </div>

          {/* Jackets */}
          <div className="flex flex-col items-center bg-gray-800 p-4 sm:p-6 rounded-xl shadow-lg w-full">
            <img src={jacket} alt="Jacket" className="w-24 h-24 object-contain mb-4" />
            <p className="text-white text-base sm:text-lg font-medium">Jackets</p>
          </div>

          {/* Accessories */}
          <div className="flex flex-col items-center bg-gray-800 p-4 sm:p-6 rounded-xl shadow-lg w-full">
            <img src={helmet} alt="Accessories" className="w-24 h-24 object-contain mb-4" />
            <p className="text-white text-base sm:text-lg font-medium">Accessories</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
