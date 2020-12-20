import React from 'react';
import { nanoid } from 'nanoid';
import './Product.css';

import { useStateValue } from './store/stateProvider';

function Product({ title, image, price, rating, id }) {
  const [, dispatch] = useStateValue();
  const amount = 1;

  const addToCart = () => {
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

  return (
    <div className="product-wrapper">
      <div className="product-info-wrapper">
        <p>{title}</p>
        <p className="product-price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product-rate">
          {Array(rating)
            .fill()
            .map(() => (
              <p key={nanoid()}>&#11088;</p>
            ))}
        </div>
      </div>
      <img className="product-img" src={image} alt="" />
      <button className="product-button" type="button" onClick={addToCart}>
        Add to Cart
      </button>
    </div>
  );
}

export default Product;
