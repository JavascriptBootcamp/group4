// piece object
const piece = (function () {
  // let el = null;
  const init = function (el) {
    this.el = el;
    saveDefaultPositin.call(this);
    setColorByTemperature.call(this);
  };

  const reset = function () {
    const posLeft = localStorage.getItem("defaultPosLeft");
    const posTop = localStorage.getItem("defaultPosTop");

    this.el.style.left = posLeft + getPixelSuffix();
    this.el.style.top = posTop + getPixelSuffix();
  };

  const setColorByTemperature = function (el) {
    const urlWeather = 'http://api.apixu.com/v1/current.json?key=dda6e762ae4f41efb7e173552192204&q=tel%20aviv';
    fetch(urlWeather).then(
      stream => stream.json().then(
        data => {
          setPieceColor.call(this, data.current.temp_c);
        }))
  };

  const setPieceColor = function (deg) {
    let color;
    if (deg < 10)
      color = 'blue';
    else if (deg < 21)
      color = 'green';
    else if (deg < 31)
      color = 'yellow';
    else
      color = 'red'
    this.el.style.backgroundColor = color;
    this.el.style.borderColor = color;
  };

  const randPieceLocation = function () {
    const randLoactionLeft = Math.floor(Math.random() * (screen.width - 100 + 1));
    const randLoactionTop = Math.floor(Math.random() * (screen.height - 100 - 75 + 1));

    this.el.style.left = randLoactionLeft + getPixelSuffix();
    this.el.style.top = randLoactionTop + getPixelSuffix();

  };

  const moveDelta = function (dx, dy) {
    const pos = this.el.getBoundingClientRect();
    if (pos.left + dx < 0 || pos.left + dx > screen.width - 100 + 1)
      return;
    if (pos.top + dy < 0 || pos.top + dy > screen.height - 100 - 75 + 1)
      return;
    this.el.style.left = `${pos.left + dx + getPixelSuffix()}`;
    this.el.style.top = `${pos.top + dy + getPixelSuffix()}`;
  };
  return {
    init,
    moveDelta,
    setColorByTemperature,
    randPieceLocation,
    reset
  };
})();

function saveDefaultPositin() {
  const pos = this.el.getBoundingClientRect();
  localStorage.setItem("defaultPosLeft", pos.left);
  localStorage.setItem("defaultPosTop", pos.top);
}

function handleClick(ev) {
  piece.moveDelta(parseInt(this.dataset.dx), parseInt(this.dataset.dy));
}

function init() {
  const startPos1 = 0, startPos2 = 100;

  const $btnUp = document.getElementById("btn-up");
  const $btnRight = document.getElementById("btn-right");
  const $btnDown = document.getElementById("btn-down");
  const $btnLeft = document.getElementById("btn-left");

  this.setButtonProp($btnUp, startPos1, -startPos2, handleClick);
  this.setButtonProp($btnRight, startPos2, startPos1, handleClick);
  this.setButtonProp($btnDown, startPos1, startPos2, handleClick);
  this.setButtonProp($btnLeft, -startPos2, startPos1, handleClick);
}

function setDirections(buttonObj, x, y) {
  buttonObj.dataset.dx = x;
  buttonObj.dataset.dy = y;
}

function setButtonProp(buttonObj, x, y, eventFunc) {
  setDirections(buttonObj, x, y);
  buttonObj.addEventListener("click", eventFunc);
}

function getPixelSuffix() {
  return 'px';
}

window.addEventListener("DOMContentLoaded", event => {
  piece.init(document.getElementById("piece"));
  init();
});
