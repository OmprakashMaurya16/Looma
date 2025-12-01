import React, { useEffect, useState } from "react";
import axios from "axios";
import { backendURL, currency } from "../App";
import { toast } from "react-toastify";

const ListPage = ({ token }) => {
  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
      const response = await axios.get(backendURL + "/api/product/list");
      if (response.data.success) {
        setList(response.data.products);
      } else {
        console.error("Error fetching list:", response.data.message);
        toast.error("Error fetching product list");
      }
    } catch (error) {
      console.error("Error fetching list:", error.message);
    }
  };

  const removeProduct = async (productId) => {
    try {
      const response = await axios.post(
        backendURL + "/api/product/delete",
        { id: productId },
        { headers: { token } }
      );

      if (response.data.success) {
        toast.success("Product removed successfully");
        await fetchList();
      } else {
        toast.error("Error removing product: " + response.data.message);
      }
    } catch (error) {
      console.error("Error removing product:", error.message);
    }
  };

  useEffect(() => {
    fetchList();
  }, []);
  return (
    <>
      <p className="mb-2">All Product List</p>
      <div className="flex flex-col gap-2">
        <div className="hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center bg-gray-100 px-2 py-1 text-sm">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b className="text-center">Actions</b>
        </div>

        {list.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-[1fr_3fr_1fr] md:grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center gap-2 py-1 px-2 border text-sm"
          >
            <img className="w-12" src={item.images[0]} alt={item.name} />
            <p>{item.name}</p>
            <p>{item.category}</p>
            <p>
              {currency}
              {item.price}
            </p>
            <p
              className="text-right md:text-center cursor-pointer text-lg"
              onClick={() => removeProduct(item._id)}
            >
              X
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default ListPage;
