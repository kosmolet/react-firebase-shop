/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from 'react';
import './Checkout.css';
import Total from './Total';
import { useStateValue } from './store/stateProvider';

function CheckoutProduct(prop) {
  const { id, image, title, price, rating, hideButton } = prop;
  const initAmount = prop.amount;
  const [, dispatch] = useStateValue();
  const [amount, setAmount] = useState();

  useEffect(() => {
    setAmount(initAmount);
  }, []);
  const removeFromCart = () => {
    dispatch({
      type: 'REMOVE_FROM_CART',
      id
    });
  };
  const addToCart = () => {
    setAmount(amount + 1);
    dispatch({
      type: 'ADD_TO_CART',
      item: {
        id,
        title,
        image,
        price,
        rating,
        amount
      }
    });
  };

  const decreaseInCart = () => {
    if (amount > 0) {
      setAmount(amount - 1);
      dispatch({
        type: 'REDUCE_IN_CART',
        item: {
          id,
          title,
          image,
          price,
          rating,
          amount
        }
      });
    }
  };

  return (
    <div className="checkout-product">
      <img className="checkout-product-image" src={image} />

      <div className="checkout-product-info">
        <p className="checkout-product-title">{title}</p>
        <p className="checkout-product-price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkout-product-rating">
          {Array(rating)
            .fill()
            .map(() => (
              <p>&#11088;</p>
            ))}
        </div>

        <div className="increment-buttons">
          <button
            type="button"
            className={amount < 1 ? 'disabled' : ''}
            disabled={amount < 1}
            onClick={decreaseInCart}
          >
            -
          </button>
          <input
            id="amount"
            className="amount-input"
            name="amount"
            type="amount"
            placeholder="Amount"
            required
            disabled
            onChange={(e) => setAmount(e.target.value)}
            value={amount}
          />
          <button type="button" onClick={addToCart}>
            +
          </button>
        </div>
        {!hideButton && (
          <button className="remove-from-cart" type="button" onClick={removeFromCart}>
            Remove from Cart
          </button>
        )}
      </div>
    </div>
  );
}

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
