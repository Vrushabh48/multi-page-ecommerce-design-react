import React, { useState } from 'react';
import { memo } from 'react';

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
  const [cartvalue, setcartvalue] = useState(0);

  function addtocart(price) {
    setcartvalue((prevCartValue) => prevCartValue + price);
  }

  return (
    <div>
      <div className="grid grid-cols-4 gap-4">
        {products.map((product, index) => (
          <div key={index} className="border p-4">
            <img src={product.src} alt={product.productName} className="w-full h-auto mb-4" />
            <h2 className="text-lg font-bold">{product.productName}</h2>
            <p className="text-gray-700">${product.productPrice.toFixed(2)}</p>
            <button onClick={() => addtocart(product.productPrice)}>Add to Cart</button>
          </div>
        ))}
      </div>
      <div className="mt-4">
        <h1>Cart :</h1>
        <h3>Total Cart value : {cartvalue.toFixed(2)}</h3>
      </div>
    </div>
  );
}

export default memo(Products);
