import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import { Form, FormControl } from 'react-bootstrap';
import './CountriesList.css'

export default class CountriesList extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      countries : [],
      filterName: ''
    };
  }

  handleChange = (e) => {
    this.setState({
      filterName: e.target.value
    })
    if(e.target.value !== ''){
      axios.get(`https://restcountries.eu/rest/v2/name/${e.target.value}`)
      .then(res => {
        const countries = res.data;
        this.setState({ countries });
        console.log('data', res.data);
      })
      .catch (error => {
        alert(error.response.data.message)
      })
    }
    // this.props.onChange(e.target.value)
  }

  componentDidMount() {
    axios.get(`https://restcountries.eu/rest/v2/all`)
      .then(res => {
        const countries = res.data;
        this.setState({ countries });
        console.log('data', res.data);
        
      })
  }

  render() {

    const items = this.state.countries.map((contry, index) =>
      <tr key={index}>
        <td>{index}</td>
        <td >{contry.name}</td>
      </tr>
    );

    return (
      <div className='listing'> 
      <Table striped bordered hover variant="dark">
      
        <thead>
          <tr>
            <th></th>
            <th>
              <div className="searchBar">
                <Form inline>
                  <FormControl type="text" placeholder="Search by name" className="mr-sm-2"  
                  value={this.state.filterName} 
                  onChange={this.handleChange}/>
                </Form>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
              {
                items
              }
        </tbody>
      </Table>
      </div>
    )
  }
}
