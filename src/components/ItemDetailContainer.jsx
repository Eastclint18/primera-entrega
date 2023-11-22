import Container from "react-bootstrap/Container";
import { products } from "../data/products";
import { useEffect, useState } from "react";
import { ItemDetail} from './ItemDetail';

import { useParams } from "react-router-dom";

export const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);

  const { id } = useParams();

 

  useEffect(() => {
    const myPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(products);
      }, 2000);
    });

    myPromise.then((response) => {
      
        const findById= response.find((item) => item.id === Number(id));
        console.log(findById);
        setItem(findById);
      
    });
  }, [id]);
  console.log(item);
  return (
    <Container className="mt-4">
     {item ? <ItemDetail item={item} /> : <>Loading</>}
     
    </Container>
  );
};
