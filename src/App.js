import React, { useState } from "react";
import CardCollection from "./components/CardCollection";
import BeerCan from "./components/BeerCan";
import BeerCanImage from "./beerCan2.png";
import "./App.css";

const popped =
  "http://cdn.lowgif.com/small/f6e92d70bc5aabd6-image-beer-explosion-gif-simpsons-wiki-fandom-powered-by-wikia.gif";
const closed = BeerCanImage;

export default function App() {
  const [action, setAction] = useState("Choose a Card!");
  const [clicks, setClicks] = useState(0);
  const [canPopped, setCanPopped] = useState(false);
  const [canStatus, setCanStatus] = useState(closed);

  function findAction(cardValue) {
    if (!canPopped) {
      switch (cardValue) {
        case "ACE":
          setAction("Waterfall");
          break;
        case "2":
          setAction("Pick someone to drink");
          break;
        case "3":
          setAction("Take a drink");
          break;
        case "4":
          setAction("Floor");
          break;
        case "5":
          setAction("Guys");
          break;
        case "6":
          setAction("Chicks");
          break;
        case "7":
          setAction("Heaven");
          break;
        case "8":
          setAction("Date");
          break;
        case "9":
          setAction("Rhyme");
          break;
        case "10":
          setAction("Categories");
          break;
        case "JACK":
          setAction("Never Have I Ever");
          break;
        case "QUEEN":
          setAction("Question Master");
          break;
        case "KING":
          setAction("Make a Rule");
          break;
        default:
          break;
      }
      setClicks(clicks + 1);
      popCan(clicks);
    } else {
      setAction("Can Popped! Finish your drink and start a new game!");
      setCanStatus(popped);
    }
  }

  function popCan(clicks) {
    let min = Math.ceil(clicks);
    let max = Math.floor(52);
    if (
      52 === Math.floor(Math.random() * (max - min + 1) + min) ||
      clicks === 51
    ) {
      setCanPopped(true);
    }
  }

  return (
    <section>
      <div className="App">
        <div>
          <BeerCan canStatus={canStatus} action={action} />
          {/* <Action action={this.state.action}></Action> */}
        </div>
        <div className="action-bar"></div>
        <CardCollection findAction={findAction} />
      </div>
    </section>
  );
}
