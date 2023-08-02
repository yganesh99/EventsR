/**
 *
 * ProductCategories
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectProductCategories from './selectors';
import cardImage from '../../images/concert.jpg'
import ProductCategoryCard from '../../components/ProductCategoryCard';

import reducer from './reducer';
import saga from './saga';

export function ProductCategories() {
  useInjectReducer({ key: 'productCategories', reducer });
  useInjectSaga({ key: 'productCategories', saga });

  return (
    <div className="prod-cat-container uk-margin-large">
      <div className="uk-grid uk-height-match prod-cat-grid" data-uk-grid>
        <ProductCategoryCard cardImage={cardImage} title={"Concerts"}/>
        <ProductCategoryCard cardImage={cardImage} title={"Weddings"}/>
        <ProductCategoryCard cardImage={cardImage} title={"Parties"}/>
        <ProductCategoryCard cardImage={cardImage} title={"Parties"}/>
      </div>
    </div>

  );
}

ProductCategories.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  productCategories: makeSelectProductCategories(),
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

export default compose(withConnect)(ProductCategories);