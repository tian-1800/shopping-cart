import React from "react";
import CartIcon from "./icon/cart";

export default function StickyCart(props) {
  const { cart } = props;
  const renderedCart = cart.map((item) => {
    const { name, price, quantity, category } = item;
    if (quantity === 0) return null;
    return (
      <div key={name}>
        <p>
          {name} {category} quantity: {quantity} @{price}{" "}
        </p>
      </div>
    );
  });
  const totalPrice = cart.reduce((total, item) => total + (item.price*item.quantity),0);
  const expandCart = () => {};
  return (
    <div id="sticky-cart">
      <CartIcon fontSize={36} onClick={expandCart} />
      <span>{totalPrice}</span>
      {renderedCart}
    </div>
  );
}
