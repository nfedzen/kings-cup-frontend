import React, { Component } from 'react'
import Card from './Card'

class CardCollection extends Component {
  state = {
    deck: []
  }

  componentDidMount(){
    fetch('https://deckofcardsapi.com/api/deck/new/draw/?count=52')
      .then(response => response.json())
      .then(cards => this.setState({deck: cards.cards}))
  }

  showDeck = () => {
    return this.state.deck.map(card => <Card key={card.code} card={card} findAction={this.props.findAction} />)
  }

  render(){
    return(
      <div className='card-container'>
        {this.showDeck()}
      </div>
  )
  }
  
}
export default CardCollection