/**
 *
 * Register
 *
 */

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectRegister from './selectors';
import reducer from './reducer';
import saga from './saga';

import logo from '../../images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import toast, { Toaster } from 'react-hot-toast';
import { isValidEmail, isValidPhoneNumber } from '../../utils/functions';

export function Register() {
  useInjectReducer({ key: 'register', reducer });
  useInjectSaga({ key: 'register', saga });

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const [state, setState] = useState({
    fName: '',
    lName: '',
    mobileNo: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleInputChange = e => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const register = () => {
    console.log(state);
    if (validateForm()) {
      toast.success('You have been registered successfully.');
    }
  };

  const validateForm = () => {
    if (state.fName === '') {
      toast.error('First Name is required to register.');
    } else if (state.mobileNo === '') {
      toast.error('Mobile No is required to register.');
    } else if (!isValidPhoneNumber(state.mobileNo)) {
      toast.error('Enter a valid Mobile No to register.');
    } else if (state.email === '') {
      toast.error('Email is required to register.');
    } else if (!isValidEmail(state.email)) {
      toast.error('Enter a valid email to register.');
    } else if (state.password === '') {
      toast.error('Enter a password to register.');
    } else if (state.password !== state.confirmPassword) {
      toast.error('Passwords do not match');
    } else {
      return true;
    }
    return false;
  };

  return (
    <div className="uk-form login">
      <Toaster />
      <div className="login-form uk-margin-large-top uk-width-1-2 uk-align-center uk-text-center">
        <img className="logo uk-align-center" src={logo} alt="logo" />

        <h3 className="uk-text-center">Register with EventsR</h3>

        <input
          placeholder="First Name"
          type="text"
          className="uk-input uk-margin-bottom  uk-margin-top"
          name="fName"
          value={state.fName}
          onChange={handleInputChange}
        />

        <input
          placeholder="Last Name"
          type="text"
          className="uk-input uk-margin-bottom"
          name="lName"
          value={state.lName}
          onChange={handleInputChange}
        />

        <input
          placeholder="Mobile No"
          type="tel"
          className="uk-input uk-margin-bottom"
          name="mobileNo"
          value={state.mobileNo}
          onChange={handleInputChange}
        />

        <input
          placeholder="E-mail"
          type="email"
          className="uk-input uk-margin-bottom"
          name="email"
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

        <div className="uk-flex uk-width-1-1 password-input">
          <input
            placeholder="Confirm Password"
            type={showConfirmPassword ? 'text' : 'password'}
            className="uk-input uk-margin-bottom"
            name="confirmPassword"
            value={state.confirmPassword}
            onChange={handleInputChange}
          />
          <FontAwesomeIcon
            onClick={toggleConfirmPasswordVisibility}
            className="eye"
            icon={faEye}
            size="30px"
          />
        </div>

        <button
          className="uk-button-primary uk-align-center"
          onClick={register}
        >
          Register
        </button>

        <a href="/login" className="uk-text-center">
          If you already have an account click on this link to login.
        </a>
      </div>
    </div>
  );
}

Register.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  register: makeSelectRegister(),
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

export default compose(withConnect)(Register);
