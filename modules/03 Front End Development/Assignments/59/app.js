
var legend = document.querySelectorAll("legend");
var expAll = document.getElementById("exp-all");
expAll.className = "expand-btn";
expAll.onclick = expandAll;

for (var key in legend) {
    if (legend.hasOwnProperty(key)) {
        legend[key].onclick = toggle;
    }
}

function expandAll(e) {
    var classBtn = e.target.className;
    var secCol = document.querySelectorAll(".sec-col");
    if (classBtn === "expand-btn")
    {
        e.target.classList = "collapse-btn";
        e.target.innerText = "collapse all";
        for (var key in secCol) {
            if (secCol.hasOwnProperty(key)) {
                secCol[key].classList.add("collapse");
                secCol[key].previousElementSibling.classList.remove("minus");
            }
        }
    }  
    else {
        e.target.classList = "expand-btn";
        e.target.innerText = "expand all";
        for (var key in secCol) {
            if (secCol.hasOwnProperty(key)) {
                secCol[key].classList.remove("collapse");
                secCol[key].previousElementSibling.classList.add("minus");
            }
        }
    }
}

function toggle(e) {
    e.target.classList.toggle("minus");
    e.target.nextElementSibling.classList.toggle("collapse"); 
}