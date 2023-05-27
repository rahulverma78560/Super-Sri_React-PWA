import React from "react";
import styles from "./RatingCard.module.css";
import { useProducts } from "../../Context/Products";
const RatingCard = ({ DATA }) => {
  const { dispatch } = useProducts();

  const handleFilterDataWithRating = (DATA) => {
    dispatch({ type: "HANDLE_ACTIVE_RATING", payload: DATA });
    dispatch({ type: "HANDLE_RATING_FILTER" });
  };

  return (
    <button
      className={
        DATA.apply ? styles.rating__Button__active : styles.rating__Button
      }
      onClick={() => handleFilterDataWithRating(DATA)}
    >
      {DATA.label}🌟
    </button>
  );
};

export default RatingCard;
