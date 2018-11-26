import React, { Component } from 'react';
import './App.css';
import data from './assets/data/dogs.json'
import Header from './snippets/Header.jsx'
import Footer from './snippets/Footer.jsx'
import ImageComponent from './component/ImageComponent'
class App extends Component {
  render() {
    let images = data.dogs.map(dog =>  {
      console.log(dog, 'dog')
    return <li><ImageComponent key={dog.source} image={dog.image} alt="dog" /></li>
 });
    return (
      <div className="App">
        <header className="App-header">
          <div className="header-text">
            <Header/>
          </div>
        </header>
        <div className='container'>
          <div >
            <ul id='gallery'>
            {images}
            </ul>
           </div>
           <Footer/>
        </div>
      </div>
    );
  }
}

export default App;
