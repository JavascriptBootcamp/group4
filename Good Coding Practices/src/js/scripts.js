// piece object
const piece = (function() {
  let el = null;
  const init = function(el) {
    this.el = el;
  };
  const moveDelta = function(dx, dy) {
    const pos = this.el.getBoundingClientRect();

    if (Number(pos.right) - Number(pos.left) === Number(pos.width)) {
      console.log(Number(pos.x),Number(pos.right) );
      this.el.style.left = `${pos.left + dx}px`;
    }

    this.el.style.top = `${pos.top + dy}px`;
  };
  return {
    init,
    moveDelta
  };
})();

const pieceEl = document.getElementById("piece");

function handleClick(ev) {
  piece.moveDelta(parseInt(this.dataset.dx), parseInt(this.dataset.dy));
}

function init() {
  btnUpInit();
  btnRightInit();
  btnDownInit();
  btnLeftInit();
  pieceEl.style.transition = "all 2s";
}

fetch(
  "  http://api.apixu.com/v1/current.json?key=dda6e762ae4f41efb7e173552192204&q=tel%20aviv"
)
  .then(response => response.json())
  .then(data => {
    pieceEl.style.backgroundColor = getColorByTemp(data["current"]["temp_c"]);
  });

function getColorByTemp(temp) {
  let _temp = Number(temp);

  if (_temp <= 10) {
    return "blue";
  } else if (_temp >= 11 && _temp <= 20) {
    return "green";
  } else if (_temp >= 21 && _temp <= 30) {
    return "yellow";
  } else if (_temp > 30) {
    return "red";
  }
}

function randomize() {
  let w = Math.ceil(Math.random() * (window.innerWidth - pieceEl.clientWidth));
  let h = Math.ceil(Math.random() * window.innerHeight - pieceEl.clientHeight);
  return { left: w, top: h };
}

document.getElementById("btn-randomize").addEventListener("click", () => {
  pieceEl.style.top = `${randomize().top}px`;
  pieceEl.style.left = `${randomize().left}px`;
});

function btnLeftInit() {
  const $btnLeft = document.getElementById("btn-left");
  $btnLeft.dataset.dx = -100;
  $btnLeft.dataset.dy = 0;
  $btnLeft.addEventListener("click", handleClick);
}

function btnUpInit() {
  const $btnUp = document.getElementById("btn-up");
  $btnUp.dataset.dx = 0;
  $btnUp.dataset.dy = -100;
  $btnUp.addEventListener("click", handleClick);
}
function btnRightInit() {
  const $btnRight = document.getElementById("btn-right");
  $btnRight.dataset.dx = 100;
  $btnRight.dataset.dy = 0;
  $btnRight.addEventListener("click", handleClick);
}

function btnDownInit() {
  const $btnDown = document.getElementById("btn-down");
  $btnDown.dataset.dx = 0;
  $btnDown.dataset.dy = 100;
  $btnDown.addEventListener("click", handleClick);
}

const $btnReset = document.getElementById("btn-reset");
$btnReset.addEventListener("click", event => {
  pieceEl.style.top = "100px";
  pieceEl.style.left = "50%";
});

window.addEventListener("DOMContentLoaded", event => {
  piece.init(pieceEl);
  init();
});
