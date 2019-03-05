function collapsedSingleEl(event) {
   
    var currStyle = window.getComputedStyle(event.target.nextElementSibling).display;
    event.target.nextElementSibling.style.display = (currStyle === "none") ? "inline" : "none";


}
function setCollapsedFunction() {
    var legends = document.getElementsByTagName("legend")
    console.log(legends);
    for (let index = 0; index < legends.length; index++) {
        const element = legends[index];
        element.setAttribute("onclick","collapsedSingleEl(event)" )
     
    }
   
}
function CollapseAll(params) {
    CollapseAllOrExpandAll("none");
    var btn =document.getElementById("ExpandAll");
    btn.innerHTML="Expand All";
    btn.onclick=ExpandAll;
}
function CollapseAllOrExpandAll(displayStr) {
    var sections =document.getElementsByClassName("sections")
    for (const section in sections) {
        if (sections.hasOwnProperty(section)) {
            const element = sections[section];
            element.style.display=displayStr;
            
        }
    }
}

function ExpandAll() {
    CollapseAllOrExpandAll("inline");

    var btn =document.getElementById("ExpandAll");
    btn.innerHTML="Collapse All";
    btn.onclick=CollapseAll;

}