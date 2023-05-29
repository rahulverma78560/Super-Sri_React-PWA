import styles from "./Partners.module.css";

const Partners = () => {
  return (
    <section>
      <div className={styles.partners__container}>
        <div className={styles.partner__image}>
          <img src="/webp/ourclient-1.webp" alt="our_clients" />
        </div>
      </div>
    </section>
  );
};

export default Partners;
