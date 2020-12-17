import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { db } from './config/firebase';
import './Orders.css';
import Order from './Order';
import { useStateValue } from './store/stateProvider';

const Orders = () => {
  const [{ user }] = useStateValue();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      db.collection('users')
        .doc(user.uid)
        .collection('orders')
        .orderBy('created', 'desc')
        .onSnapshot((snapshot) =>
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data()
            }))
          )
        );
    } else {
      setOrders([]);
    }
  }, [user]);

  return (
    <div className="orders-page">
      <h1>Your Orders</h1>

      <div className=".mapped-orders-wr">
        {orders?.map((order) => (
          <Order order={order} key={nanoid()} />
        ))}
      </div>
    </div>
  );
};

export default Orders;
