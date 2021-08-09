import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

const navbarStyle = {
  backgroundColor: '#A2D9CE',
};

const Header = (props) => {
  return (
    <Navbar style={navbarStyle} variant="light">
      <Container>
        <Navbar.Brand href="/">{props.title}</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
