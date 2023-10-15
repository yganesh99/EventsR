/**
 *
 * MyOrderCard
 *
 */

import React from 'react';

function MyOrderCard({ order }) {
  const { orderNo, dateTime, items, total } = order;

  return (
    <div className="order-card uk-card uk-card-default uk-card-body">
      <div className="order-header">
        <h3 className="uk-card-title">Order No: {orderNo}</h3>
        <p>Date and Time: {dateTime}</p>
      </div>

      <div className="order-items">
        {items.map((item, index) => (
          <div key={index} className="order-item uk-flex uk-flex-middle">
            <img src={item.image} alt={item.name} className="uk-margin-right" />
            <div className="uk-flex uk-flex-between order-item-details">
              <p className="item-name">{item.name}</p>
              <p className="item-quantity">Quantity: {item.quantity}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="order-total uk-margin-top">
        <p>Total: ${total}</p>
      </div>

      <div className="view-order-link">
        <button href={`/my-orders/${orderNo}`} className="uk-button">
          View Full Order
        </button>
      </div>
    </div>
  );
}

MyOrderCard.propTypes = {};

export default MyOrderCard;
