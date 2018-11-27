import React, { Component } from 'react';
import './App.css';
import data from './assets/data/dogs.json'
import Header from './snippets/Header.jsx'
import Footer from './snippets/Footer.jsx'
class App extends Component {
  state={
    isOpen: false,
    clickedImage: ''
  }

  //will change state from true to false and vice versa on click
  //update the clicked image to render popup
  handleShowDialog = (e) => {
    this.setState({ isOpen: !this.state.isOpen });
    this.setState({clickedImage:e.target.src })
    };
  render() {
    //map through the file to create an image component for each dog
    let images = data.dogs.map(dog =>  {
    return <li onClick={this.handleShowDialog} key={dog.id}><img src={dog.image} alt="dog" /></li>
 });
 //styles for the image popup
   let styles = {
      width: '80%',
      height: 'auto'
    };

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
            <div>
              {/* if isOpen is true it will show popup */}
               {this.state.isOpen && (
                <div
                  className="backdrop"
                  onClick={this.handleShowDialog}
                >
                  <img
                    src={this.state.clickedImage}
                    style={styles}
                    alt='dog'
                  />
                </div>
              )}
            </div>
           </div>
           <Footer/>
        </div>
      </div>
    );
  }
}

export default App;
