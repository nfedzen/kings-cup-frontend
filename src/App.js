import React, { Component } from 'react'
import CardCollection from './components/CardCollection'
import './App.css';

class App extends Component {

  state = {
    cards: []
  }

  componentDidMount(){
    fetch('http://localhost:3000/cards')
      .then(response => response.json())
      .then(cards => this.setState({cards: cards}))
  }

  render(){
    return (
      <div className="App">
        <CardCollection cards={this.cards}/>
      </div>
    );
  }
    
  
  
}

export default App;
