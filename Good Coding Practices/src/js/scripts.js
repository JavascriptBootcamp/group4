// piece object

const piece = (function () {
  let el = null;

  const init = function (el) {
    this.el = el;
  };

  const moveDelta = function (dx, dy) {
    const pos = this.el.getBoundingClientRect();
    switch (dx) {
      case 0:
        if ((pos.top + dy < window.innerHeight) && (pos.top + dy > 0))
          this.el.style.top = `${pos.top + dy}px`;
        else if (pos.top + dy <= 0) 
          this.el.style.top = `${pos.top + dy + (pos.top + dy) * (-1)}px`;
        break;
      // when dx 100 / -100 
      default:
        if ((pos.left + dx < window.innerWidth) && (pos.left + dx > 0)) {
          this.el.style.left = `${pos.left + dx}px`;
          this.el.style.top = `${pos.top + dy}px`;
        }
        else if (pos.left + dx <= 0) {
          this.el.style.left = `${pos.left + dx + (pos.left + dx) * (-1)}px`;
          this.el.style.top = `${pos.top + dy}px`;
        }
        break;
    }
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
    console.log(this.el);
    this.el.style.left = "50%";
    this.el.style.top = "100px";
  };

  const randomizeLocation = function () {
    this.el.style.left = Math.floor(Math.random() * window.innerWidth - 100) + 50 + "px";
    this.el.style.top = Math.floor(Math.random() * window.innerHeight - 100) + 50 + "px";
    console.log(Math.floor(Math.random() * window.innerHeight - 100) + 50);
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

function handleClick() {
  piece.moveDelta(parseInt(this.dataset.dx), parseInt(this.dataset.dy));

}


function init() {
  console.log(window.innerHeight, window.innerWidth);
  piece.resetLocation();
  piece.weatherApi();
  const $btnUp = document.getElementById("btn-up");
  $btnUp.dataset.dx = 0;
  $btnUp.dataset.dy = -100;
  $btnUp.addEventListener("click", handleClick);
  const $btnRight = document.getElementById("btn-right");
  $btnRight.dataset.dx = 100;
  $btnRight.dataset.dy = 0;
  $btnRight.addEventListener("click", handleClick);
  const $btnDown = document.getElementById("btn-down");
  $btnDown.dataset.dx = 0;
  $btnDown.dataset.dy = 100;
  $btnDown.addEventListener("click", handleClick);
  const $btnLeft = document.getElementById("btn-left");
  $btnLeft.dataset.dx = -100;
  $btnLeft.dataset.dy = 0;
  $btnLeft.addEventListener("click", handleClick);
  const $btnRandom = document.getElementById("btn-random");
  $btnRandom.addEventListener("click", piece.randomizeLocation.bind(piece));
  const $btnReset = document.getElementById("btn-reset");
  $btnReset.addEventListener("click", piece.resetLocation.bind(piece));

}

window.addEventListener("DOMContentLoaded", event => {
  piece.init(document.getElementById("piece"));
  init();
});