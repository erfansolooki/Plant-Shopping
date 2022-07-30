const cartProvider = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const cloneProducts = [...state.cart];
      const findIndex = cloneProducts.findIndex(
        (item) => item.id === action.payload.id
      );

      if (findIndex < 0) {
        cloneProducts.push({ ...action.payload, quantity: 1 });
      } else {
        const selectedProduct = { ...cloneProducts[findIndex] };
        selectedProduct.quantity++;
        cloneProducts[findIndex] = selectedProduct;
      }
      return {
        ...state,
        cart: cloneProducts,
      };
    }

    default:
      break;
  }
};

export default cartProvider;
