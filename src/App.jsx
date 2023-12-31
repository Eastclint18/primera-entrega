
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { ItemListContainer } from './components/ItemListContainer';
import './App.css'; 
import { Error404} from './components/Error404';
import { ItemDetailContainer } from './components/ItemDetailContainer';
import { CartProvider} from './contexts/CartContext';
import { Cart } from './components/Cart';

function App () {
    return (<CartProvider>
    
    <BrowserRouter>
    <NavBar />
    <Routes>
        <Route path ='/' element={<ItemListContainer greeting='Listado'/>} />
        <Route path = '/category/:id' element={<ItemListContainer greeting='Listado'/>} />
        <Route path = '/items/:id' element={<ItemDetailContainer/>} />
        <Route path = '/cart' element={<Cart/>} />
        <Route path = '*' element={<Error404/>} />


    </Routes>
    
    </BrowserRouter>
    </CartProvider>
    
    )
}

export default App ;
