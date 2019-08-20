import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import './App.css';
import Homepage from './Components/Content/Homepage';
import Login from './Components/Login';

export default class App extends React.Component {

  render() {
    return (
      <div className='App'>
        <Router>

          <Route path="/Home" component={Homepage} />

          <Route exact path="/" component={Login} />

          {/* <Route path="/MapPage" component={MapPage} />

          <Route path="/Profile" component={Profile} />

          <Route path="/ResultPage" component={ResultPage} />

          <Route path="/SearchPage" component={SearchPage} />

          <Route path="/Audit" component={Audit} /> */}

        </Router>
      </div>
    )
  }
}