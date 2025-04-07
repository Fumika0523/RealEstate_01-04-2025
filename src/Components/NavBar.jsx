import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FaHome } from "react-icons/fa";


// function NavBar() {
//   return (
//     <Navbar expand="lg" className="bg-transparent w-100 text-white"
//       style={{position:"absolute",top:"0",left:"0",zIndex:"10" }} >   
//       
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//          
//         </Navbar.Collapse>
//         <Button variant='light'  className='text-center rounded d-md-none d-sm-none d-none d-lg-block'>Sign Up</Button>
//       </Container>
//     </Navbar>
//   );
// }

// export default NavBar;



function NavBar() {
  return (
    <>
      {['lg'].map((expand) => (
        <Navbar key={expand} expand={expand} collapseOnSelect
        className="bg-transparent w-100 text-white"
        style={{position:"absolute",top:"0",left:"0",zIndex:"10" }} >   
         <Container className='d-flex  justify-content-between mx-auto'>
          <Navbar.Brand href="#home" className='text-white fs-4 d-flex justify-content-center align-items-center fw-bold gap-1'>  
          <FaHome className='fs-3'/>Estate</Navbar.Brand>
            <Navbar.Toggle 
            
            aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas className="bg-dark"
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header
                closeVariant='white'
               closeButton>
              </Offcanvas.Header>
              <Offcanvas.Body>
              <Nav className="d-flex justify-content-center align-items-center fs-5 mx-auto">
                <Nav.Link href="#Header" 
                className='text-white'>Home</Nav.Link>
                <Nav.Link href="#About" className='text-white'>About</Nav.Link>
                <Nav.Link href="#Projects" className='text-white'>Projects</Nav.Link>
                <Nav.Link href="#Testimonials" className='text-white'>Testimonials</Nav.Link>
                <Nav.Link href="#Contact" className='text-white'>Contact</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default NavBar;