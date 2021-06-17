import React, { useState, useEffect } from "react";

const Display = ({ match }) => {
  const [name, setName] = useState([]);
  useEffect(() => {
    setName(match.params.id);

  }, []);
  return <div>{name}</div>;
};

export default Display;
