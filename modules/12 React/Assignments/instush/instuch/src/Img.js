import React from "react";
import "./Img.css";

class Img extends React.Component {

  // imgs = [
  //   "https://i.imgur.com/HUXbMGR.jpg",
  //   "https://css-tricks.com/wp-content/uploads/2017/06/css-is-awesome.jpg",
  //   "http://www.catonmat.net/images/css-jokes/ninja-css-joke-fb.png",
  //   "https://i.ytimg.com/vi/YsjWnxV1220/maxresdefault.jpg",
  //   "https://image.spreadshirtmedia.com/image-server/v1/mp/products/T268A544MPA393PT10X16Y17D1012336911S15/views/3,width=1200,height=630,appearanceId=544,backgroundColor=F2F2F2,modelId=1825,crop=design,version=1549810379,modelImageVersion=1534228056/css-jokes-drink-beer-two-tone-mug.jpg",
  //   "https://cdn.dribbble.com/users/1463678/screenshots/5018297/graveyard-dribbble.png",
  //   "https://static.fjcdn.com/pictures/Css+joke+dont+know+how+many+css+coders+are+on_36e6dd_5091277.png"
  // ];

  constructor(props) {
    super(props);

    this.imgs = this.props.images;

    this.state = {
      imgIndex: this.imgs.length - 1
    };
    this.startCountDown();
  }

  startCountDown() {
    const interval = setInterval(() => {
      if (this.state.imgIndex > 0) {
        let updatedTimer = this.state.imgIndex;
        updatedTimer = updatedTimer - 1;
        this.setState({ imgIndex: updatedTimer });
      } else {
        this.setState({ imgIndex: this.imgs.length - 1 });
        //clearInterval(interval);
      }
    }, 5000);
  }

  render() {
    return (
      <div>
        <img className="Img" src={this.imgs[this.state.imgIndex]} />
      </div>
    );
  }
}

export default Img;
