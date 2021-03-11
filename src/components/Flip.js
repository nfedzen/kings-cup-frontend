import React from 'react'
import ReactCardFlip from 'react-card-flip'
import Card from './Card'
import CardBack from './CardBack'

export default class Flip extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
      isFlipped: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
  }

  render() {
    return (
      <div>
        {this.props.showDeck()}
      </div>
      
    )
  }
}