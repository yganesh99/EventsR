/**
 *
 * ServiceCard
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function ServiceCard({image, title}) {
  return (
    <div className= 'uk-margin-right uk-margin-bottom'>
      <div className="uk-card services-card-top uk-card-body uk-card-small uk-margin-bottom">
        <div className="uk-card-media-top">
          <img src={image} width="1800" height="1200" alt=""/>
        </div>
      </div>
      <div className='uk-card services-card-bottom uk-card-hover uk-margin-large-right uk-margin-large-left'>
        <h3 class="uk-card-title uk-text-bold uk-padding-small">{title}</h3>
      </div>
    </div>
  );
};

ServiceCard.propTypes = {};

export default ServiceCard;
