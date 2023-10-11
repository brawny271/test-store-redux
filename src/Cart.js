import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from './Redux/action';

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              <img src={item.image} alt={item.title} />
              <p>{item.title}</p>
              <p>${item.price}</p>
              <button onClick={() => dispatch(removeFromCart(item))}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
