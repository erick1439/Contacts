import React, { Component } from "react";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import './HomeNavbar.css';

export default function HomeNavbar() {

    const location = useLocation();

    return (
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
            <div className="container">
                <h1 className="navbar-brand">Welcome {location.state.firstName}!</h1>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to={"/"}>Add user</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={"/sign-in"}>Logout</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav> 

    )
    
}
