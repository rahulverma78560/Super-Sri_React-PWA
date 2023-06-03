import axios from "axios";
import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { INITIAL_STATE, filterReducer } from "../Reducer/FilterReducer";

const ProductsContext = createContext(null);

const ProductsProvider = ({ children }) => {
  const [productData, setProductData] = useState({
    products: [],
    loading: true,
    error: null,
  });
  const [filterData, dispatch] = useReducer(filterReducer, INITIAL_STATE);
  console.log("🚀 ~ file: Products.js:20 ~ ProductsProvider ~ filterData:", filterData)

  useEffect(() => {
    (async () => {
      try {
        setProductData((prev) => ({ ...prev, loading: true }));
        const response = await axios.get("/api/products");

        if (response.status === 200) {
          setProductData((prev) => ({
            ...prev,
            products: response.data.products,
            loading: false,
          }));
        }
      } catch (err) {
        setProductData((prev) => ({
          ...prev,
          error: err.message,
          loading: false,
        }));
      }
    })();
  }, []);

  const addedToCartGoCart = (Name) => {
    const updatedData = productData?.products.map((eachProduct) =>
      eachProduct.name.toLowerCase().includes(Name.toLowerCase())
        ? { ...eachProduct, addedToCart: !eachProduct.addedToCart }
        : { ...eachProduct }
    );
    setProductData((prev) => ({
      ...prev,
      products: updatedData,
    }));
  };

  const removeFromGoToCart = (ID) => {
    const updatedData = productData?.products.map((eachProduct) =>
      eachProduct._id === ID
        ? { ...eachProduct, addedToCart: !eachProduct.addedToCart }
        : { ...eachProduct }
    );
    setProductData((prev) => ({
      ...prev,
      products: updatedData,
    }));
  };

  const addToWishlistGoToWishlist = (NAME) => {
    const updatedData = productData?.products.map((eachProduct) =>
      eachProduct.name.toLowerCase().includes(NAME.toLowerCase())
        ? { ...eachProduct, addedToWishlist: !eachProduct.addedToWishlist }
        : { ...eachProduct }
    );
    setProductData((prev) => ({
      ...prev,
      products: updatedData,
    }));
  };

  const removeFromWishlistGoToWishlist = (ID) => {
    const updatedData = productData?.products.map((eachProduct) =>
      eachProduct._id === ID
        ? { ...eachProduct, addedToWishlist: !eachProduct.addedToWishlist }
        : { ...eachProduct }
    );
    setProductData((prev) => ({
      ...prev,
      products: updatedData,
    }));
  };

  useEffect(() => {
    setProductData((prev) => ({
      ...prev,
      products: filterData.updatedData ? filterData.updatedData : prev.products,
    }));
  }, [filterData]);

  return (
    <ProductsContext.Provider
      value={{
        productData,
        addedToCartGoCart,
        removeFromGoToCart,
        addToWishlistGoToWishlist,
        removeFromWishlistGoToWishlist,
        dispatch,
        filterData,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => useContext(ProductsContext);

export default ProductsProvider;
