import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import doge from "./doge.jpg"
import pepe from "./pepe.png"
import knuckles from "./knuckles.jpg"
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import IconButton from '@material-ui/core/IconButton';
import red from '@material-ui/core/colors/red';

var test = [];
test.push({greeting: "Hello"});


const cards = [];
cards.push({image: "./pepe.png", caption: "Make America Great Again", author: "TrumpFan101"});
cards.push({image: "./doge.jpg", caption: "Such awesome, very wow, so goodness", author: "goodboy"});
cards.push({image: "./knuckles.jpg", caption: "Do u knoe da way", author: "Kony2012"});


const styles = {
  card: {
    maxWidth: 345,
    boxShadow: "2px 0px 2px black",
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
};

class App extends Component {
    
    constructor(){
        super();
        this.state = {
            cards: [],
            color: "#696969",
        }
    }
    
    /* 
    ** changeColor passed into toggleChanges to change the color onClick
    */
    
    changeColor = (color) => {
        this.setState({color});
    }
    
    toggleChanges = () => {
        this.changeColor(this.state.color === "red" ? "#696969" : "red");
    }
    
    test = () =>{
        this.setState( { "color" : this.state.color === "red" ? "#696969" : "red"} );
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
                <div className = "rearrange">
                <img className = "image" src = {knuckles} alt = "knuckles"></img>
                <p>{cards[2].author}</p>
                <div className = "right">
                <p>{cards[2].caption}</p>
                </div>
                </div>
            </div>
            <Card style = {styles.card}>
                <CardMedia image = {pepe} title = "pepe" style = {styles.media}/>
                <CardContent>
                    <Typography gutterBottom variant="headline" component="h2">
                        {cards[0].author}
                    </Typography>
                    <hr></hr>
                    <Typography component="p">
                        Make America Great Again!
                    </Typography>
                    <IconButton aria-label="Add to favorites"  >
                        <FavoriteIcon onClick={this.test.bind(this)}  style={{color: this.state.color}} />
                    </IconButton>
                </CardContent>
            </Card>
      </div>
    );
  }
}

export default App;
