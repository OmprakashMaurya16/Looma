import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="my-10 mt-40 text-sm">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14">
        <div>
          <img src={assets.logo} alt="Logo" className="mb-5 w-32" />
          <p className="w-full md:w-2/3 text-gray-600">
            Discover our most loved products, hand-picked for their exceptional
            quality and popularity among customers.
          </p>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+123 456 7890</li>
            <li>email@example.com</li>
          </ul>
        </div>
      </div>

      <hr className="my-5 border-gray-300" />

      <p className="text-sm text-center text-gray-600">
        Copyright 2024 @ Looma.com. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
