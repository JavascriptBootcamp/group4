

const getTemp = function () {

  return fetch('http://api.apixu.com/v1/current.json?key=dda6e762ae4f41efb7e173552192204&q=netanya')
    .then(data => { console.log(data); return data.json() })
    .then(res => { console.log(res); return getColor(res["current"]["temp_c"]) })
    .catch(error => error)
}

const getColor = function (temp) {
  if (temp <= 10) {
    return "blue";
  }
  else if (temp >= 11 && temp <= 20) {
    return "green";
  }
  else if (temp >= 21 && temp <= 30) {
    return "yellow";
  }
  else if (temp > 30) {
    return "red";
  }

};



// piece object
const piece = (function () {

  const init = function (el) {
    this.el = el;
    getTemp().then(res => { this.el.style.backgroundColor = res; this.el.style.borderColor = res; })
      .catch(error => console.log(error));
  };

  const moveDelta = function (dx, dy) {
    const pos = this.el.getBoundingClientRect();
    if (dx > 0 && window.innerWidth - pos.left - pos.width > pos.width) {
      this.el.style.left = pos.left + dx + "px";
    }
    if (dx < 0 && pos.left > pos.width) {
      this.el.style.left = pos.left + dx + "px";
    }
    if (dy < 0 && pos.top > pos.height) {
      this.el.style.top = pos.top + dy + "px";
    }
    if (dy > 0 && window.innerHeight - pos.top > pos.height) {
      this.el.style.top = pos.top + dy + "px";
    }

  };

  const backToStartLocation = function () {
    this.el.style.top = "100px";
    this.el.style.left = "50%";
  }

  const randomLocation = function () {
    const pos = this.el.getBoundingClientRect();
    this.el.style.top = Math.floor(Math.random() * (window.innerHeight - pos.height)) + "px";
    this.el.style.left = Math.floor(Math.random() * (window.innerWidth - pos.width)) + "px";
  }


  return {
    init,
    moveDelta,
    backToStartLocation,
    randomLocation
  };
})();

function handleClick(ev) {
  piece.moveDelta(parseInt(this.dataset.dx), parseInt(this.dataset.dy));
}

document.getElementById("randomBtn").addEventListener("click", () => {
  piece.randomLocation();
})

document.getElementById("backToStartBtn").addEventListener("click", () => {
  piece.backToStartLocation();
})

document.getElementById("piece").addEventListener("mouseover", function () {
  this.style.backgroundColor = "transparent";
})
document.getElementById("piece").addEventListener("mouseout", async function () {
  this.style.backgroundColor = await getTemp().then(res => res).catch(error => console.log(error));;
})

function init() {
  const arr = [{ btn: "btn-up", dx: 0, dy: -100 },
  { btn: "btn-right", dx: 100, dy: 0 },
  { btn: "btn-down", dx: 0, dy: 100 },
  { btn: "btn-left", dx: -100, dy: 0 }
  ];
  for (let i = 0; i < arr.length; i++) {
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
