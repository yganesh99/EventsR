/**
 *
 * ProductCategoryCard
 *
 */

import React from 'react';

function ProductCategoryCard({ cardImage, title, onClick }) {
  const cardStyle = {
    backgroundImage: `url(${cardImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '300px', // Adjust the height of the card as needed
    borderRadius: '10px', // Add border-radius for rounded corners
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Add a subtle shadow
    position: 'relative', // Add relative positioning for pseudo-element
  };

  return (
    <div
      onClick={onClick}
      className="uk-card uk-card-default uk-card-body uk-width-1-4@m uk-padding-remove uk-margin-left uk-margin-right uk-margin-bottom uk-animation-fade prod-cat-card"
    >
      <div className="uk-position-relative" style={cardStyle}>
        <div className="uk-position-center uk-text-center">
          <h3 className="uk-card-title">{title}</h3>
        </div>
      </div>
    </div>
  );
}

ProductCategoryCard.propTypes = {};

export default ProductCategoryCard;
