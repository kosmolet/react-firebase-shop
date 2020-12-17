import { nanoid } from 'nanoid';
import React, { useState, useEffect } from 'react';
import './Checkout.css';
import { useStateValue } from './store/stateProvider';

const CheckoutProduct = (prop) => {
  const { id, image, title, price, rating, hideButtons } = prop;
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
      <img alt="product" className="checkout-product-image" src={image} />

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
              <p key={nanoid()}>&#11088;</p>
            ))}
        </div>

        {!hideButtons && (
          <div>
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

            <button className="remove-from-cart" type="button" onClick={removeFromCart}>
              Remove from Cart
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CheckoutProduct;
