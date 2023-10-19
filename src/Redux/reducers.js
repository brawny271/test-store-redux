// reducer.js
import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
} from './actions';

const initialState = {
  cart: [], // Cart items with product details and quantity
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const newItem = action.product;
      const existingItem = state.cart.find((item) => item.id === newItem.id);

      if (existingItem) {
        // If the product already exists in the cart, update the quantity
        existingItem.quantity += 1;
        existingItem.totalPrice = existingItem.quantity * existingItem.price;
      } else {
        // If it's a new product, add it to the cart with a quantity of 1
        newItem.quantity = 1;
        newItem.totalPrice = newItem.price;
        state.cart.push(newItem);
      }

      return {
        ...state,
      };

    case REMOVE_FROM_CART:
      const updatedCart = state.cart.filter((item) => item.id !== action.productId);
      return {
        ...state,
        cart: updatedCart,
      };

    case INCREASE_QUANTITY:
      state.cart.forEach((item) => {
        if (item.id === action.productId) {
          item.quantity += 1;
          item.totalPrice = item.quantity * item.price;
        }
      });

      return {
        ...state,
      };

    case DECREASE_QUANTITY:
      state.cart.forEach((item) => {
        if (item.id === action.productId && item.quantity > 1) {
          item.quantity -= 1;
          item.totalPrice = item.quantity * item.price;
        }
      });

      return {
        ...state,
      };

    default:
      return state;
  }
};

export default rootReducer;
