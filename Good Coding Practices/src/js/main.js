function initBtns() {
  setCtrlBtnProps("btn-up", 0, -100);
  setCtrlBtnProps("btn-right", 100, 0);
  setCtrlBtnProps("btn-down", 0, 100);
  setCtrlBtnProps("btn-left", -100, 0);

  const resetBtn = document.getElementById("btn-reset");
  resetBtn.addEventListener("click", piece.resetPieceLoc.bind(piece));
  const randBtn = document.getElementById("btn-rand");
  randBtn.addEventListener("click", piece.randPieceLoc.bind(piece));
}
function setCtrlBtnProps(elId, dx, dy) {
  const btnEl = document.getElementById(elId);
  btnEl.dataset.dx = dx;
  btnEl.dataset.dy = dy;
  btnEl.addEventListener("click", handleClick);
}
function handleClick(ev) {
  piece.moveDelta(parseInt(this.dataset.dx), parseInt(this.dataset.dy));
}
function setPieceColorByTemp() {
  const url = 'http://api.apixu.com/v1/current.json?key=';
  const key = "dda6e762ae4f41efb7e173552192204&q=tel%20aviv";
  fetch(url + key)
    .then(response => response.json())
    .then(data => piece.setPieceColor(data.current.temp_c));
}
window.addEventListener("DOMContentLoaded", event => {
  piece.init(document.getElementById("piece"));
  initBtns();
  setPieceColorByTemp();
});
