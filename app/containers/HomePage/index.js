/**
 *
 * HomePage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectHomePage from './selectors';
import reducer from './reducer';
import saga from './saga';

import HomeSlider from '../../components/HomeSlider';
import ServiceCard from '../../components/ServiceCard';
import TestimonialCard from '../../components/TestimonialCard'

import rentalImage from '../../images/rentals.jpg'
import buyImage from '../../images/buy.jpg'
import servicesImage from '../../images/services.jpg'

import p1 from '../../images/p1.jpg'
import p2 from '../../images/p2.jpg'
import p3 from '../../images/p3.jpg'

export function HomePage() {
  useInjectReducer({ key: 'homePage', reducer });
  useInjectSaga({ key: 'homePage', saga });

  return (

    <div className='home'>
      <div>
        <HomeSlider/>
      </div>
      <div className='prod-sect'>
        <h2 className='uk-padding'>Products</h2>
        <div class="uk-child-width-1-3@m uk-flex uk-margin-top uk-margin-left" uk-grid>
          <ServiceCard image={rentalImage} title={"Rentals"} description={"Lorem Ipsum"}/>
          <ServiceCard image={buyImage} title={"Buy"} description={"Lorem Ipsum"}/>
          <ServiceCard image={servicesImage} title={"Services"} description={"Lorem Ipsum"}/>
        </div>
      </div>
      <div className='test-sect'>
        <h2 className='uk-padding'>Testimonials</h2>
        <div className='uk-flex uk-height-large'>
          <TestimonialCard name={"Sarah T."} image={p1} rating={4} description={"I couldn't have asked for a more seamless experience for my wedding! The team at Event Rentals made sure every detail was perfect - from the elegant chairs and stunning centerpieces to the dance floor that kept our guests grooving all night. Thank you for making our special day truly unforgettable!"}/>
          <TestimonialCard name={"Mark H."} image={p2} rating={4} description={"Wow! What a party we had! Event Rentals went above and beyond to provide us with everything we needed for our company's annual bash. The colorful linens, vibrant lighting, and high-quality sound equipment created an electrifying atmosphere that had everyone talking for weeks!"}/>
          <TestimonialCard name={"Emily L."} image={p3} rating={4} description={"From intimate gatherings to large-scale concerts, Event Rentals has been my go-to for all event needs. Their top-notch service, wide range of options, and attention to detail always exceed my expectations. Trust me; you won't find a better rental partner!"}/>
        </div>
      </div>
    </div>

  );

};

HomePage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  homePage: makeSelectHomePage(),
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

export default compose(withConnect)(HomePage);
