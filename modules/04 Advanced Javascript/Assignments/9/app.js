var tm1 = new Thumbnails("tm1", "loader.gif", "");
var tm2 = new Thumbnails("tm2", "loader.gif", "");
var tm3 = new Thumbnails("tm3", "loader.gif", "");
var tm4 = new Thumbnails("tm4", "loader.gif", "");
var tm5 = new Thumbnails("tm5", "loader.gif", "");
var tm6 = new Thumbnails("tm6", "loader.gif", "");
var tm7 = new Thumbnails("tm7", "loader.gif", "");
var tm8 = new Thumbnails("tm8", "loader.gif", "");
var tm9 = new Thumbnails("tm9", "loader.gif", "");
var tm10 = new Thumbnails("tm10", "loader.gif", "");
var obj = { tm1, tm2, tm3, tm4, tm5, tm6, tm7, tm8, tm9, tm10 }
var intervalName;

fetch("https://picsum.photos/list").then(function (response) {
    response.json().then(function (json) {
        setImagesFromRespone(json);
    });
});

function goPost(e) {
    var pic = document.getElementById("big-picture-img");
    var post = obj[pic.getAttribute("imgnumber")].post;
    window.open(post, '_blank');
}

var dataStorage = getData();
if (dataStorage) {
    var pic = document.getElementById("big-picture-img");
    pic.src = dataStorage;
}
initialThumbnails();

function setImagesFromRespone(data) {
    var thumb = document.querySelectorAll("#thumbnails-carousle > img");
    var index = 0;
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            obj[key].post = data[index].post_url;
            obj[key].src = "https://picsum.photos/200/300?image=" + data[index].id;
            index++;
        }
    }
    for (var i = 0; i < thumb.length; i++) {
        thumb[i].src = "https://picsum.photos/200/300?image=" + data[i].id;
    }
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
    thumbnails.appendChild(arrowLeftDiv);
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
    thumbnails.appendChild(thumbnailsCarousle);
    thumbnails.appendChild(arrowRightDiv);
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
function setNextImg(e) {
    var Img = document.getElementById("big-picture-img");
    var numberImg = Img.getAttribute("imgnumber");
    var newImg = "tm" + (parseInt(numberImg.substring(2)) - 1);
    if (parseInt(numberImg.substring(2)) === 1) {
        newImg = "tm10";
    }
    Img.src = obj[newImg].src;
    Img.setAttribute("imgnumber", newImg);
}
function setPrevImg(e) {
    var Img = document.getElementById("big-picture-img");
    var numberImg = Img.getAttribute("imgnumber");
    var newImg = "tm" + (parseInt(numberImg.substring(2)) + 1);
    if (parseInt(numberImg.substring(2)) === 10) {
        newImg = "tm1";
    }
    Img.src = obj[newImg].src;
    Img.setAttribute("imgnumber", newImg);
}
function Thumbnails(name, src, post) {
    this.name = name;
    this.src = src;
    this.post = post;
}
Thumbnails.prototype.setimage = function (e) {
    var pic = document.getElementById("big-picture-img");
    var newImg = e.target.attributes[1].nodeValue;
    pic.src = e.target.src;
    pic.setAttribute("imgnumber", newImg);
    pic.onclick = goPost;
}


function saveBigPic() {
    var pic = document.getElementById("big-picture-img");
    saveData(pic.src);
}

window.onbeforeunload = function (event) {
    saveBigPic();
}