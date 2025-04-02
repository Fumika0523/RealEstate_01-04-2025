import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaHome } from "react-icons/fa";


function NavBar() {
  return (
    <Navbar expand="lg" className="bg-transparent w-100 text-white"
    style={{position:"absolute",top:"0",left:"0",zIndex:"10" }} >
      
      <Container className='d-flex  justify-content-between mx-auto'>
        <Navbar.Brand href="#home" className='text-white fs-4 d-flex justify-content-center align-items-center fw-bold gap-1'><FaHome className='fs-3'/>Estate</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto ">
            <Nav.Link href="#home" className='text-white'>Home</Nav.Link>
            <Nav.Link href="#link" className='text-white'>About</Nav.Link>
            <Nav.Link href="#home" className='text-white'>Projects</Nav.Link>
            <Nav.Link href="#link" className='text-white'>Testimonials</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Button variant='light'  className='text-center rounded d-md-none d-sm-none d-none d-lg-block'>Sign Up</Button>
      </Container>
    </Navbar>
  );
}

export default NavBar;