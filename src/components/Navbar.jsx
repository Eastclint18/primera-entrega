import { CartWidget } from "./CartWidget";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink} from 'react-router-dom'
import './Navbar.css'




export const NavBar = () => {
  return (
     <Navbar bg="dark" data-bs-theme="dark">
    <Container>
      <Navbar.Brand ><NavLink to='/'>Home</NavLink></Navbar.Brand>
      <Nav className="me-auto">
        <NavLink to="category/teclados" className='Pestana'>Teclados</NavLink>
        <NavLink to="category/mouses" className='Pestana' >Mouses</NavLink>
        <NavLink to="category/monitores"className='Pestana'>Monitores</NavLink>
      </Nav>
      <CartWidget />
    </Container>
    
  </Navbar>
   
      
     
    
  );
};
