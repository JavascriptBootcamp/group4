// piece object
const piece = (function () {
  let defult_pos = null;
  let el = null;
  const init = function (el) {
    this.el = el;
    this.defult_pos = el.getBoundingClientRect();
  };
  const moveDelta = function (dx, dy) {
    const pos = this.el.getBoundingClientRect();
    this.el.style.left = `${pos.left + dx}px`;
    this.el.style.top = `${pos.top + dy}px`;
  };

  const resetPos = function () {
    this.el.style.left = `${this.defult_pos.left}px`;
    this.el.style.top = `${this.defult_pos.top}px`;
  };

  const randPos = function () {
    let rand_X = Math.floor(Math.random() * window.innerWidth);
    let rand_Y = Math.floor(Math.random() * window.innerHeight);
    this.el.style.left = `${rand_X}px`;
    this.el.style.top = `${rand_Y}px`;
  };

  return {
    init,
    moveDelta,
    resetPos,
    randPos
  };
})();

function handleClick(ev) {
  piece.moveDelta(parseInt(this.dataset.dx), parseInt(this.dataset.dy));
}

function setBtnClickEvent(btnElement, xDataset, yDataset) {
  btnElement.dataset.dx = xDataset;
  btnElement.dataset.dy = yDataset;
  btnElement.addEventListener("click", handleClick);
}

function init() {
  const btns = [
    { id: "btn-up", x: 0, y: -100 },
    { id: "btn-right", x: 100, y: 0 },
    { id: "btn-down", x: 0, y: 100 },
    { id: "btn-left", x: -100, y: 0 }
  ];

  //set direction btns fuctionalty
  for (const btn of btns) {
    const $btnEl = document.getElementById(btn.id);
    setBtnClickEvent($btnEl, btn.x, btn.y);
  }

  //set reset btn fuctionalty
  const $resetBtn = document.getElementById("reset");
  $resetBtn.addEventListener("click", () => piece.resetPos());

  //set randomize btn fuctionalty
  const $randomizeBtn = document.getElementById("random");
  $randomizeBtn.addEventListener("click", () => piece.randPos());
}

window.addEventListener("DOMContentLoaded", event => {
  let piece_el = document.getElementById("piece");
  piece.init(piece_el);
  init();

  fetch("http://api.apixu.com/v1/current.json?key=dda6e762ae4f41efb7e173552192204&q=tel%20aviv")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    let temp = data.current.temp_c;
    if(temp<10) {
      piece_el.classList.add("blue");
    }
    else if(temp<20){
      piece_el.classList.add("green");
    }
    else if(temp<30){
      piece_el.classList.add("yellow");
    }
    else {
      piece_el.classList.add("red");
    }
    //set the tempertur on the screen
    document.querySelector("#temp").innerText = `${temp} ℃`;
  })
  .catch(err => {
    console.error(err);
    //default color
    piece_el.classList.add("blue");
  });

});
