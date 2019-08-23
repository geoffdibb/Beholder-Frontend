import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from 'axios';

import './App.css';
import Homepage from './Components/Content/Homepage';
import Login from './Components/Login';

export default class App extends React.Component {

  constructor() {
    super()
    this.state = {
      username: "user5",
      apitoken: "jwt eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkNWQ2OTI2MzYxNDNjMWViODU5ZThmYSIsImlhdCI6MTU2NjU1OTI4OSwiZXhwIjoxNTY2NTYyODg5fQ.CJBupO_tzM1QTg-Sv0Oa-c-AgvelMSfC7OPojv4Vv7I",
      invalid: false,
      feedback: "Please enter valid details"
    };

  }


  logIn = (username, password) => {
    console.log(username);
    console.log(password);
    this.setState({
      username: username
    })
    let body = {
      username: username,
      password: password,
    }
    axios.post("http://localhost:5001/loginUser", body)
      .then(response => {
        console.log(response.data);
        console.log(response.data.message);
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
            {/* <Route exact path="/" render={this.state.page} /> */}

            {/* <Route path="/Home" component={Homepage} /> */}

            {/* <Route exact path="/" component={Login } /> */}
            {/* <Route exact path="/" render={() => <Login logIn={this.logIn} />} /> */}

            {/* <Route path="/MapPage" component={MapPage} />

          <Route path="/Profile" component={Profile} />

          <Route path="/ResultPage" component={ResultPage} />

          <Route path="/SearchPage" component={SearchPage} />

          <Route path="/Audit" component={Audit} /> */}
          </div>
        </Router>
      </div>
    )
  }
}
