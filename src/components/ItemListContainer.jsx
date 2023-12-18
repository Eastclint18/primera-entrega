import Container from "react-bootstrap/Container";

import { useEffect, useState, useContext } from "react";
import { ItemList } from "../components/ItemList";
import { useParams } from "react-router-dom";
import {
  getFirestore,
  getDocs,
 
  
  query,
  where,
  limit,

  collection,
} from "firebase/firestore";

export const ItemListContainer = (props) => {
  const [items, setItems] = useState([]);

  const { id } = useParams();

  console.log(id);

  useEffect(() => {
    const db = getFirestore();
    const refCollection = !id 
    ? collection(db,'Items')
    : query(collection(db, 'Items'), where ('categoryId', '==', id))

    getDocs(refCollection).then((snapshot) => {
      if (snapshot.size === 0) console.log("no resultas");
      else
        setItems(
          snapshot.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
          })
        );
    });
  }, [id]);

  // useEffect(() => {
  //   const db = getFirestore();

  //   const q = query (
  //     collection(db, 'Items'),
  //     where('categoryId', '==', 'teclados'),
      
  //   );

  //   getDocs(q).then((snapshot)=> {
  //     if(snapshot.size === 0) console.log('no results');
  //     else 
  //     console.log(
  //   snapshot.docs.map((doc) => {
  //     return { id: doc.id, ...doc.data() };
  //     })
  //     );
  //   });
  // },[]);
  

  // useEffect(() => {
  //   const myPromise = new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve(products);
  //     }, 2000);
  //   });

  //   myPromise.then((response) => {
  //     if (!id) {
  //       setItems(response);
  //     } else {
  //       const filterByCategory = response.filter(
  //         (item) => item.category === id
  //       );
  //       setItems(filterByCategory);
  //     }
  //   });
  // }, [id]);
  console.log(items);
  return (
    <Container className="mt-4">
      <h1>{props.greeting}</h1>
      <ItemList items={items} />
    </Container>
  );
};
