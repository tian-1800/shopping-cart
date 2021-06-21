import React, { useEffect, useState } from "react";
import { useRouteMatch } from "react-router-dom";
import CartInput from "./cart-input";
import items from "./data/items";

export default function DisplayPlant(props) {
  const [itemToDisplay, setItemToDisplay] = useState([]);
  const { cartState } = props;
  const { shoppingCart, setShoppingCart } = cartState;
  const match = useRouteMatch("/shop/:id/:variant");

  useEffect(() => {
    const array = items.find((el) => el.category === match.params.id);
    const item = array.variant.find((el) => el.name === match.params.variant);
    if (item.description === "") item.description = "Some random description";
    item.category = match.params.id;
    setItemToDisplay(item);
  }, []);

  const index = [...shoppingCart].findIndex((el) => el.name === match.params.variant);
  const addToCart = (amount) => {
    if (index !== -1) {
      const tempArr = [...shoppingCart];
      tempArr[index].quantity = amount;
      setShoppingCart(tempArr);
    }
  };
  return (
    <div className="item-container">
      <img
        className="item-img"
        src={itemToDisplay.img}
        alt={itemToDisplay.name}
      />
      <div className="item-detail">
        <h3>
          {itemToDisplay.name} {itemToDisplay.id}
        </h3>
        <p>Description: {itemToDisplay.description}</p>
        <CartInput submit={addToCart} qty={shoppingCart[index].quantity} />
      </div>
    </div>
  );
}
