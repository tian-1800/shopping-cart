import React from "react";
import { Link } from "react-router-dom";

export default function CategoryCard(props) {
  const { category } = props;
  return (
    <div className="category-card" >
      <Link to={`/shop/${category.category}`}>
        <img src={category.img} alt={`${category.category}`} />
      </Link>
      <p>{category.category}</p>
    </div>
  );
}
