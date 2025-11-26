import React from "react";
import ShopContext from "../context/ShopContext";
import { Link } from "react-router-dom";

const ProductItems = ({ id, image, name, price }) => {
  const { currency } = React.useContext(ShopContext);
  return (
    <Link to={`/product/${id}`} className="cursor-pointer block">
      <div className="bg-gray-100 border-gray-50 rounded-xl shadow-sm hover:shadow-md transition p-2">
        <div className="overflow-hidden rounded-lg">
          <img
            src={image[0]}
            alt="productImage"
            className="w-full object-cover hover:scale-110 transition-transform duration-300"
          />
        </div>

        <div className="mt-3">
          <p className="text-gray-800 font-medium text-sm truncate">{name}</p>

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
