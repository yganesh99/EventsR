/**
 *
 * Products
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectProducts from './selectors';
import reducer from './reducer';
import saga from './saga';
import ProductCard from '../../components/ProductCard';
import chairImage from '../../images/chair.png'

export function Products() {
  useInjectReducer({ key: 'products', reducer });
  useInjectSaga({ key: 'products', saga });

  return(
    <div className='uk-margin-large uk-margin-large-left uk-margin-large-right prod-container'>
      <ProductCard imageSrc={chairImage} title={"Chair"} price={"100"}/>
    </div>
  );
}

Products.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  products: makeSelectProducts(),
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

export default compose(withConnect)(Products);
