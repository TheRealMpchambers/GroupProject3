/* eslint no-restricted-globals: 0 */
import React, { Component } from 'react';
import './App.css';
import Home from "./components/Home";
import Auth from "./components/Authentication/Auth";
import Callback from "./components/Callback/Callback";
import Homes from "./components/Homes2/Homes";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NoMatch from "./components/NoMatch/NoMatch";


class App extends Component {

  auth = new Auth();

  logout(props) {
    this.auth.logout();
  }

  login() {
    console.log("Cusswords")
    console.log(this);
    this.auth.login();
  }

  render() {

    // const  isAuthenticated = this.auth.isAuthenticated;

    // let mainComponent = "";
    // switch (this.props.location) {
    //   case "":
    //     mainComponent = <Home auth={() => this.auth.login()} />;
    //     break;
    //   case "callback":
    //     mainComponent = isAuthenticated() ? <Callback auth={() => {
    //       this.auth.logout();
    //     }} /> : <Home />;
    //     break;
    //   case "results":
    //     mainComponent = <Homes />;
    //     break
    //   default:
    //     mainComponent = <Home auth={() => this.auth.login()} />;
    // }

    return (
      <Router>
          <Switch>
            <Route exact path="/" render={() => <Home auth={this.auth.login}/>} />
            <Route exact path="/Homes" component={Homes} />
            <Route exact path="/Callback" render={() => <Callback auth={this.auth.logout}/>} />
            <Route exact path="/NoMatch" component={NoMatch}/>
          </Switch>
      </Router>
    );
  }
}

export default App;
