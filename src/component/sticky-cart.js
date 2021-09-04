import React, { useState } from "react";
import CartIcon from "./icon/cart";

export default function StickyCart(props) {
  const { cart } = props;
  const [cartExpanded, setCardExpanded] = useState(false);

  const renderedCart = cart.map((item) => {
    const { title, price, quantity } = item;
    if (!quantity > 0) return null;
    return (
      <div key={title}>
        <div className="cart-list-item">
          <div>{title} </div>
          <div>
            quantity: <strong>{quantity}</strong> <br />
            each <strong>${price}</strong>
          </div>
          <div>
            total: <strong>${price * quantity}</strong>
          </div>
        </div>
      </div>
    );
  });

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const toggleCartExpand = () => {
    setCardExpanded(!cartExpanded);
  };
  if (!cartExpanded)
    return (
      <div id="sticky-cart">
        <button type="button" onClick={toggleCartExpand}>
          <CartIcon fontSize={36} />
        </button>
        <span>${totalPrice}</span>
      </div>
    );
  return (
    <div id="cart-detail">
      {renderedCart}
      <div id="grand-total">
        Grand total: <strong>${totalPrice}</strong>
      </div>
      <div id="cart-button-container">
        <button type="button" id="cart-checkout">
          Checkout
        </button>
        <button type="button" id="close-cart-detail" onClick={toggleCartExpand}>
          Close
        </button>
      </div>
    </div>
  );
}
