import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import doge from "./doge.jpg"
import pepe from "./pepe.png"
import knuckles from "./knuckles.jpg"

var test = [];
test.push({greeting: "Hello"});


const cards = [];
cards.push({image: "./pepe.png", caption: "Make America Great Again", author: "TrumpFan101"});
cards.push({image: "./doge.jpg", caption: "Such awesome, very wow, so goodness", author: "goodboy"});
cards.push({image: "./knuckles.jpg", caption: "Do u knoe da way", author: "Kony2012"});



class App extends Component {
    
    constructor(){
        super();
        this.state = {
            cards: []
        }
    }
  render() {
    return (
      <div className="App">
            <div className = "border">
                <img className = "image" src = {pepe} alt = "pepe"></img>
                <p>{cards[0].author}</p>
                <p>{cards[0].caption}</p>
            </div>
            <div className = "border">
                <img className = "image" src = {doge} alt = "doge"></img>
                <p>{cards[1].author}</p>
                <p>{cards[1].caption}</p>
            </div>
            <div className = "border">
                <img className = "image" src = {knuckles} alt = "knuckles"></img>
                <p>{cards[2].author}</p>
                <p>{cards[2].caption}</p>
            </div>
      </div>
    );
  }
}

export default App;
