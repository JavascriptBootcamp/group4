const key = `dda6e762ae4f41efb7e173552192204`;
const rootUrl = `http://api.apixu.com/v1/current.json?key=${key}`;
const searchUrl = `${rootUrl}&q=tel%20aviv`;

// piece object
const piece = (function () {
  let el = null;
  const init = function (el) {
    this.el = el;
    this.el.initX = el.getBoundingClientRect().left;
    this.el.initY = el.getBoundingClientRect().top;
  };
  const moveDelta = function (dx, dy) {
    const pos = this.el.getBoundingClientRect();
    const pieceWidth = this.el.offsetWidth;
    const pieceHeight = this.el.offsetHeight;
    if (((dx + pos.left) >= 0 && (dx + pos.left) <= (window.innerWidth - pieceWidth)) &&
      ((dy + pos.top) >= 0 && (dy + pos.top) <= (window.innerHeight - pieceHeight))) {
      this.el.style.left = `${pos.left + dx}px`;
      this.el.style.top = `${pos.top + dy}px`;
    }
  };
  const resetToInitialLocation = function () {
    this.el.style.left = `${this.el.initX}px`;
    this.el.style.top = `${this.el.initY}px`;
  };
  const randomizeLocation = function () {
    let randomX = Math.floor(Math.random() * (window.innerWidth - this.el.offsetWidth));
    let randomY = Math.floor(Math.random() * (window.innerHeight - this.el.offsetHeight));
    this.el.style.left = `${randomX}px`;
    this.el.style.top = `${randomY}px`;
  };
  const setColorByTemp = function (temp) {
    if (temp <= 10) {
      color = "blue";
    } else if (temp >= 11 && temp <= 20) {
      color = "green";
    } else if (temp >= 21 && temp <= 30) {
      color = "yellow";
    }
    else color = "red";
    this.el.style.background = color;
    this.el.style.borderColor = color;
  };

  return {
    init,
    moveDelta,
    resetToInitialLocation,
    randomizeLocation,
    setColorByTemp
  };
})();

function handleClick() {
  piece.moveDelta(parseInt(this.dataset.dx), parseInt(this.dataset.dy));
}

function init() {
  setBtnClick("btn-up", 0, -100);
  setBtnClick("btn-right", 100, 0);
  setBtnClick("btn-down", 0, 100);
  setBtnClick("btn-left", -100, 0);
  setBtnReset();
  setRandomLocation();
}

const setBtnClick = function (btnId, xDataset, yDataset) {
  const $btn = document.getElementById(btnId);
  $btn.dataset.dx = xDataset;
  $btn.dataset.dy = yDataset;
  $btn.addEventListener("click", handleClick);
};

const setBtnReset = function () {
  const $btnReset = document.getElementById("btn-reset");
  $btnReset.addEventListener("click", () => {
    piece.resetToInitialLocation();
  });
};

const setRandomLocation = function () {
  const $btnRandomize = document.getElementById("btn-randomize");
  $btnRandomize.addEventListener("click", () => {
    piece.randomizeLocation();
  });
};

const initTemp = function () {
  fetch(searchUrl)
    .then(response => response.json())
    .then(data => {
      if (data) {
        let temp = data.current.temp_c;
        piece.setColorByTemp(temp);
      }
    })
    .catch(err => {
      throw err;
    });
};

window.addEventListener("DOMContentLoaded", event => {
  piece.init(document.getElementById("piece"));
  init();
  initTemp();
});
