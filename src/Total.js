import React from 'react';
import './Total.css';
import { useHistory } from 'react-router-dom';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './store/stateProvider';
import { getCartTotal } from './store/reducer';

function Total() {
  const history = useHistory();
  const [{ cart }, dispatch] = useStateValue();

  return (
    <div className="total-wrapper">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p className="total-items">{`Total ${cart.length} items: ${value}`}</p>
            <small className="total-promo">
              <input type="checkbox" />
              Do you have a promo code?
            </small>
          </>
        )}
        decimalScale={2}
        value={getCartTotal(cart)}
        displayType="text"
        thousandSeparator
        prefix="$"
      />

      <button type="button" onClick={(e) => history.push('/payment')}>
        Proceed to Checkout
      </button>
    </div>
  );
}

export default Total;
