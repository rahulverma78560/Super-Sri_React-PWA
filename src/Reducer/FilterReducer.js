const INITIAL_STATE = {
  productsData: [],
  updatedData: [],
  silderValue : 0,
  checkboxList: [
    {
      cId: 1,
      name: "GOLD PLATED STATUES",
      label: "GOLD_PLATED_STATUES",
      apply: false,
    },
    {
      cId: 2,
      name: "ANTIQUE BRONZE STATUES",
      label: "ANTIQUE_BRONZE_STATUES",
      apply: false,
    },
    {
      cId: 3,
      name: "MATTE BLACK STATUES",
      label: "MATTE_BLACK_STATUES",
      apply: false,
    },
    {
      cId: 4,
      name: "RED STATUES",
      label: "RED_STATUES",
      apply: false,
    },
  ],
  ratingList: [
    {
      rId: 1,
      name: "4",
      label: "5",
      apply: false,
    },
    {
      rId: 2,
      name: "4 & above",
      label: "4",
      apply: false,
    },
    {
      rId: 3,
      name: "3 & above",
      label: "3",
      apply: false,
    },
    {
      rId: 4,
      name: "2 & above",
      label: "2",
      apply: false,
    },
  ],
  sizeCheckboxList: [
    {
      sId: 1,
      name: "6 INCHES",
      label: "6",
      apply: false,
    },
    {
      sId: 2,
      name: "12 INCHES",
      label: "12",
      apply: false,
    },
  ],
};

const filterReducer = (state, { type, payload }) => {
  switch (type) {
    case "GET_PRODUCTS": {
      return { ...state, productsData: payload, updatedData: payload };
    }
    case "SELECTED_CATEGORY": {
      return { ...state, selectedCategory: [...payload] };
    }
    case "PRICE_LOW_TO_HIGH": {
      const updatedData = [...state.updatedData].sort(
        (a, b) => a.price - b.price
      );

      return { ...state, updatedData: updatedData };
    }
    case "PRICE_HIGH_TO_LOW": {
      const updatedData = [...state.updatedData].sort(
        (a, b) => b.price - a.price
      );
      return { ...state, updatedData: updatedData };
    }
    case "DISCOUNT_LOW_TO_HIGH": {
      const updatedData = [...state.updatedData].sort(
        (a, b) => a.discount - b.discount
      );
      return { ...state, updatedData: updatedData };
    }

    case "DISCOUNT_HIGH_TO_LOW": {
      const updatedData = [...state.updatedData].sort(
        (a, b) => b.discount - a.discount
      );
      return { ...state, updatedData: updatedData };
    }

    case "HANDLE_CHECKED_CATEGORY": {
      const updatedCheckboxList = state.checkboxList.map((eachCategory) =>
        eachCategory.cId === payload.cId
          ? { ...eachCategory, apply: !eachCategory.apply }
          : { ...eachCategory }
      );
      return { ...state, checkboxList: updatedCheckboxList };
    }

    case "HANDLE_CHECKED_CATEGORY__fROM__CATEGORY": {
      const updatedCheckboxList = state.checkboxList.map((eachCategory) =>
        eachCategory.label === payload.category
          ? { ...eachCategory, apply: true }
          : { ...eachCategory, apply: false }
      );
      return { ...state, checkboxList: updatedCheckboxList };
    }

    case "HANDLE_FILTER_WITH_CATEGORY": {
      const activeCategory = state.checkboxList.reduce(
        (acc, cur) => (cur.apply ? [...acc, cur.label] : acc),
        []
      );

      const filterDataWithCategory = state.productsData.filter((eachProduct) =>
        activeCategory.includes(eachProduct.category)
      );

      return {
        ...state,
        updatedData:
          filterDataWithCategory.length > 0
            ? filterDataWithCategory
            : state.productsData,
      };
    }
    case "HANDLE_FILTER_WITH_CATEGORY__FROM__CATEGORY": {
      const activeCategory = state.checkboxList.reduce(
        (acc, cur) => (cur.apply ? [...acc, cur.label] : acc),
        []
      );

      const filterDataWithCategory = state.productsData.filter((eachProduct) =>
        activeCategory.includes(eachProduct.category)
      );

      return {
        ...state,
        updatedData: filterDataWithCategory.length > 0 ? filterDataWithCategory : state.productsData,
      };
    }

    case "HANDLE_PRICE_SLIDER_FILTER": {
      const { min, currentPrice, value } = payload;

      const filterDataWithPrice = [...state.updatedData].filter(
        (eachProduct) =>
          eachProduct.price >= min &&
          eachProduct.price <= parseInt(currentPrice)
      );

      return {
        ...state,
        silderValue: value,
        updatedData:
          filterDataWithPrice.length > 0
            ? filterDataWithPrice
            : state.productsData,
      };
    }

    case "HANDLE_ACTIVE_RATING": {
      const updatedRatingList = state.ratingList.map((eachRating) =>
        eachRating.rId === payload.rId
          ? { ...eachRating, apply: true }
          : { ...eachRating, apply: false }
      );
      return { ...state, ratingList: updatedRatingList };
    }

    case "HANDLE_RATING_FILTER": {
      const activeRating = state.ratingList.reduce(
        (acc, cur) => (cur.apply ? [...acc, cur.label] : acc),
        []
      );

      const filterDataWithRating = state.updatedData.filter((eachProduct) =>
        activeRating.includes(`${eachProduct.rating}`)
      );

      return {
        ...state,
        updatedData:
          filterDataWithRating.length > 0
            ? filterDataWithRating
            : state.productsData,
      };
    }

    case "HANDLE_CHECKED_SIZE": {
      const updatedSizeCheckboxList = state.sizeCheckboxList.map((eachSize) =>
        eachSize.sId === payload.sId
          ? { ...eachSize, apply: !eachSize.apply }
          : { ...eachSize }
      );
      return { ...state, sizeCheckboxList: updatedSizeCheckboxList };
    }
    case "HANDLE_FILTER_WITH_SIZE": {
      const activeSize = state.sizeCheckboxList.reduce(
        (acc, cur) => (cur.apply ? [...acc, cur.label] : acc),
        []
      );

      const filterDataWithSize = state.updatedData.filter((eachProduct) =>
        activeSize.includes(`${eachProduct.size}`)
      );

      return {
        ...state,
        updatedData:
          filterDataWithSize.length > 0
            ? filterDataWithSize
            : state.productsData,
      };
    }

    case "CLEAR_ALL_FILTER": {
      const updatedCheckboxList = state.checkboxList.map((eachCategory) => ({
        ...eachCategory,
        apply: false,
      }));

      const updatedRatingList = state.ratingList.map((eachRating) => ({
        ...eachRating,
        apply: false,
      }));

      const updatedSizeCheckboxList = state.sizeCheckboxList.map(
        (eachSize) => ({
          ...eachSize,
          apply: false,
        })
      );

      const updatedSliderValue = 0;

      return {
        ...state,
        checkboxList: updatedCheckboxList,
        ratingList: updatedRatingList,
        sizeCheckboxList: updatedSizeCheckboxList,
        silderValue: updatedSliderValue,
        updatedData: state.productsData,
      };
    }

    default: {
      return state;
    }
  }
};

export { filterReducer, INITIAL_STATE };
