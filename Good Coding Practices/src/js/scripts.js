// piece object
const piece = (function () {
  let el = null;
  const init = function (el) {
    this.el = el;
    this.el.initX = el.getBoundingClientRect().x;
    this.el.initY = el.getBoundingClientRect().y;
  };
  const moveDelta = function (dx, dy) {
    const pos = this.el.getBoundingClientRect();
    if (pos.left + dx >= 0 && pos.left + dx <= window.innerWidth - this.el.innerWidth) {
      this.el.style.left = `${pos.left + dx}px`;
    }
    if (pos.top + dy >= 0 && pos.top + dy <= window.innerHeight - this.el.innerHeight) {
      this.el.style.top = `${pos.top + dy}px`;
    }
  };
  const resetLocation = function () {
    this.el.style.left = `${this.el.initX}px`;
    this.el.style.top = `${this.el.initY}px`;
  };
  const randomLocation = function () {
    const CIRCLE_WIDTH = this.el.innerWidth;
    const CIRCLE_HEIGHT = this.el.innerHeight;
    const MAX_WIDTH = window.innerWidth;
    const MAX_HEIGHT = window.innerHeight;
    const randX = Math.random() * (MAX_WIDTH - (CIRCLE_WIDTH * 2)) + CIRCLE_WIDTH;
    const randY = Math.random() * (MAX_HEIGHT - (CIRCLE_HEIGHT * 2)) + CIRCLE_HEIGHT
    this.el.style.left = `${randX}px`;
    this.el.style.top = `${randY}px`;
  };
  const setColor = function (color) {
    this.el.style.background = color;
    this.el.style.border = "1px solid " + color;
  };
  return {
    init,
    moveDelta,
    resetLocation,
    randomLocation,
    setColor
  };
})();

const Api = (function () {
  let data = null;
  const retriveData = function (key) {
    const url = "http://api.apixu.com/v1/current.json?";
    fetch(url + key).then((res) => {
      return res.json();
      return res;
    }).then((myJson) => {
      this.data = myJson;
      Api.setColorByCurrentTemp();
    });
  }
  const setColorByCurrentTemp = function () {
    const BLUE = "blue";
    const GREEN = "green";
    const YELLOW = "yellow";
    const RED = "red";
    if (this.data.current.temp_c <= 10) {
      piece.setColor(BLUE);
    }
    else if (this.data.current.temp_c >= 11 && this.data.current.temp_c <= 20) {
      piece.setColor(GREEN);
    }
    else if (this.data.current.temp_c >= 21 && this.data.current.temp_c <= 30) {
      piece.setColor(YELLOW);
    }
    else {
      piece.setColor(RED);
    }
  }
  return {
    retriveData,
    setColorByCurrentTemp
  }
})();

function handleClick(ev) {
  piece.moveDelta(parseInt(this.dataset.dx), parseInt(this.dataset.dy));
}

function init() {
  const NUM_100 = 100;
  const NUM_MINUS_100 = -100;
  const $btnUp = document.getElementById("btn-up");
  setDxDy($btnUp, 0, NUM_MINUS_100);
  $btnUp.addEventListener("click", handleClick);
  const $btnRight = document.getElementById("btn-right");
  setDxDy($btnRight, NUM_100, 0);
  $btnRight.addEventListener("click", handleClick);
  const $btnDown = document.getElementById("btn-down");
  setDxDy($btnDown, 0, NUM_100);
  $btnDown.addEventListener("click", handleClick);
  const $btnLeft = document.getElementById("btn-left");
  setDxDy($btnLeft, NUM_MINUS_100, 0);
  $btnLeft.addEventListener("click", handleClick);
  const $btnReset = document.getElementById("btn-reset");
  $btnReset.addEventListener("click", () => {
    piece.resetLocation(0, 0);
  });
  const $randomize = document.getElementById("btn-randomize");
  $randomize.addEventListener("click", () => {
    piece.randomLocation();
  });
}

function setDxDy(el, dx, dy) {
  el.dataset.dx = dx;
  el.dataset.dy = dy;

}

window.addEventListener("DOMContentLoaded", event => {
  const key = "key=dda6e762ae4f41efb7e173552192204&q=tel%20aviv";
  Api.retriveData(key);
  piece.init(document.getElementById("piece"));
  init();
});
