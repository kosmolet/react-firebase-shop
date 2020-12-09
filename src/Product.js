import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import './Product.css';

import { useStateValue } from './store/stateProvider';

function Product(prop) {
  const [id] = useState(nanoid);
  const { title, image, price, rating } = prop;
  const [, dispatch] = useStateValue();
  const addToBasket = () => {
    dispatch({
      type: 'ADD_TO_CART',
      item: {
        title,
        image,
        price,
        rating
      }
    });
  };
  return (
    <div className="product-wrapper" key={id}>
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
              <p>&#11088;</p>
            ))}
        </div>
      </div>
      <img className="product-img" src={image} alt="" />
      <button className="product-button" type="button" onClick={addToBasket}>
        Add to Cart
      </button>
    </div>
  );
}

export default Product;
