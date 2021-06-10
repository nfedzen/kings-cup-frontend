import React, { useEffect, useState } from "react";
import Card from "./Card";

export default function CardCollection({ findAction }) {
  const [deck, setDeck] = useState([]);

  useEffect(() => {
    fetch("https://deckofcardsapi.com/api/deck/new/draw/?count=52")
      .then((response) => response.json())
      .then((cards) => setDeck(cards.cards));
  }, []);

  function showDeck() {
    return deck.map((card) => (
      <Card key={card.code} card={card} findAction={findAction} />
    ));
  }

  return <div className="card-container">{showDeck()}</div>;
}
