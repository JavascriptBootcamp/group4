
// var tm1 = new Thumbnails("tm1", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqsw9q1gKQhk3M3krgRtn9vCgYaKDvQD_GgJdL-y-jNiJRLbgC");
// var tm2 = new Thumbnails("tm2", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKIN7mbSbgvFXj2PXLzjXbC_NnVVOBoqHMgv9p8tw1KZuV-ngJGw");
// var tm3 = new Thumbnails("tm3", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ82DqniYRM-q3SKuf-ziG1u9Fc4gGuD8O8exGkZazb6SurMllSmw");
// var tm4 = new Thumbnails("tm4", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ4mFHp-axQIxtrs-yV_DRePjPn6C2tCT7EFnVAJUayne7ZfaG");
// var tm5 = new Thumbnails("tm5", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf6ltr-w2OSqtk-nh4eVIpndpQncu3r6M3EfiVVR5s5cuEGVOk");
// var tm6 = new Thumbnails("tm6", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa0mrze3yjNQjIjRtfxVHYeRrDZwNrNV3Lq4FHq_l-Z1eKWrm71w");
// var tm7 = new Thumbnails("tm7", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI7arfj-4VZnRls18ELncSRFACyqBCMcJLjZcxyCmr9DVC2qNrbA");
// var tm8 = new Thumbnails("tm8", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfgKOVXDVIY2Yaq0a0rDLWoV0ks0zcQVDa6aCQVJVGcD6llupPPw");
// var tm9 = new Thumbnails("tm9", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsQN-mcmQVIi2HLnAZhvJ-JCYZ1Yf7EtNlA1wVBf8gAYkh6T2r");
// var tm10 = new Thumbnails("tm10", "https://www.barraquer.com/wp-content/uploads/2017/07/el-ojo-del-surfista-p-08-2017.jpg");
var obj = {};//{ tm1, tm2, tm3, tm4, tm5, tm6, tm7, tm8, tm9, tm10 }
var intervalName;


const port = 5000;
const baseUrl = `http://localhost:${port}/album`;
var albumSelected;

init();

// var data = getData();
// if (data) {
//     var pic = document.getElementById("big-picture-img");
//     pic.src = data;
//     initialThumbnails();
// }
// else {
//     initialThumbnails();
// }

async function init(){
    await changeAlbum();
    //initialThumbnails();
}

async function changeAlbum() {
    albumSelected = document.getElementById("selectAlbum").value;
    const albumName = albumSelected;
    const query = `${baseUrl}/?albumName=${albumName}`;
    const result = await fetch(query);
    const data = await result.json();
    setThumbnails(data);
    var thumbnails = document.getElementById("thumbnails");
    thumbnails.innerHTML = null;
    initialThumbnails();
}

function setThumbnails(thumbnails) {
    obj = {};
    for (let i = 0; i < thumbnails.length; i++) {
        const tm = thumbnails[i];
        obj[tm.name] = tm;
    }
    let pic = document.getElementById("big-picture-img");
    pic.src = thumbnails[0].src;
    var Img = document.getElementById("big-picture-img");
    Img.setAttribute("imgnumber",thumbnails[0].name);
}

function initialThumbnails() {
    var thumbnails = document.getElementById("thumbnails");
    var ol1 = document.createElement("div");
    var ol2 = document.createElement("div");
    var thumbnails = document.getElementById("thumbnails");
    var thumbnailsCarousle = document.createElement("div");
    var arrowLeftDiv = document.createElement("div");
    var arrowRightDiv = document.createElement("div");
    ol1.id = "overlayer1";
    ol2.id = "overlayer2";
    thumbnails.appendChild(ol1);
    thumbnails.appendChild(ol2);
    arrowLeftDiv.className = "arrow arrow-left";
    arrowLeftDiv.onmouseover = scrollOver;
    arrowLeftDiv.onmouseleave = scrollLeave;
    arrowRightDiv.onmouseover = scrollOver;
    arrowRightDiv.onmouseleave = scrollLeave;
    arrowRightDiv.className = "arrow arrow-right";
    thumbnailsCarousle.id = "thumbnails-carousle";
    //thumbnails.appendChild(arrowLeftDiv);
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            var img = document.createElement("img");
            img.src = obj[key].src;
            img.setAttribute("imgnumber", key);
            img.onclick = function (e) {
                var ins = obj[key].name;
                obj[ins].setimage(e);
            };
            thumbnailsCarousle.appendChild(img);
        }
    }
    // thumbnails.appendChild(thumbnailsCarousle);
    // thumbnails.appendChild(arrowRightDiv);
}
function scrollLeave(e) {
    clearInterval(intervalName);
}
function scrollOver(e) {
    var arrow = e.target.className;
    var thumbnailsCarousle = document.getElementById("thumbnails-carousle");
    var pos = thumbnailsCarousle.style.left;
    var computedStyle = window.getComputedStyle(thumbnailsCarousle, null);
    pos = computedStyle.left;
    pos = pos.split("px");
    pos = pos[0];
    intervalName = setInterval(frame, 5);
    function frame() {
        if (arrow === "arrow arrow-left") {
            if (pos <= -200) {
                clearInterval(intervalName);
            } else {
                pos--;
                thumbnailsCarousle.style.left = pos + 'px';
            }
        }
        else {
            if (pos >= 500) {
                clearInterval(intervalName);
            } else {
                pos++;
                thumbnailsCarousle.style.left = pos + 'px';
            }
        }

    }
}
function setPrevImg(e) {
    var Img = document.getElementById("big-picture-img");
    var numberImg = Img.getAttribute("imgnumber");
    let numberNext = (parseInt(numberImg.substring(2)) - 1);
    var newImg = "tm" + numberNext;
    if(numberNext %3 === 0) {
        if(albumSelected === 'waves'){
            newImg = "tm3";
        }
        else if(albumSelected === 'extream'){
            newImg = "tm6";
        }
        else if(albumSelected === 'calm'){
            newImg = "tm9";
        }
    }
    Img.src = obj[newImg].src;
    Img.setAttribute("imgnumber", newImg);
}
function setNextImg(e) {
    var Img = document.getElementById("big-picture-img");
    var numberImg = Img.getAttribute("imgnumber");

    let numberNext = (parseInt(numberImg.substring(2)) + 1);
    var newImg = "tm" + numberNext;
    if(numberNext === -1){
        newImg = "tm1";
    }
    if(numberNext %3 === 1) {
        if(albumSelected === 'waves'){
            newImg = "tm1";
        }
        if(albumSelected === 'extream'){
            newImg = "tm4";
        }
        else if(albumSelected === 'calm'){
            newImg = "tm7";
        }
    }
    Img.src = obj[newImg].src;
    Img.setAttribute("imgnumber", newImg);
}
function Thumbnails(name, src) {
    this.name = name;
    this.src = src;
}
Thumbnails.prototype.setimage = function (e) {
    var pic = document.getElementById("big-picture-img");
    var newImg = e.target.attributes[1].nodeValue;
    pic.src = e.target.src;
    pic.setAttribute("imgnumber", newImg);
}


function saveBigPic() {
    var pic = document.getElementById("big-picture-img");
    saveData(pic.src);
}

window.onbeforeunload = function (event) {
    saveBigPic();
}