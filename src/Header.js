import React from 'react';
import { Link } from 'react-router-dom';
// import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import './Header.css';
import { useStateValue } from './store/stateProvider';
import { auth } from './config/firebase';

const Header = () => {
  const [{ cart, user }] = useStateValue();
  const userName = user ? user.email.substring(0, user.email.indexOf('@')) : 'Guest';

  const handleSignOut = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <nav className="header">
      <Link to="/">
        <img
          className="header-logo"
          src="https://res.cloudinary.com/dnkftif1n/image/upload/v1607232370/projectsGitHUB/clipart2854838_zlwrwp.png"
          alt="logo"
        />
      </Link>

      {/* <div className="header-search-wrapper">
        <input type="text" className="header-search-input" />
        <SearchIcon className="header-search-icon" />
      </div> */}

      <div className="header-actions-wrapper">
        <Link to={!user ? '/login' : '/'} className="header-actions-link">
          <div className="actions-option">
            <span className="line1">{`Hi ${userName}`}</span>
            <button onClick={handleSignOut} type="button" className="line2 buttons-nav">
              {user ? 'Sign Out' : 'Sing In'}
            </button>
          </div>
        </Link>
        <Link to={!user ? '/login' : '/orders'} className="header-actions-link">
          <div className="actions-option">
            <span className="line1">Your</span>
            <button type="button" className="line2 buttons-nav">
              Orders
            </button>
          </div>
        </Link>
        <Link to="/checkout" className="header-actions-link">
          <div className="actions-optionCart">
            <ShoppingBasketIcon className="nav-cartImg" />
            <span className="line1 nav-cartCount">{cart.length}</span>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
