import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Eligibility from './containers/Eligibility';

class App extends Component {
  render() {
    return (
      <div className="col-md-6">
        <h3> Sample Form Container </h3>
        <Eligibility />
      </div>
    );
  }
}

export default App;