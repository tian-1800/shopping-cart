import React from "react";
import {Link} from "react-router-dom";

export default function Home() {
  return (
    <div id="home">
      <h1>Petok-petok Plant Nursery</h1>
      <p>Your gardening success starts here</p>
      <Link to ="/shop">Shop</Link>
    </div>
  );
}
