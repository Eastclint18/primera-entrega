import { ItemCounter } from "./ItemCounter";
import { useContext} from  'react'; 
import { CartContext} from '../contexts/CartContext';
import Card from 'react-bootstrap/Card';

export const ItemDetail = ({ item }) => {
  const { onAdd } = useContext(CartContext);

    
  const add = () => {
    onAdd(item);
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
                <ItemCounter onAdd={add} />
              </Card.Body>
            </Card>
    </>
  );
};
