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
      username: "",
      apitoken: "",
      invalid: false,
      feedback:"Please enter valid details"
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
          apitoken: response.data.token
        })

      })
      .then(this.setState({
        page: '{() => <Homepage />}'
      }))
      .catch(error => { console.log(error);
         this.setState({invalid: true}) })
  }


  render() {
    var homeScreen = <Route exact path="/" component={Homepage} />;
    if (this.state.apitoken === "") {
      homeScreen = <Route exact path="/" render={() => <Login logIn={this.logIn} invalid={this.state.invalid} feedback={this.state.feedback} />} />;
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
