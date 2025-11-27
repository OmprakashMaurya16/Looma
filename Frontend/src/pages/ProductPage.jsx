import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ShopContext from "../context/ShopContext";
import { assets } from "../assets/assets";

const ProductPage = () => {
  const { productId } = useParams();
  const { products, currency } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
      }
      return null;
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  return productData ? (
    <>
      <div className="w-full flex flex-col sm:flex-row gap-12 border-t pt-10 border-gray-400">
        <div className="w-full sm:w-1/2 flex sm:flex-row flex-col-reverse gap-3">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-hidden justify-between sm:justify-normal w-full sm:w-[15%]">
            {productData.image.map((item, index) => (
              <img
                src={item}
                key={index}
                alt=""
                className="w-[24%] sm:w-full sm:mb-3 shrink-0 cursor-pointer shadow-md border-2 border-gray-50"
                onClick={() => setImage(item)}
              />
            ))}
          </div>

          <div className="w-full sm:w-[80%]">
            <img
              src={image}
              alt=""
              className="w-full h-auto object-cover border-gray-50 shadow-md border-2"
            />
          </div>
        </div>

        <div className="w-full sm:w-1/2">
          <h1 className="text-2xl font-medium mt-2">{productData.name}</h1>

          <div className="flex items-center gap-1 mt-2">
            <img src={assets.star_icon} alt="" className="w-3" />
            <img src={assets.star_icon} alt="" className="w-3" />
            <img src={assets.star_icon} alt="" className="w-3" />
            <img src={assets.star_icon} alt="" className="w-3" />
            <img src={assets.star_dull_icon} alt="" className="w-3" />
            <p className="pl-2">(122)</p>
          </div>

          <p className="mt-5 text-3xl font-medium">
            {currency}
            {productData.price}
          </p>

          <p className="mt-5 text-gray-500 md:w-4/5">
            {productData.description}
          </p>

          <div className="flex flex-col gap-4 my-8">
            <p>Select Size</p>
            <div className="flex gap-2">
              {productData.sizes.map((item, index) => (
                <button
                  key={index}
                  className={`border py-2 px-4 bg-gray-100 ${
                    item === size ? "border-orange-500" : ""
                  }`}
                  onClick={() => setSize(item)}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <button className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700">
            ADD TO CART
          </button>

          <hr className="mt-8 w-4/5" />

          <div className="text-sm text-gray-600 mt-5 flex flex-col gap-1">
            <p>100% Original product.</p>
            <p>Cash on delivery is available on this product.</p>
            <p>Easy returns and replacements within 7 days.</p>
          </div>
        </div>
      </div>

      <div className="w-full mt-20">
        <div className="w-full border border-gray-200">
          <div className="flex">
            <b className="px-5 py-3 text-sm border ">Description</b>
            <p className="px-5 py-3 text-sm border">Reviews (122)</p>
          </div>

          <div className="flex flex-col gap-4 px-6 py-6 text-sm text-gray-500 border">
            <p>
              An e-commerce website is an online platform that facilitates the
              buying and selling of products or services over the internet. It
              serves as a virtual marketplace where businesses and individuals
              can showcase their products, interact with customers, and conduct
              transactions without a physical presence.
            </p>

            <p>
              E-commerce websites typically display products or services along
              with detailed descriptions, images, prices, and any available
              variations such as sizes or colors. Each product usually has its
              own dedicated page with relevant information.
            </p>
          </div>
        </div>
      </div>
    </>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default ProductPage;
