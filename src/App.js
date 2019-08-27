import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from 'axios';

import './App.css';
import Homepage from './Components/Content/Homepage';
import Login from './Components/Login';

export default class App extends React.Component {

  // constructor() {
  //   super()
  //   this.state = {
  //     username: "user5",
  //     apitoken: "jwt eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkNWQ2OTI2MzYxNDNjMWViODU5ZThmYSIsImlhdCI6MTU2NjU3NDkzMCwiZXhwIjoxNTY2NTc4NTMwfQ.5_DjPiHBejXNCpScVWmLppORW_RlhNUNdxGTSUheZEg",
  //     invalid: false,
  //     feedback: "Please enter valid details"
  //   };

  // }

  constructor() {
    super()
    this.state = {
      username: "",
      apitoken: "",
      invalid: false,
      feedback: "Please enter valid details"
    };

  }


  logIn = (username, password) => {
    this.setState({
      username: username
    })
    let body = {
      username: username,
      password: password,
    }
    axios.post("http://localhost:5001/loginUser", body)
      .then(response => {
        this.setState({
          apitoken: "jwt "+response.data.token
        })
      })
      .catch(error => {
        console.log(error);
        this.setState({ invalid: true })
      })
  }


  render() {
    var homeScreen = <Route path="/" render={() => <Homepage username={this.state.username} apitoken={this.state.apitoken} />} />
    if (this.state.apitoken === "") {
      homeScreen = <Route path="/" render={() => <Login logIn={this.logIn} invalid={this.state.invalid} feedback={this.state.feedback} />} />
    }
    return (
      <div className='App'>
        <Router>
          <div>
            {homeScreen}
          </div>
        </Router>
      </div>
    )
  }
}
