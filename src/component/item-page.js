import React, { useEffect, useState } from "react";
import { useRouteMatch, Link } from "react-router-dom";
import HeaderShop from "./header-shop";
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
    <div id="item-page">
      <HeaderShop />
      <div id="item-container">
        <img
          id="item-img"
          src={itemToDisplay.image}
          alt={itemToDisplay.title}
        />
        <div id="item-detail">
          <h3 id="item-title">{itemToDisplay.title} </h3>
          <p id="item-desc-title">Description: </p>
          <p id="item-description">{itemToDisplay.description}</p>
          <p>Price: {`$${itemToDisplay.price}`}</p>

          <CartInput submit={addToCart} qty={itemToDisplay.quantity} />

          <Link to={`/shop`}>
            <button type="button" className="back">
              <i className="material-icons arrow">reply</i>
            </button>
            <span>Go back</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
