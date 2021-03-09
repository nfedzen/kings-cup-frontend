import React, { Component } from 'react'
import Card from './Card'

class CardCollection extends Component {
  state = {
    deck: []
  }

  componentDidMount(){
    fetch('https://deckofcardsapi.com/api/deck/new/draw/?count=52')
      .then(response => response.json())
      .then(cards => this.setState({deck: cards}))
  }

  showDeck = () => {
    console.log(this.deck)
    // return this.props.cards.map(card => <Card key={card.code} card={card} />)
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