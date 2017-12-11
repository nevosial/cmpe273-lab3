import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import HomePage from './components/HomePage';
import SignUp from './components/SignUp';
import About from './components/About';
import Filesload from './components/Filesload';
import Groups from './components/Groups';
import Shared from './components/Shared';



class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
