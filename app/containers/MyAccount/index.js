/**
 *
 * MyAccount
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
import makeSelectMyAccount from './selectors';
import reducer from './reducer';
import saga from './saga';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil, faReceipt } from '@fortawesome/free-solid-svg-icons';

export function MyAccount() {
  useInjectReducer({ key: 'myAccount', reducer });
  useInjectSaga({ key: 'myAccount', saga });

  return (
    <div className="my-account uk-height-1-1 uk-text-center">
      <h2 className="uk-margin-large-top uk-margin-large-bottom">Hi User</h2>
      <div className="account-action-cont uk-flex uk-flex-center uk-margin-large-bottom">
        <div className="account-action uk-margin-large-right">
          <FontAwesomeIcon
            // onClick={togglePasswordVisibility}
            className="pencil uk-margin-large-top"
            icon={faPencil}
          />
          <p className="">Edit Profile</p>
        </div>
        <div className="account-action">
          <FontAwesomeIcon
            // onClick={togglePasswordVisibility}
            className="receipt uk-margin-large-top"
            icon={faReceipt}
          />
          <p className="">View Orders</p>
        </div>
      </div>
    </div>
  );
}

MyAccount.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  myAccount: makeSelectMyAccount(),
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

export default compose(withConnect)(MyAccount);
