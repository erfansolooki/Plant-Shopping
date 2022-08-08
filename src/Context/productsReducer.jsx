import _ from "lodash";
import { products } from "../data/data";

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
    case "SUITABLE_FOR": {
      const value = action.suitableFor.value;
      if (value === "") {
        return products;
      } else {
        const suitableFor = products.filter(
          (product) => product.suitableFor.indexOf(value) >= 0
        );
        return suitableFor;
      }
    }

    default:
      return state;
  }
};

export default productsReducer;
