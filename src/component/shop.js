import React from "react";
import DisplaySlider from "./display-slider";
import ItemCard from "./item-card";

export default function Shop(props) {
  const { cart } = props;
  const populateShop = (things) =>
    things.map((item) => <ItemCard item={item} key={item.title} />);

  return (
    <div id="shop">
      <p>Browse by product</p>
      <DisplaySlider sectionName="shop">
        {populateShop(cart)}
      </DisplaySlider></div>
  );
}
