import axios from "axios";
import { useToaster } from "../Context/ReactToaster";

const { createContext, useContext } = require("react");

const CartContext = createContext(null);

const CartProvider = ({ children }) => {
  const { itemAddedToCart, showToastMessage, userWarning } = useToaster();

  const addItemToCart = async (Items) => {
    const headers = {
      authorization: `${localStorage.getItem("token")}`,
    };
    const requestBody = {
      product: Items,
    };

    try {
      const res = await axios.post("/api/user/cart", requestBody, {
        headers,
      });
      if (res.status === 201) {
        itemAddedToCart("Item added to cart successfully");
      }
    } catch (err) {
      showToastMessage("Something went wrong");
      userWarning("please try again later");
    }
  };

  const removeItemsFromCart = async (ID, updateCartItem) => {
    const headers = {
      authorization: `${localStorage.getItem("token")}`,
    };

    try {
      const response = await axios.delete(`/api/user/cart/${ID}`, { headers });
      if (response.status === 200) {
        showToastMessage("Item removed from cart successfully");
        updateCartItem(response.data.cart);
      }
    } catch (err) {
      showToastMessage("Something went wrong");
      userWarning("please try again later");
    }
  };

  const quantityHandler = async (ID, TYPE, updateCartItem) => {
    const headers = {
      authorization: `${localStorage.getItem("token")}`,
    };
    const requestBody = {
      action: {
        type: TYPE,
      },
    };
    try {
      const response = await axios.post(`/api/user/cart/${ID}`, requestBody, {
        headers,
      });
      console.log(
        "🚀 ~ file: CartContext.js:61 ~ quantityHandler ~ response:",
        response
      );
      if (response.status === 200) {
        updateCartItem(response.data.cart);
        if (TYPE === "increment") {
          itemAddedToCart("Quantity increased by 1");
        } else {
          showToastMessage("Quantity decreased by 1");
        }
      }
    } catch (err) {
      showToastMessage("Something went wrong");
      userWarning("please try again later");
    }
  };

  return (
    <CartContext.Provider
      value={{ addItemToCart, removeItemsFromCart, quantityHandler }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => useContext(CartContext);

export default CartProvider;
