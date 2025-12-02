import React from "react";
import ShopContext from "../context/ShopContext";
import { Link } from "react-router-dom";

const ProductItems = ({ id, images, name, price }) => {
  const { currency } = React.useContext(ShopContext);
  const firstImage = Array.isArray(images) ? images[0] : images || "";

  return (
    <Link to={`/product/${id}`} className="cursor-pointer block h-full">
      <div className="bg-gray-100 border-gray-50 rounded-xl shadow-sm hover:shadow-md transition p-2 h-full">
        <div className="overflow-hidden rounded-lg aspect-square w-full bg-white">
          <img
            src={firstImage}
            alt="productImage"
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
          />
        </div>

        <div className="mt-3">
          <p className="text-gray-800 font-medium text-sm leading-snug h-10 overflow-hidden">
            {name}
          </p>
          <p className="text-sm font-semibold text-gray-600 mt-1">
            {currency}
            {price}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProductItems;
