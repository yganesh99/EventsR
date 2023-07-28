/**
 *
 * TestimonialCard
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function TestimonialCard({name, image, description, rating}) {

  // Calculate the number of filled and empty stars
  const filledStars = rating > 0 ? Math.min(rating, 5) : 0;
  const emptyStars = 5 - filledStars;

  return (
    <div className="uk-card uk-card-default uk-margin-right uk-margin-left uk-margin-bottom test-card uk-border-rounded">
      <div className="uk-card-header uk-margin-remove-bottom">
          <div className="uk-flex">
            <div className='uk-width-auto'>
              <img className="uk-border-circle" src={image} alt="Avatar"/>
            </div>
            <div className='uk-margin-small-top'>
              <h3 className="uk-card-title uk-margin-remove-bottom uk-margin-left">{name}</h3>
            </div>
          </div>
      </div>
      <div className="uk-card-body uk-padding-remove-top">
        <p>{description}</p>
        <div>
          {/* Render filled stars */}
          {Array.from({ length: filledStars }).map((_, index) => (
            <FontAwesomeIcon className="filled-star" icon={faStar} size='30px'/>              
          ))}
          {/* Render empty stars */}
          {Array.from({ length: emptyStars }).map((_, index) => (
            <FontAwesomeIcon className="star" icon={faStar} size='30px'/>              
          ))}
        </div>
      </div>
    </div>
  );
}

TestimonialCard.propTypes = {};

export default TestimonialCard;
