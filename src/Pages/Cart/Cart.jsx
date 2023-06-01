import axios from "axios";
import { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import styles from "./Cart.module.css";
import Slider from "react-slick";
import emptyCart from "../../images/cart_empty-removebg.png";
import { useCartContext } from "../../Context/CartContext";
import { ToastContainer } from "react-toastify";
import { Triangle } from "react-loader-spinner";
import { useProducts } from "../../Context/Products";
import { NavLink } from "react-router-dom";

const Cart = () => {
  const { removeItemsFromCart, quantityHandler } = useCartContext();
  const { removeFromGoToCart } = useProducts();
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

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const subTotalPrice = cartItems?.cartItems.reduce(
    (acc, cur) => acc + cur.price * cur.qty,
    0
  );
  const totalDiscount = cartItems?.cartItems.reduce(
    (acc, cur) => acc + cur.discount,
    0
  );

  const handleDeleteItem = (ID) => {
    removeItemsFromCart(ID, getUpdataedCartItem);
    removeFromGoToCart(ID);
  };

  const getUpdataedCartItem = (updatedCart) => {
    setCartItems((prev) => ({
      ...prev,
      cartItems: updatedCart,
      loading: false,
    }));
  };

  const decreaseItemQuantity = (ID, qty) => {
    if (qty === 1) {
      removeItemsFromCart(ID, getUpdataedCartItem);
    } else {
      quantityHandler(ID, "decrement", getUpdataedCartItem);
    }
  };

  const increaseItemQuantity = (ID) => {
    quantityHandler(ID, "increment", getUpdataedCartItem);
  };

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      {cartItems.loading && (
        <div className="loader">
          {cartItems.loading && (
            <Triangle
              height="100"
              width="100"
              color="purple"
              ariaLabel="triangle-loading"
              wrapperStyle={{}}
              wrapperClassName=""
              visible={true}
            />
          )}
        </div>
      )}
      <section>
        {cartItems.cartItems.length > 0 ? (
          <>
            <h1 className={styles.cart__heading}>My Cart</h1>
            <div className={styles.grid__container}>
              <div className="container">
                <div className={styles.dummy__cart__items}>
                  <h2>Image</h2>
                  <h2>Name</h2>
                  <h2>Quantity</h2>
                  <h2>Price</h2>
                  <h2>Delete</h2>
                </div>
                {cartItems?.cartItems.map((eachItem) => {
                  return (
                    <div key={eachItem._id} className={styles.cart__items}>
                      <div className={styles.image__container}>
                        <Slider {...settings}>
                          {eachItem?.img.map((eachImage, INDEX) => {
                            return (
                              <img
                                src={eachImage}
                                key={INDEX}
                                alt={eachImage}
                              />
                            );
                          })}
                        </Slider>
                      </div>
                      <div className={styles.product__name}>
                        {eachItem?.name}
                      </div>
                      <div className={styles.item__quantity}>
                        <div className={styles.quantity__container}>
                          <button
                            className={styles.quantity__btn}
                            onClick={() =>
                              decreaseItemQuantity(eachItem._id, eachItem.qty)
                            }
                          >
                            -
                          </button>
                          <input
                            type="text"
                            className={styles.quantity__input}
                            value={eachItem?.qty}
                            onChange={(e) => e}
                          />
                          <button
                            className={styles.quantity__btn}
                            onClick={() => increaseItemQuantity(eachItem._id)}
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className={styles.item__price}>
                        Rs. {eachItem?.price}
                      </div>
                      <div className={styles.remove__item__icons}>
                        <MdDelete
                          onClick={() => handleDeleteItem(eachItem._id)}
                          className={styles.delet__icon}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className={styles.placeOrder}>
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
                <NavLink to={"/address"}>
                  <button className={styles.checkOut__button}>Checkout</button>
                </NavLink>
              </div>
            </div>
          </>
        ) : (
          <div className="container">
            <div className={styles.empty__cart}>
              <h1>Your Cart is Empty</h1>
              <img src={emptyCart} alt="" />
              <button className="btn btn-primary">Shop Now</button>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default Cart;
