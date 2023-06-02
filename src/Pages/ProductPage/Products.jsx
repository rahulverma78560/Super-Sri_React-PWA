/* eslint-disable react-hooks/exhaustive-deps */
import styles from "./Products.module.css";
import Card from "../../Common/Card/Card";
import { NavLink } from "react-router-dom";
import { useProducts } from "../../Context/Products";
import { Triangle } from "react-loader-spinner";
import { useEffect, useState } from "react";
import InputCheckBox from "../../Common/inputCheckbox/InputCheckBox";
import InputSlider from "../../Common/InputSlider/InputSlider";
import RatingCard from "../../Common/RatingCard/RatingCard";
import SizeInputBox from "../../Common/SizeInputCheckbox/SizeInputBox";
const Products = () => {
  const [showFilterOption, setShowFilterOption] = useState(true);

  const [searchQuery, setSearchQuery] = useState("");
  const { productData, dispatch, filterData } = useProducts();

  useEffect(() => {
    dispatch({ type: "GET_PRODUCTS", payload: productData?.products });
  }, []);

  const handleFilterUsingDropDown = (e) => {
    dispatch({ type: e.target.value });
  };



  const handleClearFilter = () => {
    dispatch({ type: "CLEAR_ALL_FILTER" });
  };

  return (
    <>
      {productData.loading && (
        <div className="loader">
          {productData.loading && (
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
      <div className={styles.grid__container}>
        <div className={styles.filter__container}>
          <div className={styles.mobile__view}>
            <button
              className={styles.filter__button}
              onClick={() => setShowFilterOption(!showFilterOption)}
            >
              {showFilterOption ? "Hide Filters" : "Show Filters"}
            </button>
          </div>
          <div
            style={{
              top: showFilterOption ? "10rem" : "250rem",
            }}
            className={styles.filter__section}
          >
            <section>
              <h1 className={styles.product__heading}>Filters</h1>
              <div className="container">
                <div className={styles.search__filter__section}>
                  <input
                    type="text"
                    placeholder="Search"
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>
              <div className="container">
                <div className={styles.filter__container}>
                  <div className={styles.filter__item}>
                    <h1>Category</h1>
                    <div className={styles.filter__item__list}>
                      {filterData?.checkboxList.map((eachCategory) => {
                        return (
                          <InputCheckBox
                            key={eachCategory.cId}
                            DATA={eachCategory}
                          />
                        );
                      })}
                    </div>
                  </div>
                  <div className={styles.filter__item}>
                    <h1>Size</h1>
                    <div className={styles.filter__item__list}>
                      {filterData?.sizeCheckboxList.map((eachCategory) => {
                        return (
                          <SizeInputBox
                            key={eachCategory.sId}
                            DATA={eachCategory}
                          />
                        );
                      })}
                    </div>
                  </div>
                  <div className={styles.filter__item}>
                    <h1>Rating</h1>
                    <div className={styles.rating__card__container}>
                      {filterData?.ratingList.map((eachRating) => {
                        return (
                          <RatingCard key={eachRating.rId} DATA={eachRating} />
                        );
                      })}
                    </div>
                  </div>
                  <div className={styles.filter__item__price__scroll}>
                    <h1>Price Slider</h1>
                    <InputSlider PriceSliderfilterReset={handleClearFilter} />
                  </div>
                  <div className="container">
                    <button
                      className={styles.Clear__all__button}
                      onClick={handleClearFilter}
                    >
                      Clear All
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        <div className={styles.product__section}>
          <section>
            <h1 className={styles.product__heading}>Our Best Products</h1>
            <div className="container">
              <div className={styles.filter__sort}>
                <div className={styles.total__products__count}>
                  <h1>{productData?.products.length} Total Products</h1>
                </div>
                <div className={styles.sort__drop__down}>
                  <select
                    className={styles.select__container}
                    name="Sort__by"
                    id="Sort__by"
                    onChange={(e) => handleFilterUsingDropDown(e)}
                  >
                    <option value="RESET_TO_NORAML">Sort By</option>
                    <option value="PRICE_LOW_TO_HIGH">
                      Price: Low to High
                    </option>
                    <option value="PRICE_HIGH_TO_LOW">
                      Price: High to Low
                    </option>
                    <option value="DISCOUNT_HIGH_TO_LOW">
                      Discount: High to Low
                    </option>
                    <option value="DISCOUNT_LOW_TO_HIGH">
                      Discount: Low to High
                    </option>
                  </select>
                </div>
              </div>
            </div>
            <div className="container">
              <div className={styles.card__grid__container}>
                {productData?.products
                  .filter((eachProduct) =>
                    eachProduct.name
                      .toLowerCase()
                      .includes(searchQuery.toLowerCase())
                  )
                  .map((eachProduct) => {
                    return (
                      <NavLink to={`${eachProduct._id}`} key={eachProduct._id}>
                        <Card DATA={eachProduct} key={eachProduct._id} />
                      </NavLink>
                    );
                  })}
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Products;
