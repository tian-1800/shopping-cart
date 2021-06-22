import React from "react";
import {Link} from "react-router-dom";

export default function Home() {
  return (
    <div id="home">
      <h1>Petok-petok Fake Store</h1>
      <p>A React Dummy Project</p>
      <Link to ="/shop">Shop</Link>
    </div>
  );
}
