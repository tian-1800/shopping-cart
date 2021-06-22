import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Shop from "./component/shop";
import Home from "./component/home";
import StickyCart from "./component/sticky-cart";
import Item from "./component/item";
import HeaderShop from "./component/header-shop";
import useDataFromAPI from "./component/data/fetch-item";

function App() {
  const [items, isLoaded] = useDataFromAPI();
  const [shoppingCart, setShoppingCart] = useState([]);
  useEffect(() => {
    if (isLoaded) {
      const initializedItems=items.map(item => {
        const copiedItem = item;
        copiedItem.quantity = 0;
        return copiedItem;
      })
      setShoppingCart(initializedItems);
    }
  }, [isLoaded]);

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
          <Shop cart={shoppingCart} />
        </Route>

        <Route exact path="/shop/:item/">
          <Item cartState={{ shoppingCart, setShoppingCart }} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
