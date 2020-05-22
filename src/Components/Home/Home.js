import React, { Component } from 'react';
import * as ReactBootstrap from 'react-bootstrap';
import data from './data.json';
import { useLocation } from 'react-router-dom';
import HomeNavbar from '../HomeNavbar/HomeNavbar'

function renderContact(contact, index) {
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

function Home(props) {
  
  const location = useLocation();  
  const contacts = data// location.state.contacts;

  console.log(location.state);

  return (
    <div>
      <HomeNavbar/>
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
        {contacts.map(renderContact)}
      </tbody>
    </ReactBootstrap.Table>
  </div>
  )
}

export default Home