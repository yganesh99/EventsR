/**
 *
 * MyOrderCard
 *
 */

import React from 'react';

function MyOrderCard({ order }) {
  const { orderNo, dateTime, items, total } = order;

  const onClickViewOrder = () => {
    window.location.href = `/my-orders/${orderNo}`;
  };

  return (
    <div className="my-order uk-card uk-container uk-margin-large-top uk-margin-large-bottom">
      <h3 className="uk-text-center uk-margin-top">Order No: {orderNo}</h3>
      <p className="my-order-date">{dateTime}</p>

      <div className="my-order-items uk-margin-large-top uk-flex uk-flex-column">
        {items.map((item, index) => (
          <div
            key={index}
            className="my-order-item uk-flex uk-flex-middle uk-flex-center"
          >
            <img src={item.image} alt={item.name} />
            <div className="uk-flex uk-flex-between my-order-item-details">
              <p className="item-name uk-text-bold">{item.name}</p>
              <p className="item-quantity">x {item.quantity}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="my-order-totals uk-margin-bottom uk-flex">
        <div className="uk-flex uk-margin uk-flex-right">
          <p className="uk-flex-right uk-margin-remove uk-text-bold">
            Subtotal:
          </p>
          <p className="uk-flex-left uk-margin-remove-top uk-margin-remove-bottom uk-margin-left">
            ${total}
          </p>
        </div>
        <div className="uk-flex uk-margin uk-flex-right">
          <p className="uk-flex-right uk-margin-remove uk-text-bold">
            Discount:
          </p>
          <p className="uk-flex-left uk-margin-remove-top uk-margin-remove-bottom uk-margin-left">
            ${total}
          </p>
        </div>
        <div className="uk-flex uk-margin uk-flex-right">
          <p className="uk-flex-right uk-margin-remove uk-text-bold">Total: </p>
          <p className="uk-flex-left uk-margin-remove-top uk-margin-remove-bottom uk-margin-left">
            ${total}
          </p>
        </div>
      </div>
    </div>
  );
}

MyOrderCard.propTypes = {};

export default MyOrderCard;
