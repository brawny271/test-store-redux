import React from 'react';
import { useSelector } from 'react-redux';
import { getCartItemCount } from './selected';
import { Link } from 'react-router-dom';

function Header() {
  const itemCount = useSelector(getCartItemCount);

  return (
    <header>
      <h1>My Online Store</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Products</Link>
          </li>
          <li>
            <Link to="/cart">Cart ({itemCount})</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;