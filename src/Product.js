/* eslint-disable react/prop-types */
import React from 'react';
import './Product.css';

function Product({ id, title, image, price, rating }) {
  const addToBasket = () => {};
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
            .map((_) => (
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
