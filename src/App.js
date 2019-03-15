import React, { Component } from 'react';
import Header from './components/header';
import './App.css';
import {browserrouter as Router, Route, Link} from 'react-router-dom'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />   
      </div>
    );
  }
}

export default App;
