import axios from "axios";
import React, { createContext, useContext, useState } from "react";
import { useToaster } from "../Context/ReactToaster";

const WishlistContext = createContext(null);

const WishlistProvider = ({ children }) => {
  const [updatedWishListData, setUpdatedWishListData] = useState([]);
  const { itemAddedToCart, showToastMessage, userWarning } = useToaster();
  const addToWishlist = async (Item) => {
    const headers = {
      authorization: `${localStorage.getItem("token")}`,
    };
    const requestBody = {
      product: Item,
    };

    try {
      const res = await axios.post("/api/user/wishlist", requestBody, {
        headers,
      });
      if (res.status === 201) {
        itemAddedToCart("Item added to Wishlist");
      }
    } catch (err) {
      showToastMessage("Something went wrong");
      userWarning("please try again later");
    }
  };

  const deleteItemFromWishlist = async (ID) => {
    const headers = {
      authorization: `${localStorage.getItem("token")}`,
    };

    try {
      const response = await axios.delete(`/api/user/wishlist/${ID}`, {
        headers,
      });
      if (response.status === 200) {
        showToastMessage("Item removed from wishlist successfully");
        setUpdatedWishListData(response.data.wishlist);
      }
    } catch (err) {
      showToastMessage("Something went wrong");
      userWarning("please try again later");
    }
  };

  return (
    <WishlistContext.Provider
      value={{ addToWishlist, deleteItemFromWishlist, updatedWishListData }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => useContext(WishlistContext);

export default WishlistProvider;
