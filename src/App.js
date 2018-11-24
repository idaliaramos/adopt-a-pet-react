import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>
            <h1>Find a new Friend</h1>
          </div>
        </header>
        <div className='container'>
          <div id='gallery'>
           </div>
        </div>
      </div>
    );
  }
}

export default App;
