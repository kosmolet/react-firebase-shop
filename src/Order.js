import React from 'react';
import './Order.css';
import moment from 'moment';
import CheckoutProduct from './CheckoutProduct';

const Order = ({ order }) => (
  <div className="order-wr">
    <h2>Order</h2>
    <p>{moment.unix(order.data.created).format('MMMM Do YYYY, h:mma')}</p>

    {order.data.cart?.map((item) => (
      <div className="order-product" key={item.title + item.price}>
        <CheckoutProduct
          id={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
          rating={item.rating}
          hideButtons
        />
        <p>{` ${item.price} x ${item.amount}: ${item.price * item.amount}`}</p>
        <p className="order-id">{order.id}</p>
      </div>
    ))}
    <h4 className="product-total">{`Total: ${order.data.amount}`}</h4>
  </div>
);

export default Order;
