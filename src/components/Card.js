import React, {useState} from "react";

// class Card extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       cardImage: "/back_of_playcard11.jpg",
//     };
//   }

//   flipCard = () => {
//     this.setState({
//       cardImage: this.props.card.image,
//     });
//     this.props.findAction(this.props.card.value);
//   };

//   render() {
//     return (
//       <div>
//         <img
//           className="card"
//           onClick={() => this.flipCard()}
//           src={this.state.cardImage}
//           alt="cardimg"
//         />
//       </div>
//     );
//   }
// }

// export default Card;

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
