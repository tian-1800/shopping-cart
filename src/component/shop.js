import React from "react";
import CategoryCard from "./category-card";
import useDataFromAPI from "./data/item";

export default function Shop() {
  const generateCategory = (things) =>
    things.map((item) => (
      <CategoryCard category={item} key={item.category}/>
    ));
  return (
    <div id="shop">
      <p>Browse by category</p>
      <div id="category-container">{generateCategory(items)}</div>
    </div>
  );
}