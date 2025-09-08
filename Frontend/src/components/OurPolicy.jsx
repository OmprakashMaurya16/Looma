import React from "react";
import { assets } from "../assets/images/assets";

const OurPolicy = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-xs sm:text-sm md:text-base text-gray-700 text-center">
      <div>
        <img
          src={assets.exchange_icon}
          alt="Exchange Policy"
          className="w-12 m-auto mb-5"
        />
        <p className="font-semibold">Hassle-Free Exchanges</p>
        <p className="text-gray-400">
          Easily exchange products if they don’t meet your expectations.
        </p>
      </div>
      <div>
        <img
          src={assets.quality_icon}
          alt="Return Policy"
          className="w-12 m-auto mb-5"
        />
        <p className="font-semibold">7-Day Returns</p>
        <p className="text-gray-400">
          Return any item within 7 days, no questions asked.
        </p>
      </div>
      <div>
        <img
          src={assets.support_img}
          alt="Customer Support"
          className="w-12 m-auto mb-5"
        />
        <p className="font-semibold">24/7 Customer Support</p>
        <p className="text-gray-400">
          Our friendly team is here to help you anytime, day or night.
        </p>
      </div>
    </div>
  );
};

export default OurPolicy;
