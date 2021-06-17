import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Shop from "./component/shop";
import Home from "./component/home";
import Display from "./component/display-category";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/shop" component={Shop} />
        <Route path="/shop/:id" component={Display} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
