import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "./Wishlist.module.css";
import { ToastContainer } from "react-toastify";
import { useWishlist } from "../../Context/Wishlist";
import emptyWishlist from "../../images/emptywishlist.png";
import WishListCard from "../../Common/WishListCard/WishListCard";
import { Triangle } from "react-loader-spinner";

const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState({
    wishlistItems: [],
    loading: false,
    error: "",
  });
  console.log("🚀 ~ file: Wishlist.js:16 ~ Wishlist ~ wishlistItems:", wishlistItems)
  const { updatedWishListData } = useWishlist();

  useEffect(() => {
    (async () => {
      setWishlistItems((prev) => ({ ...prev, loading: true }));
      try {
        const response = await axios.get("/api/user/wishlist", {
          headers: { authorization: `${localStorage.getItem("token")}` },
        });
        if (response.status === 200) {
          updatedWishListData.lenght > 0
            ? setWishlistItems((prev) => ({
                ...prev,
                wishlistItems: updatedWishListData,
              }))
            : setWishlistItems((prev) => ({
                ...prev,
                wishlistItems: response.data.wishlist,
                loading: false,
              }));
        }
      } catch (err) {
        setWishlistItems((prev) => ({
          ...prev,
          loading: false,
          error: err.message,
        }));
      }
    })();
  }, [updatedWishListData]);

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
      {wishlistItems.loading && (
        <div className="loader">
          {wishlistItems.loading && (
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
      {wishlistItems.wishlistItems.length > 0 ? (
        <section>
          <div className="container">
            <h1 className={styles.wishlist__header}>You Wishlist</h1>
            <div className={styles.flex__container}>
              {wishlistItems?.wishlistItems.map((eachItem) => {
                return (
                  <WishListCard
                    DATA={eachItem}
                    key={eachItem._id}
                    wishlist={"isWishlist"}
                  />
                );
              })}
            </div>
          </div>
        </section>
      ) : (
        <div className="container">
          <h1 className={styles.empty__wishlist__heading}>
            Your Wishlist is Empty
          </h1>
          <div className={styles.empty__wishlist}>
            <img src={emptyWishlist} alt="empty wishlist" />
          </div>
        </div>
      )}
    </>
  );
};

export default Wishlist;
