import React, { useState, useEffect } from 'react';
import './Pay.css';
import { useStateValue } from './store/stateProvider';

const Pay = () => {
  const formDefaultValues = {
    email: '',
    name: '',
    phone: '',
    address: '',
    city: '',
    postcode: ''
  };
  const [formValues, setFormValues] = useState(formDefaultValues);
  const [{ cart, user }, dispatch] = useStateValue();
  const [disabled, setDisabled] = useState(true);
  const [total, setTotal] = useState(0);
  const { email, name, phone, city, address, postcode } = formValues;

  const formDefaultErrors = {
    email: [],
    name: [],
    phone: [],
    address: [],
    city: [],
    postcode: []
  };
  const [formErrors, setFormErrors] = useState(formDefaultErrors);

  useEffect(() => {
    const errorArr = Object.values(formErrors);
    const isError = (i) => i.length > 0;
    const formValuesExist = Object.values(formValues);
    const isValues = (i) => i.length > 1;
    if (errorArr.some(isError) || !formValuesExist.every(isValues)) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [formValues, formErrors]);

  useEffect(() => {
    let totalAmount = 0;
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < cart.length; i++) {
      totalAmount += cart[i].price * cart[i].amount;
    }
    setTotal(totalAmount);
  }, [cart]);

  const handleValidations = (target, validators) => {
    validators.forEach((validation) => {
      const result = validation(target.value);
      const errors = formErrors[target.name];
      if (result.valid) {
        if (errors.includes(result.message)) {
          setFormErrors((prevState) => ({
            ...prevState,
            [target.name]: errors.filter((error) => error !== result.message)
          }));
        }
      } else if (!errors.includes(result.message)) {
        setFormErrors((prevState) => ({
          ...prevState,
          [target.name]: [...errors, result.message]
        }));
      }
    });
  };

  const handleChange = (e, validators) => {
    const { target } = e;
    setFormValues((prevState) => ({
      ...prevState,
      [target.name]: target.value
    }));

    handleValidations(target, validators);
  };

  const noBlanks = (value) => ({
    valid: value.replace(/\s+/, '').length > 0,
    message: 'cannot be blank'
  });

  const validatEmail = (value) => {
    const pattern = new RegExp(
      /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
    );
    return {
      valid: pattern.test(String(value).toLowerCase()),
      message: 'must be a valid email'
    };
  };

  const proceedToStripe = () => {
    // do stripe
  };

  return (
    <div className="payment-wrapper">
      <div className="pay-form">
        <form onSubmit={(e) => e.preventDefault()}>
          <label className="pay-form-label" htmlFor="email">
            E-mail
            <input
              id="email"
              className="pay-input"
              name="email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => handleChange(e, [noBlanks, validatEmail])}
              required
            />
          </label>
          {formErrors.email[0] ? <span className="pay-errors">{formErrors.email[0]}</span> : null}
          <label className="pay-form-label" htmlFor="phone">
            Name
            <input
              id="phone"
              className="pay-input"
              name="name"
              type="name"
              placeholder="Name"
              onChange={(e) => handleChange(e, [noBlanks])}
              value={name}
              required
            />
          </label>
          {formErrors.name[0] ? <span className="pay-errors">{formErrors.name[0]}</span> : null}
          <label className="pay-form-label" htmlFor="phone">
            Phone
            <input
              id="phone"
              className="pay-input"
              name="phone"
              type="phone"
              placeholder="Phone"
              onChange={(e) => handleChange(e, [noBlanks])}
              value={phone}
              required
            />
          </label>
          {formErrors.phone[0] ? <span className="pay-errors">{formErrors.phone[0]}</span> : null}
          <label className="pay-form-label" htmlFor="address">
            Address
            <input
              id="address"
              className="pay-input"
              name="address"
              type="address"
              placeholder="Delivery address"
              onChange={(e) => handleChange(e, [noBlanks])}
              value={address}
              required
            />
          </label>
          {formErrors.address[0] ? (
            <span className="pay-errors">{formErrors.address[0]}</span>
          ) : null}
          <label className="pay-form-label" htmlFor="postcode">
            Postcode
            <input
              id="postcode"
              className="pay-input"
              name="postcode"
              type="postcode"
              placeholder="Postcode"
              onChange={(e) => handleChange(e, [noBlanks])}
              value={postcode}
              required
            />
          </label>
          {formErrors.postcode[0] ? (
            <span className="pay-errors">{formErrors.postcode[0]}</span>
          ) : null}
          <label className="pay-form-label" htmlFor="city">
            City
            <input
              id="city"
              className="pay-input"
              name="city"
              type="city"
              placeholder="City"
              onChange={(e) => handleChange(e, [noBlanks])}
              value={city}
              required
            />
          </label>
          {formErrors.city[0] ? <span className="pay-errors">{formErrors.city[0]}</span> : null}

          <button
            disabled={disabled}
            className="pay-button"
            onClick={proceedToStripe}
            type="submit"
          >
            Pay
          </button>
        </form>
      </div>
      <div className="pay-summary-wrapper">
        <div className="delivery-address">
          <h3>Delivery Address: </h3>
          <p>{address}</p>
          <p>{postcode}</p>
          <p>{city}</p>
          <p>{name}</p>
          <p>{phone}</p>
          <p>{email}</p>
        </div>
        <div className="products-to-deliver-wrapper">
          <h3>Products to be delivered: </h3>
          {console.log(cart)}
          {cart.map((item) => (
            <div className="product-pay-wrapper">
              <img className="image-pay-summary" src={item?.image} alt="product" />
              <div>
                <p>{item?.title}</p>

                <p className="items">{`${item?.price}$ x ${item?.amount}`}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="total">
          <h3>Total: </h3>
          <p className="items">{`${total}$`}</p>
        </div>
      </div>
    </div>
  );
};

export default Pay;
