import React, { Component } from 'react'
import CardCollection from './components/CardCollection'
import './App.css';

class App extends Component {

  // state = {
  //   deck: []
  // }

  // componentDidMount(){
  //   fetch('https://deckofcardsapi.com/api/deck/new/draw/?count=52')
  //     .then(response => response.json())
  //     .then(cards => this.setState({deck: cards}))
  // }

  
  render(){
    // console.log(this.state.deck.cards)
    return (
      <div className="App">
        <CardCollection />
      </div>
    );
  }
    
  
  
}

export default App;
