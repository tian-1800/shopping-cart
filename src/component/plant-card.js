import React from "react";
import { Link } from "react-router-dom";

export default function PlantCard(props) {
    const {item, link} = props;
    return (
        <div className="category-card" >
          <Link to={`/shop/${link}/${item.name}`}>
            <img src={item.img} alt={`${item.name}`} />
          </Link>
          <p>{item.name}</p>
        </div>
      );

}