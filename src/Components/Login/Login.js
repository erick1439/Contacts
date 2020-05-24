import React, { Component } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import CredentialNavbar from '../CredentialNavbar/CredentialNavbar'

export default class Login extends Component {
    constructor () {
        super();

        this.state = {
            email: "",
            password: ""
        };

        this.validateCredentials = this.validateCredentials.bind(this);
    }

    validateCredentials = event => {

        const target = event.target;
        const value = target.name === 'isGoing' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
    }

    submitHandler = event => {
        event.preventDefault();
    
        axios.post('/login', this.state)
            .then(response => {

                if (response.data === 'Wrong email or password')
                    console.log('Wrong email or password');

                else
                    this.props.history.push('/home', response.data);
                
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        return (
            <div className="auth-wrapper">
                <div className="auth-inner">
                    <CredentialNavbar/>
                    <form onSubmit={this.submitHandler}> 
                        <h3>Sign In</h3>

                        <div className="form-group">
                            <label>Email address</label>
                            <input type="email" className="form-control" placeholder="Enter email" onChange={this.validateCredentials} name="email" />
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" placeholder="Enter password" onChange={this.validateCredentials} name="password" />
                        </div>

                        <div className="form-group">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary btn-block">Submit</button>
                        <p className="forgot-password text-right">
                            Forgot <Link to={'/'}>password?</Link>
                        </p>
                    </form>
                </div>
            </div>
        );
    }
}