import React, { useEffect, useState } from "react";
import { useRouteMatch } from "react-router-dom";
import CartInput from "./cart-input";

export default function Item(props) {
  const [itemToDisplay, setItemToDisplay] = useState([]);
  const { cartState } = props;
  const { shoppingCart, setShoppingCart } = cartState;
  const match = useRouteMatch("/shop/:item/");

  useEffect(() => {
    const item = shoppingCart.find(
      (element) => element.title === match.params.item
    );
    setItemToDisplay(item);
  }, [shoppingCart]);

  console.log("item to display ",itemToDisplay);
  const addToCart = (amount) => {
    const index = shoppingCart.findIndex(
      (el) => el.title === match.params.item
    );
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
        src={itemToDisplay.image}
        alt={itemToDisplay.name}
      />
      <div className="item-detail">
        <h3>
          {itemToDisplay.name} {itemToDisplay.id}
        </h3>
        <p>Description: {itemToDisplay.description}</p>
        <CartInput submit={addToCart} qty={itemToDisplay.quantity} />
      </div>
    </div>
  );
}
