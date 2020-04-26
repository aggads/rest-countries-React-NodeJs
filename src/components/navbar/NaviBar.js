import React, { Component } from 'react'; 
import { Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom'

class NaviBar extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark">
      <Navbar.Brand as={NavLink} to="/">
      <img
        alt=""
        src="/src/assets/images/logo.svg"
        width="30"
        height="30"
        className="d-inline-block align-top"
      />{' '}
      Rest Countries
    </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link as={NavLink} to="/"> Home</Nav.Link>
        <Nav.Link as={NavLink} to="/listing">Listing</Nav.Link>
        <Nav.Link as={NavLink} to="/slot">Slot</Nav.Link>
      </Nav>
    </Navbar>
    )
  }
}

export default NaviBar;