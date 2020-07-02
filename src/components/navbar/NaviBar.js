import React, { Component } from 'react'; 
import { Nav, Navbar, Form, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { authenticationService } from '../../services/authentication.service';
import './NaviBar.css'
import Login from './../Login/Login';


class NaviBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: {
        logged : false
      },
    };
  }

  componentDidMount() {
    authenticationService.currentUser.subscribe((res) => {      
      if(res){
        this.setState({ currentUser: res })
      }
    }); 
}

  loginModalRef = ({handleShow}) => {
    this.showModal = handleShow;
 }
 
 onLoginClick = () => {
   if(this.state.currentUser.logged === true){
     authenticationService.logout();
   }else{
     this.showModal();
   }
 }

  render() {
    return (
      <Navbar bg="dark" variant="dark">
      <Login ref={this.loginModalRef} > </Login>
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
        <Nav.Link as={NavLink} to="/byName">By Name</Nav.Link>
        <Nav.Link as={NavLink} to="/filter">Filter</Nav.Link>
        <Nav.Link as={NavLink} to="/listing">Listing</Nav.Link>
        <Nav.Link as={NavLink} to="/slot">Slot</Nav.Link>
        <Nav.Link as={NavLink} to="/form">Form</Nav.Link>
      </Nav>
      <Form inline>
        <Button type="button" className="btn btn-primary" onClick={this.onLoginClick}>
          {
            this.state.currentUser.logged ? 'Logout' : 'Login'
          }
        </Button>
    </Form>
    </Navbar>
    )
  }
}

export default NaviBar;