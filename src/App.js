import React, { Component } from 'react'
import CardCollection from './components/CardCollection'
import BeerCan from './components/BeerCan'
import './App.css';

const popped = 'http://cdn.lowgif.com/small/f6e92d70bc5aabd6-image-beer-explosion-gif-simpsons-wiki-fandom-powered-by-wikia.gif'
const closed = 'https://images-na.ssl-images-amazon.com/images/I/815RIqtcIAL._AC_SL1500_.jpg'

class App extends Component {

  state = {
    action: 'Choose a Card!',
    clicks: 0,
    canPopped: false,
    canStatus: closed
  }

  // componentDidMount(){
  //   fetch('https://deckofcardsapi.com/api/deck/new/draw/?count=52')
  //     .then(response => response.json())
  //     .then(cards => this.setState({deck: cards}))
  // }

  findAction = (cardValue) => {
    if(!this.state.canPopped){
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
      this.setState({clicks: this.state.clicks + 1})
      this.popCan(this.state.clicks)
    } else {
      this.setState({action: 'Can Popped! Finish your drink and start a new game!'})
      this.setState({canStatus: popped})
    }
  }

  popCan = (clicks) => {
    let min = Math.ceil(clicks)
    let max = Math.floor(52)
    if( (52 === Math.floor(Math.random() * (max - min + 1) + min)) || (clicks === 51)){
      this.setState({canPopped: true})
    }
  }
    
  
  render(){
    // console.log(this.state.deck.cards)
    return (
      <section>
        
        <div className="App">
          <div>
            <BeerCan canStatus={this.state.canStatus} action={this.state.action}/>
            {/* <Action action={this.state.action}></Action> */}
          </div>
          <div className='action-bar'>
          </div>
          <CardCollection findAction={this.findAction}/>
        </div>
      </section>
      
    );
  }
    
  
  
}

export default App;
