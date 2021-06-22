import React from "react";
import ItemCard from "./item-card";

export default function Shop(props) {
  const { cart } = props;
  const populateShop = (things) =>
    things.map((item) => <ItemCard item={item} key={item.title} />);
  return (
    <div id="shop">
      <p>Browse by category</p>
      <div id="shop-container">{populateShop(cart)}</div>
    </div>
  );
}
