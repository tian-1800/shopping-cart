import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Shop from "./component/shop";
import Home from "./component/home";
import StickyCart from "./component/sticky-cart";
import Item from "./component/item-page";
import useDataFromAPI from "./component/data/fetch-item";

function App() {
  const [shoppingCart, setShoppingCart] = useDataFromAPI();
  return (
    <BrowserRouter>
      <StickyCart cart={shoppingCart} />
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
