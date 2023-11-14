/**
 *
 * ProductTypes
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectProductTypes from './selectors';
import cardImage from '../../images/concert.jpg';

import reducer from './reducer';
import saga from './saga';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCalendarCheck,
  faCartShopping,
} from '@fortawesome/free-solid-svg-icons';

export function ProductTypes({ history }) {
  useInjectReducer({ key: 'ProductTypes', reducer });
  useInjectSaga({ key: 'ProductTypes', saga });

  const onProductTypeCardClick = type => {
    type === 'rent'
      ? (window.location.href = '/products?type=rent')
      : (window.location.href = '/products?type=purchase');
  };

  return (
    <div className="prod-type-cont uk-text-center uk-flex uk-flex-center uk-margin-large-bottom">
      <div
        className="prod-type-card uk-margin-large-right"
        onClick={() => onProductTypeCardClick('rent')}
      >
        <FontAwesomeIcon
          className="pencil calendar-check uk-margin-large-top"
          icon={faCalendarCheck}
        />
        <p className="">Rent</p>
      </div>
      <div
        className="prod-type-card"
        onClick={() => onProductTypeCardClick('purchase')}
      >
        <FontAwesomeIcon
          className="receipt shopping-cart uk-margin-large-top"
          icon={faCartShopping}
        />
        <p className="">Purchase</p>
      </div>
    </div>
  );
}

ProductTypes.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  ProductTypes: makeSelectProductTypes(),
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

export default compose(withConnect)(ProductTypes);
