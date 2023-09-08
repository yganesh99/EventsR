/**
 *
 * ServiceCard
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function ServiceCard({image, description, buttonText}) {


  return (
    <div className='service-card uk-flex uk-flex-column uk-flex-middle uk-flex-center uk-margin-top uk-margin-right uk-margin-left' style={{ backgroundImage: `url(${image})` }}>
      <h3 className=''>{description}</h3>
      <button className='uk-button uk-width-1-2'>{buttonText}</button>
    </div>
  );
};

ServiceCard.propTypes = {};

export default ServiceCard;
