import React, { Component } from 'react';
import './Landing.css'

export default class Landing extends Component {
  render() {
    return (
      <div>
        <h1>Welcome To Rest countries</h1>
        <br />
        <p>Here is where you will find the different exercices</p>
        <br />
        <ul className="questionList">
          <li className="listItem">
            Question 1 ={">"} Section : By Name
          </li>
          <li className="listItem">
            Question 2 ={">"} Section : Listing
          </li>
          <li className="listItem">
            Question 3 ={">"} Section : Filter
          </li>
          <li className="listItem">
          Question 4 ={">"} Section : Slot
        </li>
        </ul>
      </div>
    )
  }
}
