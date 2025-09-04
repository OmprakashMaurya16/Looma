import { product } from "../assets/DummyImg/assets.js";
import ShopContext from "./ShopContext.js";

const ShopContextProvider = ({ childern }) => {
  const currency = "₹";
  const deliveryFee = 10;
  const value = {
    product,
    currency,
    deliveryFee,
  };

  return <ShopContext.Provider value={value}>{childern}</ShopContext.Provider>;
};

export default ShopContextProvider;
