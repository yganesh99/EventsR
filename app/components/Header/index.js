import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import logo from '../../images/logo.png'

function Header() {

  return (
    <div>

      <div className="uk-navbar-container uk-flex uk-visible@s nav-bg" uk-navbar="true">
        <div className="uk-navbar-left uk-margin-medium-left">
          <a className="uk-navbar-item uk-logo nav-logo" href="/">
            <img className="logo" src={logo} alt='logo'/>
          </a>
        </div>
        <div className="uk-navbar-right uk-margin-medium-right">
          <ul className="uk-navbar-nav nav-links">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/products">Products</a>
            </li>
            <li>
              <a href="/account">Account</a>
            </li>
            <li>
              <a href="/cart">
                <FontAwesomeIcon className="cart" icon={faCartPlus} size='30px'/>              
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="uk-navbar-container uk-flex uk-flex-column uk-hidden@s nav-bg" uk-navbar="true">
        <div className="uk-text-center uk-text-middle">
          <a className="uk-navbar-item uk-logo nav-logo" href="/">
            <img className="logo" src={logo} alt='logo'/>
          </a>
        </div>
        <div className="uk-margin-left uk-margin-right">
          <ul className="uk-navbar-nav nav-links uk-flex-center">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/products">Products</a>
            </li>
            <li>
              <a href="/account">Account</a>
            </li>
            <li>
              <a href="/cart">
                <FontAwesomeIcon className="cart" icon={faCartPlus} size='30px'/>              
              </a>
            </li>
          </ul>
        </div>
      </div>


    </div>

  );

};

export default Header;
