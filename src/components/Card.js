import React, {useState} from "react";

export default function Card({card,findAction}){
  const [cardImage, setCardImage] = useState('/back_of_playcard11.jpg')

  function flipCard(){
    setCardImage(card.image)
    findAction(card.value)
  };

  return (
    <div>
      <img
        className="card"
        onClick={() => flipCard()}
        src={cardImage}
        alt="cardImg"
      />
    </div>
  );

}
