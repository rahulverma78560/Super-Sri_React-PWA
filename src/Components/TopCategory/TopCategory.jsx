import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styles from "./TopCategory.module.css";
const TopCategory = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section>
      <h1 className={styles.category__heading}>Our Best And Top Category</h1>
      <div className={styles.TopCategory__container}>
        <Slider {...settings}>
          <div className={styles.image__container}>
            <img src="/webp/c-1.webp" alt="" />
          </div>
          <div className={styles.image__container}>
            <img src="/webp/c-2.webp" alt="" />
          </div>
          <div className={styles.image__container}>
            <img src="/webp/c-3.webp" alt="" />
          </div>
          <div className={styles.image__container}>
            <img src="/webp/c-4.webp" alt="" />
          </div>
          <div className={styles.image__container}>
            <img src="/webp/c-5.webp" alt="" />
          </div>
          <div className={styles.image__container}>
            <img src="/webp/c-6.webp" alt="" />
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default TopCategory;
