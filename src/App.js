import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Shop from "./component/shop";
import Home from "./component/home";
import StickyCart from "./component/sticky-cart";
import Item from "./component/item";
import HeaderShop from "./component/header-shop";
import useDataFromAPI from "./component/data/item";

function App() {
  const [items] = useDataFromAPI();
  const useStateOnSesssionStorage = (storageKey) => {
    const initCart = () => {
      const cart = [];
      items.forEach((item) => {
        const element = item;
        element.quantity = 0;
        cart.push(element);
      });
      return cart;
    };
    const data = JSON.parse(sessionStorage.getItem(storageKey));
    const [value, setValue] = useState(data || initCart());
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
          <Shop cart={shoppingCart}/>
        </Route>

        <Route exact path="/shop/:id/">
          <Item cartState={{ shoppingCart, setShoppingCart }} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
