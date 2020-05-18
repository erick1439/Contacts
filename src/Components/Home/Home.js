import React, { Component } from 'react';
import * as ReactBootstrap from 'react-bootstrap';
import data from './data.json';

class Home extends Component {

  contacts = data;

  renderContact = (contact, index) => {
    return(
      <tr key={index}>
        <td>{index + 1}</td>
        <td contenteditable="true">{contact.fullName}</td>
        <td contenteditable="true">{contact.city}</td>
        <td contenteditable="true">{contact.email}</td>
        <td contenteditable="true">{contact.phoneNumber}</td>
        <td>
          <span>
            <button type="button" className="btn-danger btn-sm">Remove</button>
          </span>
        </td>
      </tr>
    )
  }

  // style={{marginTop: "50px"}} in table component

   render() {
      return (
        <ReactBootstrap.Table className="table-hover table-sm table-light">
        <thead className="">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">City</th>
            <th scope="col">Email</th>
            <th scope="col">Phone Number</th>
            <th scope="col">Actions</th>
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