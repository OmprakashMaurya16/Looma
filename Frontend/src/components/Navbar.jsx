import React, { useState } from "react";
import { assets } from "../assets/images/assets";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex items-center justify-between py-5 font-medium border-b px-5 relative">
      <Link to={"/"}>
        <img src={assets.logo} alt="logo" className="w-40" />
      </Link>

      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p>HOME</p>
          <hr className="w-1/2 h-[2px] bg-gray-700 border-0 hidden" />
        </NavLink>
        <NavLink to="/collection" className="flex flex-col items-center gap-1">
          <p>COLLECTION</p>
          <hr className="w-1/2 h-[2px] bg-gray-700 border-0 hidden" />
        </NavLink>
        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p>ABOUT</p>
          <hr className="w-1/2 h-[2px] bg-gray-700 border-0 hidden" />
        </NavLink>
        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          <p>CONTACT</p>
          <hr className="w-1/2 h-[2px] bg-gray-700 border-0 hidden" />
        </NavLink>
      </ul>

      <div className="flex items-center gap-6">
        <img
          src={assets.search_icon}
          alt="search icon"
          className="w-5 cursor-pointer"
        />

        <div className="relative group w-6 h-6 flex items-center justify-center">
          <img
            src={assets.profile_icon}
            alt="profile icon"
            className="w-5 h-5 cursor-pointer"
          />
          <div className="hidden group-hover:block absolute -top-0 -right-1 mt-2 w-40 bg-slate-100 rounded shadow-lg z-10">
            <div className="flex flex-col gap-4 py-3 px-5 text-gray-500">
              <p className="cursor-pointer hover:text-black">My Profile</p>
              <p className="cursor-pointer hover:text-black">Orders</p>
              <p className="cursor-pointer hover:text-black">Logout</p>
            </div>
          </div>
        </div>

        <Link
          to="/cart"
          className="relative w-6 h-6 flex items-center justify-center"
        >
          <img src={assets.cart_icon} alt="cart icon" className="w-5 h-5" />
          <p className="absolute -top-1 -right-1 bg-black rounded-full text-white w-4 h-4 flex items-center justify-center text-[10px]">
            3
          </p>
        </Link>

        <img
          src={assets.menu_icon}
          alt="menu icon"
          className="w-6 h-6 cursor-pointer sm:hidden"
          onClick={() => setMenuOpen(true)}
        />
      </div>

      <div
        className={`fixed top-0 right-0 h-full bg-white shadow-md sm:hidden z-20 w-3/4 transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-5 py-4 border-b">
          <p className="text-lg font-medium">Menu</p>
          <button
            onClick={() => setMenuOpen(false)}
            className="text-gray-600 hover:text-black"
          >
            Back
          </button>
        </div>

        <ul className="flex flex-col items-center gap-4 py-5 text-sm text-gray-700">
          <NavLink
            to="/"
            className="hover:text-black"
            onClick={() => setMenuOpen(false)}
          >
            HOME
          </NavLink>
          <NavLink
            to="/collection"
            className="hover:text-black"
            onClick={() => setMenuOpen(false)}
          >
            COLLECTION
          </NavLink>
          <NavLink
            to="/about"
            className="hover:text-black"
            onClick={() => setMenuOpen(false)}
          >
            ABOUT
          </NavLink>
          <NavLink
            to="/contact"
            className="hover:text-black"
            onClick={() => setMenuOpen(false)}
          >
            CONTACT
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
