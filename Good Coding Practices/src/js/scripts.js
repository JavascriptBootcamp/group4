// piece object
const piece = (function() {
  let el = null;
  const initPos = null;
  const init = function(el) {
    this.el = el;
    this.initPos = this.el.getBoundingClientRect();
  };
  const moveDelta = function(dx, dy) {
    const pos = this.el.getBoundingClientRect();
    if((pos.left + dx < window.innerWidth-100) && (pos.left + dx > 0)){
      if((pos.top + dy < window.innerHeight-100) && (pos.top + dy > -1)){
        this.el.style.left = `${pos.left + dx}px`;
        this.el.style.top = `${pos.top + dy}px`;
      }
    }
  };
  return {
    init,
    moveDelta
  };
})();

function handleClick(ev) {
  piece.moveDelta(parseInt(this.dataset.dx), parseInt(this.dataset.dy));
}

function init() {
  const $btnUp = document.getElementById("btn-up");
  const $btnRight = document.getElementById("btn-right");
  const $btnDown = document.getElementById("btn-down");
  const $btnLeft = document.getElementById("btn-left");
  setDataset($btnUp,0,-100);
  setDataset($btnRight,100,0);
  setDataset($btnDown,0,100);
  setDataset($btnLeft,-100,0);
}

function setDataset(el,dx,dy){
  el.dataset.dx = dx;
  el.dataset.dy = dy;
  el.addEventListener("click", handleClick);
}

window.addEventListener("DOMContentLoaded", event => {
  piece.init(document.getElementById("piece"));
  init();
  fetchTemprature();
});

function resetPos(){
  piece.el.style.left = `${piece.initPos.left}px`;
  piece.el.style.top = `${piece.initPos.top}px`;
}

function randomPos(){
  const xPos = Math.floor(Math.random() * Math.floor(window.innerWidth-100));
  const yPos = Math.floor(Math.random() * Math.floor(window.innerHeight-100));
  piece.el.style.left = `${xPos}px`;
  piece.el.style.top = `${yPos}px`;
}

function fetchTemprature(){
  fetch('http://api.apixu.com/v1/current.json?key=dda6e762ae4f41efb7e173552192204&q=tel%20aviv')
  .then((res) => res.json())
  .then((data) =>{
    setColorByTemprature(data.current.temp_c);
  });
}

function setColorByTemprature(temprature){
  if(temprature< 10)
    piece.el.style.backgroundColor = "blue";
  else if (temprature >= 11 && temprature <= 20)
    piece.el.style.backgroundColor = "green";
  else if (temprature >= 21 && temprature <= 30)
    piece.el.style.backgroundColor = "yellow";
  else
    piece.el.style.backgroundColor = "red";
}