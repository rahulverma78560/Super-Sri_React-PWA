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
          <div>
            <img src="/slider/s-4.jpg" alt="" />
          </div>
          <div>
            <img src="/slider/s-5.jpg" alt="" />
          </div>
          <div>
            <img src="/slider/p-6.jpg" alt="" />
          </div>
          <div>
            <img src="/slider/s-7.jpg" alt="" />
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default HomeCarusel;
