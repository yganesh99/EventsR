/**
 *
 * Login
 *
 */

import React, { useState, useEffect } from 'react';
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
import { Bars } from 'react-loader-spinner';
import { login, dataChange } from './actions';
import toast, { Toaster } from 'react-hot-toast';
import { isValidEmail, isValidPhoneNumber } from '../../utils/functions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';

export function Login({
  history,
  loading,
  onLogin,
  onDataChange,
  successMessage,
  errorMessage,
}) {
  useInjectReducer({ key: 'login', reducer });
  useInjectSaga({ key: 'login', saga });

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const [state, setState] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = e => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const validateForm = () => {
    if (state.email === '') {
      toast.error('Email is required to login.');
    } else if (!isValidEmail(state.email)) {
      toast.error('Enter a valid email to login.');
    } else if (state.password === '') {
      toast.error('Enter your password to login.');
    } else {
      return true;
    }
    return false;
  };

  const loginUser = () => {
    if (validateForm()) {
      onLogin({
        email: state.email,
        password: state.password,
      });
    }
  };

  useEffect(() => {
    if (successMessage !== '') {
      toast.success(successMessage);
      onDataChange('successMessage', '');
      setTimeout(() => {
        window.location.href = '/';
      }, 1000);
    }
    if (errorMessage !== '') {
      toast.error(errorMessage);
      onDataChange('errorMessage', '');
    }
  }, [successMessage, errorMessage]);

  return (
    <div className={`uk-form login ${loading ? 'loading' : ''}`}>
      <Toaster />
      <div className="auth-loading-overlay">
        <Bars
          height="80"
          width="80"
          color="#ff1493"
          ariaLabel="bars-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={loading ? true : false}
        />
      </div>
      <div className="login-form uk-margin-large-top uk-width-1-2 uk-align-center uk-text-center">
        <img className="logo uk-align-center" src={logo} alt="logo" />
        <h3 className="uk-text-center">Login to EventsR</h3>
        <input
          name="email"
          placeholder="E-mail"
          className="uk-input uk-margin-bottom uk-margin-top"
          value={state.email}
          onChange={handleInputChange}
        />
        <div className="uk-flex uk-width-1-1 password-input">
          <input
            placeholder="Password"
            type={showPassword ? 'text' : 'password'}
            className="uk-input uk-margin-bottom"
            name="password"
            value={state.password}
            onChange={handleInputChange}
          />
          <FontAwesomeIcon
            onClick={togglePasswordVisibility}
            className="eye"
            icon={faEye}
            size="30px"
          />
        </div>
        <button
          className="uk-button-primary uk-align-center"
          onClick={loginUser}
        >
          Login
        </button>
        <a href="/register" className="uk-text-center">
          If you don't already have an account click on this link to register.
        </a>
      </div>
    </div>
  );
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  login: makeSelectLogin(),
  loading: state.loginReducer.loading,
  successMessage: state.loginReducer.successMessage,
  errorMessage: state.loginReducer.errorMessage,
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    onLogin: data => {
      dispatch(login(data));
    },
    onDataChange: (fieldName, fieldValue) => {
      dispatch(dataChange(fieldName, fieldValue));
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Login);
