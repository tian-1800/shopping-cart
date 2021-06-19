import React, { useEffect, useState } from "react";
import PlantCard from "./plant-card";
import items from "./data/items";

const DisplayCategory = ({ match }) => {
  const [dataToDisplay, setDataToDisplay] = useState([]);
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
