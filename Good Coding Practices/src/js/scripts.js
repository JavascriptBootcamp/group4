


// piece object
const piece = (function () {
  let el = null;
  let initialPosition = null;
  const init = function (el) {
    this.el = el;
    let initialX = this.el.getBoundingClientRect().left;
    let initialY = this.el.getBoundingClientRect().top;
    this.initialPosition = { "dx": initialX, "dy": initialY };

  };

  const getPiecesize = function () {
    let size = { "height": this.el.offsetHeight, "width": this.el.offsetWidth };
    return size;
  }
  const getinitialPosition = function () {
    return this.initialPosition;
  }
  const moveDelta = function (dx, dy) {
    const pos = this.el.getBoundingClientRect();
    if ((dx + pos.left) >= 0 && (dx + pos.left) <= (window.innerWidth - this.getPiecesize().width) && (dy + pos.top) >= 0 && (dy + pos.top) <= (window.innerHeight - this.getPiecesize().height)) {
      this.el.style.left = `${pos.left + dx}px`;
      this.el.style.top = `${pos.top + dy}px`;
    }
  };

  return {
    init,
    moveDelta,
    getinitialPosition,
    getPiecesize,

  };
})();


function pieceLocation(dx, dy) {
  let $piece = document.getElementById("piece");
  $piece.style.left = dx + "px";
  $piece.style.top = dy + "px";
}
const $reset = document.getElementById("reset");
$reset.addEventListener('click', () => {
  pieceLocation(piece.getinitialPosition().dx, piece.getinitialPosition().dy);
});

const $randomizeLoc = document.getElementById("randomizeLoc");
$randomizeLoc.addEventListener('click', () => {
  let dy = Math.floor(Math.random() * (window.innerHeight - piece.getPiecesize().height));
  let dx = Math.floor(Math.random() * (window.innerWidth - piece.getPiecesize().width));
  pieceLocation(dx, dy);
});

function handleClick(ev) {
  piece.moveDelta(parseInt(this.dataset.dx), parseInt(this.dataset.dy));
}

function init() {
  const $btnUp = document.getElementById("btn-up");
  const $btnRight = document.getElementById("btn-right");
  const $btnDown = document.getElementById("btn-down");
  const $btnLeft = document.getElementById("btn-left");
  initFuncSupporter($btnUp, 0, -100);
  initFuncSupporter($btnRight, 100, 0);
  initFuncSupporter($btnDown, 0, 100);
  initFuncSupporter($btnLeft, -100, 0);
}
function initFuncSupporter($btn, dx, dy) {
  $btn.dataset.dx = dx;
  $btn.dataset.dy = dy;
  $btn.addEventListener("click", handleClick);
}

window.addEventListener("DOMContentLoaded", async (event) => {
 
    piece.init(document.getElementById("piece"));
    document.getElementById("piece").style.backgroundColor = await fetchTemp();
    init();
});

const url = "http://api.apixu.com/v1/current.json";
const key = "?key=dda6e762ae4f41efb7e173552192204&q=tel%20aviv";
      
    async function fetchTemp() {
      let bgColor = "";
      let temp;
      await fetch(url + key)
        .then(response =>   response.json())
        .then(  data=> {
          temp = data.current.temp_c;
          bgColor = getColorByTemp(temp);
            })
        .catch(e => {
          console.log(e);
          throw e;
        }
        );
        return bgColor;

    }

     function getColorByTemp(temp) {
      if (temp < 10) {
        return "blue";
      }
      if (temp >= 11 && temp <= 20) {
        return "green";
      }
      if (temp >= 21 && temp <= 30) {
        return "yellow";
      }
      else return "red";
    }