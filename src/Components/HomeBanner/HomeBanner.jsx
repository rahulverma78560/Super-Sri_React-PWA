import styles from "./HomeBanner.module.css";
import { motion } from "framer-motion";
const HomeBanner = () => {
  return (
    <div className={styles.grid__container}>
      <div className={styles.grid__items__image__container}>
        <div className={styles.img__container}>
          <motion.img
            initial={{ x: "100vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            whileInView={{
              x: 0,
            }}
            src="/assets/Images/home_vector_-3-removebg.png"
            alt=""
          />
        </div>
      </div>
      <div className={styles.grid__items__brand__details__container}>
        <div className={styles.brand__details}>
          <h2>
            WANT IT <span>?</span> BRING IT
          </h2>
          <h1>Elevate Your Space With Timeless Artistry</h1>
          <p>
            Step into a world of artistry and inspiration with our statue
            website. Our collection includes everything from towering monuments
            to delicate figurines, each one a testament to human creativity.
          </p>
          <a href="#SCULPTURE__COLLECTION"> Lets Elevate </a>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
