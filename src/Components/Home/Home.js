import React, { Component } from 'react';
import * as ReactBootstrap from 'react-bootstrap';
import data from './data.json';
class Home extends Component {

  contacts = data;

  renderContact = (contact, index) => {
    return(
      <tr key={index}>
        <td>{index + 1}</td>
        <td>{contact.fullName}</td>
        <td>{contact.city}</td>
        <td>{contact.email}</td>
        <td>{contact.phoneNumber}</td>
      </tr>
    )
  }

   render() {
      return (
        <ReactBootstrap.Table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">City</th>
            <th scope="col">Email</th>
            <th scope="col">Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {this.contacts.map(this.renderContact)}
        </tbody>
      </ReactBootstrap.Table>
      )
   }
}

export default Home