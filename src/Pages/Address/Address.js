import React, { useEffect, useState } from "react";
import styles from "./Address.module.css";
import axios from "axios";
import { useFormik } from "formik";
import { addressSchema } from "../../Schemas";
import { useToaster } from "../../Context/ReactToaster";
import { ToastContainer } from "react-toastify";
import { useAddress } from "../../Context/AddressContext";
import { useNavigate } from "react-router-dom";

const INITIAL__VALUES__FOR__ADDRESS__FORM = {
  fullName: "",
  email: "",
  phone: "",
  zip: "",
  country: "",
  city: "",
  landmark: "",
  address: "",
};

const Address = () => {
  const { getUserAddress } = useAddress();
  const { showToastMessage, itemAddedToCart, userWarning } = useToaster();
  const navigate =  useNavigate()
  const { values, handleBlur, handleChange, handleSubmit, errors } = useFormik({
    initialValues: INITIAL__VALUES__FOR__ADDRESS__FORM,
    validationSchema: addressSchema,
    onSubmit: (address, action) => {
      getUserAddress(address);
      itemAddedToCart(`Your Address is saved successfully`);
      navigate("/success");
      action.resetForm();
    },
  });
  console.log("🚀 ~ file: Address.js:32 ~ Address ~ errors:", errors);
  const handleCashOnDelivery = () => {
    if (errors) {
      showToastMessage(errors.fullName);
      showToastMessage(errors.email);
      showToastMessage(errors.phone);
      showToastMessage(errors.zip);
      showToastMessage(errors.country);
      showToastMessage(errors.city);
      showToastMessage(errors.landmark);
      showToastMessage(errors.address);
    }
  };

  const handlePayOnline = () => {
    userWarning(` This feature is not available right now` )
    userWarning(`Please try COD method` )
  }

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
    <>
      <section>
        <div className="container">
          <div className={styles.grid__container}>
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
            <div className={styles.address__form}>
              <h1>Shipping Address</h1>
              <form
                onSubmit={handleSubmit}
                className={styles.form__control}
                action="#"
              >
                <div className={styles.personal__info}>
                  <div className={styles.fullName}>
                    <label htmlFor="fullName">Full Name</label>
                    <input
                      type="text"
                      name="fullName"
                      id="fullName"
                      placeholder="Full Name"
                      value={values.fullName}
                      onBlur={handleBlur}
                      onChange={handleChange}
                    />
                  </div>
                  <div className={styles.email__address}>
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email"
                      value={values.email}
                      onBlur={handleBlur}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className={styles.phone__zipCode}>
                  <div className={styles.phone__number}>
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="number"
                      name="phone"
                      id="phone"
                      placeholder="Phone Number"
                      value={values.phone}
                      onBlur={handleBlur}
                      onChange={handleChange}
                    />
                  </div>
                  <div className={styles.zip__code}>
                    <label htmlFor="zip">Zip Code</label>
                    <input
                      type="text"
                      name="zip"
                      id="zip"
                      placeholder="Zip Code"
                      value={values.zip}
                      onBlur={handleBlur}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className={styles.country__city}>
                  <div className={styles.country}>
                    <label htmlFor="country">Country</label>
                    <input
                      type="text"
                      name="country"
                      id="country"
                      placeholder="Country"
                      value={values.country}
                      onBlur={handleBlur}
                      onChange={handleChange}
                    />
                  </div>
                  <div className={styles.city}>
                    <label htmlFor="city">City</label>
                    <input
                      type="text"
                      name="city"
                      id="city"
                      placeholder="City"
                      value={values.city}
                      onBlur={handleBlur}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className={styles.address__landmark}>
                  <div className={styles.landmark}>
                    <label htmlFor="landmark">Landmark</label>
                    <input
                      type="text"
                      name="landmark"
                      id="landmark"
                      placeholder="Landmark"
                      value={values.landmark}
                      onBlur={handleBlur}
                      onChange={handleChange}
                    />
                  </div>
                  <div className={styles.address}>
                    <label htmlFor="address">Address</label>
                    <input
                      type="text"
                      name="address"
                      id="address"
                      placeholder="Complete Address"
                      value={values.address}
                      onBlur={handleBlur}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className={styles.payment__button}>
                  <button
                    className={styles.checkOut__button}
                    onClick={handlePayOnline}
                  >
                    Pay Online
                  </button>
                  <input
                    type="submit"
                    value="Casy On delivery"
                    onClick={handleCashOnDelivery}
                    className={styles.checkOut__button}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer
        position="bottom-right"
        autoClose={1000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
};

export default Address;
