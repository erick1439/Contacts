import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Home from './Components/Home/Home'
import Login from "./Components/Login/Login";
import SignUp from "./Components/SignUp/SignUp";

function App() {
  return (
  <Router>
    <div className="App">   
      <Switch>
        <Route exact path='/' component={Login} />
        <Route path="/sign-in" component={Login} />
        <Route path="/sign-up" component={SignUp} />
        <Route exact path='/home' component={Home}   />
      </Switch>
    </div>  
    </Router>  
  );
}

export default App;