function getElemById(elId) {
  return document.getElementById(elId);
}
function initBtns() {
  setCtrlBtnProps("btn-up", 0, -100);
  setCtrlBtnProps("btn-right", 100, 0);
  setCtrlBtnProps("btn-down", 0, 100);
  setCtrlBtnProps("btn-left", -100, 0);
  setEventClickBtn(getElemById("btn-reset"), piece.resetPieceLoc);
  setEventClickBtn(getElemById("btn-rand"), piece.randPieceLoc);
}
function setCtrlBtnProps(elId, dx, dy) {
  const btnEl = getElemById(elId);
  btnEl.dataset.dx = dx;
  btnEl.dataset.dy = dy;
  setEventClickBtn(btnEl, handleClick, "handle");
}
function setEventClickBtn(ele, clickFunc, funcType) {
  let func = funcType === "handle" ? clickFunc : clickFunc.bind(piece)
  ele.addEventListener("click", func);
}
function savePositin() {
  const pos = piece.el.getBoundingClientRect();
  sessionStorage.setItem("defPosTop", pos.top);
  sessionStorage.setItem("defPosLeft", pos.left);
}
function handleClick(ev) {
  piece.moveDelta(parseInt(this.dataset.dx), parseInt(this.dataset.dy));
}
window.addEventListener("DOMContentLoaded", event => {
  piece.init(getElemById("piece"));
  initBtns();
  savePositin();
});
