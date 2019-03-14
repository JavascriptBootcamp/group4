function toggle_visibility(id) {
  var plusMin = document.querySelector("#" + id + " #plusMin");
  var e = document.querySelector("#" + id + " .hidden");
  if (e.style.display == 'block') {
    e.style.display = 'none';
    plusMin.innerText = "+";
  }
  else {
    e.style.display = 'block';
    plusMin.innerText = "-";
  }
}
function changeAll(event) {
  if (event.target.value == "Expand Contents") {
    var e = document.querySelectorAll(".hidden");
    for (var i = 0; i < e.length; i++) {
      e[i].style.display = 'block';
      idParent = e[i].parentElement.id;
      document.querySelector("#" + idParent + " #plusMin").innerText = "-";
      event.target.value = "Collapse Contents";
    }
  }
  else {
    var e = document.querySelectorAll(".hidden");
    for (var i = 0; i < e.length; i++) {
      e[i].style.display = 'none';
      idParent = e[i].parentElement.id;
      document.querySelector("#" + idParent + " #plusMin").innerText = "+";
      event.target.value = "Expand Contents";
    }
  }
}
