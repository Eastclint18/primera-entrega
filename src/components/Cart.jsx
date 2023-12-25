import { Container, Table, Button, Form } from "react-bootstrap";
import { useContext, useState } from "react";
import { CartContext } from "../contexts/CartContext";
import {
  getFirestore,
  doc,
  updateDoc,
  collection,
  addDoc,
} from "firebase/firestore";

const initialValues = {
  name: "",
  phone: "",
  email: "",
};

export const Cart = () => {
  const [buyer, setBuyer] = useState(initialValues);

  const { clear, items, onRemove } = useContext(CartContext);

  const total = items.reduce(
    (acumulador, valorActual) =>
      acumulador + valorActual.quantity * valorActual.price,
    0
  );

  const handleChange = (event) => {
    console.log(event.target);
    setBuyer((buyer) => {
      return {
        ...buyer,
        [event.target.name]: event.target.value,
      };
    });
  };

  const sendOrder = () => {
    const order = {
      buyer,
      items,
      total: 14300,
    };

    const db = getFirestore();
    const orderCollection = collection(db, "orders");

    addDoc(orderCollection, order).then(({ id }) => {
      if (id) {
        alert("Su ordern:" + id + "ha sido completada");
        setBuyer(initialValues);
        clear();
      }
    });
  };

  if (!items.length) {
    return <Container className="mt-4">Carrito Vacio</Container>;
  }

  return (
    <Container className="mt-4">
      <h1>Carrito</h1>
      <Table striped="columns">
        <thead>
          <tr>
            <th></th>
            <th>Cantidad</th>
            <th>Precio</th>

            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {items?.map((item) => (
            <tr key={item.id}>
              <td>
                <img src={item.pictureUrl} width={300} />
              </td>
              <td>{item.quantity}</td>
              <td>{item.price}</td>
              <td onClick={() => onRemove(item.id)}>X</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td>Total: {total}</td>
          </tr>
        </tfoot>
      </Table>
      <button onClick={clear}>Vaciar carrito</button>

      <hr />

      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            value={buyer.email}
            onChange={handleChange}
            name="email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            value={buyer.name}
            onChange={handleChange}
            name="name"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            type="text"
            value={buyer.phone}
            onChange={handleChange}
            name="phone"
            required
          />
        </Form.Group>

        <Button variant="primary" onClick={sendOrder}>
          Submit
        </Button>
      </Form>
    </Container>
  );
};
