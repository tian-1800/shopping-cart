import React from "react";
import { Link } from "react-router-dom";

export default function ItemCard(props) {
    const {item} = props;
    const {title, image, price} = item;
    return (
        <div className="item-card" >
          <Link to={`/shop/${title}`}>
            <img src={image} alt={`${title}`} />
          </Link>
          <p>{title} {price}</p>
        </div>
      );

}