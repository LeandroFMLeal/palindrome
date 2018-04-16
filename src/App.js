import React, { Component } from 'react';
import logo from './logo.svg';
import SimpleForm from './SimpleForm'
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Is it a palindrome?</h1>
        </header>
        <SimpleForm />
      </div>
    );
  }
}

export default App;
