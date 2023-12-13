import { ItemCounter } from "./ItemCounter";
import { useContext} from  'react'; 
import { CartContext} from '../contexts/CartContext';

export const ItemDetail = ({ item }) => {
  const { onAdd } = useContext(CartContext);

    
  const add = () => {
    onAdd(item);
  };
  return (
    <>
      <h1>{item.title}</h1>
      <img src={item.pictureUrl}></img>
      <ItemCounter onAdd={add} />
    </>
  );
};
