/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import styles from "./InputSlider.module.css";
import { useProducts } from "../../Context/Products";
const InputSlider = () => {
  const { productData, dispatch } = useProducts();
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const [selectedPrice, setSelectedPrice] = useState(0);

  useEffect(() => {
    const { minPrice, maxPrice } = productData?.products.reduce(
      (acc, cur) => {
        if (cur.price > acc.maxPrice) {
          return { ...acc, maxPrice: cur.price };
        } else if (acc.minPrice > cur.price) {
          return { ...acc, minPrice: cur.price };
        } else {
          return { ...acc };
        }
      },
      { minPrice: +Infinity, maxPrice: -Infinity }
    );
    setMinPrice(minPrice - 500);
    setMaxPrice(maxPrice + 500);
  }, []);

  const handlePriceSlider = (e, minValue) => {
    setSelectedPrice(e.target.value);
    dispatch({
      type: "HANDLE_PRICE_SLIDER_FILTER",
      payload: { min: minValue, currentPrice: e.target.value },
    });
  };
  return (
    <div className={styles.price__scroll}>
      <input
        type="range"
        min={minPrice}
        max={maxPrice}
        value={selectedPrice}
        onChange={(e) => handlePriceSlider(e, minPrice)}
      />
      <div className={styles.selected__price}>
        <p>{minPrice}</p>
        <p>{maxPrice}</p>
      </div>
      <div className={styles.selected__price}>
        <p>Price</p>
        <p>Rs. {selectedPrice}</p>
      </div>
    </div>
  );
};

export default InputSlider;
