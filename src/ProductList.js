import React from 'react';
import { useSelector } from 'react-redux';

function ProductDisplay() {
  const products = useSelector((state) => state.products);

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            <img src={product.image} alt={product.name} />
            <p>Name: {product.name}</p>
            <p>Price: ${product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductDisplay;
