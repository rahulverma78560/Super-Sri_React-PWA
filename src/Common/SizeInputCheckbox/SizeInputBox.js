import React from "react";
import styles from "./SizeInputBox.module.css";
import { useProducts } from "../../Context/Products";
const SizeInputBox = ({ DATA }) => {
  const { dispatch } = useProducts();
  const handleSelectedCategory = (DATA) => {
    dispatch({ type: "HANDLE_CHECKED_SIZE", payload: DATA });
    dispatch({ type: "HANDLE_FILTER_WITH_SIZE" });
  };
  return (
    <div className={styles.filter__item__list__item}>
      <label htmlFor={DATA.label}>{DATA.name}</label>
      <input
        type="checkbox"
        name={DATA.label}
        id={DATA.label}
        value={DATA.label}
        onChange={(e) => handleSelectedCategory(DATA)}
      />
    </div>
  );
};

export default SizeInputBox;
