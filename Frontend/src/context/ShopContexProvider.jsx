import ShopContext from "./ShopContext";
import { products } from "../assets/assets";

const ShopContextProvider = (props) => {
  const currency = "USD";
  const deliveryFee = 10.0;

  const value = {
    products,
    currency,
    deliveryFee,
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
