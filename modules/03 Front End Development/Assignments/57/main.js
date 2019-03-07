function Image(src) {
    this.count = 0;
    this.src = src;

    Image.prototype.getLocalStorageFunc = function (key) {
        return window.localStorage.getItem(key);
    }
    Image.prototype.setLocalStorageFunc = function (key, value) {
        window.localStorage.setItem(key, value);
    }
    Image.prototype.like = function (key) {
        var numberOfLikesStored = this.getLocalStorageFunc(key);
        this.count = ++numberOfLikesStored;
    }
}

var img0 = new Image("https://upload.wikimedia.org/wikipedia/commons/c/c7/Puppy_on_Halong_Bay.jpg");
var img1 = new Image("https://www.catster.com/wp-content/uploads/2018/07/Savannah-cat-long-body-shot.jpg");
var img2 = new Image("https://cdn.pixabay.com/photo/2018/09/05/05/56/horse-3655558_1280.jpg");
var img3 = new Image("http://www.freedigitalphotos.net/images/img/homepage/87357.jpg");
var img4 = new Image("https://www.extremetech.com/wp-content/uploads/2013/09/4Vln8-640x428.jpg");
var img5 = new Image("https://www.rd.com/wp-content/uploads/2016/05/01-smart-animals-racoon.jpg");
var img6 = new Image("https://www.iata.org/whatwedo/cargo/PublishingImages/cargo_live_animals_parrot.jpg");
var img7 = new Image("https://animals.sandiegozoo.org/sites/default/files/2016-08/category-thumbnail-amphibians_0.jpg");
var img8 = new Image("https://cdn.the-scientist.com/assets/articleNo/30781/iImg/2460/df892096-47e0-4041-ab30-94e045f43a82-puerto-rican-parrot-full.jpg");
var insArr = [img0, img1, img2, img3, img4, img5, img6, img7, img8];

function displayImages(insArr) {
    var wrapper = document.getElementById("wrapper");
    for (var i = 0; i < insArr.length; i++) {
        var imgWrapper = document.createElement("div");
        var img = document.createElement("img");
        var button = document.createElement("button");
        var likes = document.createElement("div");
        img.src = insArr[i].src;
        img.setAttribute("id", "photo" + i);
        img.setAttribute("onclick", "openImage(this.id)");
        button.innerText = "LIKE";
        button.setAttribute("id", "img" + i);
        button.setAttribute("onclick", "addLike(this.id)");
        likes.innerText = insArr[i].getLocalStorageFunc(i);
        likes.setAttribute("class", "like");
        if (insArr[i].getLocalStorageFunc(i) === null) {
            insArr[i].setLocalStorageFunc(i, 0);
        }
        else {
            insArr[i].count = insArr[i].getLocalStorageFunc(i);
        }
        likes.innerText = insArr[i].getLocalStorageFunc(i);
        imgWrapper.appendChild(img);
        imgWrapper.appendChild(button);
        imgWrapper.appendChild(likes);
        wrapper.appendChild(imgWrapper);
    }
    var allCounters = document.getElementsByClassName('like');
    for (var i = 0; i < allCounters.length; i++) {
        if (allCounters[i].innerText === "")
            allCounters[i].innerText = "0";
    }
}

function addLike(id) {
    var index = id.slice(3);
    var button = document.getElementById(id);
    insArr[index].like(index);
    button.nextSibling.innerText = insArr[index].count;
    insArr[index].setLocalStorageFunc(index, insArr[index].count);
}

function openImage(id) {
    var bgBlur = document.querySelector(".bg-blur");
    var thisImg = document.getElementById(id);
    bgBlur.style.visibility = "visible";
    var img = document.getElementById("large-picture");
    img.src = thisImg.src;
    img.style.visibility = "visible";
}

function onBlur(blur) {
    blur.style.visibility = "hidden";
    var img = document.getElementById("large-picture");
    img.style.visibility = "hidden";
}

displayImages(insArr);
