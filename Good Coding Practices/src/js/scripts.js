// piece object
const piece = ( function() {
  let el = null;

  const init = function(el) {
    this.el = el;
  };

  const moveDelta = function(dx, dy) {
    const pos = this.el.getBoundingClientRect();

    const CIRCLE_WIDTH = 100;
    const CIRCLE_HEIGHT = 100;

    if (pos.left + dx >= 0 && pos.left + dx <= window.innerWidth - CIRCLE_WIDTH) {
      this.el.style.left = `${pos.left + dx}px`;
    }
    
    if (pos.top + dy >= 0 && pos.top + dy <= window.innerHeight - CIRCLE_HEIGHT) {
      this.el.style.top = `${pos.top + dy}px`;
    }
  };

  objToReturn = {init, moveDelta};
  return objToReturn;

})();
  

function handleClick(ev) {
  piece.moveDelta(parseInt(this.dataset.dx), parseInt(this.dataset.dy));
}



function getControl(elemID, dxVal, dyVal) {
  const elem = document.getElementById(elemID);
  elem.dataset.dx = dxVal;  // dxVal = position change on x axis
  elem.dataset.dy = dyVal;  // dyVal = position change on y axis
  elem.addEventListener("click", handleClick);
}

  
function init() {
  getControl("btn-up", 0, -100);
  getControl("btn-right", 100, 0);
  getControl("btn-down", 0, 100);
  getControl("btn-left", -100, 0);
}


function initialPieceLocation() {
  let pieceElem = document.getElementById("piece");
  pieceElem.style.position = "absolute";
  pieceElem.style.top = "40%";
  pieceElem.style.left = "40%";
}


function randomPieceLocation() {
    const CIRCLE_WIDTH = 100;
    const CIRCLE_HEIGHT = 100;

    const WINDOW_WIDTH = window.innerWidth;
    const WINDOW_HEIGHT = window.innerHeight;

    const randDX = random(1) * (WINDOW_WIDTH - CIRCLE_WIDTH);
    const randDY = random(1) * (WINDOW_HEIGHT - CIRCLE_HEIGHT);

    let pieceElem = document.getElementById("piece");
    pieceElem.style.left = `${randDX}px`;
    pieceElem.style.top = `${randDY}px`;
}


function fetchData(url) {
  fetch(url)
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    getPieceColor(data.current.temp_c);
  });
}


function getPieceColor(temperature) {
  console.log(temperature);
  let pieceElem = document.getElementById('piece');

  if (temperature <= 10) pieceElem.style.background = 'blue';
  else if(temperature >= 11 && temperature <= 20) pieceElem.style.background = 'green';
  else if(temperature >= 21 && temperature <= 30) pieceElem.style.background = 'yellow';
  if (temperature > 30) pieceElem.style.background = 'red';
}


window.addEventListener("DOMContentLoaded", function(event) {
  const URL = "http://api.apixu.com/v1/current.json?key=dda6e762ae4f41efb7e173552192204&q=tel%20aviv";
  fetchData(URL);
  piece.init(document.getElementById("piece"));
  init();
});



// Returns val between 0 to value parameter included
function random(value) {
  val = Math.random() * (value + 1);
  if (val > value) return Math.floor(val);
  else return val;  
}
  