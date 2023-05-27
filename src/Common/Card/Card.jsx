/* eslint-disable react/prop-types */
import styles from "./Card.module.css";
import { SlStar } from "react-icons/sl";
const Card = ({ DATA, wishlist }) => {
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
          <h2>Rs. {DATA?.price}</h2>
          <h1>{DATA?.rating}🌟</h1>
        </div>
        <h1 className={styles.current__price}>
          Deal of the Day: Rs. {DATA?.price - DATA?.discount}
        </h1>
      </div>
    </div>
  );
};

export default Card;
