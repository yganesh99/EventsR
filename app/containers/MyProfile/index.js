/**
 *
 * MyProfile
 *
 */

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectMyProfile from './selectors';
import reducer from './reducer';
import saga from './saga';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import toast, { Toaster } from 'react-hot-toast';
import { Bars } from 'react-loader-spinner';
import { isValidEmail, isValidPhoneNumber } from '../../utils/functions';
import { data } from 'vfile';
import { getUser, dataChange, updateUser } from './actions';

export function MyProfile({
  history,
  loading,
  onGetUser,
  user,
  onUpdateUser,
  successMessage,
  errorMessage,
  onDataChange,
}) {
  useInjectReducer({ key: 'myProfile', reducer });
  useInjectSaga({ key: 'myProfile', saga });

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

  useEffect(() => {
    onGetUser();
  }, []);

  useEffect(() => {
    setState({
      ...state,
      fName: user.firstName,
      lName: user.lastName,
      mobileNo: user.contactNo,
      email: user.email,
    });
  }, [user]);

  useEffect(() => {
    if (successMessage !== '') {
      toast.success(successMessage);
      onDataChange('successMessage', '');
      // setTimeout(() => {
      //   window.location.href = '/';
      // }, 1000);
    }
    if (errorMessage !== '') {
      toast.error(errorMessage);
      onDataChange('errorMessage', '');
    }
  }, [successMessage, errorMessage]);

  const validateForm = () => {
    if (state.fName === '') {
      toast.error('First Name cannot be empty.');
    } else if (state.mobileNo === '') {
      toast.error('Mobile No cannot be empty.');
    } else if (!isValidPhoneNumber(state.mobileNo)) {
      toast.error('Enter a valid Mobile.');
    } else if (state.email === '') {
      toast.error('Email cannot be empty.');
    } else if (!isValidEmail(state.email)) {
      toast.error('Enter a valid email.');
    } else {
      return true;
    }
    return false;
  };

  const updateUserProfile = () => {
    const updateObj = {
      userId: user._id,
      firstName: state.fName,
      lastName: state.lName,
      email: state.email,
      contactNo: state.mobileNo,
    };
    if (state.password !== '') {
      if (state.password !== state.confirmPassword) {
        toast.error('Passwords do not match');
      } else {
        updateObj.password = state.password;
        onUpdateUser(updateObj);
      }
    } else {
      onUpdateUser(updateObj);
    }
  };

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
        <h3 className="uk-text-center">Edit Profile Details</h3>

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
            placeholder="New Password"
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
            placeholder="Confirm New Password"
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
          onClick={updateUserProfile}
        >
          Update
        </button>
      </div>
    </div>
  );
}

MyProfile.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  myProfile: makeSelectMyProfile(),
  loading: state.myProfileReducer.loading,
  user: state.myProfileReducer.user,
  successMessage: state.myProfileReducer.successMessage,
  errorMessage: state.myProfileReducer.errorMessage,
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    onGetUser: data => {
      dispatch(getUser(data));
    },
    onUpdateUser: data => {
      dispatch(updateUser(data));
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

export default compose(withConnect)(MyProfile);
