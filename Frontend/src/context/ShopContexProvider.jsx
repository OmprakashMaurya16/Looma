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
  const [cartItems, setCartItems] = useState(() => {
    try {
      const saved = localStorage.getItem("cart");
      return saved ? JSON.parse(saved) : {};
    } catch (e) {
      return {};
    }
  });
  const [products, setProducts] = useState([]);
  const [token, setToken] = useState(localStorage.getItem("token") || "");
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

    if (token) {
      try {
        await axios.post(
          backendURL + "/api/cart/add",
          {
            itemId,
            size,
          },
          {
            headers: { token },
          }
        );
      } catch (error) {
        console.error("Error updating cart on server:", error);
      }
    }
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

  const updateQuantity = async (itemId, size, quantity) => {
    const cartData = structuredClone(cartItems);

    cartData[itemId][size] = quantity;

    setCartItems(cartData);

    if (token) {
      try {
        await axios.post(
          backendURL + "/api/cart/update",
          {
            itemId,
            size,
            quantity,
          },
          {
            headers: { token },
          }
        );
      } catch (error) {
        console.error("Error updating cart on server:", error);
      }
    }
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

  // Persist cart to localStorage on change
  useEffect(() => {
    try {
      localStorage.setItem("cart", JSON.stringify(cartItems));
    } catch (e) {
      // ignore storage errors
    }
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

  const getUserCart = async (token) => {
    try {
      const response = await axios.get(backendURL + "/api/cart/get", {
        headers: { token },
      });

      if (response.data.success) {
        setCartItems(response.data.cartData);
      }
    } catch (error) {
      console.error("Error fetching user cart data:", error);
    }
  };

  useEffect(() => {
    getProductsData();
  }, []);

  useEffect(() => {
    const stored = localStorage.getItem("token");
    if (!token && stored) {
      setToken(stored);
      getUserCart(stored);
    }
  }, [token]);

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
    setCartItems,
    getCartCount,
    updateQuantity,
    getCartAmount,
    navigate,
    setToken,
    token,
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
