import React, { useEffect, useState } from "react";
import HeaderShop from "./header-shop";
import DisplaySlider from "./display-slider";
import ItemCard from "./item-card";

export default function Shop(props) {
  const { cart } = props;
  const [error, setError] = useState(false);
  const populateShop = (things) =>
    things.map((item) => <ItemCard item={item} key={item.title} />);
  useEffect(() => {
    if (!cart.length > 0) {
      setError(true);
      sessionStorage.clear();
    } else {
      setError(false);
    }
  }, []);

  return (
    <div id="shop">
      <HeaderShop />
      <p>Browse by product</p>
      <h1>{error && "There is an error occured"}</h1>
      <DisplaySlider sectionName="shop">{populateShop(cart)}</DisplaySlider>
    </div>
  );
}
