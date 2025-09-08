import React from "react";
import { assets } from "../assets/images/assets";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-700 w-full mt-10">
      <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col sm:flex-row sm:justify-between sm:items-start gap-10">
        <div className="sm:flex-[1] max-w-xs sm:max-w-none">
          <img src={assets.logo} alt="logoImage" className="mb-5 w-50" />
          <p className="text-gray-600 max-w-96">
            We provide high-quality products and excellent customer
            service,bringing you the best shopping experience with every order.
          </p>
        </div>
        <div className="sm:flex-[1] flex justify-between gap-20 max-w-2xl">
          <div>
            <p className="text-lg font-semibold mb-4">COMPANY</p>
            <ul className="flex flex-col gap-2 text-gray-500">
              <li>Home</li>
              <li>About us</li>
              <li>Delivery</li>
              <li>Privacy policy</li>
            </ul>
          </div>
          <div>
            <p className="text-lg font-semibold mb-4">GET IN TOUCH</p>
            <ul className="flex flex-col gap-2 text-gray-500">
              <li>+1-0000-0000-0000</li>
              <li>looma.clothing@gmail.com</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t  pt-4 text-center text-gray-500 text-sm mb-5">
        Copyright {new Date().getFullYear()}@ Looma.com - All Right Reserved.
      </div>
    </footer>
  );
};

export default Footer;
