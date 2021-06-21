import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Shop from "./component/shop";
import Home from "./component/home";
import StickyCart from "./component/sticky-cart";
import DisplayCategory from "./component/display-category";
import DisplayPlant from "./component/display-plant";
import HeaderShop from "./component/header-shop";
import items from "./component/data/items";

function App() {
  const useStateOnSesssionStorage = (storageKey) => {
    const initCart = () => {
      let cart = [];
      items.forEach((category) => {
        const categoryName = category.category;
        const mapped = category.variant.map((variant) => ({
          name: variant.name,
          price: parseInt(variant.price*1000,10),
          quantity: 0,
          category: categoryName,
        }));
        cart = [...cart, ...mapped];
      });
      return cart;
    };
    const data = JSON.parse(sessionStorage.getItem(storageKey));
    const [value, setValue] = useState(data ||initCart());
    useEffect(() => {
      sessionStorage.setItem(storageKey, JSON.stringify(value));
    }, [value]);
    return [value, setValue];
  };
  const [shoppingCart, setShoppingCart] = useStateOnSesssionStorage(
    "cartStateInSessionStorage"
  );

  return (
    <BrowserRouter>
      <StickyCart cart={shoppingCart} />
      <Route path="/shop">
        <HeaderShop />
      </Route>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/shop">
          <Shop />
        </Route>

        <Route exact path="/shop/:id">
          <DisplayCategory />
        </Route>

        <Route exact path="/shop/:id/:variant">
          <DisplayPlant cartState={{ shoppingCart, setShoppingCart }} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
