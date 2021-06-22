import { useState, useEffect } from "react";

export default function useDataFromAPI() {
  const [items, setItems] = useState([]);
  const fetchData = () => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Could not fetch products");
        }
        return response.json();
      })
      .then((json) => setItems(json));
  };

  useEffect(() => {
    fetchData();
  }, []);
  return [items, setItems];
}
