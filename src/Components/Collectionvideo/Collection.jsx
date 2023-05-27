import styles from "./Collection.module.css";
const Collection = () => {
  return (
    <section>
      <h1 className={styles.collection__heading}>
        Our Best Collection In one Frame
      </h1>
      <div className="container">
        <div className={styles.image__container}>
          <img src="/webp/allbestProduct.webp" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Collection;
