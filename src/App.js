import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import './App.css';
import NavigationBar from './Components/NavigationBar.js';


export default class App extends React.Component {

  render() {
    return (
      <div>
        <Router>
          <NavigationBar />
        </Router>
      </div>
    )
  }
}