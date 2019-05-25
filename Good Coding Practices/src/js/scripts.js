// piece object

const piece = (function () {
  let el = null;

  const init = function (el) {
    this.el = el;
  };

  const moveDelta = function (dx, dy) {
    const pos = this.el.getBoundingClientRect();
    const position = [pos.top, pos.left];
    if (dx === 0) {
      this.el.style.top = `${movePos(position[0], dy,window.innerHeight - 100)}px`;
    }
    else
      this.el.style.left = `${movePos(position[1], dx,window.innerWidth - 100)}px`;
  }

  const movePos = function(pos, px, screenSize) {   
    let positionSide=0;
    if ((pos + px < screenSize) && (pos + px > 0))
      positionSide = pos + px;
    else if (pos + px >= screenSize)
      positionSide = screenSize;
    else if (pos.top + px <= 0)
      positionSide = 0;
    return positionSide;
  }

  const pieceColor = function (temp) {
    let color = "";
    if (temp <= 10) {
      color = "blue";
    }
    else if (temp > 10 && temp < 21)
      color = "Green";
    else if (temp > 20 && temp < 31)
      color = "Yellow";
    else if (temp > 30)
      color = "Red";
    this.el.style.background = color;
    this.el.style.borderColor = color;
  }

  const weatherApi = function () {
    fetch('http://api.apixu.com/v1/current.json?key=dda6e762ae4f41efb7e173552192204&q=tel%20aviv')
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        for (item in myJson) {
          if (myJson[item].temp_c)
            piece.pieceColor(Number(myJson[item].temp_c));
        }
      });
  }

  const resetLocation = function () {
    this.el.style.left = "50%";
    this.el.style.top = "100px";
  };

  const randomizeLocation = function () {
    this.el.style.top = Math.floor(Math.random() * (window.innerHeight - 100)) + "px";
    this.el.style.left = Math.floor(Math.random() * (window.innerWidth - 100)) + "px";
  };

  return {
    init,
    moveDelta,
    pieceColor,
    weatherApi,
    resetLocation,
    randomizeLocation
  };

})();


window.addEventListener("DOMContentLoaded", event => {
  piece.init(document.getElementById("piece"));
  init();
});

function init() {
  piece.resetLocation();
  piece.weatherApi();
  setClickEvent(document.getElementById("btn-up"),0,-100);
  setClickEvent(document.getElementById("btn-right"),100,0);
  setClickEvent(document.getElementById("btn-down"),0,100);
  setClickEvent(document.getElementById("btn-left"),-100,00);
  const btnRandom = document.getElementById("btn-random");
  btnRandom.addEventListener("click", piece.randomizeLocation.bind(piece));
  const btnReset = document.getElementById("btn-reset");
  btnReset.addEventListener("click", piece.resetLocation.bind(piece));

}


function setClickEvent(elemBtn,x,y){
  let elem = elemBtn;
  elem.dataset.dx =x;
  elem.dataset.dy = y;
  elem.addEventListener("click", handleClick);
  }
  
  
  function handleClick() {
    piece.moveDelta(parseInt(this.dataset.dx), parseInt(this.dataset.dy));
  }
  