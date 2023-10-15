import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from './actions';

function Form() {
  const [productData, setProductData] = useState({ image: '', name: '', price: '' });
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addProduct(productData));
    setProductData({ image: '', name: '', price: '' });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData({ ...productData, [name]: value });
  };

  return (
    <div>
      <h2>Add a Product</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="image" placeholder="Image URL" value={productData.image} onChange={handleChange} />
        <input type="text" name="name" placeholder="Product Name" value={productData.name} onChange={handleChange} />
        <input type="number" name="price" placeholder="Price" value={productData.price} onChange={handleChange} />
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}

export default Form;
