import React, { Component } from 'react';
import './App.css';
// import API from './utils/API';

// import ContactUs from "./components/ContactUs";
import Home from "./components/Home";
// import Login from "./components/Login";
// import Registration from "./components/Registration";
import Results from "./components/Results";
// import Resultscard from "./components/Resultscard";
// import RoomSearch from "./components/RoomSearch";
// import Saved from "./components/Saved";
// import Savedcard from "./components/Savedcard";
import Auth from "./components/Authentication/Auth";
import Callback from "./components/Callback/Callback";
import Homes from "./components/Homes2/Homes";

class App extends Component {

  auth = new Auth();

  logout() {
    this.props.auth.logout();
  }

  login() {
    this.props.auth.login();
  }

//   componentDidMount() {
//     this.loadData();
//   }

//   loadData = () => {
//     API.getDirections()
//     .then(res => console.log(res))
//     .catch(err => console.log(err))
// };

  render() {

    const isAuthenticated = this.auth.isAuthenticated;

    let mainComponent = "";
    switch (this.props.location) {
      case "":
        mainComponent = <Home auth={() => this.auth.login()} />;
        break;
      case "callback":
        mainComponent = isAuthenticated() ? <Callback auth={() => {
          this.auth.logout();
        }}/> : <Home />;
        break;
      case "results":
        mainComponent = <Homes />;
        break
      default:
        mainComponent = <Home auth={() => this.auth.login()} />;
    }

    return (
      // <div className="App">
      //  <p>testing</p>
      // </div>
      <div>
        {mainComponent}
      {/* <Home /> */}
      </div>
    );
  }
}

export default App;
