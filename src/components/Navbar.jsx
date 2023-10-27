import { CartWidget } from "./CartWidget";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



export const NavBar = () => {
  return (
     <Navbar bg="dark" data-bs-theme="dark">
    <Container>
      <Navbar.Brand href="#home">TuTiendaE</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="#Teclados">Teclados</Nav.Link>
        <Nav.Link href="#Mouses">Mouses</Nav.Link>
        <Nav.Link href="#Monitores">Monitores</Nav.Link>
      </Nav>
      <CartWidget />
    </Container>
    
  </Navbar>
   
      
     
    
  );
};
