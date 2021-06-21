import React, { useEffect, useState } from "react";
import { useRouteMatch } from "react-router-dom";
import PlantCard from "./plant-card";
import items from "./data/items";

const DisplayCategory = () => {
  const [dataToDisplay, setDataToDisplay] = useState([]);
  const match = useRouteMatch("/shop/:id");
  useEffect(() => {
    const array = items.find((el) => el.category === match.params.id);
    setDataToDisplay(array.variant);
    // console.log(match.params.id);
  }, []);

  const jsxRender = dataToDisplay.map((variant) => (
    <PlantCard item={variant} link={match.params.id}/>
  ));

  return (
      <div>{jsxRender}</div>
  );
};

export default DisplayCategory;
