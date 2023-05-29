import styles from "./Collection.module.css";
const Collection = () => {
  return (
    <section>
      <h1 className={styles.collection__heading}>
        Our Best Collection In one Frame
      </h1>
      <div className={styles.collection__container}>
        <div className={styles.image__container}>
          <img src="/webp/inoneFrame.webp" alt="collection" />
        </div>
      </div>
    </section>
  );
};

export default Collection;
