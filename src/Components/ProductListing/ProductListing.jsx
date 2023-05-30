import styles from "./ProductListing.module.css";
import Card from "../../Common/Card/Card";
import { NavLink } from "react-router-dom";
import { useProducts } from "../../Context/Products";
import { Triangle } from "react-loader-spinner";
const ProductListing = () => {
  const { productData } = useProducts();
  return (
    <section id="SCULPTURE__COLLECTION">
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
      <h1 className={styles.product__heading}>SCULPTURE COLLECTION</h1>
      <div className={styles.view__all}>
        <NavLink to="/products">
          <button className={styles.product__button}>View All</button>
        </NavLink>
      </div>
      <div className={styles.productlisting__page}>
        <div className={styles.grid__container}>
          {productData?.products.map((eachProduct, INDEX) => {
            return (
              <NavLink to={`/products/${eachProduct._id}`} key={eachProduct.id}>
                <Card DATA={eachProduct} />
              </NavLink>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductListing;
