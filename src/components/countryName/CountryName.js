import React, { Component } from 'react';
import './countryName.css';
import axios from 'axios';
import apiUrl from './../../constants/constants';
import { Form, FormControl, Button, Table } from 'react-bootstrap';


export default class CountryName extends Component {
  constructor(props){
    super(props);
    this.state = {
      country: [],
      inputValue: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit  = this.handleSubmit.bind(this);
  }

  handleChange (e){
    this.setState({inputValue: e.target.value});
  }

  handleSubmit = () =>{
    axios.get(`${apiUrl.API_URL}/name/${this.state.inputValue}`)
      .then(res => {
        var value = res.data;
        if(!value.includes('<!doctype html>')){
          value.filter((item) =>{
            if(item.name.toLocaleLowerCase() === this.state.inputValue.toLocaleLowerCase()){
              this.setState({ country : item });
            }
          })
        }
      })
  }

  render() {

    const Results = () => (
      <tr >
        <td ></td>
        <td >{this.state.country.name}</td>
        <td >{this.state.country.capital}</td>
        <td >
          <img className="flag-img" src={this.state.country.flag} alt="flag" style={{width: '5rem'}}/>
        </td>
      </tr>
    )

    return (
      <div className='countryName'>
        <h1 className="title"> Search country by exact name</h1>
        <Form inline>
          <FormControl type="text" onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }} onChange={this.handleChange} placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-primary" onClick={this.handleSubmit} >Search</Button>
        </Form>
        <div className="table-responsive">
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Capital</th>
              <th scope="col">Flag</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.country.name ? <Results /> : null
            }
          </tbody>
        </Table>
        </div>
      </div>
    )
  }
}


