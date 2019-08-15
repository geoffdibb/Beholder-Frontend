import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import './App.css';
import NavigationBar from './Components/NavigationBar.js';
import Homepage from './Components/Homepage';
import Login from './Components/Login';
import Map from './Components/Map';
import Profile from './Components/Profile';
import ResultPage from './Components/ResultPage';
import SearchPage from './Components/SearchPage';
import Audit from './Components/Audit';

export default class App extends React.Component {

  render() {
    return (
      <div>
        <Router>
          <NavigationBar />

          <Route exact path="/" component={Homepage} />

          <Route path="/Login" component={Login} />

          <Route path="/Map" component={Map} />

          <Route path="/Profile" component={Profile} />

          <Route path="/ResultPage" component={ResultPage} />

          <Route path="/SearchPage" component={SearchPage} />

          <Route path="/Audit" component={Audit} />
          
        </Router>
      </div>
    )
  }
}