/* eslint-disable no-shadow */
import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Login.css';
import { auth } from './config/firebase';

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [error, setError] = useState('');

  const validateEmail = () => {
    const pattern = new RegExp(
      /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
    );
    return pattern.test(String(email).toLowerCase());
  };
  useEffect(() => {
    if (validateEmail(email) && password.length > 5) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [email, password]);
  const signIn = async (e) => {
    e.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(email, password);
      await history.push('/');
    } catch (err) {
      setError(error.message);
    }
  };
  const register = async (e) => {
    e.preventDefault();
    try {
      await auth.createUserWithEmailAndPassword(email, password);
      await history.push('/');
    } catch (err) {
      setError(err.message);
      console.log(error);
    }
  };

  return (
    <div className="login-wrapper">
      <Link to="/">
        <img
          className="login-logo"
          src="https://res.cloudinary.com/dnkftif1n/image/upload/v1607232370/projectsGitHUB/clipart2854838_zlwrwp.png"
          alt="logo"
        />
      </Link>
      <div className="login-form-wrapper">
        <h1>Sign In</h1>
        <form>
          <label className="login-form-label" htmlFor="email">
            E-mail
            <input
              id="email"
              className="login-input"
              name="email"
              type="email"
              placeholder="your.mail@example.com"
              required
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </label>

          <label className="login-form-label" htmlFor="password">
            Password
            <input
              id="password"
              className="login-input"
              name="password"
              type="password"
              placeholder="password"
              required
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </label>
          <button
            type="submit"
            onClick={signIn}
            disabled={disabled}
            className={!disabled ? 'signIn-button' : 'signIn-button disabled'}
          >
            Sign In
          </button>
        </form>

        {disabled && (
          <p style={{ color: 'red' }}>Invalid e-mail / password length is less than 6</p>
        )}
        <p>By signing-in you agree with Gun Shop AB Tearms and Conditions.</p>
        <button
          type="button"
          onClick={register}
          disabled={disabled}
          className={!disabled ? 'register-button' : 'register-button disabled'}
        >
          Create Account
        </button>
        {error ? <p className="error-fbs">{`Something went wrong: ${error}`}</p> : null}
      </div>
    </div>
  );
};

export default Login;
