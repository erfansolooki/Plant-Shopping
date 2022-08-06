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
        total: state.total + action.payload.offPrice,
      };
    }
    case "DECREMENT": {
      const cloneProducts = [...state.cart];
      const findIndex = cloneProducts.findIndex(
        (item) => item.id === action.payload.id
      );
      const selectedProduct = { ...cloneProducts[findIndex] };
      selectedProduct.quantity++;
      cloneProducts[findIndex] = selectedProduct;
      return {
        ...state,
        cart: cloneProducts,
        total: state.total + action.payload.offPrice,
      };
    }

    default:
      return state;
  }
};

export default cartProvider;
