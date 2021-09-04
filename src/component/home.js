import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div id="home">
      <h1>Petok-petok Fake Store</h1>
      <p>A React Learning Project</p>
      <Link to="/shop">
        <button type="button" id="to-shop">
          Shop
        </button>
      </Link>
    </div>
  );
}
