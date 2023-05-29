import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import featureProducts from "../../Data/FeatureProducts";
import styles from "./NewLaunch.module.css";
const NewLaunch = () => {
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
          dots: true,
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
      <h1 className={styles.category__heading}>New Launch</h1>
      <div className={styles.new__launch__container}>
        <Slider {...settings}>
          {featureProducts.map((eachProduct) => {
            return (
              <div key={eachProduct.id} className={styles.image__container}>
                <img src={eachProduct.image} alt="" />
              </div>
            );
          })}
        </Slider>
      </div>
    </section>
  );
};

export default NewLaunch;
