// piece object
const piece = (function () {

  let el = null;
  let left = 0;
  let top = 0;

  const init = function (el) {
    this.el = el;

    const pos = this.el.getBoundingClientRect();
    this.left = pos.left
    this.top = pos.top;

    fetchColor().then(data => this.el.style.background = data);
  };


  const fetchColor = async () => {

    const response = await fetch('http://api.apixu.com/v1/current.json?key=dda6e762ae4f41efb7e173552192204&q=tel%20aviv');
    const myJson = await response.json();

    if (myJson["current"]["temp_c"] < 10)
      return "blue";

    if (myJson["current"]["temp_c"] >= 10 && myJson["current"]["temp_c"] < 20)
      return "green";

    if (myJson["current"]["temp_c"] >= 20 && myJson["current"]["temp_c"] < 30)
      return "yellow";

    if (myJson["current"]["temp_c"] >= 30)
      return "red";

  };

  const fillXandY = function (x, y) {
    this.el.style.left = `${x}px`;
    this.el.style.top = `${y}px`;
  };

  const moveDelta = function (dx, dy) {
    const pos = this.el.getBoundingClientRect();
    const left = pos.left + dx / 50;
    const top = pos.top + dy / 50;
    if (left >= 0 && left <= 1278 && top >= 0 && top <= 478) {
      this.fillXandY(left, top);
    }
  };

  const reset = function () {
    this.fillXandY(this.left, this.top);
  };

  const randomize = function () {
    let left = Math.floor((Math.random() * 1278));;
    let top = Math.floor((Math.random() * 478));;;
    this.el.style.left = `${left}px`;
    this.el.style.top = `${top}px`;
  };

  return {
    init,
    moveDelta,
    reset,
    randomize,
    fillXandY
  };
})();

function handleClick(ev) {
  piece.moveDelta(parseInt(this.dataset.dx), parseInt(this.dataset.dy));
}

function randomize() {
  piece.randomize();
}

function reset() {
  piece.reset();
}

function init() {
  const cordinates = [[0, -100], [100, 0], [0, 100], [-100, 0]];
  const classID = ["btn-up", "btn-right", "btn-down", "btn-left"];
  const buttons = [];

  for (let index = 0; index < classID.length; index++) {
    let item = document.getElementById(classID[index]);
    item.addEventListener("click", handleClick);
    item.dataset.dx = cordinates[index][0];
    item.dataset.dy = cordinates[index][1];
    buttons.push(item);
  }
}

window.addEventListener("DOMContentLoaded", event => {
  piece.init(document.getElementById("piece"));
  init();
});