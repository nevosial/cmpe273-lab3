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
          <h1 className="App-title">Dropbox</h1>
        </header>
        <Login/>
        <HomePage/>
        <Signup/>
        <About/>
        <Filesload/>
        <Groups/>
       <Shared/>
      </div>
    );
  }
}

export default App;
