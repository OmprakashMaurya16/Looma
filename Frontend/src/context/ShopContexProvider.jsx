import ShopContext from "./ShopContext";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const ShopContextProvider = (props) => {
  const currency = "Rs.";
  const deliveryFee = 49.0;
  const backendURL = import.meta.env.VITE_BACKEND_URL;
  const [search, setSearch] = useState("");
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [cartItems, setCartItems] = useState({});
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const addToCart = async (itemId, size) => {
    let cartData = structuredClone(cartItems);

    if (!size) {
      toast.error("Please select a size before adding to cart.");
      return;
    }

    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        cartData[itemId][size] = 1;
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }

    setCartItems(cartData);
  };

  const getCartCount = () => {
    let count = 0;
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            count += cartItems[items][item];
          }
        } catch (error) {
          console.error("Error calculating cart count:", error);
        }
      }
    }
    return count;
  };

  const updateQuantity = (itemId, size, quantity) => {
    const cartData = structuredClone(cartItems);

    cartData[itemId][size] = quantity;

    setCartItems(cartData);
  };

  const getCartAmount = () => {
    let totalAmount = 0;
    for (const items in cartItems) {
      let itemInfo = products.find((product) => product._id === items);
      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            totalAmount += itemInfo.price * cartItems[items][item];
          }
        } catch (error) {
          console.error("Error calculating cart amount:", error);
        }
      }
    }
    return totalAmount;
  };

  useEffect(() => {
    setCartItems(cartItems);
  }, [cartItems]);

  const getProductsData = async () => {
    try {
      const response = await axios.get(backendURL + "/api/product/list");

      if (response.data.success) {
        setProducts(response.data.products);
      } else {
        console.error("Failed to fetch products data:", response.data.message);
        toast.error("Failed to fetch products data: " + response.data.message);
      }
    } catch (error) {
      console.error("Error fetching products data:", error);
    }
  };

  useEffect(() => {
    getProductsData();
  });

  const value = {
    products,
    currency,
    backendURL,
    deliveryFee,
    search,
    setSearch,
    showSearchBar,
    setShowSearchBar,
    addToCart,
    cartItems,
    getCartCount,
    updateQuantity,
    getCartAmount,
    navigate,
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
