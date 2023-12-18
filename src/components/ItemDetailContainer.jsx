import Container from "react-bootstrap/Container";

import { useEffect, useState } from "react";
import { ItemDetail } from "./ItemDetail";
import { getFirestore, getDoc, doc } from "firebase/firestore";
import { useParams } from "react-router-dom";

export const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);

  const { id } = useParams();
  
  useEffect(() => {
    const db = getFirestore();

    const refDoc = doc(db, "Items", id);

    getDoc(refDoc).then((snapshot) => {
      setItem({ id: snapshot.id, ...snapshot.data() });
    });
  }, [id]);
  
  console.log(item);
  return (
    <Container className="mt-4">
      {item ? <ItemDetail item={item} /> : <>Loading</>}
    </Container>
  );
};
