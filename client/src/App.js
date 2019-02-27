import React, { Component } from 'react';
import './App.css';
import API from './utils/API';

class App extends Component {

  componentDidMount() {
    this.loadData();
  }

  loadData = () => {
    API.getDirections()
    .then(res => console.log(res))
  };

  render() {
    return (
      <div className="App">
       <p>testing</p>
      </div>
    );
  }
}

export default App;
