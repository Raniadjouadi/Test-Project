import React from 'react';
import {Navbar, Container } from 'react-bootstrap';
import {ReactComponent as Logo} from '../images/logo.svg'

const navbarStyle={
  backgroundColor:'lightblue',
  padding: "10px",
};


const Header = (props) => {
  return (
<Navbar style={navbarStyle} variant="light">
  <Container>
  <Logo style={{maxWidth : '15rem', maxHeight:'4rem'}}/>
  </Container>
</Navbar>)
}

export default Header ;    