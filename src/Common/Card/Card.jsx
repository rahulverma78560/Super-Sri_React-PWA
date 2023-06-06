/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import { useCartContext } from "../../Context/CartContext";
import styles from "./Card.module.css";
import { SlStar } from "react-icons/sl";
import { BsFillStarFill } from "react-icons/bs";

import { useWishlist } from "../../Context/Wishlist";
const Card = ({
  DATA,
  addedToCartGoCart,
  addedToCart,
  addToWishlistGoToWishlist,
  addedToWishlist,
  removeFromWishlistGoToWishlist,
  deleteItemFromWishlist,
}) => {
  const { addItemToCart } = useCartContext();
  const { addToWishlist } = useWishlist();

  const addItemToCartHandler = (DATA) => {
    addItemToCart(DATA);
    addedToCartGoCart(DATA?.name);
  };

  const handleAddToWishlist = (Item) => {
    addToWishlist(Item);
    addToWishlistGoToWishlist(Item?.name);
  };

  const handlereomveFromWishList = () => {
    deleteItemFromWishlist(DATA?._id);
    removeFromWishlistGoToWishlist(DATA?._id);
  };

  return (
    <div className={styles.card}>
      <NavLink to={`/products/${DATA?._id}`}>
        <div className={styles.card__image}>
          <img src={DATA?.img[0]} alt="" />
        </div>
      </NavLink>
      <div className={styles.card__details}>
        <div className={styles.product__name}>
          <div className={styles.name__container}>
            <p>{DATA?.name}</p>
          </div>
          {addedToWishlist ? (
            <BsFillStarFill
              onClick={() => handlereomveFromWishList(DATA)}
              className={styles.whishList__icon}
            />
          ) : (
            <SlStar
              className={styles.whishList__icon}
              onClick={() => handleAddToWishlist(DATA)}
            />
          )}
        </div>
        <div className={styles.price}>
          <h2>Rs. {DATA?.price}</h2>
          <h1>{DATA?.rating}🌟</h1>
        </div>
        <h1 className={styles.current__price}>
          Deal of the Day: Rs. {DATA?.price - DATA?.discount}
        </h1>
      </div>
      {localStorage.getItem("token") && (
        <div className={styles.button__container}>
          {addedToCart ? (
            <NavLink to={"/cart"}>
              <button>Go to Cart</button>
            </NavLink>
          ) : (
            <button onClick={() => addItemToCartHandler(DATA)}>
              Add to Cart
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Card;
