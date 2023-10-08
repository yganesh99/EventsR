/**
 *
 * Login
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectLogin from './selectors';
import reducer from './reducer';
import saga from './saga';

import logo from '../../images/logo.png';

export function Login() {
  useInjectReducer({ key: 'login', reducer });
  useInjectSaga({ key: 'login', saga });

  return (
    <div className="uk-form login">
      <form className="login-form uk-margin-large-top uk-width-1-2 uk-align-center uk-text-center">
        <img className="logo uk-align-center" src={logo} alt="logo" />
        <h3 className="uk-text-center">Welcome to EventsR</h3>
        <input
          placeholder="E-mail"
          className="uk-input uk-margin-bottom uk-margin-top"
        />
        <input placeholder="Password" className="uk-input" />
        <button className="uk-button-primary uk-align-center">Login</button>
        <a href="/register" className="uk-text-center">
          If you don't already have an account click on this link to register.
        </a>
      </form>
    </div>
  );
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  login: makeSelectLogin(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Login);
