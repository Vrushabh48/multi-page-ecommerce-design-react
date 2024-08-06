import React, { useState } from 'react';
import { memo } from 'react';
import Topbar from '../Components/Topbar';
import Navbar from '../Components/Navbar';

const products = [
  { src: 'https://via.placeholder.com/150', productName: 'Product 1', productPrice: 29.99 },
  { src: 'https://via.placeholder.com/150', productName: 'Product 2', productPrice: 19.99 },
  { src: 'https://via.placeholder.com/150', productName: 'Product 3', productPrice: 39.99 },
  { src: 'https://via.placeholder.com/150', productName: 'Product 4', productPrice: 49.99 },
  { src: 'https://via.placeholder.com/150', productName: 'Product 5', productPrice: 59.99 },
  { src: 'https://via.placeholder.com/150', productName: 'Product 6', productPrice: 24.99 },
  { src: 'https://via.placeholder.com/150', productName: 'Product 7', productPrice: 34.99 },
  { src: 'https://via.placeholder.com/150', productName: 'Product 8', productPrice: 44.99 },
  { src: 'https://via.placeholder.com/150', productName: 'Product 9', productPrice: 54.99 },
  { src: 'https://via.placeholder.com/150', productName: 'Product 10', productPrice: 64.99 },
  { src: 'https://via.placeholder.com/150', productName: 'Product 11', productPrice: 74.99 },
  { src: 'https://via.placeholder.com/150', productName: 'Product 12', productPrice: 84.99 },
  { src: 'https://via.placeholder.com/150', productName: 'Product 13', productPrice: 94.99 },
  { src: 'https://via.placeholder.com/150', productName: 'Product 14', productPrice: 104.99 },
  { src: 'https://via.placeholder.com/150', productName: 'Product 15', productPrice: 114.99 },
  { src: 'https://via.placeholder.com/150', productName: 'Product 16', productPrice: 124.99 },
  { src: 'https://via.placeholder.com/150', productName: 'Product 17', productPrice: 134.99 },
  { src: 'https://via.placeholder.com/150', productName: 'Product 18', productPrice: 144.99 },
  { src: 'https://via.placeholder.com/150', productName: 'Product 19', productPrice: 154.99 },
  { src: 'https://via.placeholder.com/150', productName: 'Product 20', productPrice: 164.99 },
];

function Products() {
  const [cartValue, setCartValue] = useState(0);
  const [cart, setCart] = useState([]);

  function addToCart(product) {
    setCart((prevCart) => [...prevCart, product.productName]);
    setCartValue((prevCartValue) => prevCartValue + product.productPrice);
  }

  return (
    <div>
      <Topbar />
      <Navbar />
      <div className="grid grid-cols-4 gap-5 p-7">
        {products.map((product, index) => (
          <div key={index} className="border p-4">
            <img src={product.src} alt={product.productName} className="w-full h-auto mb-4" />
            <h2 className="text-lg font-bold">{product.productName}</h2>
            <p className="text-gray-700">${product.productPrice.toFixed(2)}</p>
            <button className='bg-gray-700 hover:bg-gray-500 text-white p-3 rounded-lg' onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
      <div className="p-14 border">
      <div className="mt-4 gap-5">
        <h1 className='p-2 text-3xl font-semibold'>Cart:</h1>
        {cart.map((item, index) => (
          <h2 className='text-2xl font-medium p-2' key={index}>{item}</h2>
        ))}
        <h3 className='p-5 text-2xl font-medium'>Total Cart Value: ${cartValue.toFixed(2)}</h3>
      </div>
      <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Checkout</button>
      </div>
    </div>
  );
}

export default memo(Products);
