import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import ToasterProvider from "./Context/ReactToaster";
import ProductsProvider from "./Context/Products";
import CartProvider from "./Context/CartContext";
import WishlistProvider from "./Context/Wishlist";
import AddressProvider from "./Context/AddressContext";

// Call make Server
makeServer();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ToasterProvider>
      <ProductsProvider>
        <WishlistProvider>
          <CartProvider>
            <AddressProvider>
              <App />
            </AddressProvider>
          </CartProvider>
        </WishlistProvider>
      </ProductsProvider>
    </ToasterProvider>
  </BrowserRouter>
);
