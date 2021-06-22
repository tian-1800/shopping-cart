import React from "react";
import {useLocation} from "react-router-dom";

export default function HeaderShop() {

  const location = useLocation();
  console.log("location", location);
  return (
    <header id="header-shop">
      <h3>Petok-Petok Plant Nursery</h3>
    </header>
  );
}
