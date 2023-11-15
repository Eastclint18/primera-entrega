import Container from "react-bootstrap/Container";
import { products } from "../data/products";
import { useEffect, useState } from "react";
import { ItemList } from "../components/ItemList";
import { useParams } from "react-router-dom";

export const ItemListContainer = (props) => {
  const [items, setItems] = useState([]);

  const { id } = useParams();

 

  useEffect(() => {
    const myPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(products);
      }, 2000);
    });

    myPromise.then((response) => {
      if (!id) {
        setItems(response);
      } else {
        const filterByCategory = response.filter((item) => item.category === id);
        setItems(filterByCategory);
      }
    });
  }, [id]);
  console.log(items);
  return (
    <Container className="mt-4">
      <h1>{props.greeting}</h1>
      <ItemList items={items} />
    </Container>
  );
};
