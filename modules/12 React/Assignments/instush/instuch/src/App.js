import React from "react";
import Img from "./Img.js";
import "./App.css";

function App() {
  const imgs = [
    "https://i.imgur.com/HUXbMGR.jpg",
    "https://css-tricks.com/wp-content/uploads/2017/06/css-is-awesome.jpg",
    "http://www.catonmat.net/images/css-jokes/ninja-css-joke-fb.png",
    "https://i.ytimg.com/vi/YsjWnxV1220/maxresdefault.jpg",
    "https://image.spreadshirtmedia.com/image-server/v1/mp/products/T268A544MPA393PT10X16Y17D1012336911S15/views/3,width=1200,height=630,appearanceId=544,backgroundColor=F2F2F2,modelId=1825,crop=design,version=1549810379,modelImageVersion=1534228056/css-jokes-drink-beer-two-tone-mug.jpg",
    "https://cdn.dribbble.com/users/1463678/screenshots/5018297/graveyard-dribbble.png",
    "https://static.fjcdn.com/pictures/Css+joke+dont+know+how+many+css+coders+are+on_36e6dd_5091277.png"
  ];
  return (
    <div className="App">
      <div className="Header"> Instush </div>
      <Img images={imgs} />
      <div className="Fotter"> All Rights Reserved</div>
    </div>
  );
}

export default App;
