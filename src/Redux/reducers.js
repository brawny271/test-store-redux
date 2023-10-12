const initialState = {
    products: [], // Store the products
    cart: [], // Store the selected items in the cart
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TO_CART':
        return {
          ...state,
          cart: [...state.cart, action.product],
        };
      case 'REMOVE_FROM_CART':
        return {
          ...state,
          cart: state.cart.filter((item) => item.id !== action.product.id),
        };
            case 'ADD_PRODUCT':
          const { name, price } = action;
          const newItem = { name, price };
          return {
            ...state,
            items: [...state.items, newItem], 
          };
      default:
        return state;
    }
  };
  
  export default rootReducer;
