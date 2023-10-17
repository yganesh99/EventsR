/**
 *
 * MyOrder
 *
 */

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectMyOrder from './selectors';
import reducer from './reducer';
import saga from './saga';

import chairImage from '../../images/chair.png';

export function MyOrder() {
  useInjectReducer({ key: 'myOrder', reducer });
  useInjectSaga({ key: 'myOrder', saga });

  const [orderNo, setOrderNo] = useState('');
  const items = [
    { name: 'Product 1', quantity: 2, image: chairImage },
    { name: 'Product 2', quantity: 1, image: chairImage },
  ];
  const dateTime = '2023-10-15 12:30 PM';

  useEffect(() => {
    const url = window.location.href;
    setOrderNo(url.split('/')[url.split('/').length - 1]);
  }, []);

  return (
    <div className="my-order uk-container uk-margin-large-top ">
      <h3 className="uk-text-center">Order No: {orderNo}</h3>
      <p className="my-order-date">{dateTime}</p>

      <div className="my-order-items uk-margin-large-top uk-visible@s">
        {items.map((item, index) => (
          <div key={index} className="my-order-item uk-flex uk-flex-middle">
            <img src={item.image} alt={item.name} className="uk-margin-right" />
            <div className="uk-flex uk-flex-between my-order-item-details">
              <p className="item-name uk-text-bold">{item.name}</p>
              <p className="item-quantity-label uk-text-bold">Quantity:</p>
              <p className="item-quantity">{item.quantity}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="my-order-items uk-margin-large-top uk-hidden@s">
        {items.map((item, index) => (
          <div key={index} className="my-order-item uk-flex uk-flex-middle">
            <img src={item.image} alt={item.name} className="uk-margin-right" />
            <div className="uk-flex uk-flex-between my-order-item-details">
              <p className="item-name uk-text-bold">{item.name}</p>
              <p className="item-quantity">X {item.quantity}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

MyOrder.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  myOrder: makeSelectMyOrder(),
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

export default compose(withConnect)(MyOrder);
