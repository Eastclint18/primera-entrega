import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

export const Item = ({item}) => {
    return (

      
        
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={item.pictureUrl} width={200} />
              <Card.Body>
                <Card.Title>{item.nombre}</Card.Title>
                <Card.Text>
                  {item.description}
                </Card.Text>
                <Link to={`/items/${item.id}`}><Button variant="primary">Agregar al Carro</Button></Link>
              </Card.Body>
            </Card>
          );
        
}


