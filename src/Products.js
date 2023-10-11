import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from './Redux/action';

const Product = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProducts(data.slice(0, 20));
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    }

    fetchProducts();
  }, [dispatch]);

  return (
    <div className="product-list">
      {products.map((product) => (
  <div className="product" key={product.id}>
    <img src={product.image} alt={product.title} />
    <h2>{product.title}</h2>
    <p>${product.price}</p>
    <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
  </div>
))}
    </div>
  );
};

export default Product;