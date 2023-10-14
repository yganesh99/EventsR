import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCartPlus } from '@fortawesome/free-solid-svg-icons';
import logo from '../../images/logo.png';
import chairImage from '../../images/chair.png';

function Header({ isLoggedIn }) {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const logout = () => {
    localStorage.setItem('isLoggedIn', false);
  };

  return (
    <div>
      <div
        className="uk-navbar-container uk-flex uk-visible@s nav-bg"
        uk-navbar="true"
      >
        <div className="uk-navbar-left uk-margin-medium-left">
          <a className="uk-navbar-item uk-logo nav-logo" href="/">
            <img className="logo" src={logo} alt="logo" />
          </a>
        </div>
        <div className="uk-navbar-right uk-margin-medium-right">
          <ul className="uk-navbar-nav nav-links">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/product-categories">Products</a>
            </li>
            <li>
              {isLoggedIn ? (
                <a href="/my-account">My Account</a>
              ) : (
                <a href="/login">Login/Register</a>
              )}
            </li>
            <li>
              <a onClick={toggleCart}>
                <FontAwesomeIcon
                  className="cart"
                  icon={faCartPlus}
                  size="30px"
                />
              </a>
            </li>
            {isLoggedIn ? (
              <li>
                <a href="/" onClick={logout} />
              </li>
            ) : null}
          </ul>
        </div>
      </div>

      <div
        className="uk-navbar-container uk-flex uk-flex-column uk-hidden@s nav-bg"
        uk-navbar="true"
      >
        <div className="uk-text-center uk-text-middle">
          <a className="uk-navbar-item uk-logo nav-logo" href="/">
            <img className="logo" src={logo} alt="logo" />
          </a>
        </div>
        <div className="uk-margin-left uk-margin-right">
          <div className="uk-text-center uk-margin-top uk-margin-bottom">
            <FontAwesomeIcon
              className="menu"
              icon={faBars}
              size="xl"
              color="white"
              onClick={toggleMenu}
            />
            <FontAwesomeIcon
              className="cart uk-margin-large-left"
              icon={faCartPlus}
              size="xl"
              onClick={toggleCart}
              color="white"
            />
          </div>

          <ul
            className="uk-navbar-nav nav-links uk-flex-center"
            style={{ display: isMenuOpen ? 'block' : 'none' }}
          >
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/product-categories">Products</a>
            </li>
            <li>
              {isLoggedIn ? (
                <a href="/my-account">My Account</a>
              ) : (
                <a href="/login">Login/Register</a>
              )}
            </li>
            {isLoggedIn ? (
              <li>
                <a href="/" onClick={logout} />
              </li>
            ) : null}
          </ul>
        </div>
      </div>

      <div style={{ display: isCartOpen ? 'block' : 'none' }}>
        <div className={`cart-overlay ${isCartOpen ? 'open' : ''}`}>
          <div className="uk-offcanvas-bar uk-flex uk-flex-column cart-content">
            <button className="close-button" onClick={toggleCart}>
              &times;
            </button>

            <h3>My Cart</h3>

            <div className="uk-margin">
              <div className="cart-card uk-card uk-card-default uk-padding uk-padding-remove-left uk-padding-remove-right uk-margin-top uk-margin-bottom uk-flex uk-flex-middle">
                <div className="cart-img-cont uk-margin-right uk-margin-left">
                  <img className="cart-img" src={chairImage} alt="chair" />
                </div>
                <div className="uk-margin-left uk-margin-right">
                  <p>Product 1</p>
                  <p>$20.00</p>
                </div>
                <div className="uk-margin-left uk-margin-right">
                  <p>+</p>
                  <p>2</p>
                  <p>-</p>
                </div>
              </div>

              <div className="cart-card uk-card uk-card-default uk-padding uk-padding-remove-left uk-padding-remove-right uk-margin-top uk-margin-bottom uk-flex uk-flex-middle">
                <div className="cart-img-cont uk-margin-right uk-margin-left">
                  <img className="cart-img" src={chairImage} alt="chair" />
                </div>
                <div className="uk-margin-left uk-margin-right">
                  <p>Product 2</p>
                  <p>$20.00</p>
                </div>
                <div className="uk-margin-left uk-margin-right">
                  <p>+</p>
                  <p>2</p>
                  <p>-</p>
                </div>
              </div>

              <div className="cart-card uk-card uk-card-default uk-padding uk-padding-remove-left uk-padding-remove-right uk-margin-top uk-margin-bottom uk-flex uk-flex-middle">
                <div className="cart-img-cont uk-margin-right uk-margin-left">
                  <img className="cart-img" src={chairImage} alt="chair" />
                </div>
                <div className="uk-margin-left uk-margin-right">
                  <p>Product 3</p>
                  <p>$20.00</p>
                </div>
                <div className="uk-margin-left uk-margin-right">
                  <p>+</p>
                  <p>2</p>
                  <p>-</p>
                </div>
              </div>
            </div>

            <div className="cart-val-cont uk-flex uk-flex-middle">
              <p className="uk-margin-top">Subtotal: $60.00</p>
              <p className="uk-margin">Delivery: $5.00</p>
              <p className="uk-margin-top">Total: $65.00</p>
            </div>

            <div className="cart-checkout-cont uk-margin-top uk-flex uk-flex-center">
              <button className="uk-button">Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
