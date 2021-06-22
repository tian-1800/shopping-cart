import { useState, useEffect } from "react";

export default function useDataFromAPI() {
  const [items, setItems] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const fetchData = () => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Could not fetch products");
        }
        return response.json();
      })
      .then((response) => {
        setItems(response);
        setIsLoaded(true);
      });
  };

  useEffect(() => {
    fetchData();
  }, [isLoaded]);
  return [items, isLoaded];
}
