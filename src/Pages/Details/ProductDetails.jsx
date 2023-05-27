import styles from "./ProductDetails.module.css";
import { AiOutlineStar } from "react-icons/ai";
import { BsFillCartCheckFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { AiFillGift } from "react-icons/ai";
import { NavLink, useParams } from "react-router-dom";
import { useState } from "react";
import { useProducts } from "../../Context/Products";
import { useCartContext } from "../../Context/CartContext";
import { ToastContainer } from "react-toastify";
import { useWishlist } from "../../Context/Wishlist";

const ProductDetails = () => {
  const [selectedImage, setSelectedImage] = useState("");
  const { addItemToCart } = useCartContext();
  const { addToWishlist } = useWishlist();
  const { id } = useParams();
  const { productData, addedToCartGoCart, addToWishlistGoToWishlist } =
    useProducts();
  const singleProduct = productData.products.find((item) => item._id === id);

  const handleAddToCartItem = () => {
    addItemToCart(singleProduct);
    addedToCartGoCart(singleProduct?.name);
  };

  const handleAddToWishlist = (Item) => {
    addToWishlist(Item);
    addToWishlistGoToWishlist(Item?.name);
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
      <div className={styles.grid__container}>
        <div className="container">
          <div className={styles.image__grid}>
            <div className={styles.image__container}>
              <div className={styles.mutiple__image}>
                {singleProduct?.img.map((eachImage, INDEX) => {
                  return (
                    <img
                      src={eachImage}
                      key={INDEX}
                      onClick={() => setSelectedImage(eachImage)}
                      alt={eachImage}
                    />
                  );
                })}
              </div>
            </div>
            <div className={styles.main__img__container}>
              <img src={selectedImage || singleProduct?.img[0]} alt="" />
            </div>
          </div>
        </div>
        <div className="container">
          <div className={styles.details__container}>
            <h1>{singleProduct?.name}</h1>
            <div className={styles.customer__reviews}>
              <div className={styles.rating__star}>
                <AiOutlineStar className={styles.star} />
                <AiOutlineStar className={styles.star} />
                <AiOutlineStar className={styles.star} />
                <AiOutlineStar className={styles.star} />
                <AiOutlineStar className={styles.star} />
              </div>
              <h3>(58 Customer Review)</h3>
            </div>
            <div className={styles.price__container}>
              <h3>Rs. {singleProduct?.price}</h3>
              <h2>
                Deal of the Day: Rs.
                {singleProduct?.price - singleProduct?.discount}
              </h2>
            </div>
            <div className={styles.desc__container}>{singleProduct?.desc}</div>
            <div className={styles.desc__container}>
              {singleProduct?.details}
            </div>
            <div className={styles.detail__icons__container}>
              <div className={styles.icons__detail}>
                <BsFillCartCheckFill className={styles.icon} />
                <h3>100% Original</h3>
              </div>
              <div className={styles.icons__detail}>
                <TbTruckDelivery className={styles.icon} />
                <h3>Free Delivery</h3>
              </div>
              <div className={styles.icons__detail}>
                <AiFillGift className={styles.icon} />
                <h3>Easy Returns</h3>
              </div>
            </div>

            <div className={styles.addtocart__container}>
              {singleProduct?.addedToCart ? (
                <NavLink to={"/cart"}>
                  <button className="btn btn-primary">Go to Cart</button>
                </NavLink>
              ) : (
                <button
                  className="btn btn-primary"
                  onClick={() => handleAddToCartItem(singleProduct)}
                >
                  Add to Cart
                </button>
              )}
              {singleProduct?.addedToWishlist ? (
                <NavLink to={"/wishlist"}>
                  <button className="btn btn-primary">Go to Wishlist</button>
                </NavLink>
              ) : (
                <button
                  className="btn btn-primary"
                  onClick={() => handleAddToWishlist(singleProduct)}
                >
                  Add to Wishlist
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
