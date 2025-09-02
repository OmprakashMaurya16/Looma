import React from "react";
import { assets } from "../assets/images/assets";

const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row border border-gray-400 px-10">
      <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0 px-6">
        <div className="text-[#414141]">
          <div className="flex items-center gap-2 mb-3">
            <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
            <p className="font-medium text-sm md:text-base">OUR BESTSELLERS</p>
          </div>

          <h1 className="prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed font-bold">
            Latest Arrivals
          </h1>

          <div className="flex items-center gap-2 mt-4">
            <p className="font-medium text-sm md:text-base cursor-pointer hover:underline">
              SHOP NOW
            </p>
            <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
          </div>
        </div>
      </div>

      <div className="w-full sm:w-1/2 flex items-center justify-center">
        <img src={assets.hero_img} alt="Hero" className="w-full sm:w-1/2" />
      </div>
    </div>
  );
};

export default Hero;
