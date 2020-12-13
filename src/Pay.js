import React, { useState, useEffect } from 'react';
import './Pay.css';

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
  const [disabled, setDisabled] = useState(true);
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
    console.log('formValues', formValues);
    console.log('formErrors', formErrors);
  }, [formValues]);

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

  const validatEmail = (value) => ({
    valid: value.split('@').length > 1,
    message: 'must be a valid email'
  });

  const proceedToStripe = () => {
    // do stripe
  };
  return (
    <div>
      <form className="account-form" onSubmit={(e) => e.preventDefault()}>
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

        <button disabled={disabled} className="pay-button" onClick={proceedToStripe} type="submit">
          Pay
        </button>
      </form>
    </div>
  );
};

export default Pay;
