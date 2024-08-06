import React from 'react';
import { useCart } from '../Context/Cartcontext';
import Topbar from '../Components/Topbar';
import Navbar from '../Components/Navbar';

function Cart() {
  const { cart, dispatch } = useCart();

  const totalValue = cart.reduce((total, item) => total + item.productPrice, 0);

  return (
    <div>
      <Topbar />
      <Navbar />
      <h1>Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              {item.productName} - ${item.productPrice.toFixed(2)}
              <button onClick={() => dispatch({ type: 'REMOVE_FROM_CART', index })}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
      <h2>Total: ${totalValue.toFixed(2)}</h2>
    </div>
  );
}

export default Cart;
