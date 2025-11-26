import React from "react";
import { assets } from "../assets/assets";

const OurPolicy = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700">
      <div>
        <img
          src={assets.exchange_icon}
          alt="Exchange Icon"
          className="w-12 m-auto mb-5"
        />
        <p className="font-semibold">
          Easy and hassle-free exchanges within 30 days of purchase.
        </p>
        <p className="text-gray-400">
          We prioritize your satisfaction and convenience.
        </p>
      </div>

      <div>
        <img
          src={assets.quality_icon}
          alt="Quality Icon"
          className="w-12 m-auto mb-5"
        />
        <p className="font-semibold">
          We ensure top-notch quality in every product we offer.
        </p>
        <p className="text-gray-400">
          Our commitment to excellence guarantees your satisfaction.
        </p>
      </div>

      <div>
        <img
          src={assets.support_img}
          alt="Support Icon"
          className="w-10 m-auto mb-5"
        />
        <p className="font-semibold">
          24/7 customer support to assist you with any inquiries or issues.
        </p>
        <p className="text-gray-400">
          We're here to help you every step of the way.
        </p>
      </div>
    </div>
  );
};

export default OurPolicy;
