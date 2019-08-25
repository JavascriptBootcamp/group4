const el = document.getElementById("piece");
const startingPosition = el.getBoundingClientRect();
let temprature = null;

(() => {
  fetch('http://api.apixu.com/v1/current.json?key=dda6e762ae4f41efb7e173552192204&q=tel%20aviv')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    temprature = myJson.current.temp_c;
    changePieceColor(temprature);
  });
})();

const changePieceColor = (temp) => {
  let color= null;
  if (Number(temp) < 11)
    color = "blue"
  if (Number(temp) >= 11 && Number(temp) < 21)
  color = "blue"
  if (Number(temp) >= 21 && Number(temp) <= 30)
  color = "yellow"   
  if (Number(temp) > 30)
    color = "red"
  el.style.background = color;
}

const moveDelta = (dx, dy) => {
  const pos = el.getBoundingClientRect();
  el.style.left = `${pos.left + dx}px`;
  el.style.top = `${pos.top + dy}px`;
};

const reset = () => {
  el.style.left = `${startingPosition.x}px`;
  el.style.top = `${startingPosition.y}px`;
}

const randomPosition = () => {
  el.style.left = `${Math.floor(Math.random() * (window.innerWidth - el.getBoundingClientRect().width))}px`;
  el.style.top = `${Math.floor(Math.random() * (window.innerHeight - el.getBoundingClientRect().height))}px`;
}


