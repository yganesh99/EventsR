/**
 *
 * ProductCard
 *
 */

import React from 'react';


function ProductCard({ imageSrc, title, price }) {
  return (
    <div className="uk-card uk-card-default uk-width-1-4@m prod-card">
      <div className="uk-flex uk-flex-center">
        <img className='uk-margin-top' src={imageSrc} alt={title} uk-cover />
      </div>
      <div>
        <div className="uk-card-body uk-text-center">
          <h3 className="uk-card-title">{title}</h3>
          <p>${price}</p>
          <button className="uk-button uk-button-primary">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

ProductCard.propTypes = {};

export default ProductCard;
