import React from "react";
import styles from "./InputCheckBox.module.css";
import { useProducts } from "../../Context/Products";

const InputCheckBox = ({ DATA }) => {
  const { dispatch } = useProducts();
  const handleSelectedCategory = (DATA) => {
    dispatch({ type: "HANDLE_CHECKED_CATEGORY", payload: DATA });
    dispatch({ type: "HANDLE_FILTER_WITH_CATEGORY" });
  };
  return (
    <div className={styles.filter__item__list__item}>
      <label htmlFor={DATA.label}>{DATA.name}</label>
      <input
        type="checkbox"
        name={DATA.label}
        id={DATA.label}
        value={DATA.label}
        checked={DATA.apply}
        onChange={(e) => handleSelectedCategory(DATA)}
      />
    </div>
  );
};

export default InputCheckBox;
