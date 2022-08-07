import _ from "lodash";

const productsReducer = (state, action) => {
  switch (action.type) {
    case "SORT": {
      const value = action.sortOptions.value;
      const cloneProducts = [...state];
      if (value === "lowest_price") {
        // use loadash library
        return _.orderBy(cloneProducts, ["price"], ["asc"]);
      } else {
        return _.orderBy(cloneProducts, ["price"], ["desc"]);
      }
    }

    default:
      return state;
  }
};

export default productsReducer;
