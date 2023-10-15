import { ADD_PRODUCT } from './actions';

const initialState = {
  products: [],
  // ...other state properties like cart
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      const newProduct = action.product;
      return {
        ...state,
        products: [...state.products, newProduct],
      };

    // ...other cases for your existing cart-related actions

    default:
      return state;
  }
};

export default rootReducer;






// import { createStore, combineReducers } from 'redux';
// import cartReducer from './cartReducer';
// import productReducer from './productReducer';

// // Combine multiple reducers into one
// const rootReducer = combineReducers({
//   cart: cartReducer,
//   products: productReducer,
//   // Add more reducers here if needed
// });

// const store = createStore(rootReducer);

// export default store;