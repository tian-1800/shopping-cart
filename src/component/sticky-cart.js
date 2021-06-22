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
        <p>
          {title} quantity: {quantity} @{price}{" "}
        </p>
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
        <span>{totalPrice}</span>
      </div>
    );
  return (
    <div id="cart-detail">
      <button type="button" id="close-cart-detail"onClick={toggleCartExpand}>
        x
      </button>
      {renderedCart}
      <button type="button" id="cart-checkout">Checkout</button>
    </div>
  );
}
