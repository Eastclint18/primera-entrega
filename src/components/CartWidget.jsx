import Cart from '../assets/cart.png'

export const CartWidget = () => { 
    return (
        <>
            <img src={Cart} alt="cart" width={50}/>
            <span >3 </span>
        </>
    );
}