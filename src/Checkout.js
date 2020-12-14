import React, { useState, useEffect } from 'react';
import './Checkout.css';
import Total from './Total';
import { useStateValue } from './store/stateProvider';
import CheckoutProduct from './CheckoutProduct';

const Checkout = () => {
  const [{ cart, user }, dispatch] = useStateValue();
  const prodCart = [...cart];
  prodCart.sort((a, b) => a.id - b.id);
  return (
    <div className="checkout-wrapper">
      <div className="checkout-column-left">
        <div>
          <h3>{user ? `Hello, ${user?.email}` : 'Hello!'}</h3>
          <h2 className="checkout-title">Your shopping Cart</h2>

          {prodCart.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
              amount={item.amount}
            />
          ))}
        </div>
      </div>
      <div className="checkout-column-right">
        <Total />
      </div>
    </div>
  );
};

export default Checkout;
