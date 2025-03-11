import React from "react";
import { Link } from "react-router-dom";
import { FiArrowDown } from "react-icons/fi";
import bikerider from "../assets/bikeRider.png";
import jacket from "../assets/jacket.png";
import helmet from "../assets/helmet.png";

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-r from-black to-gray-900 text-white py-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
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

        {/* Right Image (Motorcycle) */}
        <div className="relative w-full md:w-[450px] lg:w-[600px] xl:w-[700px] mt-10 md:mt-0 flex justify-center">
          <img
            src={bikerider}
            alt="Motorbike Rider"
            className="w-full max-w-xs sm:max-w-md md:max-w-lg drop-shadow-lg"
          />
        </div>
      </div>

      {/* Arrow and Categories in the Same Line */}
      <div className="mt-12 flex items-center justify-center gap-6 w-full max-w-6xl mx-auto">
        {/* Arrow */}
        <FiArrowDown size={32} className="text-white animate-bounce" />

        {/* Categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-4xl px-4">
          {/* Category: Helmets */}
          <div className="flex flex-col items-center bg-gray-800 p-4 sm:p-6 rounded-xl shadow-lg w-full">
            <img src={helmet} alt="Helmet" className="w-24 h-24 object-contain mb-4" />
            <p className="text-white text-base sm:text-lg font-medium">Helmets</p>
          </div>

          {/* Category: Jackets */}
          <div className="flex flex-col items-center bg-gray-800 p-4 sm:p-6 rounded-xl shadow-lg w-full">
            <img src={jacket} alt="Jacket" className="w-24 h-24 object-contain mb-4" />
            <p className="text-white text-base sm:text-lg font-medium">Jackets</p>
          </div>

          {/* Category: Accessories */}
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
