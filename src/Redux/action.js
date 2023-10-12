export const addToCart = (product) => ({
    type: 'ADD_TO_CART',
    product,
  });
  
  export const removeFromCart = (product) => ({
    type: 'REMOVE_FROM_CART',
    product,
  });

export const addProduct = (name, price) => {
    ({
      type: 'ADD_PRODUCT',
      name,
      price,
    })
  }
