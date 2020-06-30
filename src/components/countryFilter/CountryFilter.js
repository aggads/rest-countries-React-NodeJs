import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import './CountryFilter.module.css'
import { Form, FormControl, Button } from 'react-bootstrap';
import apiUrl from './../../constants/constants';

export default class CountryFilter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      countries : [],
      country: [],
      filterName: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (e) => {
    this.setState({
      filterName: e.target.value
    })
  }

  handleSubmit = () =>{
    var list = this.state.countries;
    if(this.state.filterName === ''){
      this.setState({country : ''});
    }else{
      list.filter((item) =>{
        if(item.name.includes(this.state.filterName)){
          this.setState({country: item})
        }
      })
    }
  }

  getAllList = () =>{
    axios.get(`${apiUrl.API_URL}/all`)
    .then(res => {
      this.setState({ countries : res.data});
    })
  }

  componentDidMount() {
    this.getAllList();
  }

  render() {

    const items = this.state.countries.map((item, index) =>
      <tr key={index}>
        <td>{index}</td>
        <td >{item.name}</td>
        <td >{item.capital}</td>
        <td >
          <img className="flag-img" src={item.flag} alt="flag" style={{width: '5rem'}}/>
        </td>
      </tr>
    );

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
      <div className='listing'> 
      <h1 className="title"> Filter country by name</h1>
        <div className="searchBar">
          <Form inline>
            <FormControl type="text" placeholder="Filter by name" className="mr-sm-2"  
            onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
            value={this.state.filterName} 
            onChange={this.handleChange}/>
            <Button variant="outline-primary" onClick={this.handleSubmit} >Filter</Button>
          </Form>
        </div>
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
        {this.state.country.name ? 
          <Results />
          : items}
        </tbody>
      </Table>
      </div>
    )
  }
}

