import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from  'axios'

class App extends Component {

  isItPalindrome(){
    axios.post('localhost:3000', {
      firstName: 'Fred',
      lastName: 'Flintstone'
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Is it a palindrome?</h1>
          

        </header>
        <form onSubmit={this.isItPalindrome()}>
            <input type="text" name="in" />
            <button type="submit">Submit</button>
          </form>
      </div>
    );
  }
}

export default App;
