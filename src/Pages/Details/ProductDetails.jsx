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
      {/* <div className={styles.grid__container}>
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
              <h3>MRP - Rs. {singleProduct?.price}</h3>
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
                  <button className={styles.product__details__button}>
                    Go to Cart
                  </button>
                </NavLink>
              ) : (
                <button
                  className={styles.product__details__button}
                  onClick={() => handleAddToCartItem(singleProduct)}
                >
                  Add to Cart
                </button>
              )}
              {singleProduct?.addedToWishlist ? (
                <NavLink to={"/wishlist"}>
                  <button className={styles.product__details__button}>
                    Go to Wishlist
                  </button>
                </NavLink>
              ) : (
                <button
                  className={styles.product__details__button}
                  onClick={() => handleAddToWishlist(singleProduct)}
                >
                  Add to Wishlist
                </button>
              )}
            </div>
          </div>
        </div>
      </div> */}

      <div className={styles.grid__container}>

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


        <div className={styles.details__container}>
          <h1>{singleProduct?.name}</h1>
          <div className={styles.product_sz}>
            <div className={styles.size}>
              <h3>Size</h3>
            </div>
            <div className={styles.size_boxes}>
              <div className={styles.sz_box}>6 inch</div>
              <div className={styles.sz_box}>8 inch</div>
              <div className={styles.sz_box}>5 inch</div>
              <div className={styles.sz_box}>12 inch</div>
              <div className={styles.sz_box}>6 feet</div>
              <div className={styles.sz_box}>8 feet</div>
              <div className={styles.sz_box}>5 feet</div>
              <div className={styles.sz_box}>12 feet</div>
              <div className={styles.sz_box}>6 feet</div>
              <div className={styles.sz_box}>8 inch</div>
              <div className={styles.sz_box}>5 inch</div>
              <div className={styles.sz_box}>12 inch</div>
              <div className={styles.sz_box}>6 inch</div>
              <div className={styles.sz_box}>8 inch</div>
              <div className={styles.sz_box}>5 inch</div>
              <div className={styles.sz_box}>12 inch</div>
            </div>
          </div>
          <div className={styles.product_sz}>
            <div className={styles.size}>
              <h3>Quality</h3>
            </div>
            <div className={styles.size_boxes}>
              <div className={styles.sz_box}>APlusGrade</div>
              <div className={styles.sz_box}>AGrade</div>
              <div className={styles.sz_box}>BGrade</div>

            </div>
          </div>
          <div className={styles.product_sz}>
            <div className={styles.size}>
              <h3>Material</h3>
            </div>
            <div className={styles.size_boxes}>
              <div className={styles.sz_box}>Wood</div>

            </div>
          </div>
          <div className={styles.product_sz}>
            <div className={styles.size}>
              <h3>Quantity</h3>
            </div>
            <div className={styles.size_boxes}>
              <span className={styles.decreament}>-</span>
              <span className={styles.value} >23</span>
              <span className={styles.increament}>+</span>
              <p>(10 Available)</p>
            </div>
          </div>

          <div className={styles.divider}></div>

          <div className={styles.product_sz}>
            <div className={styles.size}>
              <h3>Total Prize</h3>
            </div>
            <div className={styles.size_boxes}>
               <p className={styles.prize}> ₹ 50,000</p>
            </div>
          </div>
          

          <div className={styles.product_btn}>
            <button className={styles.probtn}>Add to cart </button>
          <button className={styles.probtn}>Buy Now</button>
          </div>
          <div className={styles.product_link}>
            <h3 >Add to Wishlist </h3>
          <h3 >add to compare</h3>
          </div>

        </div>


      </div>

    </>
  );
};

export default ProductDetails;
