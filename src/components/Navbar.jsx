import { CartWidget } from "./CartWidget";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink} from 'react-router-dom'



export const NavBar = () => {
  return (
     <Navbar bg="dark" data-bs-theme="dark">
    <Container>
      <Navbar.Brand ><NavLink to='/'>Home</NavLink></Navbar.Brand>
      <Nav className="me-auto">
        <NavLink to="category/Teclados">Teclados</NavLink>
        <NavLink to="category/Mouses">Mouses</NavLink>
        <NavLink to="category/Monitores">Monitores</NavLink>
      </Nav>
      <CartWidget />
    </Container>
    
  </Navbar>
   
      
     
    
  );
};
