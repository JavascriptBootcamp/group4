// piece object
const piece = (function () {
  let el = null;
  const initPos = null;
  const init = function (el) {
    this.el = el;
    this.initPos = this.el.getBoundingClientRect();
  };
  const setPos = function (dx, dy) {
    this.el.style.left = `${dx}px`;
    this.el.style.top = `${dy}px`;
  }
  const moveDelta = function (dx, dy) {
    const pos = this.el.getBoundingClientRect();
    let newDx = (pos.left + dx);
    let newDy = (pos.top + dy);
    if ((newDx < (window.innerWidth - 100)) && (newDx > 0)) {
      if ((newDy < (window.innerHeight - 100)) && (newDy > -1)) {
        this.setPos(newDx, newDy);

      }
    }
  };

  return {
    init,
    moveDelta,
    setPos
  };
})();
function resetDelta() {
  let dx = piece.initPos.left;
  let dy = piece.initPos.top;
  piece.setPos(dx, dy);

}

function ramdoDelta() {
  const dx = Math.floor(Math.random() * Math.floor(window.innerWidth - 100));
  const dy = Math.floor(Math.random() * Math.floor(window.innerHeight - 100));
  piece.setPos(dx, dy);

}

function handleClick(ev) {
debugger
  piece.moveDelta(parseInt(this.dataset.dx), parseInt(this.dataset.dy));
}

function setDataSet(el, dx, dy) {
  
  if (el.id === "btn-random") {
    el.addEventListener("click", ramdoDelta);
  }
  else if (el.id === "btn-reset") {
    el.addEventListener("click", resetDelta);
  }
  else {
    
    el.dataset.dx = dx;
    el.dataset.dy = dy;
    el.addEventListener("click", handleClick);
  }
}
function fetchTemp() {
  fetch(" http://api.apixu.com/v1/current.json?key=dda6e762ae4f41efb7e173552192204&q=tel%20aviv")
    .then((res) => res.json())
    .then((data) => { setColor(data.current.temp_c) });
}

function setColor(temp_c) {
  if (temp_c <= 10) {
    piece.el.style.background = "blue";
  }
  else if (temp_c >= 11 && temp_c <= 20) {
    piece.el.style.background = "Green";
  }
  else if (temp_c >= 21 && temp_c <= 30) {
    piece.el.style.background = "Yellow";
  }
  else if (temp_c >= 30) {
    piece.el.style.background = "Red";
  }

}
function init() {
  const $btnUp = document.getElementById("btn-up");
  setDataSet($btnUp, 0, -100);

  const $btnRight = document.getElementById("btn-right");
  setDataSet($btnRight, 100, 0);

  const $btnDown = document.getElementById("btn-down");
  setDataSet($btnDown, 0, 100);

  const $btnLeft = document.getElementById("btn-left");
  setDataSet($btnLeft, -100, 0);


  const $btnRst = document.getElementById("btn-reset");
  setDataSet($btnRst, 0, 0);

  const $btnRndm = document.getElementById("btn-random");
  setDataSet($btnRndm, 0, 0);
  // $btnRst.addEventListener("click", resetDelta("test"));


}

window.addEventListener("DOMContentLoaded", event => {
  piece.init(document.getElementById("piece"));
  init();
  fetchTemp();
});