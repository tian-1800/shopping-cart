import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Shop from "./component/shop";
import Home from "./component/home";
import StickyCart from "./component/sticky-cart";
import DisplayCategory from "./component/display-category";
import DisplayPlant from "./component/display-plant";

function App() {
  const [shoppingCart, setShoppingCart] = useState([]);
  return (
    <BrowserRouter>
      <StickyCart />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/shop">
          <Shop />{" "}
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
