import { products } from "../assets/DummyImg/assets.js";
import ShopContext from "./ShopContext.js";

const ShopContextProvider = ({ children }) => {
  const currency = "₹";
  const deliveryFee = 10;
  const value = {
    products,
    currency,
    deliveryFee,
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

export default ShopContextProvider;
