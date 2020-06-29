import React, { Component } from 'react'
// import styles from './countryName.module.css';
import axios from 'axios';
import apiUrl from './../../constants/constants';


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

  handleSubmit  = () =>{
    console.log(this.state.inputValue);
    axios.get(`${apiUrl.API_URL}/name/${this.state.inputValue}?fullText=true`)
      .then(res => {
        // var value = res.data;
        this.setState({ country : res.data });
        console.log('data', res.data);
      })
  }


  render() {

    const items = this.state.country.map((country, index) =>
    <tr key={index}>
      <td ></td>
      <td >{country.name}</td>
      <td >{country.capital}</td>
      <td >
        <img className="flag-img" src={country.flag} alt="flag" style={{width: '5rem'}}/>
      </td>
    </tr>
  );

    return (
      <div>
        <h1> type here</h1>
      <input
        onChange={this.handleChange}
        type="text" 
        className="form-control mb-2 mr-sm-2" 
        placeholder="Country Name" />

        <button className="btn btn-dark" type="button"
          onClick={this.handleSubmit}
        >Button</button>

        <br />

        <div className="table-responsive">
        <table className="table table-dark">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Capital</th>
              <th scope="col">Flag</th>
            </tr>
          </thead>
          <tbody>
             {items}
          </tbody>
        </table>
        </div>
      </div>
    )
  }
}


