import React, { useState } from "react";
import { Link } from "react-router-dom";
import CartIcon from "./icon/cart";

export default function StickyCart({ cart, setCart }) {
  // const { cart } = props;
  const [cartExpanded, setCardExpanded] = useState(false);

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  let renderedCart;
  if (totalPrice > 0)
    renderedCart = cart.map((item) => {
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
  else {
    renderedCart = (
      <>
        <div>You have no items in the cart</div>
        <div id="cart-button-container">
          <button
            type="button"
            id="close-cart-detail"
            onClick={() => {
              setCardExpanded(false);
            }}
          >
            Close
          </button>
        </div>
      </>
    );
  }

  const toggleCartExpand = () => {
    setCardExpanded(!cartExpanded);
  };

  const resetCard = () => {
    const tempArr = [...cart].map((item) => {
      const copiedItem = item;
      copiedItem.quantity = 0;
      return copiedItem;
    });
    setCart(tempArr);
    setCardExpanded(false);
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

      {totalPrice > 0 && (
        <div id="cart-button-container">
          <button type="button" id="cart-checkout" onClick={resetCard}>
            <Link to="/">Checkout</Link>
          </button>
          <button
            type="button"
            id="close-cart-detail"
            onClick={toggleCartExpand}
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
}
