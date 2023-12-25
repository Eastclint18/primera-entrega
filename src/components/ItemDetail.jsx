import { ItemCounter } from "./ItemCounter";
import { useContext} from  'react'; 
import { CartContext} from '../contexts/CartContext';
import Card from 'react-bootstrap/Card';

export const ItemDetail = ({ item }) => {
  const { onAdd } = useContext(CartContext);

    
  const add = (quantity) => {
    
    onAdd(item,quantity);
  };
  return (
    <>
    <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={item.pictureUrl} />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>
                  {item.description}
                </Card.Text>
                <h2>Stock:{item.stock}</h2>
                <ItemCounter onAdd={add} stock={item.stock} initial={1} />
              </Card.Body>
            </Card>
    </>
  );
};
