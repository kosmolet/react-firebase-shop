import React from 'react';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import './Header.css';

const Header = () => {
  const a = 0;
  return (
    <nav className="header">
      <Link to="/">
        <img
          className="header-logo"
          src="https://res.cloudinary.com/dnkftif1n/image/upload/v1607232370/projectsGitHUB/clipart2854838_zlwrwp.png"
          alt="logo"
        />
      </Link>

      <div className="header-search-wrapper">
        <input type="text" className="header-search-input" />
        <SearchIcon className="header-search-icon" />
      </div>

      <div className="header-actions-wrapper">
        <Link to="/" className="header-actions-link">
          <div className="actions-option">
            <span className="line1">Hi</span>
            <span className="line2">Sign In</span>
          </div>
        </Link>
        <Link to="/" className="header-actions-link">
          <div className="actions-option">
            <span className="line1">Returns</span>
            <span className="line2">Orders</span>
          </div>
        </Link>
        <Link to="/" className="header-actions-link">
          <div className="actions-option">
            <span className="line1">Your</span>
            <span className="line2">Orders</span>
          </div>
        </Link>
        <Link to="/checkout" className="header-actions-link">
          <div className="actions-optionCart">
            <ShoppingBasketIcon className="nav-cartImg" />
            <span className="line1 nav-cartCount">1</span>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
