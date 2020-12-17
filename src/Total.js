import React, { useState } from 'react';
import './Total.css';
import { useHistory } from 'react-router-dom';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './store/stateProvider';
import { getCartTotal } from './store/reducer';

function Total() {
  const history = useHistory();
  const [{ cart }] = useStateValue();
  const [proceedDisable, setProceedBuutonState] = useState(false);

  const countNon0Products = () => {
    let count = 0;
    cart.forEach((i) => {
      if (i.amount > 0) {
        count += 1;
      }
    });
    if (count === 0) {
      setProceedBuutonState(true);
    }
    return count;
  };
  return (
    <div className="total-wrapper">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p className="total-items">{`Total ${countNon0Products()} products: ${value}`}</p>
            {/* <small className="total-promo">
              <input type="checkbox" />
              Do you have a promo code?
            </small> */}
          </>
        )}
        decimalScale={2}
        value={getCartTotal(cart)}
        displayType="text"
        thousandSeparator
        prefix="$"
      />

      <button type="button" disabled={proceedDisable} onClick={() => history.push('/payment')}>
        Proceed to Checkout
      </button>
    </div>
  );
}

export default Total;
