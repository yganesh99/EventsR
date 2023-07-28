/**
 *
 * HomeSlider
 *
 */

import React, { useEffect } from "react";
import UIkit from "uikit";
import weddingImage from '../../images/wedding.jpg'
import partyImage from '../../images/party.jpg'
import concertImage from '../../images/concert.jpg'
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function HomeSlider() {

  useEffect(() => {
    const slider = UIkit.slider(".uk-slider" , {
      autoplay: true,
      autoplayInterval: 2000,
    });

    return () => {
      slider.stopAutoplay();
    };

  }, []);

  return (

    <div className="uk-position-relative uk-visible-toggle uk-light" tabIndex="-1" uk-slider="true">

      <ul className="uk-slider-items uk-child-width-1-2@s uk-grid">
        <li>
          <div className="slider-item">
            <h2>Weddings</h2>
            <img src={weddingImage} alt="Wedding Image" />
          </div>
        </li>
        <li>
          <div className="slider-item">
            <h2>Parties</h2>
            <img src={partyImage} alt="Party Image" />
          </div>
        </li>
        <li>
          <div className="slider-item">
            <h2>Concerts</h2>
            <img src={concertImage} alt="Concert Image" />
          </div>
        </li>
      </ul>

      <a className="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous="true" uk-slider-item="previous"></a>
      <a className="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next="true" uk-slider-item="next"></a>

      {/* <ul className="uk-slider-nav uk-dotnav uk-flex-center uk-margin"></ul> */}

    </div>

  );

};

HomeSlider.propTypes = {};

export default HomeSlider;
