/* eslint-disable react-hooks/exhaustive-deps */
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styles from "./TopCategory.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Triangle } from "react-loader-spinner";
import { NavLink } from "react-router-dom";
import { useProducts } from "../../Context/Products";
const TopCategory = () => {
  const [category, setCategory] = useState({
    loading: false,
    data: [],
    error: "",
  });
  const { dispatch } = useProducts();
  const settings = {
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
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

  useEffect(() => {
    (async () => {
      setCategory((prev) => ({ ...prev, loading: true }));
      try {
        const response = await axios.get("/api/categories");
        if (response.status === 200) {
          setCategory((prev) => ({
            ...prev,
            loading: false,
            data: response.data.categories,
          }));
        }
      } catch (error) {
        setCategory((prev) => ({
          ...prev,
          loading: false,
          error: error.message,
        }));
      }
    })();
  }, []);

  const handlefilterWithCategory = (eachCategory) => {
    dispatch({
      type: "HANDLE_CHECKED_CATEGORY__fROM__CATEGORY",
      payload: eachCategory,
    });
    dispatch({ type: "HANDLE_FILTER_WITH_CATEGORY__FROM__CATEGORY" });
  };

  return (
    <section>
      {category.loading && (
        <div className="loader">
          {category.loading && (
            <Triangle
              height="100"
              width="100"
              color="purple"
              ariaLabel="triangle-loading"
              wrapperStyle={{}}
              wrapperClassName=""
              visible={true}
            />
          )}
        </div>
      )}
      <h1 className={styles.category__heading}>Our Best And Top Category</h1>
      <div className={styles.TopCategory__container}>
        <Slider {...settings}>
          {category?.data?.map((eachCategory) => {
            return (
              <div key={eachCategory._id} className={styles.image__container}>
                <NavLink to={"/products"}>
                  <img
                    src={eachCategory?.img[0]}
                    alt={eachCategory?.name}
                    onClick={() => handlefilterWithCategory(eachCategory)}
                  />
                  
                </NavLink>
              </div>
            );
          })}
        </Slider>
      </div>
    </section>
  );
};

export default TopCategory;
