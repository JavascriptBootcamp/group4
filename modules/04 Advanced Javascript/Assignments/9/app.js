

var intervalName;

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
    console.log('fsd', obj['tm1']);
    for (var key in obj) {
        console.log(key);
        if (obj.hasOwnProperty(key)) {
            var img = document.createElement("img");
            img.src = obj[key].src;
            console.log('img', img.src);
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
            if (pos <= -350) {
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
    var anchor = Img.parentNode;
    if (parseInt(numberImg.substring(2)) === 1) {
        newImg = "tm10";
    }
    Img.src = obj[newImg].src;
    Img.setAttribute("imgnumber", newImg);
    anchor.setAttribute('href', obj[newImg].link);
}
function setPrevImg(e) {
    var Img = document.getElementById("big-picture-img");
    var numberImg = Img.getAttribute("imgnumber");
    var newImg = "tm" + (parseInt(numberImg.substring(2)) + 1);
    var anchor = Img.parentNode;
    if (parseInt(numberImg.substring(2)) === 10) {
        newImg = "tm1";
    }
    Img.src = obj[newImg].src;
    Img.setAttribute("imgnumber", newImg);
    anchor.setAttribute('href', obj[newImg].link);
}

function saveBigPic() {
    var pic = document.getElementById("big-picture-img");
    var anchor = pic.parentNode;
    saveData(pic.src);
    saveLink(anchor.getAttribute('href'));
    saveName(pic.getAttribute('imgnumber'));
}

window.onbeforeunload = function (event) {
    saveBigPic();
}


// function initThumbs() {
//     toggleLoading(true);
// }