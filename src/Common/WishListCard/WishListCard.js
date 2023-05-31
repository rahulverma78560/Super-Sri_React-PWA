/* eslint-disable react/prop-types */
import { useCartContext } from "../../Context/CartContext";
import { useWishlist } from "../../Context/Wishlist";
import styles from "./WishlistCard.module.css";
import { SlStar } from "react-icons/sl";
import { MdDelete } from "react-icons/md";
import { useProducts } from "../../Context/Products";
import { NavLink } from "react-router-dom";
import { useState } from "react";
const WishListCard = ({ DATA, wishlist }) => {
  const [addedToCart, setAddedToCart] = useState(false);
  const { removeFromWishlistGoToWishlist } = useProducts();
  const { addItemToCart } = useCartContext();
  const { deleteItemFromWishlist } = useWishlist();

  const handleAddToCartFromWishlist = (Item) => {
    setAddedToCart(true);
    addItemToCart(Item);
  };

  const handleRemoveFromWhislist = (ID) => {
    setAddedToCart(false);
    deleteItemFromWishlist(ID);
    removeFromWishlistGoToWishlist(ID);
  };

  return (
    <div className={styles.card}>
      <div className={styles.card__image}>
        <img src={DATA?.img[0]} alt="" />
      </div>
      <div className={styles.card__details}>
        <div className={styles.product__name}>
          <div className={styles.name__container}>
            <p>{DATA?.name}</p>
          </div>
          <SlStar className={styles.whishList__icon} />
        </div>
        <div className={styles.price}>
          <h1>Rs. {DATA.price}</h1>
          <h1>5🌟</h1>
        </div>
        <div className={styles.button__container}>
          {DATA?.addedToCart ? (
            <NavLink to={"/cart"}>
              <button>Go to Cart</button>
            </NavLink>
          ) : (
            <button
              disabled={addedToCart}
              onClick={() => handleAddToCartFromWishlist(DATA)}
            >
              Add to Cart
            </button>
          )}
          {wishlist === "isWishlist" && (
            <MdDelete
              className={styles.delete__icons}
              onClick={() => handleRemoveFromWhislist(DATA._id)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default WishListCard;
