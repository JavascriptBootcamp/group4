function addImg(){
    var wiki = document.querySelector("#wiki").value;
    var img = document.querySelector("#img").value;
    var Aelem = document.createElement("a");
    Aelem.href = wiki;
    var imgElem = document.createElement("img");
    imgElem.src = img;
    imgElem.width = "300";
    imgElem.height = "200";
    var imgHolder = document.querySelector("#imgHolder");
    Aelem.appendChild(imgElem);
    imgHolder.appendChild(Aelem);
    
}