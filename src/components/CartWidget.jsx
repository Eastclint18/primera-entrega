import{ Link } from 'react-router-dom';
import Cart from '../assets/cart.png';


export const CartWidget = () => { 
    return (
        <Link to='/cart'>
            <img src={Cart} alt="cart" width={50}/>
            <span >3 </span>
        </Link>
    );
}