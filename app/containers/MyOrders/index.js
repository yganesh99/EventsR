/**
 *
 * MyOrders
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectMyOrders from './selectors';
import reducer from './reducer';
import saga from './saga';

import MyOrderCard from '../../components/MyOrderCard';
import chairImage from '../../images/chair.png';

export function MyOrders() {
  useInjectReducer({ key: 'myOrders', reducer });
  useInjectSaga({ key: 'myOrders', saga });

  const orderDetails = {
    orderNo: '123456',
    dateTime: '2023-10-15 12:30 PM',
    items: [
      { name: 'Product 1', quantity: 2, image: chairImage },
      { name: 'Product 2', quantity: 1, image: chairImage },
      // Add more items as needed
    ],
    total: 150.99,
  };

  const onDropdownChange = e => {
    console.log(e);
  };

  return (
    <div className="my-orders uk-text-center">
      <h2 className="uk-margin-large-top">My Orders</h2>
      <div className=" uk-flex uk-flex-center uk-flex-middle uk-flex-column">
        <MyOrderCard order={orderDetails} />
        <MyOrderCard order={orderDetails} />
      </div>
    </div>
  );
}

MyOrders.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  myOrders: makeSelectMyOrders(),
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

export default compose(withConnect)(MyOrders);
