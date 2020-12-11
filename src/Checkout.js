/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './Checkout.css';
import Total from './Total';
import { useStateValue } from './store/stateProvider';

function CheckoutProduct(prop) {
  const { id, image, title, price, rating, hideButton } = prop;
  const [{ cart }, dispatch] = useStateValue();

  const removeFromCart = () => {
    dispatch({
      type: 'REMOVE_FROM_CART',
      id
    });
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
            .map((_, i) => (
              <p>&#11088;</p>
            ))}
        </div>
        {!hideButton && (
          <button type="button" onClick={removeFromCart}>
            Remove from Cart
          </button>
        )}
      </div>
    </div>
  );
}

const Checkout = () => {
  const [{ cart, user }, dispatch] = useStateValue();
  return (
    <div className="checkout-wrapper">
      <div className="checkout-column-left">
        <div>
          <h3>{`Hello, ${user?.email}`}</h3>
          <h2 className="checkout-title">Your shopping Cart</h2>

          {cart.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
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
