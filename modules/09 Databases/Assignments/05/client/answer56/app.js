var tm1 = new Thumbnails("tm1", "blank.png");
var tm2 = new Thumbnails("tm2", "blank.png");
var tm3 = new Thumbnails("tm3", "blank.png");
var obj = { tm1, tm2, tm3 };

var data = getData();
if (data) {
    var pic = document.getElementById("big-picture-img");
    pic.src = data;
    initialThumbnails();
}
else {
    initialThumbnails();
}

function initialThumbnails() {
    var thumbnails = document.getElementById("thumbnails");
    thumbnails.innerHTML = "";
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            var img = document.createElement("img");
            img.src = obj[key].src;
            img.setAttribute("imgnumber", key);
            img.onclick = function (e) {
                var ins = obj[key].name;
                obj[ins].setimage(e);
            };
            thumbnails.appendChild(img);
        }
    }
}
function setNextImg(e) {
    var Img = document.getElementById("big-picture-img");
    var numberImg = Img.getAttribute("imgnumber");
    var newImg = "tm" + (parseInt(numberImg.substring(2)) - 1);
    if (parseInt(numberImg.substring(2)) === 1) {
        newImg = "tm3";
    }
    Img.src = obj[newImg].src;
    Img.setAttribute("imgnumber", newImg);
}
function setPrevImg(e) {
    var Img = document.getElementById("big-picture-img");
    var numberImg = Img.getAttribute("imgnumber");
    var newImg = "tm" + (parseInt(numberImg.substring(2)) + 1);
    if (parseInt(numberImg.substring(2)) === 3) {
        newImg = "tm1";
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

async function getAlbum(e) {
    e.preventDefault();
    let album = document.getElementById('select-album').selectedIndex;
    album = +album + 1;
    const res = await fetch('http://localhost:8000/album?id=' + album);
    const data = await res.json();
    loadPicturesFromAlbum(data.message);
}

function loadPicturesFromAlbum(data) {
    let number = 1;
    data.forEach(element => {
        let name = "tm" + number;
        let tm = new Thumbnails(name, element.src);
        number++;
        obj[name] = tm;
    });
    initialThumbnails();
}

window.onbeforeunload = function (event) {
    saveBigPic();
}