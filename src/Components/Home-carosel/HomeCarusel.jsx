import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styles from "./HomeCarousel.module.css";
const HomeCarusel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section>
      <h2 className={styles.offer__text}> Best Offer and Best Products </h2>
      <div className={styles.Carousel__container}>
        <Slider {...settings}>
          <div className={styles.image__container}>
            <img loading="lazy" src="/real products/pa-1.webp" alt="" />
          </div>
          <div className={styles.image__container}>
            <img loading="lazy" src="/real products/pAa-1.webp" alt="" />
          </div>
          <div className={styles.image__container}>
            <img loading="lazy" src="/real products/pAb-1.webp" alt="" />
          </div>
          <div className={styles.image__container}>
            <img loading="lazy" src="/real products/pn-1.webp" alt="" />
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default HomeCarusel;
