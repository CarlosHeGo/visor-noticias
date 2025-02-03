import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NavigationBar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">visor-noticias</Navbar.Brand>
        <Nav className='me-auto'>
          <Nav.Link as={Link} to="/">Inicio</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;