import React from 'react';
import { useSelector } from 'react-redux';

function ProductList() {
  const products = useSelector((state) => state.products);

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            <strong>Name:</strong> {product.name}, <strong>Price:</strong> ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;