import React, { useEffect, useState } from "react";
import CartInput from "./cart-input";
import items from "./data/items";

export default function DisplayPlant({ match }) {
  const [itemToDisplay, setItemToDisplay] = useState([]);
  useEffect(() => {
    const array = items.find((el) => el.category === match.params.id);
    const item = array.variant.find((el) => el.name === match.params.variant);
    if (item.description === "") item.description = "hehe";
    setItemToDisplay(item);
  }, []);
  return (
    <div className="item-container">
      <img className="item-img" src={itemToDisplay.img} alt={itemToDisplay.name} />
      <div className="item-detail">
        <h3>{itemToDisplay.name} {itemToDisplay.id}</h3>
        <p>Description: {itemToDisplay.description}</p>
        <CartInput />
      </div>
    </div>
  );
}
