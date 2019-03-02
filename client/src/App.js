import React, { Component } from 'react';
import './App.css';
import API from './utils/API';
<<<<<<< Updated upstream
// import ContactUs from "./components/ContactUs";
import Home from "./components/Home";
// import Login from "./components/Login";
// import Registration from "./components/Registration";
// import Results from "./components/Results";
// import Resultscard from "./components/Resultscard";
// import RoomSearch from "./components/RoomSearch";
// import Saved from "./components/Saved";
// import Savedcard from "./components/Savedcard";
=======
import Home from "./components/Home"
>>>>>>> Stashed changes

class App extends Component {

  componentDidMount() {
    this.loadData();
  }

  loadData = () => {
    API.getDirections()
    .then(res => console.log(res))
    .catch(err => console.log(err))
};

  render() {
    return (
<<<<<<< Updated upstream
      // <div className="App">
      //  <p>testing</p>
      // </div>
      <div>
      <Home/>
=======
      <div className="App">
       <p>testing</p>
       <Home />
>>>>>>> Stashed changes
      </div>
    );
  }
}

export default App;
