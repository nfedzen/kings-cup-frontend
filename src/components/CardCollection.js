import React from 'react'
import Card from './Card'

export default function CardCollection(props) {
  return(
    <div>
      {
        props.cards.map(card => {
          return <Card card={card}/>
        })
      }
    </div>
  )
}