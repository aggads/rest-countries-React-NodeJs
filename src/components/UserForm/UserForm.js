import React, { Component } from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import './UserForm.css';

export default class UserForm extends Component {
  
  constructor(props) { 
    super(props);

    this.state = {
      formControls: {
          email: {
            value: ''
          },
          name: {
            value: ''
          },
          password: {
            value: ''
          }
      },
      errors: []
  }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  hasError(key) {
    return this.state.errors.indexOf(key) !== -1;
  }

  handleSubmit = (event) =>{
    event.preventDefault();    
    const user = {
      userForm : this.state.formControls
    }
    console.log('submit value', user);


    var errors = [];

    //name
    if (this.state.formControls.name.value === "") {
      errors.push("name");
    }

    //email
    const expression = /\S+@\S+/;
    var validEmail = expression.test(String(this.state.formControls.email.value).toLowerCase());

    if (!validEmail) {
      errors.push("email");
    }

    //password
    if (this.state.formControls.password.value === "") {
      errors.push("password");
    }

    this.setState({
      errors: errors
    });

    if (errors.length > 0) {
      return false;
    } else {
      // alert("everything is good. submiting form!");
    }
  }

  handleChange = (event) =>{
    event.preventDefault();  
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      formControls: {
          ...this.state.formControls,
          [name]: {
          ...this.state.formControls[name],
          value
        }
      }
    });
    
  }

  render() {


    return (
      <div className="userForm">
        <h1 className="formSection">Form Section</h1>
        <span className="limit"></span>
        <Form>
        <Form.Group controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control 
              className={
                this.hasError("name")
                  ? "form-control is-invalid"
                  : "form-control"
              }
              required
              type="text" 
              placeholder="Enter name" 
              name="name" 
              onChange={this.handleChange}/>
              <div
              className={
                this.hasError("name") ? "inline-errormsg" : "hidden"
              }
              >
              Please enter a value
            </div>
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control 
              className={
                this.hasError("email")
                  ? "form-control is-invalid"
                  : "form-control"
              }
              required
              type="email" 
              placeholder="Enter email" 
              name="email" 
              value={this.state.formControls.email.value} 
              onChange={this.handleChange}
            />
            <div
            className={this.hasError("email") ? "inline-errormsg" : "hidden"}
          >
            Email is invalid or missing
          </div>
          </Form.Group>
      
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control 
              required
              type="password" 
              placeholder="Password" 
              name="password" 
              value={this.state.formControls.password.value} 
              onChange={this.handleChange} />
              <div
              className={this.hasError("password") ? "inline-errormsg" : "hidden"}
            >
              Password is missing
            </div>
          </Form.Group>
        <Button className="submitBtn" variant="primary" type="submit" onClick={this.handleSubmit}>
          Submit
        </Button>
      </Form>
      </div>
    )
  }
}
