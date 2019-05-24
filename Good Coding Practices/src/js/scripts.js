//api object

const api = (function(){

const temperature =  Math.floor(Math.random()*40);

const getColor = function() {
switch(true){
  case temperature < 10 : return "Blue";break;
  case temperature > 11 && temperature < 20 : return "Green";break;
  case temperature > 21 && temperature < 30 : return "Yellow";break;
  case temperature > 30 : return "red";break;
  default:return "Blue";break;
}
};

return{
  getColor
}

})()

// piece object
const piece = (function(api) {
  let el = null;
  const color = api.getColor();
  const init = function(el) {
    this.el = el;
    this.el.style.backgroundColor = color;
    this.el.style.borderColor = color;

  };
  const moveDelta = function(dx, dy) {
    const pos = this.el.getBoundingClientRect();
    const el = this.el;
    let x=pos.left,y=pos.top;
    h = setInterval(function(){
      if( dx !== 0){
        if(x == pos.left + dx){
          clearInterval(h);
        }
        x = x + dx/20;
        el.style.left = `${x}px`;
      }
      if( dy !== 0){
        if(y == pos.top + dy){
          clearInterval(h);
        }
        y = y + dy/20;
        el.style.top = `${y}px`;
      }
    }, 30);
  };

  const backToStartLocation = function(){
    this.el.style.top = "100px";
    this.el.style.left = "50%";
  
  }

  const randomLocation = function(){
    this.el.style.top = Math.floor(Math.random()*500) + "px";
    this.el.style.left = Math.floor(Math.random()*80) + "%";
  }

  const showHollow = function(isHollow){
    if(isHollow)
    this.el.style.backgroundColor = "white";
    else
    this.el.style.backgroundColor = color;
  }

  return {
    init,
    moveDelta,
    showHollow,
    backToStartLocation,
    randomLocation
  };
})(api);

function handleClick(ev) {
  piece.moveDelta(parseInt(this.dataset.dx), parseInt(this.dataset.dy));
}

function showHollow(isHollow){
  piece.showHollow(isHollow);
}

function backToStartLocation(){
  piece.backToStartLocation();
}

function randomLocation(){
  piece.randomLocation();
}

function init() {
  const arr = [ {btn:"btn-up",dx:0,dy:-100},
    {btn:"btn-right",dx:100,dy:0},
    {btn:"btn-down",dx:0,dy:100},
    {btn:"btn-left",dx:-100,dy:0}
  ];
  for(let i=0;i<arr.length;i++){
    const $btn = document.getElementById(arr[i].btn);
    $btn.dataset.dx = arr[i].dx;
    $btn.dataset.dy = arr[i].dy;
    $btn.addEventListener("click", handleClick);
  }
 
}

window.addEventListener("DOMContentLoaded", event => {
  piece.init(document.getElementById("piece"));
  init();
});
