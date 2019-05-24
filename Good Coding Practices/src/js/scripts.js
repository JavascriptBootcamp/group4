// piece object
const piece = (function () {
  let el = null;
  const init = function (el) {
    this.el = el;
  };
  const moveDelta = function (dx, dy) {
    const pos = this.el.getBoundingClientRect();
    if (isValidWidth(pos.left + dx)) {
      this.el.style.left = `${pos.left + dx}px`;
    }
    if (isValidHeight(pos.top + dy)) {
      this.el.style.top = `${pos.top + dy}px`;
    }
  };
  return {
    init,
    moveDelta
  };
})();
function isValidWidth(pos) {
  return pos > 0 && pos < screen.width - 90;

}
function isValidHeight(pos) {
  return pos > -1 && pos < screen.height - 190;

}
function handleClick(ev) {
  piece.moveDelta(parseInt(this.dataset.dx), parseInt(this.dataset.dy));
}
function getElementByID(id) {
  return document.getElementById(id);
}
function dataSetX(btn, newPosition) {
  btn.dataset.dx = newPosition;

}
function dataSetY(btn, newPosition) {
  btn.dataset.dy = newPosition;

}
function addclickEventListener(btn) {
  const CLICK_EVENT = "click";
  btn.addEventListener(CLICK_EVENT, handleClick);
}
function setTop(newPosition) {
  
  document.getElementById("piece").style.top = newPosition;
}
function setLeft(newPosition) {
  document.getElementById("piece").style.left = newPosition;

}
function changePieceColor(color) {

  document.getElementById("piece").style.background = color;
}
function checkTemp(temp) {
  switch (true) {
    case temp < 10:
      changePieceColor("blue");
      break;
    case temp > 11 && temp < 20:
      changePieceColor("Green");
      break;
    case temp > 21 && temp < 30:
      changePieceColor("Yellow");
      break;
    default:
      changePieceColor("Red");
      break;
  }

}
function getTodaysTempInTelAviv() {
  fetch('http://api.apixu.com/v1/current.json?key=dda6e762ae4f41efb7e173552192204&q=tel%20aviv')
    .then(function (response) {
      return response.json();
    })
    .then(function (myJson) {
      console.log(JSON.stringify(myJson.current.temp_c));
      checkTemp(JSON.stringify(myJson.current.temp_c))
    });
}
function Randomize() {
  let randomTop=Math.floor(Math.random() * 100) + 1 ; // returns a random integer from 1 to 100
  let randomLeft=Math.floor(Math.random() * 100) + 1; // returns a random integer from 1 to 100
  
  if(isValidHeight(randomTop))
  {
    setTop(randomTop+ "px"); 
  }
  if(isValidHeight(randomTop))
  {
    setLeft( randomLeft+ "%");
  }
}
function reset() {
  setTop("100px");
  setLeft("50%");
}

function init() {
  const $btnUp = getElementByID("btn-up");
  dataSetX($btnUp, 0);
  dataSetY($btnUp, -100);
  addclickEventListener($btnUp);
  const $btnRight = getElementByID("btn-right");
  dataSetX($btnRight, 100);
  dataSetY($btnRight, 0);
  addclickEventListener($btnRight);
  const $btnDown = getElementByID("btn-down");
  dataSetX($btnDown, 0);
  dataSetY($btnDown, 100);
  addclickEventListener($btnDown);
  const $btnLeft = getElementByID("btn-left");
  dataSetX($btnLeft, -100);
  dataSetY($btnLeft, 0);
  addclickEventListener($btnLeft);
}

window.addEventListener("DOMContentLoaded", event => {
  piece.init(document.getElementById("piece"));
  init();
  getTodaysTempInTelAviv();
});
