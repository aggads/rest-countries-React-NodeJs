import React from 'react';
import './Login.css';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { history } from '../../helpers/history';
import { authenticationService } from '../../services/authentication.service';
import { ModalFooter } from 'react-bootstrap';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      currentUser: {
        logged: false
      },
      show: false,
      username: '',
      email: '', 
      password: '',
    };
  }

  componentDidMount() {
    authenticationService.currentUser.subscribe((res) => {      
      if(res){
        if(res.logged === true){
          this.handleClose();
        }
        this.setState({ currentUser: res })
      }
    }, 
      errors =>{
        console.log('errors', errors);
        
      }    
    );    
}

  logout() {
      authenticationService.logout();
      history.push('/login');
  }

  handleShow() {
    this.setState({ show: true })
  }
  handleClose(){
      this.setState({ show: false })
  }

  
  hasError(key) {
    return this.state.errors.indexOf(key) !== -1;
  }

  handleSubmit = (event) =>{
    event.preventDefault();    

    authenticationService.login(this.state.email, this.state.password)
  }

  handleChange = (event) =>{
    event.preventDefault();  
    const name = event.target.name;
    const value = event.target.value;

    if(name === 'email'){
      this.setState({email : value})
    }
    if(name === 'password'){
      this.setState({password : value})
    }
    if(name === 'username'){
      this.setState({username : value})
    }
    
  }

  render() {
    return (
      <Modal show={this.state.show} onHide={this.handleClose}>
      <Modal.Header className="formSection" closeButton>
      <h1 className="title">Login Form</h1>
      </Modal.Header>
      <Modal.Body>
      <div className="userForm">
      <span className="limit"></span>
      <Form>
      <Form.Group controlId="formBasicUsername">
      <Form.Label>Username</Form.Label>
      <Form.Control 
        required
        type="text" 
        placeholder="Enter Username" 
        name="username" 
        value={this.state.username.value} 
        onChange={this.handleChange}
      />
    </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control 
            required
            type="email" 
            placeholder="Enter email" 
            name="email" 
            value={this.state.email.value} 
            onChange={this.handleChange}
          />
        </Form.Group>
    
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control 
            required
            type="password" 
            placeholder="Password" 
            name="password" 
            value={this.state.password.value} 
            onChange={this.handleChange} />
        </Form.Group>
      <Button className="logginBtn" variant="primary" type="submit" onClick={this.handleSubmit}>
        Submit
      </Button>
    </Form>
    </div>
      </Modal.Body>
      <ModalFooter>All the value are : test</ModalFooter>
    </Modal>

    )
  }
}