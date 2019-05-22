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
    this.el.style.left = `${pos.left + dx}px`;
    this.el.style.top = `${pos.top + dy}px`;
  };
  const resetLocation = function () {
    this.el.style.left = `${this.el.initX}px`;
    this.el.style.top = `${this.el.initY}px`;
  };
  const randomLocation = function () {
    const CIRCLE_WIDTH = 100;
    const CIRCLE_HEIGHT = 100;
    const MAX_WIDTH = window.innerWidth;
    const MAX_HEIGHT = window.innerHeight;
    const randX = Math.random() * (MAX_WIDTH - (CIRCLE_WIDTH * 2)) + CIRCLE_WIDTH;
    const randY = Math.random() * (MAX_HEIGHT - (CIRCLE_HEIGHT * 2)) + CIRCLE_HEIGHT
    this.el.style.left = `${randX}px`;
    this.el.style.top = `${randY}px`;
  };
  return {
    init,
    moveDelta,
    resetLocation,
    randomLocation
  };
})();

function handleClick(ev) {
  piece.moveDelta(parseInt(this.dataset.dx), parseInt(this.dataset.dy));
}

function init() {
  const NUM_0 = 0;
  const NUM_100 = 100;
  const NUM_MINUS_100 = -100;
  const $btnUp = document.getElementById("btn-up");
  setDxDy($btnUp, NUM_0, NUM_MINUS_100);
  const $btnRight = document.getElementById("btn-right");
  setDxDy($btnRight, NUM_100, NUM_0);
  const $btnDown = document.getElementById("btn-down");
  setDxDy($btnDown, NUM_0, NUM_100);
  const $btnLeft = document.getElementById("btn-left");
  setDxDy($btnLeft, NUM_MINUS_100, NUM_0);
  addClickEventsMoveCircle($btnUp, $btnRight, $btnLeft, $btnDown);
  const $btnReset = document.getElementById("btn-reset");
  $btnReset.addEventListener("click", () => {
    piece.resetLocation(NUM_0, NUM_0);
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
function addClickEventsMoveCircle(...control) {
  control.forEach((item) => {
    item.addEventListener("click", handleClick);
  });
}

window.addEventListener("DOMContentLoaded", event => {
  piece.init(document.getElementById("piece"));
  init();
});
