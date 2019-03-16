import React, { Component } from 'react';
import './App.css';
// import API from './utils/API';

// import ContactUs from "./components/ContactUs";
import Home from "./components/Home";
import Survey from "./components/Survey";

// import Login from "./components/Login";
// import Registration from "./components/Registration";
// import Results from "./components/Results";
// import Resultscard from "./components/Resultscard";
// import RoomSearch from "./components/RoomSearch";
// import Saved from "./components/Saved";
// import Savedcard from "./components/Savedcard";

class App extends Component {

//   componentDidMount() {
//     this.loadData();
//   }

//   loadData = () => {
//     API.getDirections()
//     .then(res => console.log(res))
//     .catch(err => console.log(err))
// };

  render() {
    return (
      // <div className="App">
      //  <p>testing</p>
      // </div>
      <div>
       <Home /> 
      <Survey />
      </div>
    );
  }
}

export default App;
