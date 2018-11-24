import React, { Component } from 'react';
import './App.css';
import data from './assets/data/dogs.json'
import Header from './snippets/Header.jsx'
import Footer from './snippets/Footer.jsx'
class App extends Component {
  render() {
    const img = require('./assets/images/banner.jpg');
    let images = data.dogs.map(dog =>  {
      console.log(dog.image, 'dog')
    return <img  src={dog.image} alt=""  />
 });
    return (
      <div className="App">
        <header className="App-header">
            <Header/>
        </header>
        <div className='container'>
          <div id='gallery'>
            {images}
           </div>
           <Footer/>
        </div>
      </div>
    );
  }
}

export default App;
