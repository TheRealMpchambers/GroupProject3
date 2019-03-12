import React, { Component } from 'react';
import './App.css';
import Home from "./components/Home";
import Auth from "./components/Authentication/Auth";
import Callback from "./components/Callback/Callback";
import ResultsPage from "./components/ResultsPage/ResultsPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import NoMatch from "./components/NoMatch/NoMatch";


class App extends Component {

  auth = new Auth();

  logout() {
    this.props.auth.logout();
  }

  login() {
    this.props.auth.login();
  }

  render() {

    const isAuthenticated = this.auth.isAuthenticated;

    let mainComponent = '';
    switch (this.props.location) {
      case "":
        mainComponent = <Home auth={() => this.auth.login()} />;
        break;
      case "callback":
        mainComponent = isAuthenticated() ? <Callback auth={() => {
          this.auth.logout();
        }} /> : <Home />;
        break;
      case "results":
        mainComponent = <ResultsPage />;
        break
      default:
        mainComponent = <Home auth={() => this.auth.login()} />;
    }

    return (
      <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/Results" component={ResultsPage} />
            <Route exact path="/Callback" component={Callback} />
            {/* <Route exact path="/NoMatch" component={NoMatch}/> */}
          </Switch>
      </Router>
    );
  }
}

export default App;
