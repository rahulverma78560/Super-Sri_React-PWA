import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import successSvg from "../../success.json";
import successStar from "../../success1.json";
import styles from "./OrderPlaced.module.css";
import axios from "axios";
const OrderPlaced = () => {
  const [cartItems, setCartItems] = useState({
    cartItems: [],
    loading: true,
    error: false,
  });
  useEffect(() => {
    (async () => {
      setCartItems((prev) => ({ ...prev, loading: true }));
      try {
        const response = await axios.get("/api/user/cart", {
          headers: { authorization: `${localStorage.getItem("token")}` },
        });
        if (response.status === 200) {
          setCartItems((prev) => ({
            ...prev,
            cartItems: response.data.cart,
            loading: false,
          }));
        }
      } catch (err) {
        setCartItems((prev) => ({
          ...prev,
          loading: false,
          error: err.message,
        }));
      }
    })();
  }, []);
  const subTotalPrice = cartItems?.cartItems.reduce(
    (acc, cur) => acc + cur.price * cur.qty,
    0
  );
  const totalDiscount = cartItems?.cartItems.reduce(
    (acc, cur) => acc + cur.discount,
    0
  );
  return (
    <div className="container">
      <div className={styles.success__container}>
        <Lottie
          animationData={successStar}
          style={{
            maxWidth: "100%",
            height: "100%",
            margin: "auto",
            position: "absolute",
            top: "0",
            left: "0",
            right: "0",
            bottom: "0",
          }}
        />
        <div className={styles.animation__container}>
          <Lottie
            animationData={successSvg}
            width={100}
            style={{
              margin: "auto",
              width: "100%",
              height: "100%",
            }}
          />
        </div>
        <div className={styles.details}>
          <h1>Order Placed Successfully</h1>
          <p>
            Your order has been placed successfully. You will receive a
            confirmation email shortly.
          </p>
        </div>
        <div className={styles.product__image}>
          <div className={styles.image__container}>
            {cartItems?.cartItems.map((item) => {
              return (
                <div className={styles.image__container__item}>
                  <label htmlFor={item.name}>{item.name}</label>
                  <img src={item.img[0]} alt="" />
                </div>
              );
            })}
          </div>
        </div>
        <div className={styles.oreder__details}>
          <h1>Order Details</h1>
          <div className={styles.total__container}>
            <div className={styles.your__cart}>
              <h1>Your Cart</h1>
              <h3>{cartItems?.cartItems.length} Items</h3>
            </div>
            <div className={styles.subTotal}>
              <h2>SubTotal</h2>
              <h3>Rs. {subTotalPrice}</h3>
            </div>
            <div className={styles.discount}>
              <h2>Discount</h2>
              <h3>Rs. {totalDiscount}</h3>
            </div>
            <div className={styles.total}>
              <h1>Total</h1>
              <h3>{subTotalPrice - totalDiscount}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderPlaced;
