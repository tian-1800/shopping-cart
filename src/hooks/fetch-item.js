import { useState, useEffect } from "react";

export default function useDataFromAPI() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isStorageNull, setIsStorageNull] = useState(false);

  const useSessionStorage = (key) => {
    const [data, setData] = useState(JSON.parse(sessionStorage.getItem(key)));
    useEffect(() => {
      sessionStorage.setItem(key, JSON.stringify(data));
    }, [data]);
    if (!data && !isStorageNull) {
      setIsStorageNull(true);
      setData([]);
    }
    return [data, setData];
  };
  const [items, setItems] = useSessionStorage("cart-storage");

  const fetchData = () => {
    if (!isStorageNull) return;
    console.log("fetching");
    fetch("https://fakestoreapi.com/products", { mode: "cors" })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Could not fetch products");
        }
        return response.json();
      })
      .then((response) => {
        const initializedItems = response.map((item) => {
          const copiedItem = item;
          copiedItem.quantity = 0;
          return copiedItem;
        });
        setItems(initializedItems);
        setIsLoaded(true);
        console.log("fetched");
      });
  };

  useEffect(() => {
    fetchData();
  }, [isLoaded]);

  return [items, setItems];
}
