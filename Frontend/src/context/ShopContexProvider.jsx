import ShopContext from "./ShopContext";
import { products } from "../assets/assets";
import { useState } from "react";

const ShopContextProvider = (props) => {
  const currency = "$";
  const deliveryFee = 10.0;
  const [search, setSearch] = useState("");
  const [showSearchBar, setShowSearchBar] = useState(false);

  const value = {
    products,
    currency,
    deliveryFee,
    search,
    setSearch,
    showSearchBar,
    setShowSearchBar,
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
