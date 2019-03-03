
var legend = document.querySelectorAll("legend");
var expAll = document.getElementById("exp-all");
expAll.onclick = expandAll;

for (var key in legend) {
    if (legend.hasOwnProperty(key)) {
        legend[key].onclick = toggle;
    }
}

function expandAll(e){
    var collapse = document.querySelectorAll(".sec-col"); 
    for (var key in collapse) {
        if (collapse.hasOwnProperty(key)) {
            collapse[key].classList.add("collapse");
        }
    }
    expAll.innerText = "collapse all";
}
function toggle(e) {
    var collapse = e.target.nextElementSibling.classList;
    collapse.toggle("collapse");
}