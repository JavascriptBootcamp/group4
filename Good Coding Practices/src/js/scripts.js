const colors = {
  BLUE: 'blue',
  GREEN: 'green',
  RED: 'red',
  YELLOW: 'yellow'
};
const suffix_px = 'px';
const url_weather = 'http://api.apixu.com/v1/current.json?key=dda6e762ae4f41efb7e173552192204&q=tel%20aviv';
const radius = 50;
const x_factor = 2;
const y_factor = 3.43;
const min_limit_x_direction = 0;
const max_limit_x_direction = x_factor*radius;
const min_limit_y_direction = 0;
const max_limit_y_direction = y_factor*radius;

// piece object
const piece = (function () {
  // let el = null;
  // let defaultPosLeft;
  // let defaultPosTop;
  const init = function (el) {
    this.el = el;
    this.defaultPosLeft = null;
    this.defaultPosTop = null;
    this.saveDefaultPosition();
  };

  const reset = function () {
    const posLeft = this.defaultPosLeft;
    const posTop = this.defaultPosTop;

    this.el.style.left = posLeft + suffix_px;
    this.el.style.top = posTop + suffix_px;
  };

  const setPieceColor = function (deg) {
    let color;
    if (deg < 10)
      color = colors.BLUE;
    else if (deg < 21)
      color = colors.GREEN;
    else if (deg < 31)
      color = colors.YELLOW;
    else
      color = colors.RED;

    this.el.style.backgroundColor = color;
    this.el.style.borderColor = color;
  };

  const randPieceLocation = function () {
    const randLoactionLeft = Math.floor(Math.random() * (screen.width - max_limit_x_direction));
    const randLoactionTop = Math.floor(Math.random() * (screen.height - max_limit_y_direction));

    this.el.style.left = randLoactionLeft + suffix_px;
    this.el.style.top = randLoactionTop + suffix_px;

  };

  const saveDefaultPosition = function() {
    const pos = this.el.getBoundingClientRect();
    this.defaultPosLeft = pos.left;
    this.defaultPosTop = pos.top;
  };

  const moveDelta = function (dx, dy) {
    const pos = this.el.getBoundingClientRect();
    if (pos.left + dx < 0 || pos.left + dx >screen.width - max_limit_x_direction)
      return;
    if (pos.top + dy < 0 || pos.top + dy > screen.height - max_limit_y_direction)
      return;
    this.el.style.left = `${pos.left + dx + suffix_px}`;
    this.el.style.top = `${pos.top + dy + suffix_px}`;
  };
  return {
    init,
    moveDelta,
    setPieceColor,
    saveDefaultPosition,
    randPieceLocation,
    reset
  };
})();

function handleClick(ev) {
  piece.moveDelta(parseInt(this.dataset.dx), parseInt(this.dataset.dy));
}

function init() {
  const startPos1 = 0, startPos2 = 100;

  const $btnUp = document.getElementById("btn-up");
  const $btnRight = document.getElementById("btn-right");
  const $btnDown = document.getElementById("btn-down");
  const $btnLeft = document.getElementById("btn-left");

  const btnReset = document.getElementById("btn-reset");
  const btnRandom = document.getElementById("btn-random");

  setButtonProp($btnUp, startPos1, -startPos2, handleClick);
  setButtonProp($btnRight, startPos2, startPos1, handleClick);
  setButtonProp($btnDown, startPos1, startPos2, handleClick);
  setButtonProp($btnLeft, -startPos2, startPos1, handleClick);

  btnReset.addEventListener("click", piece.reset.bind(piece));
  btnRandom.addEventListener("click", piece.randPieceLocation.bind(piece));
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

function setColorByTemperature() {
  fetch(url_weather).then(
    stream => stream.json().then(
      data => {
        piece.setPieceColor(data.current.temp_c);
      }))
};

window.addEventListener("DOMContentLoaded", event => {
  piece.init(document.getElementById("piece"));
  init();
  setColorByTemperature();
});
