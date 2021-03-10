import React, { Component } from 'react'
import CardCollection from './components/CardCollection'
import Action from './components/Action'
import './App.css';

class App extends Component {

  state = {
    action: 'Choose a Card!'
  }

  // componentDidMount(){
  //   fetch('https://deckofcardsapi.com/api/deck/new/draw/?count=52')
  //     .then(response => response.json())
  //     .then(cards => this.setState({deck: cards}))
  // }

  findAction = (cardValue) => {
    switch(cardValue) {
      case 'ACE':
        this.setState({action: 'Waterfall'})
        break;
      case "2":
        this.setState({action: 'Pick someone to drink'})
        break;
      case "3":
        this.setState({action: 'Take a drink'})
        break;
      case "4":
        this.setState({action: 'Floor'})
        break;
      case "5":
        this.setState({action: 'Guys'})
        break;
      case "6":
        this.setState({action: 'Chicks'})
        break;
      case "7":
        this.setState({action: 'Heaven'})
        break;
      case "8":
        this.setState({action: 'Date'})
        break;
      case "9":
        this.setState({action: 'Rhyme'})
        break;
      case "10":
        this.setState({action: 'Categories'})
        break;
      case 'JACK':
        this.setState({action: 'Never Have I Ever'})
        break;
      case 'QUEEN':
        this.setState({action: 'Question Master'})
        break;
      case 'KING':
        this.setState({action: 'Make a Rule'})
        break;
      default:
        break;
    }
  }
  
  render(){
    // console.log(this.state.deck.cards)
    return (
      <section>
        <header className='header'>
          Welcome To Kings Cup!
        </header>
        
        <div className="App">
          <Action action={this.state.action}></Action>
          <CardCollection findAction={this.findAction}/>
        </div>
      </section>
      
    );
  }
    
  
  
}

export default App;
