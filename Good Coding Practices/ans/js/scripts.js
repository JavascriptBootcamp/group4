// piece object
const piece = (function() {
  let el = null;
  const init = function(el) {
    this.el = el;
  };
  const moveDelta = function(dx, dy) {
    const pos = this.el.getBoundingClientRect();
    console.log(pos)
    console.log(el)
    this.el.style.left = `${pos.left + dx}px`;
    this.el.style.top = `${pos.top + dy}px`;
  };
  const buttonSet = function(id,dx,dy){
    let $btn = document.getElementById(id);
    $btn.dataset.dx = dx;
    $btn.dataset.dy = dy;
    $btn.addEventListener("click", handleClick);
  }
  const reset = function reset(){
     console.log("v0s")
    let piececicle=document.getElementById("piece");
    piececicle.style.left='50%'
    piececicle.style.top='100px'
  }
  const randomize = function (){
    let piececicle=document.getElementById("piece");
    piececicle.style.left=`${Math.random()*100}%`
    piececicle.style.top=`${Math.random()*window.innerHeight - 100}px`
  }

  const pieceColor = function (temp) {
    let color = "";
    if (temp <= 10) {
      color = "blue";
    }
    else if (temp > 10 && temp < 21)
      color = "Green";
    else if (temp > 20 && temp < 31)
      color = "Yellow";
    else if (temp > 30)
      color = "Red";
    this.el.style.background = color;
    this.el.style.borderColor = color;
  }

  const weatherApi = function () {
    fetch('http://api.apixu.com/v1/current.json?key=dda6e762ae4f41efb7e173552192204&q=tel%20aviv')
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        for (item in myJson) {
          if (myJson[item].temp_c)
            piece.pieceColor(Number(myJson[item].temp_c));
        }
      });
  }
  return {
    init,
    moveDelta,
    buttonSet,
    reset,
    randomize,
    weatherApi,
    pieceColor
  };
})();

function handleClick(ev) {
  console.log(this)
  piece.moveDelta(parseInt(this.dataset.dx), parseInt(this.dataset.dy));
}




function init() {
  piece.weatherApi()
  piece.buttonSet("btn-up",0,-100)
  piece.buttonSet("btn-right",100,0)
  piece.buttonSet("btn-down",0,100)
  piece.buttonSet("btn-left",-100,0)

}

window.addEventListener("DOMContentLoaded", event => {
  piece.init(document.getElementById("piece"));
  init();
});
