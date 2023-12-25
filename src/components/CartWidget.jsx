import { Link } from "react-router-dom";
import Cart from "../assets/cart.png";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

export const CartWidget = () => {
  const { items } = useContext(CartContext);

  const total = items.reduce(
    (acumulador, valorActual) => acumulador + valorActual.quantity,
    0
  );
  return (
    <Link to="/cart">
      <img src={Cart} alt="cart" width={50} />
      <span>{total} </span>
    </Link>
  );
};
