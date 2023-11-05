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
import Login from "../Pages/Login-Register/Login";
import Address from "../Pages/Address/Address";
import OrderPlaced from "../Pages/SuccessPage/OrderPlaced";
import TermsCon from "../Pages/Terms/termsCon";
import Scrollup from "../Components/ScrolltoTop/scrollup";
import AboutUs from "../Pages/AboutUs/aboutUs";
import Faq from "../Components/FAQ/faq";
import Privacy from "../Components/Privacy-Policy/privacy";
import Return from "../Components/ReturnPolicy/return";
import Shipping from "../Components/Shipping/shipping";
import Payment from "../Components/PaymentMethod/payment";

const FrontEndRoutes = () => {
  return (

    <>


      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/mockman" element={<Mockman />} />
        <Route path="/products" element={<Products />} />
        <Route path="/login" element={<Login />} />
        <Route path="/address" element={<Address />} />
        <Route path="/success" element={<OrderPlaced />} />
        <Route path="/cart" element={
          <RequireAuth>
            <Cart />
          </RequireAuth>
        }
        />
        <Route
          path="/profile"
          element={
            <RequireAuth>
              <Profile />
            </RequireAuth>
          }
        />
        <Route
          path="/products/:id"
          element={
            <ProductDetails />
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
        <Route path="/terms&condition" element={<TermsCon />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/return" element={<Return />} />
        <Route path="/shipping" element={<Shipping />} />
        <Route path="/payment" element={<Payment />} />

        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>

      {/* <Scrollup /> */}

    </>
  );
};

export default FrontEndRoutes;
