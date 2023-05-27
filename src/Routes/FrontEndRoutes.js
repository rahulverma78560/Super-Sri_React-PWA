import React from "react";
import { Route, Routes } from "react-router-dom";
import Products from "../Pages/ProductPage/Products";
import Landing from "../Pages/Landing/Lading";
import Cart from "../Pages/Cart/Cart";
import ProductDetails from "../Pages/Details/ProductDetails";
import Wishlist from "../Pages/Wishlist/Wishlist";
import Mockman from "mockman-js";
import RequireAuth from "../RequireAuth/RequireAuth";
import Profile from "../Pages/Profile/Profile";

const FrontEndRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/mockman" element={<Mockman />} />
      <Route path="/products" element={<Products />} />
      <Route
        path="/cart"
        element={
          <RequireAuth>
            <Cart />
          </RequireAuth>
        }
      />
      <Route path="/profile" element={<Profile />} />
      <Route
        path="/products/:id"
        element={
          <RequireAuth>
            <ProductDetails />
          </RequireAuth>
        }
      />
      <Route
        path="/wishlist"
        element={
          <RequireAuth>
            <Wishlist />
          </RequireAuth>
        }
      />
      <Route path="*" element={<h1>404 Not Found</h1>} />
    </Routes>
  );
};

export default FrontEndRoutes;
